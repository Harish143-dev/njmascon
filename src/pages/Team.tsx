import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const team = [
  { name: "Mr. Mohammad Jameel", role: "CEO and Founder" },
  { name: "Mr. Sheik Ismail", role: "Operations Head" },
  { name: "Mr. S Anandh", role: "Banking and Compliance - AVP" },
  { name: "Mr. Abdul Rafi", role: "Accounts - AVP" },
  { name: "Mr. Sulthan", role: "Business Head (VP)" },
  { name: "Mr. Satish", role: "Chartered Accountant" },
  { name: "Bidhya A", role: "Head Global Investments" },
];

const Team = () => {
  return (
    <div className="min-h-screen">
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
            <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          </video>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 py-32">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-[10px] uppercase tracking-[0.5em] text-primary mb-4 block">Our Team</span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-8">Our Core <span className="italic">Team</span></h1>
              <p className="max-w-2xl text-xl font-light text-muted-foreground">Our team at NJ Macson is composed of experienced investment advisors, financial strategists, and forward-thinking analysts.</p>
            </motion.div>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div key={member.name} className="p-8 bg-stone/20 rounded-lg text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-3xl text-primary">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-serif text-xl font-light mb-2">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
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
