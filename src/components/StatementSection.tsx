import pulo from "@/assets/silhueta-pulo.jpg";

const StatementSection = () => (
  <section className="relative h-[calc(885px+var(--t)*0.13)]">
    <p className="absolute left-[calc(var(--ox)+120px)] top-[51px] w-[551px] font-serif text-[46.4px] leading-[46.4px] tracking-[-0.05em]">
      Melhore sua comunicação e aumente seu potencial criativo.
    </p>
    <div className="absolute left-[calc(var(--ox)+386px)] top-[236px] h-[414px] w-[685px] bg-black/[0.07] [clip-path:polygon(0_0,5%_0,100%_100%,45%_100%)]" />
    <img src={pulo} alt="" className="silhouette left-[calc(var(--ox)+801px)] top-[-148px] h-[488px] w-[325px] rotate-[-90deg] object-cover" />
    <img src={pulo} alt="" className="silhouette left-[calc(var(--ox)+99px)] top-[287px] h-[546px] w-[364px] object-cover" />
    <span className="absolute left-[calc(var(--ox)+120px)] top-[815px] h-[42px] w-[292px] rounded-[50%] bg-ink" />
    <p className="absolute left-[calc(var(--ox)+609px)] top-[602px] w-[511px] font-serif text-[46.4px] leading-[46.4px] tracking-[-0.05em]">
      Nossa escola oferece aulas para todos os níveis, do <u>iniciante</u> ao <u>avançado</u>.
    </p>
  </section>
);

export default StatementSection;
