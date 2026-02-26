import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

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

const gstServices = [
  "GST Registration and Compliance Consulting",
  "End-to-End GST Filing Solutions",
];

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

const AuditingLegal = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <CustomCursor />
      <Header />

      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
          </video>

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="text-sm uppercase tracking-[0.5em] text-primary mb-4 block">
                Our Services
              </span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95] tracking-tight mb-8">
                Auditing & <span className="italic">Legal</span>
              </h1>
              <p className="text-lg font-light leading-relaxed text-muted-foreground">
                Comprehensive auditing solutions and expert legal advisory to
                ensure compliance, governance, and strategic protection for your
                assets.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Auditing Section */}
        <section className="py-16 bg-stone/20">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl font-light mb-6">Auditing</h2>
              <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground max-w-3xl">
                NJ Macson provides comprehensive auditing solutions that go
                beyond compliance to strengthen financial governance and
                operational efficiency. Our experienced auditors deliver
                statutory and internal audits, compliance reviews, and risk
                assessments—ensuring accuracy, transparency, and confidence in
                financial reporting.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Tax and Compliance */}
              <motion.div
                className="bg-background p-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-light mb-6 text-primary">
                  Tax and Compliance Services
                </h3>
                <ul className="space-y-3">
                  {taxServices.map((service) => (
                    <li
                      key={service}
                      className="text-sm font-light text-muted-foreground flex gap-2"
                    >
                      <span className="text-primary">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Certifications */}
              <motion.div
                className="bg-background p-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xl font-light mb-6 text-primary">
                  Certifications & Registrations
                </h3>
                <ul className="space-y-3 mb-6">
                  {certifications.map((cert) => (
                    <li
                      key={cert}
                      className="text-sm font-light text-muted-foreground flex gap-2"
                    >
                      <span className="text-primary">•</span>
                      {cert}
                    </li>
                  ))}
                </ul>
                <h4 className="text-lg font-light mb-4">
                  Registration Services
                </h4>
                <ul className="space-y-3">
                  {registrations.map((reg) => (
                    <li
                      key={reg}
                      className="text-sm font-light text-muted-foreground flex gap-2"
                    >
                      <span className="text-primary">•</span>
                      {reg}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* GST & Auditing */}
              <motion.div
                className="bg-background p-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-light mb-6 text-primary">
                  GST Services
                </h3>
                <ul className="space-y-3 mb-6">
                  {gstServices.map((service) => (
                    <li
                      key={service}
                      className="text-sm font-light text-muted-foreground flex gap-2"
                    >
                      <span className="text-primary">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
                <h4 className="text-lg font-light mb-4">Auditing Services</h4>
                <ul className="space-y-3">
                  {auditingServices.map((service) => (
                    <li
                      key={service}
                      className="text-sm font-light text-muted-foreground flex gap-2"
                    >
                      <span className="text-primary">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Legal Section */}
        <section className="py-24">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl font-light mb-6">Legal</h2>
              <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground max-w-3xl">
                NJ Macson delivers expert legal advisory for the media and
                entertainment sector. Our services span intellectual property
                protection, contract negotiation, production, corporate, and
                real estate matters—providing strategic, client-focused guidance
                to navigate complex legal challenges with confidence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Drafting */}
              <motion.div
                className="p-8 border border-stone rounded-lg"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-light mb-6 text-primary">
                  Drafting
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {legalDrafting.map((item) => (
                    <span
                      key={item}
                      className="text-sm font-light text-muted-foreground"
                    >
                      • {item}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Registration */}
              <motion.div
                className="p-8 border border-stone rounded-lg"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-light mb-6 text-primary">
                  Registration
                </h3>
                <ul className="space-y-3">
                  {legalRegistration.map((item) => (
                    <li
                      key={item}
                      className="text-sm font-light text-muted-foreground flex gap-2"
                    >
                      <span className="text-primary">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-stone">
                  <h4 className="text-lg font-light mb-2">
                    Legal Opinion & Advice
                  </h4>
                  <p className="text-sm text-muted-foreground font-light">
                    Expert consultation on all legal matters
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-foreground text-background">
          <motion.div
            className="max-w-[1440px] mx-auto px-6 md:px-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">
              Need Professional Assistance?
            </h2>
            <Link
              to="/contact"
              className="inline-block bg-primary text-primary-foreground px-10 py-5 text-[11px] uppercase tracking-[0.3em] rounded-sm hover:bg-primary/90 transition-all"
            >
              Get in Touch
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AuditingLegal;

