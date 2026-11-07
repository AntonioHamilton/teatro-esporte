import ArrowIcon from "@/components/ArrowIcon";
import pulo from "@/assets/silhueta-pulo.jpg";
import { whatsapp } from "@/lib/whatsapp";

const CtaSection = () => (
  <section id="cursos" className="relative isolate flex flex-col items-center gap-8 overflow-hidden bg-white px-6 py-20 md:px-10 xl:block xl:h-[680px] xl:px-0 xl:py-0">
    <div className="rings xl:left-[calc(var(--ox)+640px)] xl:top-[256px]" />
    <span className="relative hidden h-[42px] w-[338px] rounded-[50%] bg-ink xl:absolute xl:left-[calc(var(--ox)+471px)] xl:top-[78px] xl:block" />
    <div className="flex items-center gap-8 xl:contents">
      <img src={pulo} alt="" className="silhouette h-[140px] w-[94px] rotate-180 object-cover opacity-45 xl:absolute xl:left-[calc(var(--ox)+573px)] xl:top-[88px] xl:h-[178px] xl:w-[119px]" />
      <img src={pulo} alt="" className="silhouette h-[180px] w-[120px] object-cover xl:absolute xl:left-[calc(var(--ox)+573px)] xl:top-[166px] xl:h-[229px] xl:w-[153px]" />
    </div>
    <h2 className="text-center font-serif text-[36px] leading-[1.15] tracking-[-0.05em] md:text-[48px] xl:absolute xl:left-[calc(var(--ox)+320px)] xl:top-[363px] xl:w-[640px] xl:text-[56px] xl:leading-[67.2px]">
      Não é sobre ser engraçado.
      <br />
      É sobre estar <em className="not-italic text-ember">presente.</em>
    </h2>
    <a
      href={whatsapp("Olá, quero saber sobre as turmas!")}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block whitespace-nowrap rounded-2xl bg-brand px-[22px] py-3.5 text-[17.6px] font-semibold tracking-[-0.03em] text-ink transition-all hover:bg-brand-hover xl:absolute xl:left-1/2 xl:top-[538px] xl:-translate-x-1/2"
    >
      Quero me inscrever
      <ArrowIcon />
    </a>
  </section>
);

export default CtaSection;
