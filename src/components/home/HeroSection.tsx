import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import familyOfficeImage from "@/assets/family_Office.webp";
import privateWealthImage from "@/assets/Privaye wealth mgmt.webp";
import alternativeInvestmentsImage from "@/assets/alternative Investment.webp";
import auditingLegalImage from "@/assets/Auditing&Legal_02.webp";
import mediaAuditingImage from "@/assets/Media_Auditing.webp";

const serviceSlides = [
  {
    title: "Family Office",
    description: "Your family's wealth deserves a home, not just a portfolio.",
    image: familyOfficeImage,
    link: "/services/our-family-office",
  },
  {
    title: "Private Wealth Management",
    description:
      "Wealth that works as hard as you do — quietly, and deliberately.",
    image: privateWealthImage,
    link: "/services/private-wealth-management",
  },
  {
    title: "Alternative Investments",
    description: "The returns others miss are the ones we pursue first.",
    image: alternativeInvestmentsImage,
    link: "/services/alternative-investments",
  },
  {
    title: "Auditing and Legal",
    description:
      "Clarity, compliance, and protection — at every stage of your wealth journey.",
    image: auditingLegalImage,
    link: "/services/auditing-legal",
  },
  {
    title: "Media Auditing",
    description:
      "Know exactly where your money goes — and what it's actually doing.",
    image: mediaAuditingImage,
    link: "/services/media-auditing",
  },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = serviceSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % serviceSlides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[calc(100svh-88px)] items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide.title}
            src={currentSlide.image}
            alt=""
            className="h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-background/45 sm:hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/72 to-background/92 sm:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/82 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/86 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] items-end px-4 py-12 sm:px-6 sm:py-16 md:px-10">
        <div className="w-full max-w-[46rem] text-left">
          <motion.div
            className="space-y-6 sm:space-y-7"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.title}
                className="space-y-4 sm:space-y-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <div>
                  <h1 className="font-serif text-[clamp(2.65rem,11vw,4.35rem)] font-light leading-[0.98] tracking-normal text-foreground md:text-[clamp(4rem,6.2vw,5.8rem)]">
                    {currentSlide.title}
                  </h1>
                </div>

                <div>
                  <p className="max-w-2xl text-base font-light leading-relaxed text-foreground/90 sm:text-lg md:text-xl">
                    {currentSlide.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex w-full flex-col items-start gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-6">
              <motion.div
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={currentSlide.link}
                  className="inline-flex w-full items-center justify-center gap-3 bg-primary px-6 py-4 text-xs uppercase tracking-[0.15em] text-primary-foreground transition-all hover:bg-primary/90 sm:w-auto sm:justify-start sm:tracking-[0.2em]"
                >
                  Explore Service
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </motion.div>
              <Link
                to="/contact"
                className="group flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-foreground/80 transition-all hover:text-primary sm:tracking-[0.15em]"
              >
                <span className="border-b border-foreground/30 pb-1 transition-colors group-hover:border-primary">
                  Get in Touch
                </span>
                <ArrowRight
                  className="h-3 w-3 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-foreground/50">
            Scroll
          </span>
          <motion.div
            className="h-8 w-[1px] bg-gradient-to-b from-primary to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
