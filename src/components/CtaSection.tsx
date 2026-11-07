import ArrowIcon from "@/components/ArrowIcon";
import pulo from "@/assets/silhueta-pulo.jpg";
import { whatsapp } from "@/lib/whatsapp";

const CtaSection = () => (
  <section id="cursos" className="relative isolate h-[680px] overflow-hidden bg-white">
    <div className="rings left-[calc(var(--ox)+640px)] top-[256px]" />
    <span className="absolute left-[calc(var(--ox)+471px)] top-[78px] h-[42px] w-[338px] rounded-[50%] bg-ink" />
    <img src={pulo} alt="" className="silhouette left-[calc(var(--ox)+573px)] top-[88px] h-[178px] w-[119px] rotate-180 object-cover opacity-45" />
    <img src={pulo} alt="" className="silhouette left-[calc(var(--ox)+573px)] top-[166px] h-[229px] w-[153px] object-cover" />
    <h2 className="absolute left-[calc(var(--ox)+320px)] top-[363px] w-[640px] text-center font-serif text-[56px] leading-[67.2px] tracking-[-0.05em]">
      Não é sobre ser engraçado.
      <br />
      É sobre estar <em className="not-italic text-ember">presente.</em>
    </h2>
    <a
      href={whatsapp("Olá, quero saber sobre as turmas!")}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute left-1/2 top-[538px] inline-block -translate-x-1/2 whitespace-nowrap rounded-2xl bg-brand px-[22px] py-3.5 text-[17.6px] font-semibold tracking-[-0.03em] text-ink transition-all hover:bg-brand-hover"
    >
      Quero me inscrever
      <ArrowIcon />
    </a>
  </section>
);

export default CtaSection;
