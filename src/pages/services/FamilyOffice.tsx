import { motion } from "framer-motion";

import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PageContainer, PageCta, PageHero, SectionHeading, sectionSpacing } from "@/components/marketing/primitives";
import { cardItem, fadeUpSoft, inViewOnce, staggerContainer } from "@/lib/motion";
import heroVideo from "@/assets/videos/our-family-office.webm";

const highlights = [
  "Integrated solutions for UHNI families to grow, protect, and manage wealth.",
  "Investment, estate, tax, governance, and philanthropic advisory tailored to your vision.",
  "A single point of coordination for financial clarity and peace of mind.",
  "A modern family office offering holistic oversight beyond traditional wealth management.",
  "Lifestyle services, travel, and personal assistance designed for high-net-worth families.",
  "Dedicated advisors, family counselors, and wealth managers supporting both business and personal goals.",
];

const FamilyOffice = () => {
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
              Our <span className="italic">Family</span> Office
            </>
          }
          description="Managing wealth. Preserving legacies."
          secondaryDescription="NJ Macson's Family Office offers integrated solutions for ultra-high-net-worth individuals and families to manage, protect, and grow wealth across generations."
        />

        <section className={sectionSpacing + " bg-stone/20"}>
          <PageContainer>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
              <motion.div
                className="lg:col-span-5"
                variants={fadeUpSoft}
                initial="hidden"
                whileInView="show"
                viewport={inViewOnce}
              >
                <SectionHeading
                  title="A Modern Family Office"
                  description="A family office serves as the central hub for a family's financial, legal, and strategic needs—going beyond traditional wealth management to offer holistic oversight and continuity."
                  className="mb-6"
                />
                <h3 className="mb-3 text-lg font-light sm:text-xl">Lifestyle Services</h3>
                <p className="text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
                  We support the lifestyle needs of high-net-worth families, including travel, personal assistance,
                  and lifestyle management—allowing clients to focus on what matters most.
                </p>
              </motion.div>

              <motion.div
                className="lg:col-span-6 lg:col-start-7"
                variants={fadeUpSoft}
                initial="hidden"
                whileInView="show"
                viewport={inViewOnce}
              >
                <p className="mb-6 text-sm font-light leading-relaxed text-muted-foreground sm:mb-8 sm:text-base">
                  As the needs of families evolve, NJ Macson Family Office delivers customized wealth solutions through
                  a dedicated team of financial advisors, family counselors, and wealth managers—supporting both
                  business and personal goals.
                </p>
                <motion.div
                  className="grid grid-cols-1 gap-4 md:grid-cols-2"
                  variants={staggerContainer(0.1, 0.06)}
                  initial="hidden"
                  whileInView="show"
                  viewport={inViewOnce}
                >
                  {highlights.map((highlight) => (
                    <motion.div
                      key={highlight}
                      className="flex gap-3 rounded-2xl border border-stone/40 bg-background p-4"
                      variants={cardItem}
                    >
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-sm font-light leading-relaxed">{highlight}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </PageContainer>
        </section>

        <PageCta title="Managing Wealth. Preserving Legacies." actionLabel="Request Consultation" actionTo="/contact" />
      </main>

      <Footer />
    </div>
  );
};

export default FamilyOffice;
