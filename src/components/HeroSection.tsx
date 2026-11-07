import heroImage from "@/assets/impro-masters.webp";
import ArrowIcon from "@/components/ArrowIcon";

const HeroSection = () => (
  <section id="top" className="relative isolate grid h-[584px] grid-cols-2 items-start gap-12 px-[calc(80px+var(--ox))] pt-[119px]">
    <div className="rings left-[calc(var(--ox)+195px)] top-[-274px]" />
    <p className="absolute left-[calc(var(--ox)+80px)] top-[59px] text-sm font-semibold uppercase tracking-[0.2em] text-ember">
      Improviso • Teatro • Aracaju
    </p>

    <div>
      <h1 className="mb-[76px] font-serif text-[70.4px] leading-[70.4px] tracking-[-0.05em]">
        Onde o teatro
        <br />
        vira <em className="not-italic text-ember">jogo.</em>
      </h1>
      <div className="flex items-center gap-4">
        <a
          href="#espetaculos"
          className="inline-block whitespace-nowrap rounded-2xl bg-brand px-[22px] py-3.5 text-[17.6px] font-semibold tracking-[-0.03em] text-ink transition-all hover:bg-brand-hover"
        >
          Ver Próximos Jogos
          <ArrowIcon />
        </a>
        <a
          href="#cursos"
          className="inline-block rounded-2xl px-[22px] py-3.5 text-[17.6px] font-semibold tracking-[-0.03em] text-ember transition-all hover:bg-link-hover"
        >
          Quero Aprender
        </a>
      </div>
    </div>

    <figure className="absolute left-[calc(var(--ox)+784px)] top-[7px] m-0 h-[545px] w-[408px]">
      <span className="absolute left-[-10px] top-[90px] h-[260px] w-[200px] rounded-[50%_40%_60%_50%] bg-circle" />
      <span className="absolute left-[321px] top-[424px] h-[130px] w-[97px] rounded-full bg-circle" />
      <div className="absolute left-[30px] top-[30px] h-[480px] w-[340px] overflow-hidden rounded-[50%_50%_44%_56%/34%_34%_66%_66%] bg-brand">
        <img src={heroImage} alt="Espetáculo de improviso do Teatro Esporte" className="h-full w-full object-cover object-[50%_20%]" />
      </div>
    </figure>
  </section>
);

export default HeroSection;
