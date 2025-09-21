import styled from "styled-components";
import { colors, breakpoints } from "./variables.styled";

export const ClassesMain = styled.main`
	min-height: 100vh;
`;

export const SectionContainer = styled.section`
	background-color: ${colors.lightBackground};
	padding: 120px 48px 96px;
	color: ${colors.darkText};

	@media (max-width: ${breakpoints.md}) {
		padding: 120px 24px 64px;
		text-align: center;
	}
`;

export const SectionTitle = styled.h2`
	font-size: 56px;
	text-align: center;
	font-weight: 700;

	@media (max-width: ${breakpoints.md}) {
		font-size: 40px;
	}
`;

export const SectionHeader = styled.h3`
	font-size: 32px;
	text-align: center;
	background-color: ${colors.highlightYellow};
	padding: 8px 32px 12px;
	margin: 32px auto 32px;
	display: inline-block;
	border-radius: 9999px;

	@media (max-width: ${breakpoints.md}) {
		font-size: 24px;
		padding: 8px 32px 12px;
		margin-bottom: 32px;
	}
`;

export const CardsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 32px;
	margin: 0 auto;

	@media (max-width: ${breakpoints.lg}) {
		grid-template-columns: 1fr;
	}
`;

export const ClassCard = styled.article`
	display: flex;
	flex-direction: row;
	background-color: ${colors.textWhite};
	border-radius: 16px;
	height: 280px;
	overflow: hidden;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
	transition:
		transform 0.3s ease-in-out,
		box-shadow 0.3s ease-in-out;

	&:hover {
		transform: translateY(-8px);
		box-shadow: 0 16px 30px rgba(0, 0, 0, 0.15);
	}

	@media (max-width: ${breakpoints.md}) {
		flex-direction: column;
		height: auto;
	}
`;

export const CardImageSection = styled.div`
	width: 40%;
	height: 100%;
	position: relative;
	flex-shrink: 0;

	& img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		background: #151010;
	}

	@media (max-width: ${breakpoints.lg}) {
		& img {
			object-position: 0 -50px;
		}
	}

	@media (max-width: ${breakpoints.md}) {
		width: 100%;
		height: 400px;

		& img {
			object-position: 0 -70px;
		}
	}

	@media (max-width: ${breakpoints.sm}) {
		height: 280px;

		& img {
			object-position: top;
		}
	}
`;

export const CardContent = styled.div`
	flex: 1;
	padding: 16px 24px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const CardTitle = styled.h4`
	font-size: 24px;
	font-weight: 700;
	margin-bottom: 8px;
	color: ${colors.darkText};
`;

export const CardDescription = styled.p`
	font-size: 16px;
	line-height: 1.5;
	margin-bottom: 16px;
	color: ${colors.darkText};

	@media (min-width: ${breakpoints.lg}) {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
`;

export const TagsContainer = styled.div`
	margin-bottom: 8px;
	display: flex;
	flex-wrap: wrap;
	gap: 8px;

	@media (max-width: ${breakpoints.md}) {
		justify-content: center;
	}
`;

export const Tag = styled.span`
	background-color: ${colors.highlightBlue};
	color: ${colors.textWhite};
	font-size: 14px;
	font-weight: 600;
	padding: 4px 12px;
	border-radius: 9999px;
`;

export const ButtonLink = styled.a`
	display: inline-block;
	background-color: ${colors.highlightYellow};
	color: ${colors.darkText};
	font-weight: 700;
	padding: 8px 24px;
	border-radius: 8px;
	text-decoration: none;
	transition:
		transform 0.2s ease,
		background-color 0.2s ease;
	align-self: flex-start; /* Para alinhar o botão à esquerda */

	&:hover {
		transform: translateY(-2px);
		background-color: ${colors.highlightBlue}; /* Exemplo de hover */
		color: ${colors.textWhite};
	}
`;

export const PastProjectsSection = styled.section`
	background-color: ${colors.coral};
	padding: 96px 48px;
	color: ${colors.textWhite};

	@media (max-width: ${breakpoints.md}) {
		padding: 64px 24px;
	}
`;

export const PastProjectsTitle = styled.h2`
	font-size: 56px;
	text-align: center;
	margin-bottom: 48px;
	font-weight: 700;
	color: ${colors.textWhite};

	@media (max-width: ${breakpoints.md}) {
		font-size: 40px;
	}
`;

export const PastProjectsHeader = styled.h3`
	font-size: 32px;
	text-align: center;
	background-color: ${colors.highlightBlue}; /* Use outra cor para destaque aqui */
	padding: 8px 32px 12px;
	margin: 0 auto 48px;
	display: inline-block;
	border-radius: 9999px;
	color: ${colors.textWhite};

	@media (max-width: ${breakpoints.md}) {
		font-size: 24px;
		padding: 8px 32px 12px;
		margin-bottom: 32px;
	}
`;
