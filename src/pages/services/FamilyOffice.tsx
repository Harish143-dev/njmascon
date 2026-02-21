import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const highlights = [
  "Integrated solutions for UHNI families to grow, protect, and manage wealth.",
  "Investment, estate, tax, governance, and philanthropic advisory tailored to your vision.",
  "A single point of coordination for financial clarity and peace of mind.",
  "A modern family office offering holistic oversight beyond traditional wealth management.",
  "Lifestyle services, travel, and personal assistance designed for high-net-worth families.",
  "Dedicated advisors, family counselors, and wealth managers supporting both business and personal goals.",
];

const FamilyOffice = () => {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Header />
      
      <main>
        {/* Hero */}
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
            <source src="https://videos.pexels.com/video-files/7578549/7578549-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          </video>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 py-32">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-primary mb-4 block">Our Services</span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95] tracking-tight mb-8">
                Our <span className="italic">Family</span> Office
              </h1>
              <p className="text-2xl font-light text-muted-foreground mb-6">
                Managing Wealth. Preserving Legacies.
              </p>
              <p className="text-xl font-light leading-relaxed text-muted-foreground">
                NJ Macson's Family Office offers integrated solutions for ultra-high-net-worth individuals and families to manage, protect, and grow wealth across generations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Modern Family Office */}
        <section className="py-24 bg-stone/20">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-12 gap-12">
              <motion.div 
                className="col-span-12 lg:col-span-5"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-serif text-4xl font-light mb-6">A Modern Family Office</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-8">
                  A family office serves as the central hub for a family's financial, legal, and strategic needs—going beyond traditional wealth management to offer holistic oversight and continuity.
                </p>
                <h3 className="text-xl font-light mb-4">Lifestyle Services</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  We support the lifestyle needs of high-net-worth families, including travel, personal assistance, and lifestyle management—allowing clients to focus on what matters most.
                </p>
              </motion.div>
              
              <motion.div 
                className="col-span-12 lg:col-span-6 lg:col-start-7"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="font-serif text-xl font-light leading-relaxed text-muted-foreground mb-8">
                  As the needs of families evolve, NJ Macson Family Office delivers customized wealth solutions through a dedicated team of financial advisors, family counselors, and wealth managers—supporting both business and personal goals.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {highlights.map((highlight, index) => (
                    <motion.div 
                      key={index}
                      className="flex gap-3 p-4 bg-background rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-sm font-light">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-foreground text-background">
          <motion.div 
            className="max-w-[1440px] mx-auto px-6 md:px-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">Managing Wealth. Preserving Legacies.</h2>
            <Link 
              to="/contact"
              className="inline-block bg-primary text-primary-foreground px-10 py-5 text-[11px] uppercase tracking-[0.3em] rounded-sm hover:bg-primary/90 transition-all"
            >
              Request Consultation
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FamilyOffice;
