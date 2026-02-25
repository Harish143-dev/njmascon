import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const capabilities = [
  {
    number: "01",
    title: "Family Office",
    description: "Comprehensive multi-generational governance, ensuring the continuity of your private estate through meticulous administration and strategic oversight.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYBzyKebUyIRslOk-pEaSPkU5ItL-FA4lK99uOf-Ftz5jdyI2dt7cbHrNAxUx8hA7LyIQ4XIGTupRkx5yXKtSPSUP7GBcRxjjK2InvICluRnoD3F0l6f5iZd3lcoa3CGGffaTvdLqYk_uG7W9-4hxB_1KQej4wqEeiNQIEzG4G3EEm73eXECyDMhDjEz7fd2KBu3PvVrIR5aLs50X4LtJtLY5ijSBus3NzafBYbVUYdDALZ5xVdFG-AgciCiEh7JD-tcYDn8AG1XdD"
  },
  {
    number: "02",
    title: "Private Wealth",
    description: "Bespoke investment strategies rooted in capital preservation. We navigate global markets with the discretion and precision required by the world's most discerning families.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNKDb8Ham7QuYfDBpqvSMSb0TPyxbfNf6Dtox91TibHPQ6SI1TvwKLv1-8EZDwlPndE0pHuQnxPsCgzrYb7BJdlkdkoHUfQV3tOoCyKSVSuQgLK4WDH6SXuoqRXQkfzf9xIS701e66jfyvPsNk2D0vLKAOds97lAltJK2Xjd-hvT4bkFsb5Ur_wBXFG3psNrMM4Av3SD-FMOaVTZwY5RlT7WUEUy_-Np14Anfi2s1Fe-K_g_TQvB9pY1iMDI8qIJlv3JxOngY4Wdsw"
  },
  {
    number: "03",
    title: "Alternative Investments",
    description: "Access to exclusive real estate, rare collectibles, and private equity foundations that fall outside the traditional financial architecture.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxsL6npLvkWIfMuNjg_CAV1T8NLEdv1RAn6mU1k4m1ESMXK9x9AB31M7FlCONkNnhr009j5vlz3WnjYkqK5VmO50VP12CwhL8RdRs67grkYfYKTPADcF9fdnhDgg4OPcaKqAJWLLgOglvxxycaEx0Ine2SuOH5PmETKD1K0FXf1ZBOoikUNKZ4VaTDW3jMlb3ORTDXzOt8s9nE7Ycn56SaXvnD0u6zWYp6yFgNl3KSrrAhJp4kteTS0h1W2zJUMQPU96EipB9sGSzI"
  },
  {
    number: "04",
    title: "Auditing & Legal",
    description: "Rigorous structural analysis and legal framework construction. We provide the quiet confidence that your global assets are protected by ironclad compliance.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDY-ZQgDi7wcs16gvTE5d6PuCglis62N6I3ViAOMj_3SDo511mZDukPVNVeRq4glWXZgRFKyVrhi6slqRDfYEDHsXOOnc-TrNxteg8BotVrXtf0M9ODr4gKht5nDkpjkcunAEDjX9VrnFtdXactEG555weq8C6fHIfK7STtZL9huXpJqDE5BsrMbiWQooNnvUqyFBWF5tEdTLguGPWZIkz4su1vbgm6pO1NPz1HSCe605V_dj8ha2kYFhO7Br-QI4yORNyLJO7JtH4I"
  },
];

const Capabilities = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
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
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/5668817/5668817-uhd_2560_1440_24fps.mp4" type="video/mp4" />
          </video>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm uppercase tracking-[0.5em] text-primary mb-4 block">Expertise</span>
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tight mb-8">
                Core <br />
                <span className="italic">Capabilities.</span>
              </h1>
              <p className="max-w-2xl text-xl font-light leading-relaxed text-muted-foreground">
                A definitive collection of strategic services designed for the preservation of legacy, wealth, and quiet architectural longevity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-20">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {capabilities.map((capability, index) => (
                <motion.div 
                  key={capability.number}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="aspect-[4/3] bg-stone rounded-lg overflow-hidden mb-8">
                    <div 
                      className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      style={{ backgroundImage: `url("${capability.image}")` }}
                    />
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <span className="text-primary font-light italic text-xl">{capability.number}.</span>
                    <div>
                      <h2 className="font-serif text-4xl md:text-5xl font-light mb-4 group-hover:translate-x-2 transition-transform duration-500">
                        {capability.title.split(" ")[0]} <br />
                        <span className="italic">{capability.title.split(" ").slice(1).join(" ") || ""}</span>
                      </h2>
                      <p className="text-muted-foreground font-light leading-relaxed mb-6 max-w-md">
                        {capability.description}
                      </p>
                      <Link 
                        to="/contact"
                        className="inline-flex items-center gap-3 text-sm font-light hover:text-primary transition-colors group/link"
                      >
                        Inquire about {capability.title.split(" ")[0]}
                        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-foreground text-background">
          <motion.div 
            className="max-w-[1440px] mx-auto px-6 md:px-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">Building a Legacy?</h2>
            <Link 
              to="/contact"
              className="inline-block bg-primary text-primary-foreground px-10 py-5 text-[11px] uppercase tracking-[0.3em] rounded-sm hover:bg-primary/90 transition-all"
            >
              Request Private Consultation
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Capabilities;

