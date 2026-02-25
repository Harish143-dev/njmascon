import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
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
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          
          <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-24 sm:py-28 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link 
                to="/careers" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Careers
              </Link>
              <div className="flex flex-wrap gap-2 sm:gap-4 mb-4">
                <span className="text-[11px] sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.5em] text-primary">
                  {job.department}
                </span>
                <span className="text-[11px] sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.5em] text-muted-foreground">
                  {job.location}
                </span>
                <span className="text-[11px] sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.5em] text-muted-foreground">
                  {job.type}
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
                {job.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-light text-muted-foreground max-w-2xl">
                {job.overview}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Job Details */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-8 min-w-0">
                {/* Responsibilities */}
                <motion.div
                  className="mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="font-serif text-2xl sm:text-3xl font-light mb-6 sm:mb-8">Responsibilities</h2>
                  <ul className="space-y-4">
                    {job.responsibilities.map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex gap-4 text-muted-foreground font-light"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <span className="text-primary flex-shrink-0">•</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Qualifications */}
                <motion.div
                  className="mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="font-serif text-2xl sm:text-3xl font-light mb-6 sm:mb-8">Qualifications</h2>
                  <ul className="space-y-4">
                    {job.qualifications.map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex gap-4 text-muted-foreground font-light"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <span className="text-primary flex-shrink-0">•</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="font-serif text-2xl sm:text-3xl font-light mb-6 sm:mb-8">Benefits</h2>
                  <ul className="space-y-4">
                    {job.benefits.map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex gap-4 text-muted-foreground font-light"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <span className="text-primary flex-shrink-0">✓</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4 min-w-0">
                <motion.div
                  className="lg:sticky lg:top-24 p-5 sm:p-6 lg:p-8 bg-stone/20 rounded-lg"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="font-serif text-2xl font-light mb-6">Ready to Apply?</h3>
                  <p className="text-muted-foreground font-light mb-8">
                    Join our team of exceptional professionals dedicated to serving the world's most distinguished families.
                  </p>
                  <Link
                    to={`/careers/${job.id}/apply`}
                    className="block w-full bg-primary text-primary-foreground px-6 sm:px-8 py-4 text-center text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.3em] rounded-sm hover:bg-primary/90 transition-all"
                  >
                    Apply Now
                  </Link>
                  <div className="mt-8 pt-8 border-t border-stone">
                    <h4 className="text-sm text-primary mb-4">Position Details</h4>
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
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JobDetail;

