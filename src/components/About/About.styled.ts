import styled from "styled-components";
import { colors, breakpoints } from "@styles/variables.styled";

export const AboutSection = styled.section`
	background-color: ${colors.lightBackground};
	color: ${colors.darkText};
	padding: 96px 48px;

	@media (max-width: ${breakpoints.md}) {
		padding: 24px;
	}
`;

export const Heading = styled.h2`
	text-align: center;
	font-size: 48px;
	font-weight: 700;
	margin-bottom: 48px;

	@media (max-width: ${breakpoints.md}) {
		font-size: 40px;
		margin-bottom: 16px;
	}
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;

	@media (min-width: ${breakpoints.lg}) {
		flex-direction: row;
		align-items: center;
		gap: 64px;
	}
`;

export const TextWrapper = styled.div`
	flex: 1;
`;

export const Paragraph = styled.p`
	font-size: 16px;
	line-height: 1.6; /* Unidade sem medida para escalabilidade da fonte */
	margin-bottom: 24px;

	&:last-child {
		margin-bottom: 0;
	}
`;

export const ImageWrapper = styled.div`
	flex: 1;

	& img {
		height: 400px;
		width: 100%;
		object-fit: cover;
		object-position: 0px -20px;
		border-radius: 16px;
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
	}

	@media (max-width: ${breakpoints.sm}) {
		& img {
			object-position: center;
		}
	}
`;
