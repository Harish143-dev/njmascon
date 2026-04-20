import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";

import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PageContainer, PageHero, PrimaryLinkButton, sectionSpacing } from "@/components/marketing/primitives";
import { getJobById } from "@/data/jobPositions";

const JobDetail = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const job = jobId ? getJobById(jobId) : undefined;

  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <CustomCursor />
      <Header />

      <main>
        <PageHero
          videoSrc="https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4"
          minHeightClassName="min-h-[50vh]"
          title={job.title}
          description={job.overview}
          contentClassName="max-w-4xl"
        />

        <PageContainer className="-mt-12 relative z-10 pb-8">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 rounded-sm bg-background/90 px-4 py-3 text-sm text-muted-foreground shadow-sm backdrop-blur transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Careers
          </Link>
        </PageContainer>

        <section className={sectionSpacing}>
          <PageContainer>
            <div className="mb-8 flex flex-wrap gap-2 sm:gap-4">
              {[job.department, job.location, job.type].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className={index === 0 ? "text-xs uppercase tracking-[0.18em] text-primary sm:text-sm sm:tracking-[0.4em]" : "text-xs uppercase tracking-[0.18em] text-muted-foreground sm:text-sm sm:tracking-[0.4em]"}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="min-w-0 lg:col-span-8">
                {[
                  { title: "Responsibilities", items: job.responsibilities, bullet: "•" },
                  { title: "Qualifications", items: job.qualifications, bullet: "•" },
                  { title: "Benefits", items: job.benefits, bullet: "✓" },
                ].map((group) => (
                  <motion.section
                    key={group.title}
                    className="mb-14 last:mb-0"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="mb-6 font-serif text-2xl font-light sm:mb-8 sm:text-3xl">{group.title}</h2>
                    <ul className="space-y-4">
                      {group.items.map((item, index) => (
                        <motion.li
                          key={`${group.title}-${index}`}
                          className="flex gap-4 font-light text-muted-foreground"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.45, delay: index * 0.06 }}
                        >
                          <span className="shrink-0 text-primary">{group.bullet}</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.section>
                ))}
              </div>

              <div className="min-w-0 lg:col-span-4">
                <motion.aside
                  className="rounded-2xl border border-stone/40 bg-stone/20 p-6 lg:sticky lg:top-24 lg:p-8"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="mb-4 font-serif text-2xl font-light">Ready to Apply?</h3>
                  <p className="mb-8 font-light text-muted-foreground">
                    Join our team of exceptional professionals dedicated to serving the world&apos;s most distinguished
                    families.
                  </p>
                  <PrimaryLinkButton to={`/careers/${job.id}/apply`} className="w-full">
                    Apply Now
                  </PrimaryLinkButton>
                  <div className="mt-8 border-t border-stone pt-8">
                    <h4 className="mb-4 text-sm text-primary">Position Details</h4>
                    <div className="space-y-3 text-sm font-light text-muted-foreground">
                      <div className="flex items-start justify-between gap-4">
                        <span>Department</span>
                        <span className="text-right break-words">{job.department}</span>
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <span>Location</span>
                        <span className="text-right break-words">{job.location}</span>
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <span>Type</span>
                        <span className="text-right break-words">{job.type}</span>
                      </div>
                    </div>
                  </div>
                </motion.aside>
              </div>
            </div>
          </PageContainer>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JobDetail;
