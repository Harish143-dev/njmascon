import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PageContainer, PageCta, PageHero, SectionHeading, sectionSpacing, sectionSpacingLg } from "@/components/marketing/primitives";
import { jobPositions } from "@/data/jobPositions";
import careerHero from "@/assets/videos/career.webm";

const values = [
  {
    number: "01",
    title: "Radical Discretion",
    description:
      "We operate in the shadows of giants. Privacy is our primary currency and our greatest commitment to those we serve.",
  },
  {
    number: "02",
    title: "Intellectual Elegance",
    description:
      "Complexity is mastered through simplicity. We value solutions that are as aesthetically pleasing as they are financially sound.",
  },
  {
    number: "03",
    title: "Generational Vision",
    description:
      "We do not look at quarters; we look at decades. Our talent must possess the foresight to build for the next century.",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <CustomCursor />
      <Header />

      <main>
        <PageHero
          videoSrc={careerHero}
          eyebrow="Careers"
          minHeightClassName="min-h-screen"
          title={
            <>
              Join the <br />
              <span className="italic text-primary">Legacy.</span>
            </>
          }
          description="We seek the architects of tomorrow's traditions. At NJ Macson, we don't just manage wealth; we curate the environments where generational history is written."
        />

        <section className={sectionSpacing}>
          <PageContainer>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
              <motion.div
                className="min-w-0 lg:col-span-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <SectionHeading eyebrow="The Setting" title="Our Environment" className="mb-0" />
              </motion.div>

              <motion.div
                className="min-w-0 lg:col-span-6 lg:col-start-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-base font-light leading-relaxed text-muted-foreground md:text-lg">
                  Our workspace is a reflection of our philosophy: quiet, intentional, and profoundly high-end. We
                  believe that clarity of thought begins with clarity of space.
                </p>
              </motion.div>
            </div>
          </PageContainer>
        </section>

        <section className={sectionSpacingLg}>
          <PageContainer>
            <SectionHeading
              eyebrow="The Ethos"
              title="The NJ Macson Standard"
              description={
                <span className="font-serif italic">
                  "Excellence is not an act, but a habit cultivated in the silence of discretion."
                </span>
              }
            />

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
              {values.map((value, index) => (
                <motion.div
                  key={value.number}
                  className="border-t border-stone pt-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <span className="mb-4 block text-lg font-light italic text-primary">{value.number}.</span>
                  <h3 className="mb-4 text-2xl font-light">{value.title}</h3>
                  <p className="font-light leading-relaxed text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </PageContainer>
        </section>

        <section className={sectionSpacingLg + " bg-stone/20"}>
          <PageContainer>
            <SectionHeading
              eyebrow="Opportunities"
              title="Open Positions"
              description="Selective recruitment for individuals of exceptional pedigree and character."
            />

            <div className="space-y-0">
              {jobPositions.map((position, index) => (
                <Link to={`/careers/${position.id}`} key={position.id}>
                  <motion.div
                    className="group flex cursor-pointer flex-col justify-between border-t border-stone py-8 md:flex-row md:items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <div>
                      <span className="mb-2 block text-sm text-primary">{position.location}</span>
                      <h3 className="text-xl font-light transition-transform duration-500 group-hover:translate-x-4 md:text-2xl">
                        {position.title}
                      </h3>
                    </div>
                    <svg
                      className="mt-4 h-6 w-6 text-muted-foreground transition-all group-hover:translate-x-2 group-hover:text-primary md:mt-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </Link>
              ))}
            </div>
          </PageContainer>
        </section>

        <PageCta
          dark={false}
          eyebrow="General Applications"
          title="Private Inquiries Welcome"
          description="If your expertise transcends the listed roles, we invite you to initiate a confidential dialogue. Our firm is always seeking individuals who redefine the standard."
          actionLabel="Submit a Private Inquiry"
          actionTo="/contact"
          className="bg-background"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
