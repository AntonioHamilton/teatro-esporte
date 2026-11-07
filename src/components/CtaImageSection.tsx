import espetaculo from "@/assets/espetaculo1.webp";

const CtaImageSection = () => (
  <section className="relative h-[460px] overflow-hidden md:h-[600px] xl:h-[1100px]">
    <img src={espetaculo} alt="Espetáculo de improviso do Teatro Esporte" className="absolute -inset-20 h-[calc(100%+160px)] w-[calc(100%+160px)] max-w-none object-cover" />
    <div className="absolute inset-0 bg-black/25" />
    <div
      className="absolute left-0 top-0 z-[1] h-[60px] w-full bg-cream md:h-[100px] xl:h-[233px]"
      style={{ borderRadius: "0 0 300px 300px / 0 0 77px 77px" }}
    />
    <p className="absolute left-1/2 top-[55%] z-[1] w-[88%] -translate-x-1/2 -translate-y-1/2 text-center font-serif text-[30px] leading-[1.2] tracking-[-0.05em] text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.35)] md:text-[40px] xl:left-[calc(var(--ox)+324px)] xl:top-[462px] xl:w-[633px] xl:translate-x-0 xl:translate-y-0 xl:text-[46.4px] xl:leading-[55.68px]">
      Comédia criada ao vivo a partir das sugestões da plateia.
    </p>
  </section>
);

export default CtaImageSection;
