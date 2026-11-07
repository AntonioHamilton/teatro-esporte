const BandSection = () => (
  <section
    className="relative h-[1106px] bg-ink text-white"
    style={{
      clipPath:
        "polygon(calc(1158px - var(--t) * 0.5966) 76px, 100% 76px, 100% calc(790px + var(--t) * 0.154), calc(93px + var(--t) * 1.578) 1106px, 0 1106px, 0 calc(386px - var(--t) * 0.16))",
    }}
  >
    <p className="absolute left-[calc(50%-411px)] top-[424px] w-[822px] text-center font-serif text-[36.8px] leading-[44.16px] tracking-[-0.05em]">
      Acreditamos que a espontaneidade e a criatividade são ferramentas essenciais para o desenvolvimento
      pessoal e profissional.
    </p>
    <p className="absolute left-[calc(50%-411px)] top-[656px] w-[822px] text-center font-serif text-[43.2px] font-semibold leading-[51.84px] tracking-[-0.05em] text-sun">
      A principal companhia de improviso de Aracaju.
    </p>
  </section>
);

export default BandSection;
