import styled from "styled-components";
import { colors, breakpoints } from "./variables.styled";

export const SectionContainer = styled.section`
	background-color: ${colors.lightBackground};
	padding: 4rem 1.5rem;
	color: ${colors.darkText};

	@media (min-width: ${breakpoints.md}) {
		padding: 6rem 3rem;
	}
`;

export const SectionTitle = styled.h2`
	font-size: 2.5rem;
	text-align: center;
	margin-bottom: 3rem;
	font-weight: 700;

	@media (min-width: ${breakpoints.md}) {
		font-size: 3.5rem;
	}
`;

export const SectionHeader = styled.h3`
	font-size: 2rem;
	text-align: center;
	background-color: ${colors.highlightYellow};
	padding: 0.5rem 2rem;
	margin: 0 auto 3rem;
	display: inline-block;
	border-radius: 9999px;
`;

export const ClassCard = styled.article<{ reverse?: boolean }>`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-bottom: 4rem;

	@media (min-width: ${breakpoints.lg}) {
		flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
		align-items: center;
	}
`;

export const ImageWrapper = styled.div`
	width: 100%;
	flex-shrink: 0;

	& img {
		border-radius: 1.5rem;
		object-fit: cover;
		filter: drop-shadow(2px 4px 6px black) brightness(0.8);
		object-position: 0px -40px;
		width: 100%;
		height: 400px;
	}

	@media (min-width: ${breakpoints.lg}) {
		width: 50%;
	}
`;

export const TextContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	@media (min-width: ${breakpoints.lg}) {
		width: 50%;
	}
`;

export const CardTitle = styled.h4`
	font-size: 1.75rem;
	font-weight: 700;
	margin-bottom: 1rem;
`;

export const CardDescription = styled.p`
	font-size: 1rem;
	margin-bottom: 1.5rem;
	line-height: 1.5;
`;

export const ButtonLink = styled.a`
	display: inline-block;
	background-color: ${colors.highlightYellow};
	color: ${colors.darkText};
	font-weight: 700;
	padding: 0.75rem 1.5rem;
	border-radius: 0.5rem;
	text-decoration: none;
	transition: transform 0.2s ease;

	&:hover {
		transform: translateY(-2px);
	}
`;
