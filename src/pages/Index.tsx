import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShowsSection from "@/components/ShowsSection";
import CoursesSection from "@/components/CoursesSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Teatro Esporte: A Escola de Teatro e Improviso em Aracaju"
        description="Melhore sua comunicação e aumente seu potencial criativo através de nossas aulas de teatro, improvisação e espetáculos de comédia."
        url="https://www.teatro-esporte.com/"
        keywords="teatro esporte, escola de teatro em aracaju, curso de teatro em aracaju, improvisação, comédia"
      />
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
