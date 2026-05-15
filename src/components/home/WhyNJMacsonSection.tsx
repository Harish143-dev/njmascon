import { motion } from "framer-motion";

import { cardItem, fadeUpSoft, inViewOnce, staggerContainer } from "@/lib/motion";

const reasons = [
  {
    title: "Multi-Disciplinary Under One Roof",
    description:
      "Family office, wealth advisory, legal, auditing, and alternative investments — handled together. No handoffs. No silos. Your advisors speak to each other so you don't have to manage them.",
  },
  {
    title: "Absolute Discretion, Always",
    description:
      "Confidentiality is not a policy at NJ Macson — it is the foundation. Your financial affairs, family structures, and strategic decisions remain yours alone.",
  },
  {
    title: "Chennai-Rooted, Globally Informed",
    description:
      "Deep roots in the Tamil Nadu business ecosystem give us access and insight that national firms cannot replicate. Combined with global investment perspectives, it is the best of both.",
  },
  {
    title: "Bespoke — Never Templated",
    description:
      "We do not operate off a product shelf. Every engagement begins with listening. Every solution is designed around your specific circumstances, goals, and family values.",
  },
];

const WhyNJMacsonSection = () => {
  return (
    <section className="bg-stone/20 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10">
        <motion.div
          className="mb-10 max-w-4xl sm:mb-14"
          variants={fadeUpSoft}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
        >
          <span className="mb-4 block text-sm uppercase tracking-[0.2em] text-primary sm:mb-6 sm:tracking-[0.4em]">
            Why NJ Macson
          </span>
          <h2 className="font-serif text-3xl font-light leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Not every firm is the right fit. We know we are for some.
          </h2>
        </motion.div>

        <motion.div
          className="grid border-y border-stone/60 lg:grid-cols-2"
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
        >
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.title}
              className={`border-stone/60 py-7 sm:py-8 lg:px-8 ${
                index < 2 ? "lg:border-b" : ""
              } ${index % 2 === 0 ? "lg:border-r" : ""}`}
              variants={cardItem}
            >
              <h3 className="mb-4 font-serif text-2xl font-light leading-tight sm:text-3xl">
                {reason.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
                {reason.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyNJMacsonSection;
