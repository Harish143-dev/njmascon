import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TeamPreview = () => {
  return (
    <section className="py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-12 items-center">
          <motion.div 
            className="col-span-12 lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-primary mb-4 block">Our Team</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 leading-tight">
              Meet Our <span className="italic">Expert</span> Advisors
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              Our team at NJ Macson is composed of experienced investment advisors, financial strategists, and forward-thinking analysts, all driven by one mission: empowering individuals and businesses to invest confidently in the future.
            </p>
            <Link 
              to="/team"
              className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-xs uppercase tracking-widest rounded-sm hover:bg-primary transition-colors"
            >
              View All Team
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
          
          <motion.div 
            className="col-span-12 lg:col-span-6 lg:col-start-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-stone rounded-lg overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url("https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop")` }}
                />
              </div>
              <div className="aspect-[3/4] bg-stone rounded-lg overflow-hidden translate-y-8">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url("https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop")` }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
