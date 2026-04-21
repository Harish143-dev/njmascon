import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";
import { FormField, TextArea, TextInput } from "@/components/marketing/forms";
import contactHero from "@/assets/videos/contact.webm";
import {
  InlineTextLink,
  PageContainer,
  PageHero,
  SectionHeading,
  sectionSpacing,
} from "@/components/marketing/primitives";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().max(2000).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFieldChange = (field: keyof ContactFormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);

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

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://automate.eyelevelstudio.in/webhook/njmascon-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      const contentType = response.headers.get("content-type") ?? "";
      if (response.status !== 204 && contentType.includes("application/json")) {
        await response.json();
      }

      toast.success("Your message has been sent. We will respond shortly.");
      setFormData(initialFormData);
      setErrors({});
    } catch (error: unknown) {
      console.error("API Error:", error);
      const message = error instanceof Error ? error.message : "Failed to send message.";
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
        <PageHero
          videoSrc={contactHero}
          eyebrow="Contact"
          title={
            <>
              Begin a <span className="italic">Conversation</span>
            </>
          }
          description="We'd love to hear from you. Reach out to start your journey with NJ Macson."
          minHeightClassName="min-h-[55vh] sm:min-h-[60vh]"
        />

        <section className={sectionSpacing}>
          <PageContainer>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
              <motion.div
                className="lg:col-span-5"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <SectionHeading
                  eyebrow="Contact"
                  title={
                    <>
                      Contact & <span className="italic">Reach Us</span>
                    </>
                  }
                  description="Let's connect in person. We're inspired by clients who are driven to achieve true financial freedom."
                  className="mb-8"
                />

                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 text-base text-primary md:text-lg">Address</h3>
                    <p className="text-sm font-light text-muted-foreground md:text-base">
                      Door No:43 Navarathna Garden 2nd Cross street, Defence Colony,
                      Ekkaduthangal, Chennai 600032.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-base text-primary md:text-lg">Phone / Mobile</h3>
                    <p className="text-sm font-light md:text-base">044 43570713 / +91 739 59 11123</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-base text-primary md:text-lg">Email</h3>
                    <a
                      href="mailto:writetous@njmacson.com"
                      className="break-all text-sm font-light transition-colors hover:text-primary md:text-base"
                    >
                      writetous@njmacson.com
                    </a>
                  </div>
                  <div>
                    <h3 className="mb-2 text-base text-primary md:text-lg">Working Hours</h3>
                    <p className="text-sm font-light text-muted-foreground md:text-base">
                      Mon - Fri: 9am - 6pm
                      <br />
                      Saturday: By Appointment
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="lg:col-span-6 lg:col-start-7"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="mb-6 font-serif text-xl font-light italic text-muted-foreground sm:mb-8 sm:text-2xl">
                  "With NJ Macson, turn your dreams into reality."
                </p>
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <FormField id="contact-name" label="Your Name" required error={errors.name}>
                    <TextInput
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => handleFieldChange("name", e.target.value)}
                      error={errors.name}
                    />
                  </FormField>

                  <FormField id="contact-email" label="Your Email" required error={errors.email}>
                    <TextInput
                      id="contact-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => handleFieldChange("email", e.target.value)}
                      error={errors.email}
                    />
                  </FormField>

                  <FormField id="contact-message" label="Your Message" error={errors.message}>
                    <TextArea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleFieldChange("message", e.target.value)}
                      error={errors.message}
                    />
                  </FormField>

                  <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex h-auto items-center justify-center rounded-sm bg-primary px-6 py-4 text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 sm:px-10 sm:tracking-[0.24em]"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                    <InlineTextLink to="/about">Learn more about NJ Macson</InlineTextLink>
                  </div>
                </form>
              </motion.div>
            </div>
          </PageContainer>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
