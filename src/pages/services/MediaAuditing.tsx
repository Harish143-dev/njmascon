import { motion } from "framer-motion";

import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  PageContainer,
  PageCta,
  PageHero,
  SectionHeading,
  marketingCardClassName,
  sectionSpacing,
} from "@/components/marketing/primitives";
import heroVideo from "@/assets/videos/media-audit.mp4";

const auditStages = [
  {
    number: "01",
    title: "Pre-Production Audit",
    subtitle: "Strategy. Planning. Financial Alignment.",
    description: "Before execution begins, we ensure that your media strategy is built on strong foundations.",
    items: ["Detailed Budget Preparation", "Execution of Contracts with Components", "Funding Advisory Services", "Deputation of EP"],
  },
  {
    number: "02",
    title: "Production Audit",
    subtitle: "Execution Integrity. Cost Control. Quality Assurance.",
    description: "We monitor how your campaigns are being executed in real time.",
    items: ["Support Liaison & Cost Control", "Budget Monitoring", "Shoot Expenses Accounting"],
  },
  {
    number: "03",
    title: "Post-Production Audit",
    subtitle: "Performance Analysis. Data Accuracy. Optimization.",
    description: "Once campaigns are executed, we deep-dive into performance.",
    items: ["Analysis & Reporting", "Budget Monitoring", "MIS Reporting", "COP Reports"],
  },
  {
    number: "04",
    title: "After Release Audit",
    subtitle: "Long-Term Impact. Strategic Improvement. Future Planning.",
    description: "We go beyond campaigns to evaluate sustained brand and business impact.",
    items: ["Online Anti-Piracy Solutions", "Statutory Compliances", "Assets Inventory", "Audit & Taxation", "Events Management"],
  },
] as const;

const MediaAuditing = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <CustomCursor />
      <Header />

      <main>
        <PageHero
          videoSrc={heroVideo}
          eyebrow="Our Services"
          title={
            <>
              Media <span className="italic">Auditing</span>
            </>
          }
          description="Bringing transparency, control, and performance to your media investments."
          secondaryDescription="At NJ Macson, we extend our expertise in financial and operational auditing into the media ecosystem, ensuring that every rupee spent on marketing delivers measurable value."
          contentClassName="mx-auto text-center"
        />

        <section className={sectionSpacing + " bg-stone/20 overflow-x-clip"}>
          <PageContainer>
            <SectionHeading
              eyebrow="What We Do"
              title={
                <>
                  End-to-End <span className="italic">Media Audit</span> Framework
                </>
              }
              description="We provide an end-to-end audit framework, ensuring your brand communication is efficient, compliant, and impactful at every stage."
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 sm:gap-8">
              {auditStages.map((stage, index) => (
                <motion.article
                  key={stage.title}
                  className={marketingCardClassName}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                >
                  <span className="mb-4 block text-sm uppercase tracking-[0.2em] text-primary">{stage.number}</span>
                  <h3 className="mb-3 font-serif text-2xl font-light sm:text-3xl">{stage.title}</h3>
                  <p className="mb-4 text-sm font-light text-primary/80 sm:text-base">{stage.subtitle}</p>
                  <p className="mb-6 text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
                    {stage.description}
                  </p>
                  <ul className="space-y-3">
                    {stage.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm font-light text-muted-foreground sm:text-base">
                        <span className="text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </PageContainer>
        </section>

        <PageCta
          title="Make Every Media Rupee Accountable"
          description="Partner with NJ Macson to bring clarity, control, and confidence to your media investments."
          actionLabel="Get a Media Audit Consultation"
          actionTo="/contact"
        />
      </main>

      <Footer />
    </div>
  );
};

export default MediaAuditing;
