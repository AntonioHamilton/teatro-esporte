import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          >
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
              Quem Somos
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              A principal companhia de improviso de{" "}
              <span className="text-gradient">Aracaju.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                O Teatro Esporte é a principal companhia de teatro de
                improvisação em Aracaju. Fundada para levar a arte do improviso
                ao palco e à vida das pessoas, acreditamos que a espontaneidade e
                a criatividade são ferramentas essenciais para o desenvolvimento
                pessoal e profissional.
              </p>
              <p>
                Nossa escola oferece aulas de teatro e improvisação para todas as
                idades, do iniciante ao avançado. Além dos cursos, somos
                conhecidos por nossos espetáculos de comédia interativos, que
                transformam as sugestões da plateia em cenas únicas e hilárias.
              </p>
              <p>
                Também levamos o teatro corporativo a empresas, oferecendo
                workshops focados em habilidades de liderança e trabalho em
                equipe.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            className="space-y-6"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "10+", label: "Anos de palco" },
                { number: "500+", label: "Espetáculos" },
                { number: "1000+", label: "Alunos formados" },
                { number: "50+", label: "Workshops corporativos" },
              ].map((stat, i) => (
                <div key={stat.label} className="bg-card rounded-2xl p-6 shadow-card text-center">
                  <span className="text-3xl font-bold text-primary">{stat.number}</span>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
