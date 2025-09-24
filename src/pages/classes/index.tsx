import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import * as SC from "@styles/turmas.styled";
import { Menu } from "@components/Menu/Menu";
import { adultClasses, kidsClasses, pastClasses } from "@/constants/classes";
import { Footer } from "@components/Footer/Footer";
import { useTranslation } from "@/hooks/useTranslation";
import { ClassesTranslations } from "@/translations/Classes";

export default function Turmas() {
	const { language } = useTranslation();

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
				<meta
					property="og:url"
					content="https://www.teatro-esporte.com/classes"
				/>
				<meta property="og:locale" content="pt_BR" />
				{/* Twitter Cards */}
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<Menu />
			<SC.ClassesMain>
				<SC.SectionContainer>
					<SC.SectionTitle>
						{ClassesTranslations[language].section_title}
					</SC.SectionTitle>
					{adultClasses[language].length > 0 && (
						<>
							<SC.SectionHeader>
								{ClassesTranslations[language].section_header_adults}
							</SC.SectionHeader>
							<SC.CardsGrid>
								{adultClasses[language].map((cl, index) => (
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
													<SC.ButtonLink>
														{ClassesTranslations[language].button_enroll}
													</SC.ButtonLink>
												</Link>
											)}
										</SC.CardContent>
									</SC.ClassCard>
								))}
							</SC.CardsGrid>
						</>
					)}

					{kidsClasses[language].length > 0 && (
						<>
							<SC.SectionHeader>
								{ClassesTranslations[language].section_header_kids}
							</SC.SectionHeader>
							<SC.CardsGrid>
								{kidsClasses[language].map((cl) => (
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
														{cl.tags.map((tag: string) => (
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
													<SC.ButtonLink>
														{ClassesTranslations[language].button_enroll}
													</SC.ButtonLink>
												</Link>
											)}
										</SC.CardContent>
									</SC.ClassCard>
								))}
							</SC.CardsGrid>
						</>
					)}
				</SC.SectionContainer>
				{pastClasses[language].length > 0 && (
					<SC.PastProjectsSection>
						<SC.PastProjectsTitle>
							{ClassesTranslations[language].section_header_past}
						</SC.PastProjectsTitle>
						<SC.CardsGrid>
							{pastClasses[language].map((cl) => (
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
												<SC.ButtonLink>
													{ClassesTranslations[language].button_see_more}
												</SC.ButtonLink>
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
