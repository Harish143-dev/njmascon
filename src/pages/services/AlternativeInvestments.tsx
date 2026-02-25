import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const investments = [
  "Real estate in India and Dubai",
  "Shipping and logistics",
  "Energy and mining",
  "Precious metals",
  "Early-stage ventures",
];

const benefits = [
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
        {/* Hero */}
        <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center overflow-hidden">
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
              src="https://videos.pexels.com/video-files/2795397/2795397-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
          </video>

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

          <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 pt-28 sm:pt-32 pb-20 sm:pb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="text-[10px] sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.5em] text-primary mb-4 block">
                Our Services
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95] tracking-tight mb-6 sm:mb-8">
                Alternative <span className="italic">Investments</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-muted-foreground mb-4 sm:mb-6">
                NJ Macson offers curated alternative investment opportunities
                across high-growth sectors, including commercial real estate,
                shipping and logistics, energy, mining, transportation, and
                early-stage ventures.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                Our focus is on stable income, capital protection,
                diversification, and long-term value creation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Traditional vs Alternative */}
        <section className="py-16 sm:py-20 lg:py-24 bg-stone/20 overflow-x-clip">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-serif text-2xl sm:text-3xl font-light mb-4 sm:mb-6">
                  Beyond the Basics: Traditional vs. Alternative
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                  While stocks, bonds, and cash form the foundation of most
                  portfolios, alternative investments provide a sophisticated
                  path to wealth creation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-serif text-2xl sm:text-3xl font-light mb-4 sm:mb-6">
                 The Alternative Landscape
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                We provide access to private equity, venture capital, and hedge funds, alongside tangible assets like real estate and commodities.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Investment Options */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-light mb-4 sm:mb-6">
                Our Investment Options
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground font-light max-w-2xl">
                Every option is rigorously analyzed in-house and customized to
                match clients' risk preferences and return goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {investments.map((investment, index) => (
                <motion.div
                  key={investment}
                  className="p-4 sm:p-6 bg-stone/20 rounded-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-sm font-light">{investment}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 sm:py-20 lg:py-24 bg-foreground text-background">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.5em] text-primary mb-4 block">
                Benefits
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light">
                Why Alternative Investments?
              </h2>
              <p className="text-sm text-background/60 mt-2">
                Diversification, unique fee structures, and potential for higher
                returns compared to mutual funds or ETFs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="p-3 border border-background/20 rounded-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-base font-light text-primary">
                    {benefit}
                  </h3>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/contact"
                className="inline-block bg-primary text-primary-foreground px-6 sm:px-10 py-4 sm:py-5 text-[10px] sm:text-[11px] uppercase tracking-[0.14em] sm:tracking-[0.3em] rounded-sm hover:bg-primary/90 transition-all"
              >
                Explore Opportunities
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AlternativeInvestments;
