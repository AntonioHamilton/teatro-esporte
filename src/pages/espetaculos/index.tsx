import { events, pastEvents } from "@/constants/events";
import { EventCard } from "@components/EventCard/EventCard";
import { Footer } from "@components/Footer/Footer";
import { Menu } from "@components/Menu/Menu";
import * as SC from "@styles/espetaculos.styled";

const Espetaculos = () => (
	<>
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
