import HeroSection from "@/components/HeroSection";
import HolographicNav from "@/components/HolographicNav";
import SectionTransition from "@/components/SectionTransition";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HolographicNav />
      <HeroSection />
      <SectionTransition label="Entering Origin World" />
      <AboutSection />
      <SectionTransition label="Navigating Skill Galaxy" />
      <SkillsSection />
      <SectionTransition label="Entering Project Dimension" />
      <ProjectsSection />
      <SectionTransition label="Traversing Experience Tunnel" />
      <ExperienceSection />
      <SectionTransition label="Unlocking Achievement Vault" />
      <AchievementsSection />
      <SectionTransition label="Opening Contact Portal" />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
