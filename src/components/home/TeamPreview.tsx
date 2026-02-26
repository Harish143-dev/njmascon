import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUpSoft, inViewOnce, mediaReveal, staggerContainer } from "@/lib/motion";

const TeamPreview = () => {
  const teamImages = [
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop",
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center"
          variants={staggerContainer(0.18)}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
        >
          <motion.div
            className="min-w-0 lg:col-span-5"
            variants={fadeUpSoft}
          >
            <span className="text-sm uppercase tracking-[0.3em] sm:tracking-[0.5em] text-primary mb-4 block">
              Our Team
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6 leading-tight">
              Meet Our <span className="italic">Expert</span> Advisors
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed mb-6 sm:mb-8">
              Our team at NJ Macson is composed of experienced investment
              advisors, financial strategists, and forward-thinking analysts,
              all driven by one mission: empowering individuals and businesses
              to invest confidently into the future.
            </p>
            <Link
              to="/team"
              className="inline-flex items-center gap-3 bg-foreground text-background px-6 sm:px-8 py-3 sm:py-4 text-xs uppercase tracking-[0.14em] sm:tracking-widest rounded-sm hover:bg-primary transition-colors"
            >
              View All Team
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            className="min-w-0 lg:col-span-6 lg:col-start-7"
            variants={fadeUpSoft}
          >
            <motion.div
              className="mx-auto w-full max-w-[36rem] grid grid-cols-2 gap-4 sm:gap-5"
              variants={staggerContainer(0.12, 0.08)}
            >
              {teamImages.map((image) => (
                <motion.div
                  key={image}
                  className="w-full aspect-[3/4] bg-stone rounded-lg overflow-hidden"
                  variants={mediaReveal}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url("${image}")` }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPreview;

