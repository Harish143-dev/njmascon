import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-stone/20 overflow-x-clip">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 sm:gap-12 lg:gap-16">
          <motion.div 
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-video bg-foreground rounded-lg overflow-hidden group cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url("https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&auto=format&fit=crop")` }}
              />
              <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-primary flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground ml-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-5/12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8}}
          >
            <span className="text-sm uppercase tracking-[0.3em] sm:tracking-[0.5em] text-primary mb-4 block">Insights</span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6 leading-tight">
              Navigating Your <span className="italic">Financial</span> Future
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

