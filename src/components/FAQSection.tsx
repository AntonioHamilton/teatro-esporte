import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Sou tímido. Esse curso é pra mim?",
    a: "Com certeza! A maioria dos nossos alunos começa tímida. O improviso é justamente um espaço seguro para você se soltar, sem julgamentos.",
  },
  {
    q: "Preciso ter experiência para começar?",
    a: "Não! Nossas turmas para iniciantes são pensadas para quem nunca pisou em um palco. Você vai aprender do zero.",
  },
  {
    q: "Mas eu nem quero ser ator...",
    a: "Perfeito. A maioria dos nossos alunos não quer ser ator. Eles vêm para melhorar a comunicação, destravar a criatividade e se divertir.",
  },
  {
    q: "Como funcionam os espetáculos?",
    a: "São shows de comédia ao vivo onde tudo é criado na hora, a partir das sugestões da plateia. Cada noite é única e irrepetível.",
  },
  {
    q: "Vocês fazem workshops para empresas?",
    a: "Sim! Nosso teatro corporativo trabalha habilidades como liderança, comunicação, escuta ativa e trabalho em equipe através de dinâmicas de improviso.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            Dúvidas
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Perguntas frequentes
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: [0.2, 0, 0, 1] }}
              className="bg-card rounded-xl shadow-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-medium text-foreground pr-4">{faq.q}</span>
                {openIndex === i ? (
                  <Minus size={18} strokeWidth={1.5} className="text-primary shrink-0" />
                ) : (
                  <Plus size={18} strokeWidth={1.5} className="text-muted-foreground shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
                  >
                    <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
