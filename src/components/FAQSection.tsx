import { useState } from "react";

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
    <section id="duvidas" className="relative bg-[#f7f7f7] px-6 py-20 md:px-10 xl:h-[719px] xl:px-0 xl:py-0">
      <h2 className="mb-10 text-center font-serif text-[40px] leading-[1.1] tracking-[-0.05em] md:text-[52px] xl:absolute xl:left-[calc(var(--ox)+140px)] xl:top-[120px] xl:mb-0 xl:w-[1000px] xl:text-[59.2px] xl:leading-[59.2px]">
        Perguntas frequentes
      </h2>
      <div className="flex flex-col gap-3 xl:absolute xl:left-[calc(var(--ox)+140px)] xl:top-[227px] xl:w-[1000px]">
        {faqs.map((faq, i) => (
          <div key={faq.q} className="rounded-lg bg-[#eff2f4] px-4 transition-colors hover:bg-link-hover">
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex min-h-[52px] w-full items-center gap-2.5 py-3 text-left text-base font-medium text-ink/70"
            >
              <span className="w-3.5 shrink-0 text-center text-[22px] font-light leading-[14px]">{openIndex === i ? "−" : "+"}</span>
              {faq.q}
            </button>
            {openIndex === i && <p className="pb-4 pl-[38px] text-[15px] leading-relaxed text-[#666]">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
