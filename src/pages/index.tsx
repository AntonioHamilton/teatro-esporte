import * as SC from "@styles/home.styled";
import Head from "next/head";
import { Menu } from "@components/Menu/Menu";
import { Header } from "@components/Header/Header";
import { About } from "@components/About/About";
import { Teachers } from "@components/Teachers/Teachers";
import { Footer } from "@components/Footer/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>Teatro Esporte: A Escola de Teatro e Improviso em Aracaju</title>
				<meta
					property="description"
					content="Melhore sua comunicação e aumente seu potencial criativo através de nossas aulas de teatro, improvisação e espetáculos de comédia."
				/>
				{/* Facebook, Whatsapp, Instagram, Linkedin... */}
				<meta
					property="og:title"
					content="Teatro Esporte: A Escola de Teatro em Aracaju"
				/>
				<meta
					property="og:description"
					content="Melhore sua comunicação e aumente seu potencial criativo através de nossas aulas de teatro, improvisação e espetáculos de comédia."
				/>
				<meta property="og:locale" content="pt_BR" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.teatro-esporte.com/" />
				{/* Twitter Cards */}
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<SC.Main>
				<Menu />
				<Header />
				<About />
				<Teachers />
				<Footer />
			</SC.Main>
		</>
	);
}
