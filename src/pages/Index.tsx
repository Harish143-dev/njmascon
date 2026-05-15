import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import DifferenceSection from "@/components/home/DifferenceSection";
import WhoWeServeSection from "@/components/home/WhoWeServeSection";
import WhyNJMacsonSection from "@/components/home/WhyNJMacsonSection";
import StatsSection from "@/components/home/StatsSection";
import TeamPreview from "@/components/home/TeamPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <CustomCursor />
      <Header />
      <main className="">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <DifferenceSection />
        <WhoWeServeSection />
        <WhyNJMacsonSection />
        <TeamPreview />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
