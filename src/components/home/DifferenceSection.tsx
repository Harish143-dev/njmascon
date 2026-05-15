import { motion } from "framer-motion";

import { fadeUpSoft, inViewOnce, staggerContainer } from "@/lib/motion";

const comparisonRows = [
  {
    common: "Product-driven advice",
    njMacson: "Goals-driven strategy built around your life",
  },
  {
    common: "Siloed disciplines — wealth, legal, audit all separate",
    njMacson: "Multi-disciplinary under one roof — all connected",
  },
  {
    common: "Templated solutions applied across all clients",
    njMacson: "Bespoke every time — no two engagements alike",
  },
  {
    common: "Multiple advisors you must coordinate yourself",
    njMacson: "One trusted point of contact across everything",
  },
  {
    common: "Reactive — responds after events unfold",
    njMacson: "Proactive — anticipates across your full financial life",
  },
  {
    common: "Transactional — engagement ends with the deal",
    njMacson: "A partnership built to last across generations",
  },
];

const DifferenceSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10">
        <motion.div
          className="mb-10 max-w-4xl sm:mb-14"
          variants={fadeUpSoft}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
        >
          <span className="mb-4 block text-sm uppercase tracking-[0.2em] text-primary sm:mb-6 sm:tracking-[0.4em]">
            The NJ Macson Difference
          </span>
          <h2 className="font-serif text-3xl font-light leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            What sets a steward apart from a service provider.
          </h2>
        </motion.div>

        <motion.div
          className="overflow-hidden border-y border-stone/60"
          variants={staggerContainer(0.08, 0)}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
        >
          <div className="hidden grid-cols-2 border-b border-stone/60 text-xs uppercase tracking-[0.18em] text-muted-foreground md:grid">
            <div className="border-r border-stone/60 px-6 py-5">
              Most Advisory Firms <span className="text-destructive">✕</span>
            </div>
            <div className="px-6 py-5">
              NJ Macson <span className="text-primary">✓</span>
            </div>
          </div>

          {comparisonRows.map((row) => (
            <motion.div
              key={row.common}
              className="grid gap-0 border-b border-stone/50 last:border-b-0 md:grid-cols-2"
              variants={fadeUpSoft}
            >
              <div className="border-stone/60 px-0 py-5 md:border-r md:px-6 md:py-6">
                <span className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-muted-foreground md:hidden">
                  Most Advisory Firms ✕
                </span>
                <p className="text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
                  {row.common}
                </p>
              </div>
              <div className="px-0 pb-5 md:px-6 md:py-6">
                <span className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-primary md:hidden">
                  NJ Macson ✓
                </span>
                <p className="text-base font-light leading-relaxed text-foreground sm:text-lg">
                  {row.njMacson}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DifferenceSection;
