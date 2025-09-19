import Image from "next/image";
import * as SC from "@styles/home.styled";
import Head from "next/head";
import { Menu } from "@components/Menu/Menu";

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
					content="https://github.com/AntonioHamilton/teatro-esporte/blob/master/public/images/teatro-esporte-logo.png"
				/>
			</Head>
			<SC.Main>
				<Menu />
				<SC.Container>
					<SC.TextBlock>
						<SC.Title>
							Teatro Esporte: A Escola de Improviso em Aracaju
						</SC.Title>
						<SC.Subtitle>
							Melhore sua comunicação e aumente seu potencial criativo através
							de nossas aulas de improvisação e espetáculos de comédia.
						</SC.Subtitle>
						<SC.ButtonGroup>
							<SC.Button href="/turmas" variant="primary">
								Conheça Nossas Aulas de Improviso
							</SC.Button>
							{/* <SC.Button href="/tickets" variant="secondary">
							Compre Ingressos para Nossos Espetáculos
						</SC.Button> */}
						</SC.ButtonGroup>
					</SC.TextBlock>
					<SC.ImageWrapper>
						<Image
							src="/images/bg1.png"
							alt="Grupo de atores da companhia Teatro Esporte de Aracaju em uma aula de teatro de Improviso."
							width={500}
							height={500}
						/>
					</SC.ImageWrapper>
				</SC.Container>
			</SC.Main>
		</>
	);
}
