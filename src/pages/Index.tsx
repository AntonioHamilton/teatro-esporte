import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShowsSection from "@/components/ShowsSection";
import CoursesSection from "@/components/CoursesSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ShowsSection />
      <CoursesSection />
      <AboutSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
