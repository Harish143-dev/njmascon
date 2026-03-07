import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const team = [
  {
    name: "Mr. Mohammad Jameel",
    role: "CEO and Founder",
    description:
      "A seasoned investment banking and wealth management professional, he brings deep expertise in alternate investments and family office solutions for high-net-worth individuals. Under his leadership, NJ Macson has evolved into a trusted platform delivering strategic, end-to-end financial solutions for an elite clientele.",
  },
  {
    name: "Mr. Sheik Ismail",
    role: "Operations Head",
    description:
      "With 10+ years of experience in the banking sector, including 4+ years in management roles and 2+ years at NJ Macson, he brings proven expertise in financial operations and client management. His experience-driven approach has consistently contributed to client success and organizational growth",
  },
  {
    name: "Mr. S Anandh",
    role: "Banking and Compliance - AVP",
    description:
      "With 15+ years of cross-industry experience spanning telecom, automotive, and financial services, including leadership roles at Nokia India Pvt. Ltd. and KTM India, he brings strong expertise in operations, sales, banking, and compliance. Since 2017, his contributions at NJ Macson have strengthened business performance through a results-driven and execution-focused approach.",
  },
  {
    name: "Mr. Abdul Rafi",
    role: "Accounts - AVP",
    description:
      "With 20+ years of experience in accounting and auditing since 2004, including handling Income Tax, GST, and Tribunal matters alongside leading auditors in Chennai, M. Rafi has been a key part of NJ Macson since 2018. His expertise in financial compliance and regulatory processes strengthens the firm’s accounting and governance framework.",
  },
  {
    name: "Mr. Sulthan",
    role: "Business Head (VP)",
    description:
      "Leads the business development initiatives and drives growth strategies.",
  },
  {
    name: "Mr. Satish",
    role: "Chartered Accountant",
    description:
      "Provides expert financial advice and ensures compliance with accounting standards.",
  },
  {
    name: "Bidhya A",
    role: "Head Global Investments",
    description:
      "Manages the company's global investment portfolio and identifies new investment opportunities.",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <CustomCursor />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
          </video>

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm uppercase tracking-[0.5em] text-primary mb-4 block">
                Our Team
              </span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-8">
                Our Core <span className="italic">Team</span>
              </h1>
              <p className="max-w-2xl text-lg font-light text-muted-foreground">
                Our team at NJ Macson is composed of experienced investment
                advisors, financial strategists, and forward-thinking analysts.
              </p>
            </motion.div>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="p-8 bg-stone/20 rounded-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-3xl text-primary">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-light mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
