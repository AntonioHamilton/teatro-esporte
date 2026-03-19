import { Instagram, MapPin, Phone, Youtube, Music, Heart } from "lucide-react";
import logo from "@/assets/teatro-esporte-logo.png";

const Footer = () => {
  return (
    <footer id="contato" className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Teatro Esporte" className="h-10 w-10" />
              <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                TEATRO<span className="text-primary">ESPORTE</span>
              </h3>
            </div>
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
                href="https://www.instagram.com/teatroesporte/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram size={16} strokeWidth={1.5} /> @teatroesporte
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=557991486259&text=Ol%C3%A1%2C%20quero%20aprender%20improviso!&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone size={16} strokeWidth={1.5} /> (79) 9 9148-6259
              </a>
              <a
                href="https://www.youtube.com/channel/UCHqoO2ynN7cOCBgz7GHKEEw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Youtube size={16} strokeWidth={1.5} /> YouTube
              </a>
              <a
                href="https://open.spotify.com/show/71JYWIWmwlwXxRRjqRXsXI?nd=1&dlsi=e7e2bc364eb24b98"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Music size={16} strokeWidth={1.5} /> Spotify
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} strokeWidth={1.5} /> Aracaju, SE
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex items-center justify-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Teatro Esporte. Todos os direitos reservados.
          </p>
          <a
            href="https://donate.stripe.com/28E9AS93ydLZ6l7bKJfbq00"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground/30 hover:text-primary/60 transition-colors"
            title="Apoie o Teatro Esporte"
          >
            <Heart size={14} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
