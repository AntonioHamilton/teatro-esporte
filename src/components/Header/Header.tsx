import Image from "next/image";
import * as SC from "./Header.styled";

export const Header = () => (
	<SC.Container>
		<SC.TextBlock>
			<SC.Title>Teatro Esporte: A Escola de Improviso em Aracaju</SC.Title>
			<SC.Subtitle>
				Melhore sua comunicação e aumente seu potencial criativo através de
				nossas aulas de improvisação e espetáculos de comédia.
			</SC.Subtitle>
			<SC.ButtonGroup>
				<SC.Button href="/turmas" variant="primary">
					Conheça Nossas Aulas de Improviso
				</SC.Button>
				{/* <SC.Button href="/tickets" variant="secondary">
							Compre Ingressos para Nossos Espetáculos
						</SC.Button> */}
			</SC.ButtonGroup>
		</SC.TextBlock>
		<SC.ImageWrapper>
			<Image
				src="/images/bg1.png"
				alt="Grupo de atores da companhia Teatro Esporte de Aracaju em uma aula de teatro de Improviso."
				fetchPriority="high"
				priority
				width={424}
				height={600}
			/>
		</SC.ImageWrapper>
	</SC.Container>
);
