import StyledComponentsRegistry from "@/lib/registry";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta
					name="google-site-verification"
					content="-b0xQpqA7_wzAeTp13m-qkfFHKSqt0P7hrbJQB4WnwA"
				/>
				<meta
					name="description"
					content="Melhore sua comunicação e aumente seu potencial criativo através de nossas aulas de improvisação e espetáculos de comédia."
				/>

				{/* Open Graph (para WhatsApp, Facebook, LinkedIn etc.) */}
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

				{/* Twitter Cards */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:url" content="https://teatro-esporte.vercel.app/" />
				<meta
					name="twitter:title"
					content="Teatro Esporte: A Escola de Improviso em Aracaju"
				/>
				<meta
					name="twitter:description"
					content="Melhore sua comunicação e aumente seu potencial criativo através de nossas aulas de improvisação e espetáculos de comédia."
				/>
				<meta
					name="twitter:image"
					content="https://raw.githubusercontent.com/AntonioHamilton/teatro-esporte/refs/heads/master/public/images/teatro-esporte-logo.png"
				/>
			</Head>
			<body>
				<StyledComponentsRegistry>
					<Main />
					<NextScript />
				</StyledComponentsRegistry>
			</body>
		</Html>
	);
}
