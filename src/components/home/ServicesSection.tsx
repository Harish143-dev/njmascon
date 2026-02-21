import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Family Office",
    description: "Get a personal Chief Financial Manager who meets the needs of Ultra High Net-worth Investors. Family Office Services function as private wealth management advisory outfits.",
    link: "/services/family-office",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "Private Wealth Management",
    description: "This is an all-encompassing service, providing comprehensive research-based advisory along with personalized investment execution.",
    link: "/services/private-wealth",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "Alternative Investments",
    description: "Private equity or venture capital, coal and petroleum projects, marine projects, customized business projects, hedge funds, real estate, commodities, and more.",
    link: "/services/alternative-investments",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop"
  },
  {
    number: "04",
    title: "Auditing & Legal",
    description: "Let us do all the big number crunching with our team of experts who work tirelessly to customize the service as per your diverse needs.",
    link: "/services/auditing-legal",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop"
  },
];

const ServicesSection = () => {
  return (
    <section className="py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div 
          className="grid grid-cols-12 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="col-span-12 lg:col-span-5">
            <span className="text-[11px] uppercase tracking-[0.4em] text-primary mb-6 block">Our Services</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.1]">
              Comprehensive <br />
              <span className="italic text-primary">Advisory</span> Services
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-muted-foreground font-light leading-relaxed">
              At NJ Macson, we offer a comprehensive range of advisory services designed to help you navigate the complexities of future investments with confidence and clarity.
            </p>
          </div>
        </motion.div>
        
        {/* Services Grid - Alternating Layout */}
        <div className="space-y-1">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link 
                to={service.link}
                className={`grid grid-cols-12 gap-6 lg:gap-8 py-10 border-t border-stone/50 items-center ${
                  index === services.length - 1 ? 'border-b' : ''
                }`}
              >
                {/* Image - Alternates sides */}
                <div className={`col-span-12 lg:col-span-4 ${
                  index % 2 === 0 ? 'lg:order-1' : 'lg:order-3 lg:col-start-9'
                }`}>
                  <div className="aspect-[4/3] overflow-hidden rounded-sm bg-stone/20">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                </div>
                
                {/* Number */}
                <div className={`col-span-12 lg:col-span-1 ${
                  index % 2 === 0 ? 'lg:order-2 lg:col-start-5' : 'lg:order-1 lg:col-start-1'
                }`}>
                  <span className="text-primary text-4xl md:text-5xl font-serif font-light italic group-hover:translate-x-2 transition-transform duration-300 block">
                    {service.number}
                  </span>
                </div>
                
                {/* Content */}
                <div className={`col-span-12 lg:col-span-5 ${
                  index % 2 === 0 ? 'lg:order-3 lg:col-start-7' : 'lg:order-2 lg:col-start-3'
                }`}>
                  <h3 className="font-serif text-2xl md:text-3xl font-light mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6 max-w-md">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
                    Learn More
                    <svg 
                      className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
