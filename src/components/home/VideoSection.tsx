import { motion } from "framer-motion";
import { fadeUpSoft, inViewOnce, mediaReveal, staggerContainer } from "@/lib/motion";

const VideoSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-stone/20 overflow-x-clip">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 sm:gap-12 lg:gap-16">
          <motion.div
            className="w-full lg:w-7/12"
            variants={staggerContainer(0.16)}
            initial="hidden"
            whileInView="show"
            viewport={inViewOnce}
          >
            <motion.div
              className="relative aspect-video overflow-hidden rounded-lg bg-foreground"
              variants={mediaReveal}
            >
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/P8oiFVreS2U?si=ZTOvLyCwDMkmWXKw"
                title="Navigating Your Financial Future"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-5/12"
            variants={fadeUpSoft}
            initial="hidden"
            whileInView="show"
            viewport={inViewOnce}
          >
            <span className="text-sm uppercase tracking-[0.3em] sm:tracking-[0.5em] text-primary mb-4 block">Insights</span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6 leading-tight">
              Navigating Your Financial Future
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
              Unlock the power of expert financial advice through our video series. Discover actionable insights from experienced investment advisors and strategists to help you navigate the complexities of wealth management and secure your financial future.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

