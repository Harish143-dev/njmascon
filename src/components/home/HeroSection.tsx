import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 pt-28 sm:pt-32 pb-20 sm:pb-24 w-full">
        <div className="max-w-2xl">
          <motion.div
            className="space-y-5 sm:space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.span
              className="inline-block text-primary text-xs md:text-sm uppercase tracking-[0.3em] sm:tracking-[0.5em] border border-primary/30 px-3 sm:px-4 py-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Est. MMXVI
            </motion.span>

            <div className="space-y-2">
              <motion.h1
                className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-light leading-[0.9] tracking-tight text-foreground"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Legacy
              </motion.h1>
              <motion.h1
                className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-light leading-[0.9] tracking-tight italic text-primary pl-4 sm:pl-6 md:pl-12"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Architecture
              </motion.h1>
            </div>

            <motion.div
              className="w-20 sm:w-24 h-[1px] bg-gradient-to-r from-primary to-transparent my-6 sm:my-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1 }}
            />

            <motion.p
              className="max-w-md text-base md:text-lg font-light leading-relaxed text-foreground/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Bespoke wealth preservation for the modern ultra-high-net-worth
              family. A quiet approach to generational longevity.
            </motion.p>

            <motion.div
              className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 sm:px-10 py-4 sm:py-5 text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] hover:bg-primary/90 transition-all group"
                >
                  Discover More
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </motion.div>
              <Link
                to="/contact"
                className="group flex items-center gap-2 text-xs uppercase tracking-[0.1em] sm:tracking-[0.15em] text-foreground/80 hover:text-primary transition-all"
              >
                <span className="border-b border-foreground/30 pb-1 group-hover:border-primary transition-colors">
                  Get in Touch
                </span>
                <svg
                  className="w-3 h-3 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-foreground/50">
            Scroll
          </span>
          <motion.div
            className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
