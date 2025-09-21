import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="pt-BR">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="google-site-verification"
					content="-b0xQpqA7_wzAeTp13m-qkfFHKSqt0P7hrbJQB4WnwA"
				/>
				<meta
					property="twitter:image"
					content="/images/teatro-esporte-logo.png"
				/>
				<meta
					name="description"
					content="Teatro Esporte: A Escola de Teatro em Aracaju"
				/>
				<meta property="og:image" content="/images/teatro-esporte-logo.png" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
