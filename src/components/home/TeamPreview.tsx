import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import anandhImg from "@/assets/team/anandh.jpg";
import ismailImg from "@/assets/team/ismail.png";
import { fadeUpSoft, inViewOnce, mediaReveal, staggerContainer } from "@/lib/motion";

const teamPreviewItems = [
  { image: ismailImg, alt: "Portrait of Mr. Sheik Ismail" },
  { image: anandhImg, alt: "Portrait of Mr. S Anandh" },
];

const TeamPreview = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10">
        <motion.div
          className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-12"
          variants={staggerContainer(0.18)}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
        >
          <motion.div className="min-w-0 lg:col-span-5" variants={fadeUpSoft}>
            <span className="mb-4 block text-sm uppercase tracking-[0.25em] text-primary sm:tracking-[0.45em]">
              Our Team
            </span>
            <h2 className="mb-4 font-serif text-3xl font-light leading-tight sm:mb-6 sm:text-4xl md:text-5xl">
              Meet Our <span className="italic">Expert</span> Advisors
            </h2>
            <p className="mb-6 text-sm font-light leading-relaxed text-muted-foreground sm:mb-8 sm:text-base">
              Our team at NJ Macson is composed of experienced investment advisors, financial strategists, and
              forward-thinking analysts, all driven by one mission: empowering individuals and businesses to invest
              confidently into the future.
            </p>
            <Link
              to="/team"
              className="inline-flex items-center gap-3 rounded-sm bg-foreground px-6 py-4 text-xs uppercase tracking-[0.15em] text-background transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-8"
            >
              View All Team
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          <motion.div className="min-w-0 lg:col-span-6 lg:col-start-7" variants={fadeUpSoft}>
            <motion.div className="mx-auto grid w-full max-w-[36rem] grid-cols-2 gap-4 sm:gap-5" variants={staggerContainer(0.12, 0.08)}>
              {teamPreviewItems.map((item) => (
                <motion.div
                  key={item.alt}
                  className="overflow-hidden rounded-lg bg-stone"
                  variants={mediaReveal}
                >
                  <img src={item.image} alt={item.alt} className="aspect-[3/4] h-full w-full object-cover" />
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
