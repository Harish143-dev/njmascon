import { motion } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Capital Preservation",
    description: "Sophisticated hedging strategies designed for the multi-generational protection of family assets.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYBzyKebUyIRslOk-pEaSPkU5ItL-FA4lK99uOf-Ftz5jdyI2dt7cbHrNAxUx8hA7LyIQ4XIGTupRkx5yXKtSPSUP7GBcRxjjK2InvICluRnoD3F0l6f5iZd3lcoa3CGGffaTvdLqYk_uG7W9-4hxB_1KQej4wqEeiNQIEzG4G3EEm73eXECyDMhDjEz7fd2KBu3PvVrIR5aLs50X4LtJtLY5ijSBus3NzafBYbVUYdDALZ5xVdFG-AgciCiEh7JD-tcYDn8AG1XdD"
  },
  {
    number: "02",
    title: "Legacy Planning",
    description: "Crafting legal and financial frameworks that transcend temporal boundaries and ensure your story remains.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNKDb8Ham7QuYfDBpqvSMSb0TPyxbfNf6Dtox91TibHPQ6SI1TvwKLv1-8EZDwlPndE0pHuQnxPsCgzrYb7BJdlkdkoHUfQV3tOoCyKSVSuQgLK4WDH6SXuoqRXQkfzf9xIS701e66jfyvPsNk2D0vLKAOds97lAltJK2Xjd-hvT4bkFsb5Ur_wBXFG3psNrMM4Av3SD-FMOaVTZwY5RlT7WUEUy_-Np14Anfi2s1Fe-K_g_TQvB9pY1iMDI8qIJlv3JxOngY4Wdsw"
  },
  {
    number: "03",
    title: "Lifestyle Concierge",
    description: "From art procurement to global logistics—managing the intangible assets of your daily life.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxsL6npLvkWIfMuNjg_CAV1T8NLEdv1RAn6mU1k4m1ESMXK9x9AB31M7FlCONkNnhr009j5vlz3WnjYkqK5VmO50VP12CwhL8RdRs67grkYfYKTPADcF9fdnhDgg4OPcaKqAJWLLgOglvxxycaEx0Ine2SuOH5PmETKD1K0FXf1ZBOoikUNKZ4VaTDW3jMlb3ORTDXzOt8s9nE7Ycn56SaXvnD0u6zWYp6yFgNl3KSrrAhJp4kteTS0h1W2zJUMQPU96EipB9sGSzI"
  },
  {
    number: "04",
    title: "Asset Optimization",
    description: "Strategic allocation into rare collectibles, prime real estate, and private equity foundations.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDY-ZQgDi7wcs16gvTE5d6PuCglis62N6I3ViAOMj_3SDo511mZDukPVNVeRq4glWXZgRFKyVrhi6slqRDfYEDHsXOOnc-TrNxteg8BotVrXtf0M9ODr4gKht5nDkpjkcunAEDjX9VrnFtdXactEG555weq8C6fHIfK7STtZL9huXpJqDE5BsrMbiWQooNnvUqyFBWF5tEdTLguGPWZIkz4su1vbgm6pO1NPz1HSCe605V_dj8ha2kYFhO7Br-QI4yORNyLJO7JtH4I"
  }
];

const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 420;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="services" className="py-32 overflow-hidden">
      <div className="px-6 md:px-10 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-[1440px] mx-auto">
        <div>
          <h3 className="text-[10px] uppercase tracking-[0.5em] text-primary mb-2">Our Capabilities</h3>
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tighter">Quiet Luxury Services</h2>
        </div>
        <div className="flex gap-4">
          <motion.button 
            className="size-12 rounded-full border border-stone flex items-center justify-center hover:border-primary transition-all"
            onClick={() => scroll("left")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button 
            className="size-12 rounded-full border border-stone flex items-center justify-center hover:border-primary transition-all"
            onClick={() => scroll("right")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>

      <div ref={scrollRef} className="horizontal-scroll-container gap-8 px-6 md:px-10">
        {services.map((service, index) => (
          <motion.div 
            key={service.number}
            className="min-w-[320px] md:min-w-[400px] group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="aspect-[3/4] bg-stone rounded-lg mb-6 overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                style={{ backgroundImage: `url("${service.image}")` }}
              />
            </div>
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-primary font-light italic">{service.number}.</span>
              <h4 className="text-xl md:text-2xl font-light tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                {service.title}
              </h4>
            </div>
            <p className="text-sm font-light text-muted-foreground leading-relaxed max-w-xs">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
