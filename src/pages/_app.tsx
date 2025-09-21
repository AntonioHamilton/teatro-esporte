import StyledComponentsRegistry from "@/lib/registry";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { Oswald } from "next/font/google";
import styled from "styled-components";

const oswald = Oswald({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-oswald",
	weight: ["200", "300", "400", "500", "600", "700"]
});

const Layout = styled.div`
	font-family: var(--font-oswald);
`;

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const canonicalUrl = `https://www.teatro-esporte.com${
		router.asPath === "/" ? "" : router.asPath
	}`.replace(/\/$/, "");

	return (
		<StyledComponentsRegistry>
			<Head>
				<link rel="canonical" href={canonicalUrl} />
			</Head>
			<Layout className={oswald.variable}>
				<Component {...pageProps} />
			</Layout>
		</StyledComponentsRegistry>
	);
}
