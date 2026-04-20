import { motion } from "framer-motion";

import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PageContainer, PageHero, SectionHeading, sectionSpacing } from "@/components/marketing/primitives";
import jameelImg from "@/assets/team/jameel.jpg";
import anandhImg from "@/assets/team/anandh.jpg";
import abdulRafiImg from "@/assets/team/abdul_rafi.jpg";
import ismailImg from "@/assets/team/ismail.png";
import teamHero from "@/assets/videos/team.mp4";

interface TeamMember {
  name: string;
  role: string;
  img?: string;
  description: string;
}

const team: TeamMember[] = [
  {
    name: "Mr. Mohammad Jameel",
    role: "CEO and Founder",
    img: jameelImg,
    description:
      "Managing Director of NJ Macson with extensive experience in investment banking, wealth management, and alternate investments.",
  },
  {
    name: "Mr. Sheik Ismail",
    role: "Operations Head",
    img: ismailImg,
    description:
      "10+ years of experience in the banking sector, including 4+ years in management and 4+ years with NJ Macson, with strong expertise in financial operations and client management.",
  },
  {
    name: "Mr. S Anandh",
    role: "Banking and Compliance - AVP",
    img: anandhImg,
    description:
      "15+ years of cross-industry experience across telecom, automotive, and financial services, with leadership roles at Nokia India Pvt. Ltd. and KTM India, and key contributions at NJ Macson since 2017.",
  },
  {
    name: "Mr. Abdul Rafi",
    role: "Accounts - AVP",
    img: abdulRafiImg,
    description:
      "20+ years of experience in accounting and auditing since 2004, with expertise in Income Tax, GST, and Tribunal matters, and a key member of NJ Macson since 2018.",
  },
  {
    name: "Mr. Sulthan",
    role: "Business Head (VP)",
    description: "Leads the business development initiatives and drives growth strategies.",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <CustomCursor />
      <Header />

      <main>
        <PageHero
          videoSrc={teamHero}
          eyebrow="Our Team"
          minHeightClassName="min-h-[60vh]"
          title={
            <>
              Our Core <span className="italic text-primary">Team</span>
            </>
          }
          description="Our team at NJ Macson is composed of experienced investment advisors, financial strategists, and forward-thinking analysts."
        />

        <section className={sectionSpacing}>
          <PageContainer>
            <SectionHeading
              eyebrow="Leadership"
              title="People Behind the Advisory"
              description="A multidisciplinary team shaping private wealth, family office, compliance, and operational excellence."
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {team.map((member, index) => (
                <motion.article
                  key={member.name}
                  className="rounded-2xl border border-stone/40 bg-stone/20 p-8 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-primary/20">
                    {member.img ? (
                      <img src={member.img} alt={member.name} className="h-full w-full object-cover" />
                    ) : (
                      <span className="text-3xl text-primary">{member.name.charAt(0)}</span>
                    )}
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-light">{member.name}</h3>
                  <p className="mb-3 text-sm text-muted-foreground">{member.role}</p>
                  <p className="text-sm font-light leading-relaxed text-muted-foreground">{member.description}</p>
                </motion.article>
              ))}
            </div>
          </PageContainer>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
