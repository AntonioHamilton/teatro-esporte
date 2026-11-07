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
  "rounded-2xl px-[22px] py-3.5 text-[17.6px] font-semibold tracking-[-0.03em] transition-all hover:bg-link-hover";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 1);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-10 flex h-[113px] items-center justify-between px-[calc(80px+var(--ox))] transition-colors ${
        scrolled ? "border-b border-black/20 bg-white" : ""
      }`}
    >
      <a href="#top" aria-label="Teatro Esporte">
        <Brand />
      </a>
      <nav className="flex items-center gap-[5px]">
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
    </header>
  );
};

export default Navbar;
