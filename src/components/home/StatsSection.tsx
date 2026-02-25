import { motion } from "framer-motion";

const stats = [
  {
    value: "5",
    suffix: "+",
    label: "Countries",
    description: "Global Presence",
  },
  {
    value: "25",
    suffix: "+",
    label: "Key Markets",
    description: "Strategic Locations",
  },
  {
    value: "1,000",
    suffix: "+",
    label: "Affiliates",
    description: "Trusted Partners",
  },
];

const StatsSection = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-32 bg-foreground text-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-14 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block text-primary text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Global Reach
          </motion.span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 leading-tight">
            Guiding Your <span className="italic text-primary">Wealth</span>
            <br />
            to New Heights
          </h2>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-6" />
          <p className="text-background/60 font-light italic text-base sm:text-lg max-w-xl mx-auto">
            Where Wealth Meets Opportunity
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Divider line between stats */}
              {index !== stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-24 w-px bg-background/10" />
              )}

              <div className="text-center py-6 sm:py-8 px-4 sm:px-6 transition-all duration-500 group-hover:bg-background/5 rounded-lg">
                {/* Large number */}
                <div className="relative mb-4">
                  <motion.span
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-primary tracking-tight"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-primary/80">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-light text-background mb-2 tracking-wide">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-background/50 font-light tracking-wider uppercase">
                  {stat.description}
                </p>

                {/* Hover accent line */}
                <div className="mt-6 w-0 group-hover:w-12 h-px bg-primary mx-auto transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
