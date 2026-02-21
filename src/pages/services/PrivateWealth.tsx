import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const services = [
  "Investment and portfolio advisory",
  "Financial and estate planning",
  "Demat services",
  "Alternative investments",
];

const PrivateWealth = () => {
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
            <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
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
                Private <span className="italic">Wealth</span> Management
              </h1>
              <p className="text-xl font-light leading-relaxed text-muted-foreground mb-6">
                NJ Macson delivers personalized wealth management solutions designed to build, preserve, and grow wealth over the long term.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Our strategies focus on portfolio diversification, risk management, and tax-efficient investing—aligned with each client's financial goals and personal priorities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Designed For */}
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
                <span className="text-[10px] uppercase tracking-[0.5em] text-primary mb-4 block">Designed For</span>
                <p className="font-serif text-2xl font-light leading-relaxed text-muted-foreground">
                  Wealth management services are ideal for high-net-worth individuals with diverse and complex financial needs.
                </p>
              </motion.div>
              
              <motion.div 
                className="col-span-12 lg:col-span-6 lg:col-start-7"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-muted-foreground font-light leading-relaxed mb-8">
                  Our experienced advisors assess each client's assets and objectives to create customized financial strategies tailored to their unique requirements.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  NJ Macson offers a holistic, research-driven wealth management approach combining expert advisory with personalized investment execution.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-24">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl font-light mb-6">Our Services Include</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div 
                  key={service}
                  className="p-8 border border-stone rounded-lg hover:border-primary transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-primary font-light italic text-lg">0{index + 1}.</span>
                    <span className="text-xl font-light">{service}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.p 
              className="mt-12 text-center font-serif text-xl font-light text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Built on trust and long-term partnerships, we simplify finance to help you invest with clarity and confidence.
            </motion.p>
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
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">Ready to Grow Your Wealth?</h2>
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

export default PrivateWealth;
