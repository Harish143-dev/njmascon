import { motion } from "framer-motion";

import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ServiceInquiryForm } from "@/components/marketing/ServiceInquiryForm";
import {
  PageContainer,
  PageHero,
  SectionHeading,
  sectionSpacing,
} from "@/components/marketing/primitives";
import { serviceInquiryServices } from "@/data/services";
import {
  cardItem,
  fadeUpSoft,
  inViewOnce,
  staggerContainer,
} from "@/lib/motion";
import heroVideo from "@/assets/videos/altranative-investment.webm";

const investments = [
  "Real estate in India and Abroad",
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
                  While stocks, bonds, and cash form the foundation of most
                  portfolios, alternative investments provide a sophisticated
                  path to wealth creation.
                </p>
              </motion.div>

              <motion.div variants={fadeUpSoft}>
                <h2 className="mb-4 font-serif text-2xl font-light sm:mb-6 sm:text-3xl">
                  The Alternative Landscape
                </h2>
                <p className="text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
                  We provide access to private equity, venture capital, and
                  hedge funds, alongside tangible assets like real estate and
                  commodities.
                </p>
              </motion.div>
            </motion.div>
          </PageContainer>
        </section>

      
        <section className={sectionSpacing + " bg-foreground text-background"}>
          <PageContainer>
            <SectionHeading
              title="Our Investment Options"
              description="Every option is rigorously analyzed in-house and customized to match clients' risk preferences and return goals."
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
                  <h3 className="text-base font-light text-primary">
                    {benefit}
                  </h3>
                </motion.div>
              ))}
            </motion.div>

          </PageContainer>
        </section>

        <ServiceInquiryForm
          service={serviceInquiryServices.alternativeInvestments}
          title="Explore New Growth Pathways"
          description="Alternative opportunities can be tailored to your risk appetite, portfolio goals, and horizon."
        />
      </main>

      <Footer />
    </div>
  );
};

export default AlternativeInvestments;
