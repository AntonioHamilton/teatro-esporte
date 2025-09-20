import Image from "next/image";
import * as SC from "./About.styled";

export const About = () => {
	return (
		<SC.AboutSection>
			<SC.Heading>Quem somos?</SC.Heading>
			<SC.ContentWrapper>
				<SC.TextWrapper>
					<SC.Paragraph>
						O Teatro Esporte é a principal companhia de{" "}
						<b>teatro de improvisação</b> em <b>Aracaju</b>. Fundada para levar
						a arte do improviso ao palco e à vida das pessoas, nossa companhia
						acredita que a espontaneidade e a criatividade são ferramentas
						essenciais para o desenvolvimento pessoal e profissional.
					</SC.Paragraph>
					<SC.Paragraph>
						Nossa <b>escola de teatro</b> oferece <b>aulas de improvisação</b>{" "}
						para todas as idades, do iniciante ao avançado, ajudando cada aluno
						a <b>melhorar sua comunicação</b> e{" "}
						<b>aumentar seu potencial criativo</b>. Além de nossos cursos, somos
						conhecidos por nossos <b>espetáculos de comédia</b> interativos, que
						transformam as sugestões da plateia em cenas únicas e hilárias.
					</SC.Paragraph>
					<SC.Paragraph>
						Além do palco, também levamos o <b>teatro corporativo</b> a
						empresas, oferecendo workshops focados em habilidades de liderança e
						trabalho em equipe. No Teatro Esporte, a vida e a arte se encontram
						para criar algo novo a cada instante.
					</SC.Paragraph>
				</SC.TextWrapper>
				<SC.ImageWrapper>
					<Image
						src="/images/teatro-esporte.jpg"
						alt="Rodolfo Lisboa e Matheus Mileto recebendo a premiação do Olho Mágico para talentos sergipanos de teatro de improviso"
						width={800}
						height={600}
					/>
				</SC.ImageWrapper>
			</SC.ContentWrapper>
		</SC.AboutSection>
	);
};
