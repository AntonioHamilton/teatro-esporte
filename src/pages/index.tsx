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
				<title>Teatro Esporte: A Escola de Improviso em Aracaju</title>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://teatro-esporte.vercel.app/" />
				<meta
					property="og:title"
					content="Teatro Esporte: A Escola de Improviso em Aracaju"
				/>
				<meta
					property="og:description"
					content="Melhore sua comunicação e aumente seu potencial criativo através de nossas aulas de improvisação e espetáculos de comédia."
				/>
				<meta
					property="og:image"
					content="https://raw.githubusercontent.com/AntonioHamilton/teatro-esporte/refs/heads/master/public/images/teatro-esporte-logo.png"
				/>
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
