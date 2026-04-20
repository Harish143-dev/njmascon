import { motion } from "framer-motion";

import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PageContainer, PageCta, PageHero, SectionHeading, marketingCardClassName, sectionSpacing } from "@/components/marketing/primitives";
import heroVideo from "@/assets/videos/audit-legal.mp4";

const taxServices = [
  "Comprehensive Income Tax Returns Filing",
  "Detailed Income Tax Forms Preparation",
  "ROC (Registrar of Companies) Forms Assistance",
  "Business Entity Incorporation and Compliance",
  "Trademark Registration and Intellectual Property Protection",
  "Provident Fund (PF), Employees, State Insurance (ESI) Compliance",
  "TDS (Tax Deducted at Source) Filing and Management",
];

const certifications = [
  "Import Export Code (IEC) Certification",
  "MSME (Micro, Small & Medium Enterprises) Registration",
  "PAN & TAN Applications Management",
  "Digital Signature Certificates (DSC) Setup and Support",
];

const registrations = [
  "Trust Registration and Compliance Guidance",
  "Partnership and Firm Registrations",
  "Comprehensive Financial Due Diligence",
];

const gstServices = ["GST Registration and Compliance Consulting", "End-to-End GST Filing Solutions"];

const auditingServices = [
  "Bank Audits",
  "Financial Health Analysis (Financial Due Diligence and Investigation Audit)",
  "Concurrent Bank Audits for Ongoing Compliance",
  "Statutory Audits for Regulatory Adherence",
  "Internal Audits for Process Optimization",
  "Trust Audit and Compliance Checks",
];

const legalDrafting = [
  "Employment contracts",
  "Service Agreements",
  "Rental and Lease Deeds",
  "Sale Deeds",
  "Non-Disclosure Agreements (NDAs)",
  "Partnership Deeds",
  "Franchise Agreements",
  "Legal Notices",
  "Trust Deeds",
  "Power of Attorney",
  "Artist Agreements",
  "Production Contracts",
  "Affidavits",
];

const legalRegistration = [
  "Partnership registration",
  "Property Registration",
  "Company registration",
  "Power Agent",
  "Memorandum of Deposit of Title Deeds (MODT)",
  "Trademark registration",
];

const listItemClassName = "flex gap-3 text-sm font-light text-muted-foreground";

const AuditingLegal = () => {
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
              Auditing & <span className="italic">Legal</span>
            </>
          }
          description="Comprehensive auditing solutions and expert legal advisory to ensure compliance, governance, and strategic protection for your assets."
        />

        <section className={sectionSpacing + " bg-stone/20"}>
          <PageContainer>
            <SectionHeading
              title="Auditing"
              description="NJ Macson provides comprehensive auditing solutions that go beyond compliance to strengthen financial governance and operational efficiency. Our experienced auditors deliver statutory and internal audits, compliance reviews, and risk assessments—ensuring accuracy, transparency, and confidence in financial reporting."
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <motion.article
                className={marketingCardClassName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="mb-6 text-xl font-light text-primary">Tax and Compliance Services</h3>
                <ul className="space-y-3">
                  {taxServices.map((service) => (
                    <li key={service} className={listItemClassName}>
                      <span className="text-primary">•</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>

              <motion.article
                className={marketingCardClassName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="mb-6 text-xl font-light text-primary">Certifications & Registrations</h3>
                <ul className="mb-6 space-y-3">
                  {certifications.map((cert) => (
                    <li key={cert} className={listItemClassName}>
                      <span className="text-primary">•</span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="mb-4 text-lg font-light">Registration Services</h4>
                <ul className="space-y-3">
                  {registrations.map((reg) => (
                    <li key={reg} className={listItemClassName}>
                      <span className="text-primary">•</span>
                      <span>{reg}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>

              <motion.article
                className={marketingCardClassName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="mb-6 text-xl font-light text-primary">GST Services</h3>
                <ul className="mb-6 space-y-3">
                  {gstServices.map((service) => (
                    <li key={service} className={listItemClassName}>
                      <span className="text-primary">•</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="mb-4 text-lg font-light">Auditing Services</h4>
                <ul className="space-y-3">
                  {auditingServices.map((service) => (
                    <li key={service} className={listItemClassName}>
                      <span className="text-primary">•</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </div>
          </PageContainer>
        </section>

        <section className={sectionSpacing}>
          <PageContainer>
            <SectionHeading
              title="Legal"
              description="NJ Macson delivers expert legal advisory for the media and entertainment sector. Our services span intellectual property protection, contract negotiation, production, corporate, and real estate matters—providing strategic, client-focused guidance to navigate complex legal challenges with confidence."
            />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <motion.article
                className="rounded-2xl border border-stone p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="mb-6 text-xl font-light text-primary">Drafting</h3>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {legalDrafting.map((item) => (
                    <li key={item} className="text-sm font-light text-muted-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
              </motion.article>

              <motion.article
                className="rounded-2xl border border-stone p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="mb-6 text-xl font-light text-primary">Registration</h3>
                <ul className="space-y-3">
                  {legalRegistration.map((item) => (
                    <li key={item} className={listItemClassName}>
                      <span className="text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-stone pt-6">
                  <h4 className="mb-2 text-lg font-light">Legal Opinion & Advice</h4>
                  <p className="text-sm font-light text-muted-foreground">Expert consultation on all legal matters</p>
                </div>
              </motion.article>
            </div>
          </PageContainer>
        </section>

        <PageCta title="Need Professional Assistance?" actionLabel="Get in Touch" actionTo="/contact" />
      </main>

      <Footer />
    </div>
  );
};

export default AuditingLegal;
