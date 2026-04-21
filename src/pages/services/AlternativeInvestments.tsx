import { motion } from "framer-motion";

import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PageContainer, PageHero, PrimaryLinkButton, SectionHeading, sectionSpacing } from "@/components/marketing/primitives";
import { cardItem, fadeUpSoft, inViewOnce, staggerContainer } from "@/lib/motion";
import heroVideo from "@/assets/videos/altranative-investment.webm";

const investments = [
  "Real estate in India and Dubai",
  "Shipping and logistics",
  "Energy and mining",
  "Precious metals",
  "Early-stage ventures",
];

const sectors = [
  "Food and Beverage",
  "Shipping and logistics",
  "Coal",
  "Petroleum",
  "Transport",
  "Real Estate",
  "Mining and Minerals",
  "Agro-tech",
  "Sports",
  "Seed funding",
];

const AlternativeInvestments = () => {
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
              Alternative <span className="italic">Investments</span>
            </>
          }
          description="NJ Macson offers curated alternative investment opportunities across high-growth sectors, including commercial real estate, shipping and logistics, energy, mining, transportation, and early-stage ventures."
          secondaryDescription="Our focus is on stable income, capital protection, diversification, and long-term value creation."
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
              <motion.div variants={fadeUpSoft}>
                <h2 className="mb-4 font-serif text-2xl font-light sm:mb-6 sm:text-3xl">
                  Beyond the Basics: Traditional vs. Alternative
                </h2>
                <p className="text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
                  While stocks, bonds, and cash form the foundation of most portfolios, alternative investments provide
                  a sophisticated path to wealth creation.
                </p>
              </motion.div>

              <motion.div variants={fadeUpSoft}>
                <h2 className="mb-4 font-serif text-2xl font-light sm:mb-6 sm:text-3xl">The Alternative Landscape</h2>
                <p className="text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
                  We provide access to private equity, venture capital, and hedge funds, alongside tangible assets like
                  real estate and commodities.
                </p>
              </motion.div>
            </motion.div>
          </PageContainer>
        </section>

        <section className={sectionSpacing}>
          <PageContainer>
            <SectionHeading
              title="Our Investment Options"
              description="Every option is rigorously analyzed in-house and customized to match clients' risk preferences and return goals."
            />

            <motion.div
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-6"
              variants={staggerContainer(0.1, 0.06)}
              initial="hidden"
              whileInView="show"
              viewport={inViewOnce}
            >
              {investments.map((investment) => (
                <motion.div
                  key={investment}
                  className="rounded-2xl bg-stone/20 p-4 text-center sm:p-6"
                  variants={cardItem}
                >
                  <span className="text-sm font-light">{investment}</span>
                </motion.div>
              ))}
            </motion.div>
          </PageContainer>
        </section>

        <section className={sectionSpacing + " bg-foreground text-background"}>
          <PageContainer>
            <SectionHeading
              eyebrow="Benefits"
              title="Why Alternative Investments?"
              description="Diversification, unique fee structures, and potential for higher returns compared to mutual funds or ETFs."
              className="text-background"
            />

            <motion.div
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-8"
              variants={staggerContainer(0.1, 0.06)}
              initial="hidden"
              whileInView="show"
              viewport={inViewOnce}
            >
              {sectors.map((benefit) => (
                <motion.div
                  key={benefit}
                  className="rounded-2xl border border-background/20 p-4"
                  variants={cardItem}
                >
                  <h3 className="text-base font-light text-primary">{benefit}</h3>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-serif text-3xl font-light text-background sm:text-4xl">
                Explore New Growth Pathways
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-sm font-light text-background/70 sm:text-base md:text-lg">
                Alternative opportunities can be tailored to your risk appetite, portfolio goals, and horizon.
              </p>
              <PrimaryLinkButton to="/contact" className="mt-8 sm:mt-10">
                Explore Opportunities
              </PrimaryLinkButton>
            </motion.div>
          </PageContainer>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AlternativeInvestments;
