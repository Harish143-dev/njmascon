import { motion } from "framer-motion";

import { cardItem, fadeUpSoft, inViewOnce, staggerContainer } from "@/lib/motion";

const clientProfiles = [
  {
    number: "01",
    title: "Ultra-HNI Families",
    description:
      "Multi-generational wealth requires more than investment returns. It requires governance, continuity planning, estate structuring, and a trusted partner who sees the whole picture — not just the portfolio.",
  },
  {
    number: "02",
    title: "Business Owners & Promoters",
    description:
      "Your business and personal wealth are deeply intertwined. We help you structure both — managing complexity across entities, tax, compliance, and capital — so you can lead without distraction.",
  },
  {
    number: "03",
    title: "Corporates & Institutions",
    description:
      "From media spend accountability to audit assurance and legal consulting, we give institutions the rigour they need to operate with confidence, clarity, and control.",
  },
];

const WhoWeServeSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10">
        <motion.div
          className="mb-10 grid gap-6 sm:mb-14 lg:grid-cols-12 lg:gap-12"
          variants={fadeUpSoft}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
        >
          <div className="lg:col-span-5">
            <span className="mb-4 block text-sm uppercase tracking-[0.2em] text-primary sm:mb-6 sm:tracking-[0.4em]">
              Who We Serve
            </span>
            <h2 className="font-serif text-3xl font-light leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Built for those who need more than a service.
            </h2>
          </div>
          <div className="flex items-end lg:col-span-5 lg:col-start-8">
            <p className="max-w-2xl text-sm font-light leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              Our practice is structured around three distinct client profiles —
              each with their own set of needs, expectations, and long-term goals.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          variants={staggerContainer(0.12, 0)}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
        >
          {clientProfiles.map((profile) => (
            <motion.article
              key={profile.title}
              className="border-y border-stone/60 py-7 lg:border-b lg:border-t lg:px-2"
              variants={cardItem}
            >
              <span className="mb-5 block text-xs uppercase tracking-[0.24em] text-primary">
                {profile.number}
              </span>
              <h3 className="mb-4 font-serif text-2xl font-light leading-tight sm:text-3xl">
                {profile.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
                {profile.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
