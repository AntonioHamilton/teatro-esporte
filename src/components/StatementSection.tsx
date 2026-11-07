import pulo from "@/assets/silhueta-pulo.jpg";

const StatementSection = () => (
  <section className="relative flex flex-col gap-10 overflow-hidden px-6 py-16 md:px-10 xl:block xl:h-[calc(885px+var(--t)*0.13)] xl:px-0 xl:py-0">
    <p className="font-serif text-[30px] leading-[1.2] tracking-[-0.05em] md:text-[40px] xl:absolute xl:left-[calc(var(--ox)+120px)] xl:top-[51px] xl:w-[551px] xl:text-[46.4px] xl:leading-[46.4px]">
      Melhore sua comunicação e aumente seu potencial criativo.
    </p>
    <div className="absolute hidden bg-black/[0.07] [clip-path:polygon(0_0,5%_0,100%_100%,45%_100%)] xl:left-[calc(var(--ox)+386px)] xl:top-[236px] xl:block xl:h-[414px] xl:w-[685px]" />
    <div className="flex items-center justify-center gap-8 xl:contents">
      <img src={pulo} alt="" className="silhouette h-[220px] w-[160px] rotate-[-90deg] object-cover xl:absolute xl:left-[calc(var(--ox)+801px)] xl:top-[-148px] xl:h-[488px] xl:w-[325px]" />
      <img src={pulo} alt="" className="silhouette h-[260px] w-[190px] object-cover xl:absolute xl:left-[calc(var(--ox)+99px)] xl:top-[287px] xl:h-[546px] xl:w-[364px]" />
    </div>
    <span className="mx-auto hidden h-[42px] w-[292px] rounded-[50%] bg-ink xl:absolute xl:left-[calc(var(--ox)+120px)] xl:top-[815px] xl:block" />
    <p className="font-serif text-[30px] leading-[1.2] tracking-[-0.05em] md:text-[40px] xl:absolute xl:left-[calc(var(--ox)+609px)] xl:top-[602px] xl:w-[511px] xl:text-[46.4px] xl:leading-[46.4px]">
      Nossa escola oferece aulas para todos os níveis, do <u>iniciante</u> ao <u>avançado</u>.
    </p>
  </section>
);

export default StatementSection;
