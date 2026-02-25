import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import TeamPreview from "@/components/home/TeamPreview";
import VideoSection from "@/components/home/VideoSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <CustomCursor />
      <Header />
      <main className="">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <TeamPreview />
        <VideoSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
