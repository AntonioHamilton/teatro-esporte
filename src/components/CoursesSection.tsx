import { motion } from "framer-motion";
import { Mic, Users, Brain, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Mic,
    title: "Confiança",
    description: "Perca o medo do palco e da vida. Aprenda a se expressar com autenticidade.",
  },
  {
    icon: Brain,
    title: "Agilidade Mental",
    description: "Treine sua capacidade de reagir, criar e resolver em tempo real.",
  },
  {
    icon: Users,
    title: "Trabalho em Equipe",
    description: "Improviso é escuta ativa. Aqui você aprende a construir junto.",
  },
  {
    icon: Sparkles,
    title: "Criatividade",
    description: "Desbloqueie sua espontaneidade e descubra novas formas de pensar.",
  },
];

const CoursesSection = () => {
  return (
    <section id="cursos" className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="max-w-2xl mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            A Escola
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Não é sobre ser engraçado.
            <br />
            É sobre estar <span className="text-gradient">presente.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nossa escola de improvisação oferece aulas para todos os níveis, do
            iniciante ao avançado. Aprenda técnicas que transformam palco e vida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.2, 0, 0, 1] }}
              className="bg-card rounded-2xl p-6 shadow-card"
            >
              <b.icon size={28} strokeWidth={1.5} className="text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <a
            href="https://api.whatsapp.com/send/?phone=557991486259&text=Ol%C3%A1%2C%20quero%20saber%20sobre%20as%20turmas!&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-medium hover:shadow-glow transition-shadow duration-300"
          >
            Quero me inscrever
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
