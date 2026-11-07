import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatementSection from "@/components/StatementSection";
import BandSection from "@/components/BandSection";
import ShowsSection from "@/components/ShowsSection";
import CtaImageSection from "@/components/CtaImageSection";
import CtaSection from "@/components/CtaSection";
import FounderSection from "@/components/FounderSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-cream pt-[72px] text-ink xl:pt-[113px]">
      <Seo
        title="Teatro Esporte: A Escola de Teatro e Improviso em Aracaju"
        description="Melhore sua comunicação e aumente seu potencial criativo através de nossas aulas de teatro, improvisação e espetáculos de comédia."
        url="https://www.teatro-esporte.com/"
        keywords="teatro esporte, escola de teatro em aracaju, curso de teatro em aracaju, improvisação, comédia"
      />
      <Navbar />
      <HeroSection />
      <StatementSection />
      <BandSection />
      <ShowsSection />
      <CtaImageSection />
      <CtaSection />
      <FounderSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
