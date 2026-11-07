import heroImage from "@/assets/impro-masters.webp";
import ArrowIcon from "@/components/ArrowIcon";

const HeroSection = () => (
  <section
    id="top"
    className="relative isolate flex flex-col gap-10 px-6 pb-16 pt-10 md:px-10 xl:grid xl:h-[584px] xl:grid-cols-2 xl:items-start xl:gap-12 xl:px-[calc(80px+var(--ox))] xl:pb-0 xl:pt-[119px]"
  >
    <div className="rings xl:left-[calc(var(--ox)+195px)] xl:top-[-274px]" />
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember xl:absolute xl:left-[calc(var(--ox)+80px)] xl:top-[59px]">
      Improviso • Teatro • Aracaju
    </p>

    <div>
      <h1 className="mb-8 font-serif text-[44px] leading-[1.1] tracking-[-0.05em] md:text-[56px] xl:mb-[76px] xl:text-[70.4px] xl:leading-[70.4px]">
        Onde o teatro
        <br />
        vira <em className="not-italic text-ember">jogo.</em>
      </h1>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <a
          href="#espetaculos"
          className="inline-block whitespace-nowrap rounded-2xl bg-brand px-[22px] py-3.5 text-center text-[17.6px] font-semibold tracking-[-0.03em] text-ink transition-all hover:bg-brand-hover"
        >
          Ver Próximos Jogos
          <ArrowIcon />
        </a>
        <a
          href="#cursos"
          className="inline-block rounded-2xl px-[22px] py-3.5 text-center text-[17.6px] font-semibold tracking-[-0.03em] text-ember transition-all hover:bg-link-hover"
        >
          Quero Aprender
        </a>
      </div>
    </div>

    <figure className="relative mx-auto m-0 h-[360px] w-[300px] md:h-[440px] md:w-[380px] xl:absolute xl:left-[calc(var(--ox)+784px)] xl:top-[7px] xl:mx-0 xl:h-[545px] xl:w-[408px]">
      <span className="absolute left-[-10px] top-[90px] hidden h-[260px] w-[200px] rounded-[50%_40%_60%_50%] bg-circle xl:block" />
      <span className="absolute left-[321px] top-[424px] hidden h-[130px] w-[97px] rounded-full bg-circle xl:block" />
      <div className="absolute left-[20px] top-[20px] h-[320px] w-[260px] overflow-hidden rounded-[50%_50%_44%_56%/34%_34%_66%_66%] bg-brand md:left-[30px] md:top-[30px] md:h-[400px] md:w-[320px] xl:left-[30px] xl:top-[30px] xl:h-[480px] xl:w-[340px]">
        <img src={heroImage} alt="Espetáculo de improviso do Teatro Esporte" className="h-full w-full object-cover object-[50%_20%]" />
      </div>
    </figure>
  </section>
);

export default HeroSection;
