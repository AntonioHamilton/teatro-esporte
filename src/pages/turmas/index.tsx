import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import * as SC from "@styles/turmas.styled";
import { Menu } from "@components/Menu/Menu";

type Classes = {
	title: string;
	description: string;
	imageSrc: string;
	imageAlt: string;
	href?: string;
};

export default function Turmas() {
	const adultClasses: Classes[] = [
		{
			title: "Academia Despertar Criativo",
			description:
				"Onde a mágica do improviso começa. Aprenda os fundamentos, como aceitação, espontaneidade e a arte de construir uma cena do zero. Ideal para iniciantes.",
			imageSrc: "/images/academia-despertar-criativo2025.1.jpg",
			imageAlt:
				"Academia despertar criativo: Adultos em uma aula de improviso, jogando e se divertindo"
		},
		{
			title: "Teatro Esporte Club",
			description:
				"A turma secreta, nem tão secreta assim. Continue a aprimorar suas habilidades com exercícios mais avançados, foco em personagens e narrativas complexas. Para quem já tem experiência básica.",
			imageSrc: "/images/teatro-esporte-club.jpg",
			imageAlt: "Adultos treinando improviso, com foco em expressão corporal"
		}
	];

	const kidsClasses: Classes[] = [
		// {
		// 	title: "Teatro para Crianças e Jovens",
		// 	description:
		// 		"Através de jogos lúdicos, as crianças desenvolvem a criatividade, a capacidade de comunicação e a confiança, tudo de forma leve e divertida.",
		// 	imageSrc: "/images/impro-criancas.jpg",
		// 	imageAlt: "Crianças em uma aula de teatro, sorrindo e brincando",
		// 	href: "/turmas/criancas"
		// }
	];

	const pastClasses: Classes[] = [
		{
			title: "Workshop Despertar Criativo",
			description:
				"Uma retrospectiva de nosso workshop intensivo, que explorou comédia física e improviso corporal. Uma experiência inesquecível!",
			imageSrc: "/images/workshop-despertar-criativo1.jpg",
			imageAlt: "Turma de improviso passada, posando para uma foto de grupo",
			href: "https://www.instagram.com/stories/highlights/18002377969441573/"
		},
		{
			title: "Workshop Palhaço Interior",
			description:
				"✨ Desperte seu Palhaço Interior! 🤡. Você já sentiu aquela vontade de rir sem motivo, de soltar o que tem de mais espontâneo e verdadeiro dentro de você?",
			imageSrc: "/images/workshop-palhaco-interior1.jpg",
			imageAlt: "Turma de improviso passada, posando para uma foto de grupo",
			href: "https://www.instagram.com/p/DMGtt2DyK7R/"
		}
	];

	return (
		<>
			<Head>
				<title>Teatro Esporte | Turmas de Improvisação em Aracaju</title>
				<meta
					name="description"
					content="Conheça nossas turmas de teatro de improvisação para adultos e crianças em Aracaju. Encontre a aula perfeita para desenvolver sua criatividade e comunicação."
				/>
				<meta
					property="og:image"
					content="https://github.com/AntonioHamilton/teatro-esporte/blob/master/public/images/teatro-esporte-logo.png"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://seudominio.com" />
			</Head>
			<Menu variant={"dark"} />
			<SC.SectionContainer>
				<SC.SectionTitle>Nossas Turmas</SC.SectionTitle>

				{adultClasses.length > 0 && (
					<>
						<SC.SectionHeader>Adultos</SC.SectionHeader>
						{adultClasses.map((cl, index) => (
							<SC.ClassCard key={cl.title} reverse={index % 2 !== 0}>
								<SC.ImageWrapper>
									<Image
										src={cl.imageSrc}
										alt={cl.imageAlt}
										width={800}
										height={500}
										objectFit="cover"
									/>
								</SC.ImageWrapper>
								<SC.TextContent>
									<SC.CardTitle>{cl.title}</SC.CardTitle>
									<SC.CardDescription>{cl.description}</SC.CardDescription>
									{cl.href && (
										<Link href={cl.href} passHref legacyBehavior>
											<SC.ButtonLink>Inscreva-se Agora</SC.ButtonLink>
										</Link>
									)}
								</SC.TextContent>
							</SC.ClassCard>
						))}
					</>
				)}

				{kidsClasses.length > 0 && (
					<>
						<SC.SectionHeader>Crianças</SC.SectionHeader>
						{kidsClasses.map((cl) => (
							<SC.ClassCard key={cl.title}>
								<SC.ImageWrapper>
									<Image
										src={cl.imageSrc}
										alt={cl.imageAlt}
										width={800}
										height={500}
										objectFit="cover"
									/>
								</SC.ImageWrapper>
								<SC.TextContent>
									<SC.CardTitle>{cl.title}</SC.CardTitle>
									<SC.CardDescription>{cl.description}</SC.CardDescription>
									{cl.href && (
										<Link href={cl.href} passHref legacyBehavior>
											<SC.ButtonLink>Inscreva-se Agora</SC.ButtonLink>
										</Link>
									)}
								</SC.TextContent>
							</SC.ClassCard>
						))}
					</>
				)}

				{pastClasses.length > 0 && (
					<>
						<SC.SectionHeader>Projetos Passados</SC.SectionHeader>
						{pastClasses.map((cl) => (
							<SC.ClassCard key={cl.title}>
								<SC.ImageWrapper>
									<Image
										src={cl.imageSrc}
										alt={cl.imageAlt}
										width={800}
										height={500}
										objectFit="cover"
									/>
								</SC.ImageWrapper>
								<SC.TextContent>
									<SC.CardTitle>{cl.title}</SC.CardTitle>
									<SC.CardDescription>{cl.description}</SC.CardDescription>
									{cl.href && (
										<Link href={cl.href} passHref legacyBehavior>
											<SC.ButtonLink>Ver Fotos</SC.ButtonLink>
										</Link>
									)}
								</SC.TextContent>
							</SC.ClassCard>
						))}
					</>
				)}
			</SC.SectionContainer>
		</>
	);
}
