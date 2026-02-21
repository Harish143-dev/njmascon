import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 min-h-[80vh] flex flex-col justify-center">
      <div className="grid grid-cols-12 gap-8 items-center">
        <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary text-xs uppercase tracking-[0.4em] block mb-4">
              Est. MCMLXXXV
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight leading-[1.1] tracking-tight">
              Legacy <br />
              <span className="italic font-light pl-6 md:pl-12 text-foreground/40">Architecture.</span>
            </h1>
            <p className="max-w-md text-lg font-light leading-relaxed text-muted-foreground pt-6">
              Bespoke wealth preservation for the modern ultra-high-net-worth family. A quiet approach to generational longevity.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <motion.button 
                className="bg-primary text-primary-foreground px-10 py-4 text-xs uppercase tracking-widest rounded-sm hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Enter the Estate
              </motion.button>
              <a className="text-xs uppercase tracking-widest border-b border-primary/20 pb-1 hover:border-primary transition-all" href="#vision">
                Discover more
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="col-span-12 lg:col-span-7 order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative aspect-[4/5] lg:aspect-video bg-stone overflow-hidden rounded-lg group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCueBE6A4knfQ4lJax2dl8GAJEzquJPWz7WOP8RVeXJU-nFCnOTn9vFWjIOO4cJU2klteRi41dawgvuUDXJEq2Ic0ePqO-kyi_pnfDma9pZ1IEeUuptsJK7ltrC1LFojFeTYDBZuyew8G25Cl_09YmfPDkvAJjBIHeVSxAUV5KuA9a7JPH4YVDNGWG7QUQjNOBVj-X-sX1mcEgW6MhFq2hCGpfK2fR2zvufkgCG4XaHVuh1tTb9iYn2cjnbPyfELezdBys1ttmNnb78")`
              }}
            />
            <div className="absolute inset-0 bg-foreground/5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
