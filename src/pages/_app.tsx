import StyledComponentsRegistry from "@/lib/registry";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

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
			<Component {...pageProps} />
		</StyledComponentsRegistry>
	);
}
