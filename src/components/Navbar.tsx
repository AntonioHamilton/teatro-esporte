import { useEffect, useState } from "react";
import Brand from "@/components/Brand";
import { whatsapp } from "@/lib/whatsapp";

const links = [
  { label: "Espetáculos", href: "#espetaculos" },
  { label: "Cursos", href: "#cursos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const linkClass =
  "rounded-2xl px-[22px] py-3.5 text-[17.6px] font-semibold leading-[21px] tracking-[-0.03em] transition-all hover:bg-link-hover";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 1);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-10 transition-colors ${
        scrolled || menuOpen ? "border-b border-black/20 bg-white" : ""
      }`}
    >
      <div className="flex h-[72px] items-center justify-between px-6 xl:h-[113px] xl:px-[calc(80px+var(--ox))]">
        <a href="#top" aria-label="Teatro Esporte" className="flex">
          <Brand />
        </a>
        <nav className="hidden items-center gap-[5px] xl:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
          <a
            href={whatsapp("Olá, quero improvisar!")}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkClass} shadow-[inset_0_-2px_0_var(--brand)] hover:bg-brand-hover hover:text-ink`}
          >
            Quero Improvisar
          </a>
        </nav>
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 xl:hidden"
        >
          <span className={`h-0.5 w-6 bg-ink transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>
      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-black/10 bg-white px-6 py-4 xl:hidden">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="py-3 text-[17px] font-semibold">
              {link.label}
            </a>
          ))}
          <a
            href={whatsapp("Olá, quero improvisar!")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-2xl bg-brand py-3.5 text-center text-[17px] font-semibold text-ink"
          >
            Quero Improvisar
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
