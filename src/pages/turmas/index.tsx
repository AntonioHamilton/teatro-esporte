import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import * as SC from "@styles/turmas.styled";
import { Menu } from "@components/Menu/Menu";
import { adultClasses, kidsClasses, pastClasses } from "@/constants/classes";
import { Footer } from "@components/Footer/Footer";

export default function Turmas() {
	return (
		<>
			<Head>
				<title>
					Teatro Esporte | Turmas de Teatro e Improvisação em Aracaju
				</title>
				<meta
					name="description"
					content="Conheça nossas turmas de teatro e improvisação para adultos e crianças em Aracaju. Encontre a aula perfeita para desenvolver sua criatividade e comunicação."
				/>
				<link rel="canonical" href="https://teatro-esporte.com/turmas" />
				{/* Facebook, Whatsapp, Instagram, Linkedin... */}
				<meta
					name="og:title"
					content="Teatro Esporte | Turmas de Teatro e Improvisação em Aracaju"
				/>
				<meta
					name="og:description"
					content="Conheça nossas turmas de teatro e improvisação para adultos e crianças em Aracaju. Encontre a aula perfeita para desenvolver sua criatividade e comunicação."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://teatro-esporte.com/turmas" />
				<meta property="og:locale" content="pt_BR" />
				{/* Twitter Cards */}
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<Menu />
			<SC.ClassesMain>
				<SC.SectionContainer>
					<SC.SectionTitle>Nossas Turmas</SC.SectionTitle>
					{adultClasses.length > 0 && (
						<>
							<SC.SectionHeader>Adultos</SC.SectionHeader>
							<SC.CardsGrid>
								{adultClasses.map((cl, index) => (
									<SC.ClassCard key={cl.title}>
										<SC.CardImageSection>
											<Image
												src={cl.imageSrc}
												alt={cl.imageAlt}
												width={800}
												height={500}
											/>
										</SC.CardImageSection>
										<SC.CardContent>
											<div>
												<SC.CardTitle>{cl.title}</SC.CardTitle>
												{cl.tags && (
													<SC.TagsContainer>
														{cl.tags.map((tag) => (
															<SC.Tag key={tag}>{tag}</SC.Tag>
														))}
													</SC.TagsContainer>
												)}
												<SC.CardDescription>
													{cl.description}
												</SC.CardDescription>
											</div>
											{cl.href && (
												<Link href={cl.href} passHref legacyBehavior>
													<SC.ButtonLink>Inscreva-se Agora</SC.ButtonLink>
												</Link>
											)}
										</SC.CardContent>
									</SC.ClassCard>
								))}
							</SC.CardsGrid>
						</>
					)}

					{kidsClasses.length > 0 && (
						<>
							<SC.SectionHeader>Crianças e Jovens</SC.SectionHeader>
							<SC.CardsGrid>
								{kidsClasses.map((cl) => (
									<SC.ClassCard key={cl.title}>
										<SC.CardImageSection>
											<Image
												src={cl.imageSrc}
												alt={cl.imageAlt}
												width={800}
												height={500}
											/>
										</SC.CardImageSection>
										<SC.CardContent>
											<div>
												<SC.CardTitle>{cl.title}</SC.CardTitle>
												{cl.tags && (
													<SC.TagsContainer>
														{cl.tags.map((tag) => (
															<SC.Tag key={tag}>{tag}</SC.Tag>
														))}
													</SC.TagsContainer>
												)}
												<SC.CardDescription>
													{cl.description}
												</SC.CardDescription>
											</div>
											{cl.href && (
												<Link href={cl.href} passHref legacyBehavior>
													<SC.ButtonLink>Inscreva-se Agora</SC.ButtonLink>
												</Link>
											)}
										</SC.CardContent>
									</SC.ClassCard>
								))}
							</SC.CardsGrid>
						</>
					)}
				</SC.SectionContainer>
				{pastClasses.length > 0 && (
					<SC.PastProjectsSection>
						<SC.PastProjectsTitle>Projetos Passados</SC.PastProjectsTitle>
						<SC.CardsGrid>
							{pastClasses.map((cl) => (
								<SC.ClassCard key={cl.title}>
									<SC.CardImageSection>
										<Image
											src={cl.imageSrc}
											alt={cl.imageAlt}
											width={800}
											height={500}
										/>
									</SC.CardImageSection>
									<SC.CardContent>
										<div>
											<SC.CardTitle>{cl.title}</SC.CardTitle>
											{cl.tags && (
												<SC.TagsContainer>
													{cl.tags.map((tag) => (
														<SC.Tag key={tag}>{tag}</SC.Tag>
													))}
												</SC.TagsContainer>
											)}
											<SC.CardDescription>{cl.description}</SC.CardDescription>
										</div>
										{cl.href && (
											<Link href={cl.href} passHref legacyBehavior>
												<SC.ButtonLink>Ver Fotos</SC.ButtonLink>
											</Link>
										)}
									</SC.CardContent>
								</SC.ClassCard>
							))}
						</SC.CardsGrid>
					</SC.PastProjectsSection>
				)}
			</SC.ClassesMain>
			<Footer />
		</>
	);
}
