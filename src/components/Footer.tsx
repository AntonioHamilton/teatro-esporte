import { Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-xl font-bold tracking-tight text-foreground mb-4">
              TEATRO<span className="text-primary">ESPORTE</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A principal companhia de teatro de improvisação em Aracaju.
              Espetáculos, cursos e workshops corporativos.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <div className="flex flex-col gap-3">
              <a href="#espetaculos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Espetáculos</a>
              <a href="#cursos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cursos</a>
              <a href="#sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sobre</a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Contato
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/teatroesporte"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram size={16} strokeWidth={1.5} /> @teatroesporte
              </a>
              <a
                href="mailto:contato@teatro-esporte.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={16} strokeWidth={1.5} /> contato@teatro-esporte.com
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} strokeWidth={1.5} /> Aracaju, SE
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Teatro Esporte. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
