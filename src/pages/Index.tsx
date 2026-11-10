import { useEffect, useState } from "react";
import Seo from "@/components/Seo";

const IMG = "/images/teatro-esporte";

const whatsapp = (text: string) =>
  `https://api.whatsapp.com/send/?phone=557991486259&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;

const shows = [
  {
    title: "Despertar Criativo",
    day: "SÁB",
    date: "14",
    month: "MAR",
    time: "14h - 14/03/2026",
    image: `${IMG}/academia-despertar-criativo.webp`,
    description: "Workshop de teatro para iniciantes. Vagas limitadas!",
  },
  {
    title: "Quem Ri Por Último",
    day: "SÁB",
    date: "07",
    month: "MAR",
    time: "19h30 - 07/03/2026",
    image: `${IMG}/espetaculo1.webp`,
    description: "Batalha de improvisadores. Duas equipes, uma plateia e zero roteiro.",
  },
  {
    title: "Noite do Improviso",
    day: "SÁB",
    date: "06",
    month: "DEZ",
    time: "20h - 06/12/2025",
    image: `${IMG}/palhaco-biruta.webp`,
    description: "Comédia criada ao vivo a partir das sugestões da plateia.",
  },
];

const faqs = [
  {
    q: "Sou tímido. Esse curso é pra mim?",
    a: "Com certeza! A maioria dos nossos alunos começa tímida. O improviso é justamente um espaço seguro para você se soltar, sem julgamentos.",
  },
  {
    q: "Preciso ter experiência para começar?",
    a: "Não! Nossas turmas para iniciantes são pensadas para quem nunca pisou em um palco. Você vai aprender do zero.",
  },
  {
    q: "Mas eu nem quero ser ator...",
    a: "Perfeito. A maioria dos nossos alunos não quer ser ator. Eles vêm para melhorar a comunicação, destravar a criatividade e se divertir.",
  },
  {
    q: "Como funcionam os espetáculos?",
    a: "São shows de comédia ao vivo onde tudo é criado na hora, a partir das sugestões da plateia. Cada noite é única e irrepetível.",
  },
  {
    q: "Vocês fazem workshops para empresas?",
    a: "Sim! Nosso teatro corporativo trabalha habilidades como liderança, comunicação, escuta ativa e trabalho em equipe através de dinâmicas de improviso.",
  },
];

const Arrow = () => (
  <svg className="arrow" width="22" height="15" viewBox="0 0 22 15" aria-hidden="true">
    <path
      d="M1 7.5h19M13.5 1l6.5 6.5-6.5 6.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Brand = () => (
  <span className="brand">
    <img src={`${IMG}/icone.png`} alt="" />
    <span className="brand-name">
      TEATRO<span>ESPORTE</span>
    </span>
  </span>
);

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 1);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let tops: number[] = [];

    const update = () => {
      const mid = window.innerHeight / 2;
      items.forEach((el, i) => {
        const speed = Number(el.dataset.parallax);
        const max = Number(el.dataset.parallaxMax ?? 120);
        const offset = (tops[i] - window.scrollY - mid) * speed;
        const clamped = Math.max(-max, Math.min(max, -offset));
        el.style.translate = `0 ${clamped}px`;
      });
    };

    const measure = () => {
      items.forEach((el) => (el.style.translate = "0 0"));
      tops = items.map((el) => {
        const r = el.getBoundingClientRect();
        return r.top + window.scrollY + r.height / 2;
      });
      update();
    };

    measure();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div className="page">
      <Seo
        title="Teatro Esporte: A Escola de Teatro e Improviso em Aracaju"
        description="Melhore sua comunicação e aumente seu potencial criativo através de nossas aulas de teatro, improvisação e espetáculos de comédia."
        url="https://www.teatro-esporte.com/"
        keywords="teatro esporte, escola de teatro em aracaju, curso de teatro em aracaju, improvisação, comédia"
      />
      <header className={scrolled ? "nav nav-scrolled" : "nav"}>
        <a className="logo" href="#top" aria-label="Teatro Esporte">
          <Brand />
        </a>
        <button
          className={menuOpen ? "menu-toggle open" : "menu-toggle"}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} onClick={() => setMenuOpen(false)}>
          <a href="#espetaculos">Espetáculos</a>
          <a href="#cursos">Cursos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
          <a
            className="nav-cta"
            href={whatsapp("Olá, quero improvisar!")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero Improvisar
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="rings rings-hero" />
        <p className="abs eyebrow">Improviso • Teatro • Aracaju</p>
        <div className="hero-text">
          <h1>
            Onde o teatro
            <br />
            vira <em>jogo.</em>
          </h1>
          <div className="hero-actions">
            <a className="btn" href="#espetaculos">
              Ver Próximos Jogos
              <Arrow />
            </a>
            <a className="link" href="#cursos">
              Quero Aprender
            </a>
          </div>
        </div>
        <figure className="hero-figure">
          <span className="dot dot-1" />
          <span className="dot dot-2" />
          <div className="hero-media">
            <img src={`${IMG}/impro-masters.webp`} alt="Espetáculo de improviso do Teatro Esporte" />
          </div>
        </figure>
      </section>

      <section className="statement">
        <p className="abs text-46" style={{ top: 51, left: "calc(var(--ox) + 120px)", width: 551 }}>
          Melhore sua comunicação e aumente seu potencial criativo.
        </p>
        <div className="abs beam" />
        <img className="abs silhouette sil-dive" src="/images/ator_reverencia_mascara.png" alt="" data-parallax="0.25" data-parallax-max="40" />
        <img className="abs silhouette sil-land" src="/images/ator_terno_braco_levantado_sem_mascara.png" alt="" data-parallax="0.15" data-parallax-max="40" />
        <span className="abs hole hole-land" />
        <p className="abs text-46" style={{ top: 602, left: "calc(var(--ox) + 609px)", width: 511 }}>
          Nossa escola oferece aulas para todos os níveis, do <u>iniciante</u> ao <u>avançado</u>.
        </p>
      </section>

      <section className="band">
        <p className="abs text-37" style={{ top: 424, left: "calc(50% - 411px)", width: 822, textAlign: "center" }}>
          Acreditamos que a espontaneidade e a criatividade são ferramentas essenciais para o
          desenvolvimento pessoal e profissional.
        </p>
        <p
          className="abs text-43 band-highlight"
          style={{ top: 656, left: "calc(50% - 411px)", width: 822, textAlign: "center" }}
        >
          A principal companhia de improviso de Aracaju.
        </p>
      </section>

      <section className="courses" id="espetaculos">
        <h2 className="abs courses-title">Próximos jogos</h2>
        <div className="shows">
          {shows.map((show) => (
            <a
              key={show.title}
              className="show-card"
              href={whatsapp(`Olá, quero participar do ${show.title}!`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="show-img">
                <img src={show.image} alt={show.title} />
                <div className="show-date">
                  <span>{show.day}</span>
                  <strong>{show.date}</strong>
                  <span>{show.month}</span>
                </div>
              </div>
              <div className="show-body">
                <h3>{show.title}</h3>
                <p className="meta">{show.time}</p>
                <p>{show.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="cta-image">
        <img className="cta-photo" data-parallax="0.08" data-parallax-max="80" src={`${IMG}/espetaculo1.webp`} alt="Espetáculo de improviso do Teatro Esporte" />
        <p className="abs text-46 white" style={{ top: 462, left: "calc(var(--ox) + 324px)", width: 633 }}>
          Comédia criada ao vivo a partir das sugestões da plateia.
        </p>
      </section>

      <section className="cta" id="cursos">
        <div className="rings rings-cta" />
        <span className="abs hole hole-cta" />
        <img className="abs silhouette sil-jump" src="/images/atriz_improviso_vestido.png" alt="" data-parallax="0.3" data-parallax-max="40" />
        <h2 className="abs cta-title">
          Não é sobre ser engraçado.
          <br />
          É sobre estar <em>presente.</em>
        </h2>
        <a
          className="btn abs cta-btn"
          href={whatsapp("Olá, quero saber sobre as turmas!")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Quero me inscrever
          <Arrow />
        </a>
      </section>

      <section className="founder" id="sobre">
        <div className="abs founder-photo">
          <img src={`${IMG}/rodolfo-lisboa.png`} alt="Rodolfo Lisboa" />
        </div>
        <p className="abs founder-name">Teatro Esporte</p>
        <p className="abs founder-role">Aracaju, SE</p>
        <p className="abs founder-bio">
          O Teatro Esporte é a principal companhia de teatro de improvisação em Aracaju. Fundada para
          levar a arte do improviso ao palco e à vida das pessoas.
        </p>
      </section>

      <section className="faq" id="duvidas">
        <h2 className="abs faq-title">Perguntas frequentes</h2>
        <div className="abs faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="footer" id="contato">
        <div className="rings rings-footer" />
        <hr className="abs footer-line" />
        <h2 className="abs footer-title">Teatro Esporte</h2>
        <p className="abs footer-desc">
          A principal companhia de teatro de improvisação em Aracaju. Espetáculos, cursos e workshops
          corporativos.
        </p>
        <div className="abs footer-contact">
          <a href="https://www.instagram.com/teatroesporte/" target="_blank" rel="noopener noreferrer">
            @teatroesporte
          </a>
          <a
            href={whatsapp("Olá, quero aprender improviso!")}
            target="_blank"
            rel="noopener noreferrer"
          >
            (79) 9 9148-6259
          </a>
        </div>
        <nav className="abs footer-links">
          <a href="#espetaculos">Espetáculos</a>
          <a href="#cursos">Cursos</a>
          <a href="#sobre">Sobre</a>
        </nav>
        <a
          className="abs footer-logo"
          href="https://donate.stripe.com/28E9AS93ydLZ6l7bKJfbq00"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Doar para o Teatro Esporte"
        >
          <Brand />
        </a>
      </footer>
    </div>
  );
}
