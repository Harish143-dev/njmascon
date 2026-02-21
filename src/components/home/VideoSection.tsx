import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="py-24 bg-stone/20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-12 items-center">
          <motion.div 
            className="col-span-12 lg:col-span-6"
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
                  className="w-20 h-20 rounded-full bg-primary flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-8 h-8 text-primary-foreground ml-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="col-span-12 lg:col-span-5 lg:col-start-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-primary mb-4 block">Insights</span>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 leading-tight">
              Navigating Your <span className="italic">Financial</span> Future
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              Unlock the power of expert financial advice through our video series. Discover actionable insights from experienced investment advisors and strategists to help you navigate the complexities of wealth management and secure your financial future.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
