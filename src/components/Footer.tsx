import { Heart } from "lucide-react";
import Brand from "@/components/Brand";
import { whatsapp } from "@/lib/whatsapp";

const linkClass =
  "rounded-2xl px-[22px] py-3.5 text-[17.6px] font-semibold transition-all hover:bg-link-hover xl:absolute xl:top-0";

const Footer = () => (
  <footer
    id="contato"
    className="relative isolate flex flex-col gap-8 overflow-hidden bg-brand px-6 py-16 text-ink [--rings-color:rgba(0,0,0,0.12)] md:px-10 xl:block xl:h-[573px] xl:px-0 xl:py-0"
  >
    <div className="rings xl:left-[calc(var(--ox)+1306px)] xl:top-[-122px]" />
    <hr className="hidden border-0 border-t border-black/30 xl:absolute xl:left-[calc(var(--ox)+169px)] xl:top-[258px] xl:block xl:w-[939px]" />
    <div className="flex flex-col gap-4 xl:contents">
      <h2 className="whitespace-normal font-serif text-[40px] leading-[1.1] tracking-[-0.05em] md:text-[52px] xl:absolute xl:left-[calc(var(--ox)+120px)] xl:top-[86px] xl:whitespace-nowrap xl:text-[59.2px] xl:leading-[59.2px]">
        Teatro Esporte
      </h2>
      <p className="text-base leading-6 xl:absolute xl:left-[calc(var(--ox)+120px)] xl:top-[160px] xl:w-[515px]">
        A principal companhia de teatro de improvisação em Aracaju. Espetáculos, cursos e workshops corporativos.
      </p>
    </div>
    <div className="flex flex-col gap-2 font-serif text-[24px] leading-[1.3] tracking-[-0.05em] md:text-right xl:absolute xl:left-[calc(var(--ox)+645px)] xl:top-[61px] xl:w-[515px] xl:text-right xl:text-[32px] xl:leading-8">
      <a href="https://www.instagram.com/teatroesporte/" target="_blank" rel="noopener noreferrer" className="block xl:my-2.5">
        @teatroesporte
      </a>
      <a href={whatsapp("Olá, quero aprender improviso!")} target="_blank" rel="noopener noreferrer" className="block xl:my-2.5">
        (79) 9 9148-6259
      </a>
    </div>
    <nav className="flex flex-wrap gap-2 font-semibold xl:absolute xl:left-0 xl:top-[299px] xl:w-full">
      <a href="#espetaculos" className={`${linkClass} xl:left-[calc(var(--ox)+160px)]`}>
        Espetáculos
      </a>
      <a href="#cursos" className={`${linkClass} xl:left-[calc(var(--ox)+597px)]`}>
        Cursos
      </a>
      <a href="#sobre" className={`${linkClass} xl:left-[calc(var(--ox)+938px)]`}>
        Sobre
      </a>
    </nav>
    <div className="flex items-center gap-3 xl:absolute xl:left-[calc(var(--ox)+920px)] xl:top-[452px]">
      <Brand esporteClassName="text-ink" />
      <a
        href="https://donate.stripe.com/28E9AS93ydLZ6l7bKJfbq00"
        target="_blank"
        rel="noopener noreferrer"
        title="Apoie o Teatro Esporte"
        className="text-black/60 transition-colors hover:text-black"
      >
        <Heart size={16} strokeWidth={1.5} />
      </a>
    </div>
  </footer>
);

export default Footer;
