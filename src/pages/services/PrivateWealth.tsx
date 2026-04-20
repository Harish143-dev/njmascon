import { motion } from "framer-motion";

import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PageContainer, PageCta, PageHero, SectionHeading, sectionSpacing } from "@/components/marketing/primitives";
import { cardItem, fadeUpSoft, inViewOnce, staggerContainer } from "@/lib/motion";
import heroVideo from "@/assets/videos/private-wealth.mp4";

const services = [
  "Investment and portfolio advisory",
  "Financial and estate planning",
  "Demat services",
  "Alternative investments",
];

const PrivateWealth = () => {
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
              Private <span className="italic">Wealth</span> Management
            </>
          }
          description="NJ Macson delivers personalized wealth management solutions designed to build, preserve, and grow wealth over the long term."
          secondaryDescription="Our strategies focus on portfolio diversification, risk management, and tax-efficient investing—aligned with each client's financial goals and personal priorities."
        />

        <section className={sectionSpacing + " bg-stone/20"}>
          <PageContainer>
            <motion.div
              className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12"
              variants={staggerContainer(0.14)}
              initial="hidden"
              whileInView="show"
              viewport={inViewOnce}
            >
              <motion.div className="w-full" variants={fadeUpSoft}>
                <SectionHeading
                  eyebrow="Designed For"
                  title="Tailored for Complex Wealth Journeys"
                  description="Wealth management services are ideal for high-net-worth individuals with diverse and complex financial needs."
                  className="mb-0"
                />
              </motion.div>

              <motion.div className="w-full" variants={fadeUpSoft}>
                <p className="mb-6 text-sm font-light leading-relaxed text-muted-foreground sm:mb-8 sm:text-base">
                  Our experienced advisors assess each client's assets and objectives to create customized financial
                  strategies tailored to their unique requirements.
                </p>
                <p className="text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
                  NJ Macson offers a holistic, research-driven wealth management approach combining expert advisory
                  with personalized investment execution.
                </p>
              </motion.div>
            </motion.div>
          </PageContainer>
        </section>

        <section className={sectionSpacing}>
          <PageContainer>
            <SectionHeading title="Our Services Include" />

            <motion.div
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
              variants={staggerContainer(0.1, 0.06)}
              initial="hidden"
              whileInView="show"
              viewport={inViewOnce}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  className="rounded-2xl border border-stone/40 p-8 transition-colors hover:border-primary"
                  variants={cardItem}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-light italic text-primary">0{index + 1}.</span>
                    <span className="text-xl font-light">{service}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="mt-12 text-center font-serif text-xl font-light text-muted-foreground"
              variants={fadeUpSoft}
              initial="hidden"
              whileInView="show"
              viewport={inViewOnce}
            >
              Built on trust and long-term partnerships, we simplify finance to help you invest with clarity and
              confidence.
            </motion.p>
          </PageContainer>
        </section>

        <PageCta title="Ready to Grow Your Wealth?" actionLabel="Request Consultation" actionTo="/contact" />
      </main>

      <Footer />
    </div>
  );
};

export default PrivateWealth;
