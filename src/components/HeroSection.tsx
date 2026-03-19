import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-teatro.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Espetáculo de improviso do Teatro Esporte"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, hsl(240 10% 3.9% / 0.92) 0%, hsl(240 10% 3.9% / 0.7) 50%, hsl(240 10% 3.9% / 0.4) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, transparent 60%, hsl(240 10% 3.9%))",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
            className="text-primary font-medium text-sm tracking-widest uppercase mb-6"
          >
            Improviso • Teatro • Aracaju
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            className="text-5xl md:text-7xl font-bold text-foreground leading-[1.05] mb-6"
          >
            Onde o teatro
            <br />
            vira <span className="text-gradient">jogo.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0, 0, 1] }}
            className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed"
          >
            O espetáculo mais imprevisível da cidade. Melhore sua comunicação e
            aumente seu potencial criativo através de aulas de improvisação e
            espetáculos de comédia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.2, 0, 0, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#espetaculos"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-medium hover:shadow-glow transition-all duration-300"
            >
              Ver Próximos Jogos
              <ArrowRight size={18} strokeWidth={1.5} />
            </a>
            <a
              href="#cursos"
              className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-7 py-3.5 rounded-lg font-medium hover:border-foreground/40 transition-colors duration-300"
            >
              Quero Aprender
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
