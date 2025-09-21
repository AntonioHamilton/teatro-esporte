import { events, pastEvents } from "@/constants/events";
import { EventCard } from "@components/EventCard/EventCard";
import { Footer } from "@components/Footer/Footer";
import { Menu } from "@components/Menu/Menu";
import * as SC from "@styles/espetaculos.styled";
import Head from "next/head";

const Espetaculos = () => (
	<>
		<Head>
			<title>
				Teatro Esporte | Shows de Teatro, Improviso e Comédia em Aracaju
			</title>
			<meta
				name="description"
				content="Confira a agenda de shows de teatro, improviso e comédia do Teatro Esporte em Aracaju. Descubra nossos próximos eventos e reveja os espetáculos passados."
			/>
			<link rel="canonical" href="https://teatro-esporte.com/espetaculos" />
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
				content="https://teatro-esporte.com/espetaculos"
			/>
			{/* Twitter Cards */}
			<meta name="twitter:card" content="summary_large_image" />
		</Head>
		<Menu />
		<SC.MainContainer>
			{events.length > 0 && (
				<>
					<SC.Title>Próximos Eventos</SC.Title>
					<SC.CardSection>
						{events.map((event) => (
							<EventCard key={event.title} {...event} />
						))}
					</SC.CardSection>
				</>
			)}
			{pastEvents.length > 0 && (
				<>
					<SC.Title>Eventos Passados</SC.Title>
					<SC.CardSection>
						{pastEvents.map((event) => (
							<EventCard key={event.title} {...event} />
						))}
					</SC.CardSection>
				</>
			)}
		</SC.MainContainer>
		<Footer />
	</>
);

export default Espetaculos;
