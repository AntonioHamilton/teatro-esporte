import rodolfo from "@/assets/rodolfo-lisboa.png";

const FounderSection = () => (
  <section id="sobre" className="relative isolate h-[720px] overflow-hidden bg-ink text-white">
    <div className="absolute left-[calc(var(--ox)+120px)] top-[110px] h-[480px] w-[380px] overflow-hidden">
      <img src={rodolfo} alt="Rodolfo Lisboa" className="h-full w-full object-contain object-[50%_100%]" />
    </div>
    <p className="absolute left-[calc(var(--ox)+577px)] top-[235px] w-[541px] font-serif text-[59.2px] leading-[59.2px] tracking-[-0.05em]">
      Teatro Esporte
    </p>
    <p className="absolute left-[calc(var(--ox)+577px)] top-[304px] w-[541px] font-serif text-[28.8px] leading-[28.8px] tracking-[-0.05em] text-sun">
      Aracaju, SE
    </p>
    <p className="absolute left-[calc(var(--ox)+577px)] top-[360px] w-[541px] font-serif text-[24px] leading-[33.6px] tracking-[-0.03em] text-[#c4c4c4]">
      O Teatro Esporte é a principal companhia de teatro de improvisação em Aracaju. Fundada para levar a arte do
      improviso ao palco e à vida das pessoas.
    </p>
  </section>
);

export default FounderSection;
