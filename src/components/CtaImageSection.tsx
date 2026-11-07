import espetaculo from "@/assets/espetaculo1.webp";

const CtaImageSection = () => (
  <section className="relative h-[1100px] overflow-hidden">
    <img src={espetaculo} alt="Espetáculo de improviso do Teatro Esporte" className="absolute -inset-20 h-[calc(100%+160px)] w-[calc(100%+160px)] max-w-none object-cover" />
    <div className="absolute inset-0 bg-black/25" />
    <div
      className="absolute left-0 top-0 z-[1] h-[233px] w-full bg-cream"
      style={{ borderRadius: "0 0 300px 300px / 0 0 77px 77px" }}
    />
    <p className="absolute left-[calc(var(--ox)+324px)] top-[462px] z-[1] w-[633px] text-center font-serif text-[46.4px] leading-[55.68px] tracking-[-0.05em] text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.35)]">
      Comédia criada ao vivo a partir das sugestões da plateia.
    </p>
  </section>
);

export default CtaImageSection;
