import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  { number: "01", title: "Experienced Advisors", description: "Decades of expertise guiding complex portfolios" },
  { number: "02", title: "Visionary Leadership", description: "Forward-thinking strategies for generational success" },
  { number: "03", title: "Data-Driven Analysts", description: "Rigorous research informing every decision" },
  { number: "04", title: "Future-Focused", description: "Innovative solutions for evolving markets" },
];

const AboutSection = () => {
  return (
    <section className="py-32 bg-stone/20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column - Main Content */}
          <motion.div 
            className="col-span-12 lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] uppercase tracking-[0.4em] text-primary mb-6 block">
              About NJ Macson
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 leading-[1.1]">
              Dedicated to <br />
              <span className="italic text-primary">Tailored</span> Solutions
            </h2>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>
                NJ Macson is dedicated to providing tailored solutions to meet the complex and evolving needs of our clients.
              </p>
              <p>
                With expertise spanning auditing, legal consulting, family office management, and wealth management, we cater to businesses, individuals, and ultra-high-net-worth families seeking strategic and personalized support.
              </p>
            </div>
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                to="/about"
                className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] border-b border-foreground pb-2 hover:border-primary hover:text-primary transition-all"
              >
                Learn More About Us
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Features Grid */}
          <motion.div 
            className="col-span-12 lg:col-span-6 lg:col-start-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-stone/50">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  className="bg-background p-8 group hover:bg-stone/30 transition-colors duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <span className="text-primary text-3xl md:text-4xl font-serif font-light italic block mb-4 group-hover:translate-x-1 transition-transform duration-300">
                    {feature.number}
                  </span>
                  <h4 className="text-lg font-light mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
