import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const values = [
  {
    number: "01",
    title: "Radical Discretion",
    description: "We operate in the shadows of giants. Privacy is our primary currency and our greatest commitment to those we serve."
  },
  {
    number: "02",
    title: "Intellectual Elegance",
    description: "Complexity is mastered through simplicity. We value solutions that are as aesthetically pleasing as they are financially sound."
  },
  {
    number: "03",
    title: "Generational Vision",
    description: "We do not look at quarters; we look at decades. Our talent must possess the foresight to build for the next century."
  },
];

const positions = [
  { id: "head-private-estates", location: "London / Geneva", title: "Head of Private Estates" },
  { id: "legacy-wealth-architect", location: "New York", title: "Legacy Wealth Architect" },
  { id: "senior-concierge-lead", location: "Singapore", title: "Senior Concierge Lead" },
  { id: "bespoke-philanthropy-advisor", location: "Remote / Global", title: "Bespoke Philanthropy Advisor" },
];

const Careers = () => {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 py-32">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-primary mb-4 block">Careers</span>
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight mb-8">
                Join the <br />
                <span className="italic">Legacy.</span>
              </h1>
              <p className="text-xl font-light leading-relaxed text-muted-foreground">
                We seek the architects of tomorrow's traditions. At NJ Macson, we don't just manage wealth; we curate the environments where generational history is written.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Environment Section */}
        <section className="py-32 bg-stone/20">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-12 gap-8">
              <motion.div 
                className="col-span-12 lg:col-span-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-[10px] uppercase tracking-[0.5em] text-primary mb-4 block">The Setting</span>
                <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">Our Environment</h2>
              </motion.div>
              
              <motion.div 
                className="col-span-12 lg:col-span-6 lg:col-start-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-lg font-light leading-relaxed text-muted-foreground">
                  Our workspace is a reflection of our philosophy: quiet, intentional, and profoundly high-end. We believe that clarity of thought begins with clarity of space.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-32">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-primary mb-4 block">The Ethos</span>
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">The NJ Macson Standard</h2>
              <blockquote className="font-serif text-xl italic text-muted-foreground max-w-xl">
                "Excellence is not an act, but a habit cultivated in the silence of discretion."
              </blockquote>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {values.map((value, index) => (
                <motion.div 
                  key={value.number}
                  className="border-t border-stone pt-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <span className="text-primary font-light italic text-lg mb-4 block">{value.number}.</span>
                  <h3 className="text-2xl font-light mb-4">{value.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-32 bg-stone/20">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-primary mb-4 block">Opportunities</span>
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Open Positions</h2>
              <p className="text-muted-foreground font-light">
                Selective recruitment for individuals of exceptional pedigree and character.
              </p>
            </motion.div>
            
            <div className="space-y-0">
              {positions.map((position, index) => (
                <Link to={`/careers/${position.id}`} key={position.id}>
                  <motion.div 
                    className="flex flex-col md:flex-row md:items-center justify-between py-8 border-t border-stone group cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div>
                      <span className="text-sm text-primary mb-2 block">{position.location}</span>
                      <h3 className="text-2xl font-light group-hover:translate-x-4 transition-transform duration-500">
                        {position.title}
                      </h3>
                    </div>
                    <svg className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all mt-4 md:mt-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* General Applications CTA */}
        <section className="py-32">
          <motion.div 
            className="max-w-[960px] mx-auto px-6 md:px-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <svg className="w-10 h-10 mx-auto mb-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">General Applications</h2>
            <p className="text-lg font-light text-muted-foreground mb-10 max-w-xl mx-auto">
              If your expertise transcends the listed roles, we invite you to initiate a confidential dialogue. Our firm is always seeking individuals who redefine the standard.
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-foreground text-background px-10 py-5 text-[11px] uppercase tracking-[0.3em] rounded-sm hover:bg-primary transition-all"
            >
              Submit a Private Inquiry
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
