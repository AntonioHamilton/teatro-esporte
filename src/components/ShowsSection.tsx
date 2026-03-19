import { motion } from "framer-motion";
import espetaculoImage from "@/assets/espetaculo1.webp";
import palhacoImage from "@/assets/palhaco-biruta.webp";
import academiaImage from "@/assets/academia-despertar-criativo.webp";

const shows = [
  {
    title: "Quem Ri Por Último",
    date: "10",
    month: "MAI",
    day: "SÁB",
    time: "19h30",
    image: espetaculoImage,
    description: "Batalha de improvisadores. Duas equipes, uma plateia e zero roteiro.",
  },
  {
    title: "Noite do Improviso",
    date: "24",
    month: "MAI",
    day: "SÁB",
    time: "20h",
    image: palhacoImage,
    description: "Comédia criada ao vivo a partir das sugestões da plateia.",
  },
  {
    title: "Despertar Criativo",
    date: "17",
    month: "MAI",
    day: "SÁB",
    time: "14h",
    image: academiaImage,
    description: "Workshop de teatro para iniciantes. Vagas limitadas!",
  },
];

const ShowsSection = () => {
  return (
    <section id="espetaculos" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            Agenda
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Próximos jogos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shows.map((show, i) => (
            <motion.div
              key={show.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.2, 0, 0, 1] }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl overflow-hidden shadow-card cursor-pointer"
              style={{ aspectRatio: "3/4" }}
            >
              <img
                src={show.image}
                alt={show.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, transparent 30%, hsl(0 0% 11% / 0.95))",
                }}
              />

              {/* Date badge */}
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-xl px-3 py-2 text-center leading-tight">
                <span className="block text-xs font-medium">{show.day}</span>
                <span className="block text-2xl font-bold">{show.date}</span>
                <span className="block text-xs font-medium">{show.month}</span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-muted-foreground">{show.time}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{show.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{show.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/5579991486259?text=Quero%20garantir%20meu%20ingresso!"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-sm font-medium hover:underline underline-offset-4"
          >
            Garanta seu lugar na arquibancada →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowsSection;
