import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";

import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FormField, SelectInput, TextArea, TextInput } from "@/components/marketing/forms";
import { PageContainer, SectionHeading, sectionSpacing } from "@/components/marketing/primitives";
import { getJobById } from "@/data/jobPositions";

const applicationSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50),
  lastName: z.string().trim().min(1, "Last name is required").max(50),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  currentCompany: z.string().trim().max(100).optional(),
  currentTitle: z.string().trim().max(100).optional(),
  linkedIn: z.string().trim().url("Invalid LinkedIn URL").optional().or(z.literal("")),
  yearsExperience: z.string().min(1, "Please select years of experience"),
  noticePeriod: z.string().min(1, "Please select notice period"),
  coverLetter: z.string().trim().max(3000).optional(),
});

type ApplicationData = z.infer<typeof applicationSchema>;

const initialFormData: ApplicationData = {
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
};

const JobApplication = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const job = jobId ? getJobById(jobId) : undefined;

  const [formData, setFormData] = useState<ApplicationData>(initialFormData);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  const handleInputChange = (field: keyof ApplicationData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) {
        return prev;
      }

      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

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
      const next = { ...prev };
      delete next.resume;
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = applicationSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
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

      const response = await fetch("https://automate.eyelevelstudio.in/webhook/njmascon-job-apply", {
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

      setFormData(initialFormData);
      setResumeFile(null);
      setErrors({});
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to submit application.";
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
        <section className="bg-stone/20 py-24 sm:py-28 lg:py-32">
          <PageContainer>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to={`/careers/${job.id}`}
                className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Job Details
              </Link>
              <span className="mb-4 block text-sm uppercase tracking-[0.45em] text-primary">Apply for Position</span>
              <h1 className="font-serif text-4xl font-light sm:text-5xl">{job.title}</h1>
              <p className="mt-4 text-base font-light text-muted-foreground sm:text-lg">
                {job.location} • {job.type}
              </p>
            </motion.div>
          </PageContainer>
        </section>

        <section className={sectionSpacing}>
          <PageContainer className="max-w-[960px]">
            <motion.form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <SectionHeading title="Personal Information" className="mb-8" />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <FormField id="firstName" label="First Name" required error={errors.firstName}>
                    <TextInput
                      id="firstName"
                      name="firstName"
                      autoComplete="given-name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      error={errors.firstName}
                    />
                  </FormField>
                  <FormField id="lastName" label="Last Name" required error={errors.lastName}>
                    <TextInput
                      id="lastName"
                      name="lastName"
                      autoComplete="family-name"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      error={errors.lastName}
                    />
                  </FormField>
                  <FormField id="email" label="Email" required error={errors.email}>
                    <TextInput
                      id="email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      error={errors.email}
                    />
                  </FormField>
                  <FormField id="phone" label="Phone" required error={errors.phone}>
                    <TextInput
                      id="phone"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      error={errors.phone}
                    />
                  </FormField>
                </div>
              </div>

              <div>
                <SectionHeading title="Professional Information" className="mb-8" />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <FormField id="currentCompany" label="Current Company">
                    <TextInput
                      id="currentCompany"
                      name="organization"
                      autoComplete="organization"
                      value={formData.currentCompany}
                      onChange={(e) => handleInputChange("currentCompany", e.target.value)}
                    />
                  </FormField>
                  <FormField id="currentTitle" label="Current Title">
                    <TextInput
                      id="currentTitle"
                      value={formData.currentTitle}
                      onChange={(e) => handleInputChange("currentTitle", e.target.value)}
                    />
                  </FormField>
                  <FormField id="linkedIn" label="LinkedIn Profile" error={errors.linkedIn}>
                    <TextInput
                      id="linkedIn"
                      type="url"
                      name="url"
                      placeholder="https://linkedin.com/in/..."
                      value={formData.linkedIn}
                      onChange={(e) => handleInputChange("linkedIn", e.target.value)}
                      error={errors.linkedIn}
                    />
                  </FormField>
                  <FormField id="yearsExperience" label="Years of Experience" required error={errors.yearsExperience}>
                    <SelectInput
                      id="yearsExperience"
                      name="yearsExperience"
                      value={formData.yearsExperience}
                      onChange={(e) => handleInputChange("yearsExperience", e.target.value)}
                      error={errors.yearsExperience}
                    >
                      <option value="">Select...</option>
                      <option value="0-2">0-2 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="10-15">10-15 years</option>
                      <option value="15+">15+ years</option>
                    </SelectInput>
                  </FormField>
                  <FormField
                    id="noticePeriod"
                    label="Notice Period"
                    required
                    error={errors.noticePeriod}
                    className="md:col-span-2"
                  >
                    <SelectInput
                      id="noticePeriod"
                      name="noticePeriod"
                      value={formData.noticePeriod}
                      onChange={(e) => handleInputChange("noticePeriod", e.target.value)}
                      error={errors.noticePeriod}
                    >
                      <option value="">Select...</option>
                      <option value="immediate">Immediate</option>
                      <option value="2-weeks">2 weeks</option>
                      <option value="1-month">1 month</option>
                      <option value="2-months">2 months</option>
                      <option value="3-months">3 months</option>
                    </SelectInput>
                  </FormField>
                </div>
              </div>

              <div>
                <SectionHeading title="Resume / CV *" className="mb-8" />
                <div className="rounded-2xl border-2 border-dashed border-stone p-8 text-center">
                  <input
                    type="file"
                    id="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="sr-only"
                    aria-describedby={errors.resume ? "resume-error" : undefined}
                  />
                  <label htmlFor="resume" className="block cursor-pointer">
                    {resumeFile ? (
                      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <svg
                          className="h-8 w-8 text-primary"
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
                        <div className="text-center sm:text-left">
                          <p className="font-light">{resumeFile.name}</p>
                          <p className="text-sm text-muted-foreground">{(resumeFile.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            setResumeFile(null);
                          }}
                          className="text-muted-foreground transition-colors hover:text-destructive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                          Remove file
                        </button>
                      </div>
                    ) : (
                      <>
                        <svg
                          className="mx-auto mb-4 h-12 w-12 text-muted-foreground"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="17 8 12 3 7 8" />
                          <line x1="12" y1="3" x2="12" y2="15" />
                        </svg>
                        <p className="mb-2 font-light">Click to upload your resume</p>
                        <p className="text-sm text-muted-foreground">PDF or Word document, max 5MB</p>
                      </>
                    )}
                  </label>
                </div>
                {errors.resume ? (
                  <p id="resume-error" className="mt-2 text-sm text-destructive">
                    {errors.resume}
                  </p>
                ) : null}
              </div>

              <div>
                <SectionHeading title="Cover Letter (Optional)" className="mb-8" />
                <FormField id="coverLetter" label="Why are you a strong fit?" error={errors.coverLetter}>
                  <TextArea
                    id="coverLetter"
                    rows={6}
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    value={formData.coverLetter}
                    onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                    error={errors.coverLetter}
                  />
                </FormField>
              </div>

              <div className="border-t border-stone pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-auto w-full items-center justify-center rounded-sm bg-primary px-8 py-4 text-[11px] uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 md:w-auto md:px-12 md:py-5 md:tracking-[0.3em]"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
                <p className="mt-6 text-sm font-light text-muted-foreground">
                  By submitting this application, you confirm that the information provided is accurate and consent to
                  our processing of your personal data for recruitment purposes.
                </p>
              </div>
            </motion.form>
          </PageContainer>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JobApplication;
