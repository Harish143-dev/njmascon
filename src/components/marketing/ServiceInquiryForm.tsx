import { useState, type FormEvent } from "react";

import { motion } from "framer-motion";
import { toast } from "sonner";
import { z } from "zod";

import { FormField, TextArea, TextInput } from "@/components/marketing/forms";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  PageContainer,
} from "@/components/marketing/primitives";
import type { ServiceInquiryService } from "@/data/services";

const serviceInquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().max(2000).optional(),
});

type ServiceInquiryFormData = z.infer<typeof serviceInquirySchema>;

const initialFormData: ServiceInquiryFormData = {
  name: "",
  email: "",
  message: "",
};

interface ServiceInquiryFormProps {
  service: ServiceInquiryService;
  title?: string;
  description?: string;
}

export function ServiceInquiryForm({
  service,
  title = "Managing Wealth. Preserving Legacies.",
  description = "Share your details and our team will connect with you about this service.",
}: ServiceInquiryFormProps) {
  const [formData, setFormData] =
    useState<ServiceInquiryFormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  const handleFieldChange = (
    field: keyof ServiceInquiryFormData,
    value: string,
  ) => {
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = serviceInquirySchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        formType: "service-inquiry",
        source: "service-page",
        submittedAt: new Date().toISOString(),
        fields: {
          name: result.data.name,
          email: result.data.email,
          message: result.data.message ?? "",
          service: service.label,
        },
        meta: {
          serviceKey: service.key,
          pageUrl: service.path,
        },
      };

      const response = await fetch(
        "https://automate.eyelevelstudio.in/webhook/njmascon-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      const contentType = response.headers.get("content-type") ?? "";
      if (response.status !== 204 && contentType.includes("application/json")) {
        await response.json();
      }

      toast.success("Your consultation request has been sent.");
      setFormData(initialFormData);
      setErrors({});
      setOpen(false);
    } catch (error: unknown) {
      console.error("Service inquiry API Error:", error);
      const message =
        error instanceof Error ? error.message : "Failed to send request.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-foreground py-16 text-background sm:py-20 lg:py-24">
      <PageContainer>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl font-light leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {title}
            </h2>
          </motion.div>

          <motion.div
            className="mt-8 flex justify-center sm:mt-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-sm bg-primary px-6 py-4 text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-foreground sm:w-auto sm:px-10 sm:tracking-[0.24em]"
                >
                  Request Consultation
                </button>
              </DialogTrigger>
              <DialogContent className="max-h-[92svh] overflow-y-auto rounded-sm border-stone bg-background p-5 sm:max-w-xl sm:p-8">
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl font-light sm:text-3xl">
                    {title}
                  </DialogTitle>
                  <DialogDescription>{description}</DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <FormField id="service-inquiry-service" label="Service">
                    <div
                      id="service-inquiry-service"
                      className="w-full rounded-sm border border-stone bg-stone/20 px-4 py-3 text-base font-light text-foreground"
                    >
                      {service.label}
                    </div>
                  </FormField>

                  <FormField
                    id="service-inquiry-name"
                    label="Your Name"
                    required
                    error={errors.name}
                  >
                    <TextInput
                      id="service-inquiry-name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(event) =>
                        handleFieldChange("name", event.target.value)
                      }
                      error={errors.name}
                    />
                  </FormField>

                  <FormField
                    id="service-inquiry-email"
                    label="Your Email"
                    required
                    error={errors.email}
                  >
                    <TextInput
                      id="service-inquiry-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(event) =>
                        handleFieldChange("email", event.target.value)
                      }
                      error={errors.email}
                    />
                  </FormField>

                  <FormField
                    id="service-inquiry-message"
                    label="Your Message"
                    error={errors.message}
                  >
                    <TextArea
                      id="service-inquiry-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={(event) =>
                        handleFieldChange("message", event.target.value)
                      }
                      error={errors.message}
                    />
                  </FormField>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex h-auto w-full items-center justify-center rounded-sm bg-primary px-6 py-4 text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 sm:w-auto sm:px-10 sm:tracking-[0.24em]"
                  >
                    {isSubmitting ? "Sending..." : "Send Consultation Request"}
                  </button>
                </form>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}
