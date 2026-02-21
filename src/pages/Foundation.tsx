import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const milestones = [
  { year: "1998", title: "Inception", description: "Foundation of the NJ Macson trust in Geneva, focused on heritage estate management." },
  { year: "2009", title: "Global Reach", description: "Expansion into the New York and Singapore markets, integrating artistic asset management." },
  { year: "2024", title: "Modern Stewardship", description: "Pioneering digital-physical hybrid vaults for generational cultural preservation." },
];

const offices = [
  { city: "Geneva", label: "European Headquarters" },
  { city: "New York", label: "Americas Operations" },
  { city: "Singapore", label: "Asia-Pacific Hub" },
];

const Foundation = () => {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Header />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-20">
          <div className="grid grid-cols-12 gap-8 items-start">
            <motion.div 
              className="col-span-12 lg:col-span-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-primary mb-4 block">Who We Are</span>
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight">
                The <br />
                <span className="italic">Foundation.</span>
              </h1>
            </motion.div>
            
            <motion.div 
              className="col-span-12 lg:col-span-6 lg:col-start-7"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl font-light leading-relaxed text-muted-foreground mb-8">
                NJ Macson is a multi-generational family office dedicated to the preservation of wealth through the lens of architectural longevity and cultural stewardship.
              </p>
              <span className="text-[10px] uppercase tracking-[0.4em] text-primary">Established MCMXCVIII</span>
            </motion.div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-32 bg-stone/20">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-12 gap-8">
              <motion.div 
                className="col-span-12 lg:col-span-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-[10px] uppercase tracking-[0.5em] text-primary mb-4 block">Our Philosophy</span>
              </motion.div>
              
              <motion.div 
                className="col-span-12 lg:col-span-7 lg:col-start-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <blockquote className="font-serif text-3xl md:text-4xl font-light italic leading-relaxed mb-12 text-foreground/80">
                  "True preservation requires more than capital; it requires a vision that transcends the immediate to embrace the eternal."
                </blockquote>
                <p className="text-lg font-light leading-relaxed text-muted-foreground">
                  We believe that wealth is a vessel for legacy. Our approach is characterized by 'Quiet Luxury'—an understated elegance that prioritizes intrinsic value over external validation. Every decision is measured by its impact over decades, not quarters.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="py-32">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-primary mb-4 block">Milestones</span>
              <h2 className="font-serif text-5xl md:text-6xl font-light">Legacy & Longevity</h2>
            </motion.div>
            
            <div className="space-y-0">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={milestone.year}
                  className="grid grid-cols-12 gap-8 py-12 border-t border-stone"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="col-span-3 md:col-span-2">
                    <span className="text-primary font-light text-4xl md:text-5xl">{milestone.year}</span>
                  </div>
                  <div className="col-span-9 md:col-span-3">
                    <h3 className="text-2xl font-light mb-2">{milestone.title}</h3>
                  </div>
                  <div className="col-span-12 md:col-span-6 md:col-start-7">
                    <p className="text-muted-foreground font-light leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="py-32 bg-foreground text-background">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-12 gap-8">
              <motion.div 
                className="col-span-12 lg:col-span-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-serif text-5xl md:text-7xl font-light leading-[0.95]">
                  Global <br />
                  <span className="italic">Stewardship</span>
                </h2>
              </motion.div>
              
              <motion.div 
                className="col-span-12 lg:col-span-6 lg:col-start-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-lg font-light leading-relaxed text-background/70 mb-12">
                  Operating across three primary nodes of global commerce and culture, our firm provides a seamless bridge for families with international footprints.
                </p>
                
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <motion.div 
                      key={office.city}
                      className="flex items-center justify-between py-6 border-b border-background/20 group cursor-pointer"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <div>
                        <h4 className="text-2xl font-light mb-1 group-hover:text-primary transition-colors">{office.city}</h4>
                        <span className="text-sm text-background/50">{office.label}</span>
                      </div>
                      <svg className="w-5 h-5 text-background/50 group-hover:text-primary group-hover:translate-x-2 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-32">
          <motion.div 
            className="max-w-[960px] mx-auto px-6 md:px-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <svg className="w-12 h-12 mx-auto mb-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8M8 12h8" />
            </svg>
            <blockquote className="font-serif text-2xl md:text-3xl font-light italic leading-relaxed text-muted-foreground mb-8">
              "We do not inherit the earth from our ancestors; we borrow it from our children."
            </blockquote>
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary">The Path Forward</span>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Foundation;
