import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { getJobById } from "@/data/jobPositions";
import { toast } from "sonner";

const applicationSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50),
  lastName: z.string().trim().min(1, "Last name is required").max(50),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  currentCompany: z.string().trim().max(100).optional(),
  currentTitle: z.string().trim().max(100).optional(),
  linkedIn: z
    .string()
    .trim()
    .url("Invalid LinkedIn URL")
    .optional()
    .or(z.literal("")),
  yearsExperience: z.string().min(1, "Please select years of experience"),
  noticePeriod: z.string().min(1, "Please select notice period"),
  coverLetter: z.string().trim().max(3000).optional(),
});

type ApplicationData = z.infer<typeof applicationSchema>;

const JobApplication = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const job = jobId ? getJobById(jobId) : undefined;

  const [formData, setFormData] = useState<ApplicationData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentCompany: "",
    currentTitle: "",
    linkedIn: "",
    yearsExperience: "",
    noticePeriod: "",
    coverLetter: "",
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  const handleInputChange = (field: keyof ApplicationData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          resume: "File size must be less than 5MB",
        }));
        return;
      }
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          resume: "Please upload a PDF or Word document",
        }));
        return;
      }
      setResumeFile(file);
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.resume;
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = applicationSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    if (!resumeFile) {
      setErrors((prev) => ({ ...prev, resume: "Please upload your resume" }));
      return;
    }

    setIsSubmitting(true);

    try {
      const webhookUrl =
        "https://automate.eyelevelstudio.in/webhook/njmascon-job-apply";

      const payload = new FormData();

      payload.append(
        "data",
        JSON.stringify({
          jobId: job.id,
          jobTitle: job.title,
          jobLocation: job.location,
          jobType: job.type,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          currentCompany: formData.currentCompany ?? "",
          currentTitle: formData.currentTitle ?? "",
          linkedIn: formData.linkedIn ?? "",
          yearsExperience: formData.yearsExperience,
          noticePeriod: formData.noticePeriod,
          coverLetter: formData.coverLetter ?? "",
        }),
      );

      payload.append("resume", resumeFile, resumeFile.name);

      const response = await fetch(webhookUrl, {
        method: "POST",
        body: payload,
      });

      if (!response.ok) {
        let msg = "We could not submit your application. Please try again.";
        try {
          const ct = response.headers.get("content-type") || "";
          if (ct.includes("application/json")) {
            const errJson = await response.json();
            if (
              typeof errJson === "object" &&
              errJson !== null &&
              "message" in errJson &&
              typeof errJson.message === "string"
            ) {
              msg = errJson.message;
            }
          }
        } catch (jsonParseError) {
          void jsonParseError;
        }
        throw new Error(msg);
      }

      toast.success(
        "Application submitted successfully! We will review your application and contact you shortly.",
      );

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        currentCompany: "",
        currentTitle: "",
        linkedIn: "",
        yearsExperience: "",
        noticePeriod: "",
        coverLetter: "",
      });
      setResumeFile(null);
      setErrors({});
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to submit application.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <CustomCursor />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden bg-stone/20">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to={`/careers/${job.id}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Job Details
              </Link>
              <span className="text-sm uppercase tracking-[0.5em] text-primary mb-4 block">
                Apply for Position
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">
                {job.title}
              </h1>
              <p className="text-lg font-light text-muted-foreground">
                {job.location} • {job.type}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-24">
          <div className="max-w-[960px] mx-auto px-6 md:px-10">
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Personal Information */}
              <div>
                <h2 className="font-serif text-2xl font-light mb-8">
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className="w-full bg-transparent border border-stone rounded-sm px-4 py-3 text-base font-light focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                    />
                    {errors.firstName && (
                      <p className="text-destructive text-sm mt-2">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      className="w-full bg-transparent border border-stone rounded-sm px-4 py-3 text-base font-light focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                    />
                    {errors.lastName && (
                      <p className="text-destructive text-sm mt-2">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full bg-transparent border border-stone rounded-sm px-4 py-3 text-base font-light focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-2">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="w-full bg-transparent border border-stone rounded-sm px-4 py-3 text-base font-light focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-2">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div>
                <h2 className="font-serif text-2xl font-light mb-8">
                  Professional Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Current Company
                    </label>
                    <input
                      type="text"
                      value={formData.currentCompany}
                      onChange={(e) =>
                        handleInputChange("currentCompany", e.target.value)
                      }
                      className="w-full bg-transparent border border-stone rounded-sm px-4 py-3 text-base font-light focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Current Title
                    </label>
                    <input
                      type="text"
                      value={formData.currentTitle}
                      onChange={(e) =>
                        handleInputChange("currentTitle", e.target.value)
                      }
                      className="w-full bg-transparent border border-stone rounded-sm px-4 py-3 text-base font-light focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      value={formData.linkedIn}
                      onChange={(e) =>
                        handleInputChange("linkedIn", e.target.value)
                      }
                      placeholder="https://linkedin.com/in/..."
                      className="w-full bg-transparent border border-stone rounded-sm px-4 py-3 text-base font-light focus:ring-1 focus:ring-primary focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                    />
                    {errors.linkedIn && (
                      <p className="text-destructive text-sm mt-2">
                        {errors.linkedIn}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Years of Experience *
                    </label>
                    <select
                      value={formData.yearsExperience}
                      onChange={(e) =>
                        handleInputChange("yearsExperience", e.target.value)
                      }
                      className="w-full bg-transparent border border-stone rounded-sm px-4 py-3 text-base font-light focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                    >
                      <option value="">Select...</option>
                      <option value="0-2">0-2 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="10-15">10-15 years</option>
                      <option value="15+">15+ years</option>
                    </select>
                    {errors.yearsExperience && (
                      <p className="text-destructive text-sm mt-2">
                        {errors.yearsExperience}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm text-muted-foreground mb-2">
                      Notice Period *
                    </label>
                    <select
                      value={formData.noticePeriod}
                      onChange={(e) =>
                        handleInputChange("noticePeriod", e.target.value)
                      }
                      className="w-full bg-transparent border border-stone rounded-sm px-4 py-3 text-base font-light focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                    >
                      <option value="">Select...</option>
                      <option value="immediate">Immediate</option>
                      <option value="2-weeks">2 weeks</option>
                      <option value="1-month">1 month</option>
                      <option value="2-months">2 months</option>
                      <option value="3-months">3 months</option>
                    </select>
                    {errors.noticePeriod && (
                      <p className="text-destructive text-sm mt-2">
                        {errors.noticePeriod}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <h2 className="font-serif text-2xl font-light mb-8">
                  Resume / CV *
                </h2>
                <div className="border-2 border-dashed border-stone rounded-lg p-8 text-center">
                  <input
                    type="file"
                    id="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="resume" className="cursor-pointer block">
                    {resumeFile ? (
                      <div className="flex items-center justify-center gap-4">
                        <svg
                          className="w-8 h-8 text-primary"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <polyline points="9 15 12 12 15 15" />
                          <line x1="12" y1="12" x2="12" y2="18" />
                        </svg>
                        <div className="text-left">
                          <p className="font-light">{resumeFile.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            setResumeFile(null);
                          }}
                          className="ml-4 text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <>
                        <svg
                          className="w-12 h-12 mx-auto text-muted-foreground mb-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="17 8 12 3 7 8" />
                          <line x1="12" y1="3" x2="12" y2="15" />
                        </svg>
                        <p className="font-light mb-2">
                          Click to upload your resume
                        </p>
                        <p className="text-sm text-muted-foreground">
                          PDF or Word document, max 5MB
                        </p>
                      </>
                    )}
                  </label>
                </div>
                {errors.resume && (
                  <p className="text-destructive text-sm mt-2">
                    {errors.resume}
                  </p>
                )}
              </div>

              {/* Cover Letter */}
              <div>
                <h2 className="font-serif text-2xl font-light mb-8">
                  Cover Letter (Optional)
                </h2>
                <textarea
                  value={formData.coverLetter}
                  onChange={(e) =>
                    handleInputChange("coverLetter", e.target.value)
                  }
                  rows={6}
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  className="w-full bg-transparent border border-stone rounded-sm px-4 py-3 text-base font-light focus:ring-1 focus:ring-primary focus:border-primary transition-colors resize-none placeholder:text-muted-foreground/50"
                />
              </div>

              {/* Submit */}
              <div className="pt-8 border-t border-stone">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-primary text-primary-foreground px-12 py-5 text-[11px] uppercase tracking-[0.3em] rounded-sm hover:bg-primary/90 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
                <p className="mt-6 text-sm text-muted-foreground font-light">
                  By submitting this application, you confirm that the
                  information provided is accurate and consent to our processing
                  of your personal data for recruitment purposes.
                </p>
              </div>
            </motion.form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JobApplication;
