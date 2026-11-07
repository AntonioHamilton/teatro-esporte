import academia from "@/assets/academia-despertar-criativo.webp";
import espetaculo from "@/assets/espetaculo1.webp";
import palhaco from "@/assets/palhaco-biruta.webp";
import { whatsapp } from "@/lib/whatsapp";

const shows = [
  {
    title: "Despertar Criativo",
    day: "SÁB",
    date: "14",
    month: "MAR",
    time: "14h - 14/03/2026",
    image: academia,
    description: "Workshop de teatro para iniciantes. Vagas limitadas!",
  },
  {
    title: "Quem Ri Por Último",
    day: "SÁB",
    date: "07",
    month: "MAR",
    time: "19h30 - 07/03/2026",
    image: espetaculo,
    description: "Batalha de improvisadores. Duas equipes, uma plateia e zero roteiro.",
  },
  {
    title: "Noite do Improviso",
    day: "SÁB",
    date: "06",
    month: "DEZ",
    time: "20h - 06/12/2025",
    image: palhaco,
    description: "Comédia criada ao vivo a partir das sugestões da plateia.",
  },
];

const ShowsSection = () => (
  <section id="espetaculos" className="relative px-6 py-20 md:px-10 xl:h-[640px] xl:px-0 xl:py-0">
    <h2 className="mb-10 font-serif text-[36px] font-semibold leading-[1.1] tracking-[-0.01em] md:text-[42px] xl:absolute xl:left-[calc(var(--ox)+120px)] xl:top-[121px] xl:mb-0 xl:text-[46.4px] xl:leading-[46.4px]">
      Próximos jogos
    </h2>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:absolute xl:left-[calc(var(--ox)+120px)] xl:top-[219px] xl:w-[1040px] xl:gap-6">
      {shows.map((show) => (
        <a
          key={show.title}
          href={whatsapp(`Olá, quero participar do ${show.title}!`)}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-xl bg-white transition-transform hover:-translate-y-1"
        >
          <div className="relative h-[220px]">
            <img src={show.image} alt={show.title} className="h-full w-full object-cover" />
            <div className="absolute right-3 top-3 flex min-w-14 flex-col items-center rounded-[10px] bg-brand px-2.5 py-2 text-center uppercase leading-[1.1] text-ink">
              <span className="text-xs font-semibold">{show.day}</span>
              <strong className="text-2xl font-bold">{show.date}</strong>
              <span className="text-xs font-semibold">{show.month}</span>
            </div>
          </div>
          <div className="p-4 text-ink">
            <h3 className="mb-1.5 text-[18px] font-semibold leading-[21.6px]">{show.title}</h3>
            <p className="mb-1 text-xs text-[#888]">{show.time}</p>
            <p className="mb-2 text-sm leading-[19.6px] text-[#666]">{show.description}</p>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default ShowsSection;
