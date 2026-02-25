import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Link } from "react-router-dom";
import { Globe, Briefcase, TrendingUp, Target } from "lucide-react";
import awardImg from "@/assets/awards and certificate/award-1.jpeg";
import awardImg1 from "@/assets/awards and certificate/award-2.png";

const highlights = [
  {
    icon: Globe,
    text: "Trusted advisory for UHNI families, individuals, and businesses.",
  },
  {
    icon: Briefcase,
    text: "Tailored solutions in wealth, family office, legal, and auditing services.",
  },
  {
    icon: TrendingUp,
    text: "Driving financial growth, efficiency, and long-term stability.",
  },
  {
    icon: Target,
    text: "Strategic guidance for complex financial and corporate needs.",
  },
];

const stats = [
  { value: "5+", label: "Countries", suffix: "" },
  { value: "25+", label: "Key Markets", suffix: "" },
  { value: "1,000+", label: "Affiliates", suffix: "" },
  { value: "3,000+", label: "Positive Reviews", suffix: "" },
];

const whyChooseUs = [
  {
    number: "01",
    title: "Seasoned Expertise",
    description:
      "Our advisors combine years of experience to provide informed, strategic guidance.",
  },
  {
    number: "02",
    title: "Clear & Transparent Advice",
    description:
      "We deliver straightforward insights you can trust, ensuring clarity in every decision.",
  },
  {
    number: "03",
    title: "End-to-End Solutions",
    description:
      "From investments to retirement and estate planning, we manage all aspects of your financial journey.",
  },
  {
    number: "04",
    title: "Forward-Thinking Strategies",
    description:
      "Leveraging the latest market insights and tools, we help optimize growth and returns.",
  },
  {
    number: "05",
    title: "Client-Focused Partnership",
    description:
      "We align our approach with your goals, prioritizing your long-term success.",
  },
  {
    number: "06",
    title: "Dedicated Support",
    description:
      "Our team is always accessible, guiding you at every step with personalized attention.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <CustomCursor />
      <Header />

      <main>
        {/* Hero Section with Video */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              preload="auto"
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4"
                type="video/mp4"
              />
            </video>
            {/* Multi-layer gradient overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 pt-28 sm:pt-32 pb-20 sm:pb-24 w-full">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1}}
              >
                <motion.span
                  className="inline-block text-primary text-sm uppercase tracking-[0.3em] sm:tracking-[0.5em] px-3 sm:px-4 py-2 mb-6 sm:mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8}}
                >
                  About Us
                </motion.span>

                <div className="space-y-2 mb-8">
                  <motion.h1
                    className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-light leading-[0.95] tracking-tight"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8}}
                  >
                    Our Story of
                  </motion.h1>
                  <motion.h1
                    className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-light leading-[0.95] tracking-tight italic text-primary pl-3 sm:pl-4 md:pl-8"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8}}
                  >
                    Excellence
                  </motion.h1>
                </div>

                <motion.div
                  className="w-24 h-[1px] bg-gradient-to-r from-primary to-transparent my-8"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1}}
                />

                <motion.p
                  className="text-base md:text-lg font-light leading-relaxed text-foreground/80 max-w-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8}}
                >
                  NJ Macson provides tailored advisory for UHNI families,
                  individuals, and businesses. With expertise in family office
                  management, wealth and alternative investments, auditing, and
                  legal consulting, we deliver strategic, trusted solutions.
                </motion.p>

                <motion.div
                  className="pt-8 sm:pt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8}}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/team"
                      className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 sm:px-10 py-4 sm:py-5 text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] hover:bg-primary/90 transition-all group"
                    >
                      Meet Our Team
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </motion.div>
                  <Link
                    to="/contact"
                    className="group flex items-center gap-2 text-xs uppercase tracking-[0.1em] sm:tracking-[0.15em] text-foreground/80 hover:text-primary transition-all"
                  >
                    <span className="border-b border-foreground/30 pb-1 group-hover:border-primary transition-colors">
                      Get in Touch
                    </span>
                    <svg
                      className="w-3 h-3 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1}}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-foreground/50">
              Scroll
            </span>
            <motion.div
              className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </section>

        {/* Highlights - Floating Cards */}
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-stone/10 to-background" />
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm uppercase tracking-[0.3em] sm:tracking-[0.5em] text-primary mb-4 block">
                What We Do
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light">
                Core <span className="italic">Principles</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="group relative p-6 sm:p-8 bg-background rounded-2xl border border-stone/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6}}
                  whileHover={{ y: -8 }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />
                  <highlight.icon className="w-8 h-8 mb-6 text-primary" strokeWidth={1.5} />
                  <p className="text-sm font-light leading-relaxed text-foreground/80">
                    {highlight.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats - Elegant Counters */}
        <section className="py-16 sm:py-24 lg:py-32 relative overflow-x-clip">
          <div className="absolute inset-0 bg-foreground" />
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm uppercase tracking-[0.3em] sm:tracking-[0.5em] text-primary mb-4 block">
                Our Impact
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-background">
                Numbers That <span className="italic">Matter</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="relative text-center group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6}}
                >
                  <div className="relative">
                    <motion.div
                      className="text-4xl sm:text-5xl md:text-7xl font-extralight text-primary mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8}}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="w-12 h-[1px] bg-primary/30 mx-auto mb-4" />
                    <div className="text-xs uppercase tracking-[0.3em] text-background/60 font-light">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Numbered Cards */}
        <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm uppercase tracking-[0.3em] sm:tracking-[0.5em] text-primary mb-4 block">
                Why Choose Us
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light max-w-2xl">
                Our Commitment to{" "}
                <span className="italic text-primary">Excellence</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="group relative p-6 sm:p-8 md:p-10 bg-gradient-to-br from-stone/20 to-transparent rounded-2xl border border-stone/30 hover:border-primary/30 transition-all duration-500"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6}}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="absolute top-6 right-6 text-6xl font-extralight text-primary/10 group-hover:text-primary/20 transition-colors">
                    {item.number}
                  </span>
                  <div className="relative z-10">
                    <h3 className="text-xl font-light mb-4 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-light leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission - Split Design */}
        <section className="py-16 sm:py-24 lg:py-32 overflow-x-clip">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm uppercase tracking-[0.3em] sm:tracking-[0.5em] text-primary mb-4 block">
                Our Direction
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light">
                Vision & <span className="italic">Mission</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative p-8 sm:p-10 md:p-16 bg-foreground text-background rounded-3xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
                  <span className="inline-block text-sm uppercase tracking-[0.3em] sm:tracking-[0.5em] text-primary mb-6 border border-primary/30 px-3 sm:px-4 py-2">
                    Vision
                  </span>
                  <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light leading-relaxed relative z-10">
                    To lead with innovation and expertise, delivering
                    client-focused solutions that enable individuals and
                    organizations to navigate complexity and build long-term
                    trust.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative p-8 sm:p-10 md:p-16 bg-gradient-to-br from-stone/40 to-stone/20 rounded-3xl border border-stone/30 overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
                  <span className="inline-block text-sm uppercase tracking-[0.3em] sm:tracking-[0.5em] text-primary mb-6 border border-primary/30 px-3 sm:px-4 py-2">
                    Mission
                  </span>
                  <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light leading-relaxed relative z-10">
                    NJ Macson offers personalized, end-to-end financial and
                    advisory solutions, combining expertise in auditing, legal
                    consulting, family office, and wealth management.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Awards - Testimonial Style */}
        <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-stone/20 via-stone/10 to-background" />

          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm uppercase tracking-[0.3em] sm:tracking-[0.5em] text-primary mb-4 block">
                Recognition
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light">
                Awards & <span className="italic">Accolades</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                className="relative flex flex-col md:flex-row items-center group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={awardImg1}
                    alt={"awards"}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
                <div className="pl-6 sm:pl-8 py-6 sm:py-8">
                  <svg
                    className="w-12 h-12 text-primary/20 mb-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="font-serif text-lg sm:text-xl md:text-2xl italic leading-relaxed text-foreground/80 mb-8">
                    "NJ Macson not only manages assets and aspirations but also
                    acts as a financial growth catalyst, benefiting numerous
                    clients in India as well as around the globe."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-serif text-lg">
                        SI
                      </span>
                    </div>
                    <div>
                      <span className="text-primary font-medium block">
                        Silicon India
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Industry Recognition
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative flex items-center flex-col md:flex-row group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8}}
              >
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={awardImg}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    alt=""
                  />
                </div>
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
                <div className="pl-6 sm:pl-8 py-6 sm:py-8">
                  <svg
                    className="w-12 h-12 text-primary/20 mb-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="font-serif text-lg sm:text-xl md:text-2xl italic leading-relaxed text-foreground/80 mb-8">
                    "The 'Company of the Year' recognition celebrates
                    organizations that demonstrate sustained growth by
                    delivering high-quality, efficient, and reliable services."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-serif text-lg">
                        IF
                      </span>
                    </div>
                    <div>
                      <span className="text-primary font-medium block">
                        India Finance Outlook
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Company of the Year
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-foreground" />
          {/* <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5" /> */}

          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-sm uppercase tracking-[0.3em] sm:tracking-[0.5em] text-primary mb-6 block">
                  Ready to Begin?
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-background mb-8 leading-tight">
                  Let's build your{" "}
                  <span className="italic text-primary">legacy</span> together.
                </h2>
                <p className="text-base sm:text-lg font-light text-background/70 mb-8 sm:mb-12 max-w-xl">
                  Partner with NJ Macson for comprehensive wealth management and
                  advisory services tailored to your unique needs.
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 sm:px-12 py-4 sm:py-5 text-xs uppercase tracking-[0.12em] sm:tracking-[0.2em] hover:bg-primary/90 transition-all group"
                  >
                    Schedule a Consultation
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;


