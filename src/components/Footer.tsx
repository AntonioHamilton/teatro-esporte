import { Heart } from "lucide-react";
import Brand from "@/components/Brand";
import { whatsapp } from "@/lib/whatsapp";

const linkClass =
  "absolute top-0 rounded-2xl px-[22px] py-3.5 text-[17.6px] font-semibold transition-all hover:bg-link-hover";

const Footer = () => (
  <footer id="contato" className="relative isolate h-[573px] overflow-hidden bg-brand text-ink [--rings-color:rgba(0,0,0,0.12)]">
    <div className="rings left-[calc(var(--ox)+1306px)] top-[-122px]" />
    <hr className="absolute left-[calc(var(--ox)+169px)] top-[258px] w-[939px] border-0 border-t border-black/30" />
    <h2 className="absolute left-[calc(var(--ox)+120px)] top-[86px] whitespace-nowrap font-serif text-[59.2px] leading-[59.2px] tracking-[-0.05em]">
      Teatro Esporte
    </h2>
    <p className="absolute left-[calc(var(--ox)+120px)] top-[160px] w-[515px] text-base leading-6">
      A principal companhia de teatro de improvisação em Aracaju. Espetáculos, cursos e workshops corporativos.
    </p>
    <div className="absolute left-[calc(var(--ox)+645px)] top-[61px] w-[515px] text-right font-serif text-[32px] leading-8 tracking-[-0.05em]">
      <a href="https://www.instagram.com/teatroesporte/" target="_blank" rel="noopener noreferrer" className="block my-2.5">
        @teatroesporte
      </a>
      <a href={whatsapp("Olá, quero aprender improviso!")} target="_blank" rel="noopener noreferrer" className="block my-2.5">
        (79) 9 9148-6259
      </a>
    </div>
    <nav className="absolute left-0 top-[299px] w-full font-semibold">
      <a href="#espetaculos" className={`${linkClass} left-[calc(var(--ox)+160px)]`}>
        Espetáculos
      </a>
      <a href="#cursos" className={`${linkClass} left-[calc(var(--ox)+597px)]`}>
        Cursos
      </a>
      <a href="#sobre" className={`${linkClass} left-[calc(var(--ox)+938px)]`}>
        Sobre
      </a>
    </nav>
    <div className="absolute left-[calc(var(--ox)+920px)] top-[452px]">
      <Brand esporteClassName="text-ink" />
    </div>
    <a
      href="https://donate.stripe.com/28E9AS93ydLZ6l7bKJfbq00"
      target="_blank"
      rel="noopener noreferrer"
      title="Apoie o Teatro Esporte"
      className="absolute left-[calc(var(--ox)+1172px)] top-[466px] text-black/60 transition-colors hover:text-black"
    >
      <Heart size={16} strokeWidth={1.5} />
    </a>
  </footer>
);

export default Footer;
