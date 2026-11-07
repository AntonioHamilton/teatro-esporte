import rodolfo from "@/assets/rodolfo-lisboa.png";

const FounderSection = () => (
  <section id="sobre" className="relative isolate flex flex-col items-center gap-8 overflow-hidden bg-ink px-6 py-20 text-white md:px-10 xl:block xl:h-[720px] xl:px-0 xl:py-0">
    <div className="relative h-[380px] w-[300px] overflow-hidden md:h-[440px] md:w-[360px] xl:absolute xl:left-[calc(var(--ox)+120px)] xl:top-[110px] xl:h-[480px] xl:w-[380px]">
      <img src={rodolfo} alt="Rodolfo Lisboa" className="h-full w-full object-contain object-[50%_100%]" />
    </div>
    <div className="text-center xl:contents">
      <p className="font-serif text-[40px] leading-[1.1] tracking-[-0.05em] md:text-[52px] xl:absolute xl:left-[calc(var(--ox)+577px)] xl:top-[235px] xl:w-[541px] xl:text-left xl:text-[59.2px] xl:leading-[59.2px]">
        Teatro Esporte
      </p>
      <p className="font-serif text-[24px] leading-[1.2] tracking-[-0.05em] text-sun md:text-[28px] xl:absolute xl:left-[calc(var(--ox)+577px)] xl:top-[304px] xl:w-[541px] xl:text-left xl:text-[28.8px] xl:leading-[28.8px]">
        Aracaju, SE
      </p>
      <p className="mt-4 max-w-[560px] font-serif text-[18px] leading-[1.5] tracking-[-0.03em] text-[#c4c4c4] md:text-[21px] xl:absolute xl:left-[calc(var(--ox)+577px)] xl:top-[360px] xl:mt-0 xl:w-[541px] xl:max-w-none xl:text-left xl:text-[24px] xl:leading-[33.6px]">
        O Teatro Esporte é a principal companhia de teatro de improvisação em Aracaju. Fundada para levar a arte do
        improviso ao palco e à vida das pessoas.
      </p>
    </div>
  </section>
);

export default FounderSection;
