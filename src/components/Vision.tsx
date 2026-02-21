import { motion } from "framer-motion";

const Vision = () => {
  return (
    <section id="vision" className="py-32 bg-stone/20">
      <motion.div 
        className="max-w-[960px] mx-auto px-6 md:px-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <svg className="w-10 h-10 mx-auto mb-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">The Vision of NJ Macson</h2>
        <div className="w-16 h-[1px] bg-primary mx-auto mb-10" />
        <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground italic">
          "An ethereal approach to wealth management, emphasizing quality over quantity and preservation over speculation. We build structures that outlast lifetimes."
        </p>
      </motion.div>
    </section>
  );
};

export default Vision;
