import { events, pastEvents } from "@/constants/events";
import { useTranslation } from "@/hooks/useTranslation";
import { EventsTranslations } from "@/translations/Events";
import { EventCard } from "@components/EventCard/EventCard";
import { Footer } from "@components/Footer/Footer";
import { Menu } from "@components/Menu/Menu";
import * as SC from "@styles/espetaculos.styled";
import Head from "next/head";

const Espetaculos = () => {
	const { language } = useTranslation();

	return (
		<>
			<Head>
				<title>
					Teatro Esporte | Shows de Teatro, Improviso e Comédia em Aracaju
				</title>
				<meta
					name="description"
					content="Confira a agenda de shows de teatro, improviso e comédia do Teatro Esporte em Aracaju. Descubra nossos próximos eventos e reveja os espetáculos passados."
				/>

				{/* Facebook, Whatsapp, Instagram, Linkedin... */}
				<meta
					property="og:title"
					content="Teatro Esporte | Shows de Teatro, Improviso e Comédia em Aracaju"
				/>
				<meta
					name="og:description"
					content="Confira a agenda de shows de teatro, improviso e comédia do Teatro Esporte em Aracaju. Descubra nossos próximos eventos e reveja os espetáculos passados."
				/>
				<meta property="og:locale" content="pt_BR" />
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://www.teatro-esporte.com/events"
				/>
				{/* Twitter Cards */}
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<Menu />
			<SC.MainContainer>
				{events[language].length > 0 && (
					<>
						<SC.Title>
							{EventsTranslations[language].section_title_next}
						</SC.Title>
						<SC.CardSection>
							{events[language].map((event) => (
								<EventCard key={event.title} {...event} />
							))}
						</SC.CardSection>
					</>
				)}
				{pastEvents[language].length > 0 && (
					<>
						<SC.Title>
							{EventsTranslations[language].section_title_past}
						</SC.Title>
						<SC.CardSection>
							{pastEvents[language].map((event) => (
								<EventCard key={event.title} {...event} />
							))}
						</SC.CardSection>
					</>
				)}
			</SC.MainContainer>
			<Footer />
		</>
	);
};

export default Espetaculos;
