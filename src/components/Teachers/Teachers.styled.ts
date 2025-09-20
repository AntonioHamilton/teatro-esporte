import styled from "styled-components";
import { colors, breakpoints } from "@styles/variables.styled";

export const TeachersSection = styled.section`
	padding: 96px 48px;
	text-align: center;
	color: ${colors.textWhite};

	@media (max-width: ${breakpoints.md}) {
		padding: 24px;
	}
`;

export const SectionTitle = styled.h2`
	font-size: 48px;
	font-weight: 700;
	margin-bottom: 48px;

	@media (max-width: ${breakpoints.md}) {
		font-size: 40px;
	}
`;

export const TeachersGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 32px;
	max-width: 1200px;
	margin: 0 auto;
`;

export const TeacherCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	transition: transform 0.3s ease-in-out;
	width: 250px;

	&:hover {
		transform: translateY(-8px);
	}
`;

export const ImageWrapper = styled.div`
	position: relative;
	margin-bottom: 16px;

	& img {
		border-radius: 50%;
		object-fit: cover;
		clip-path: ellipse(50% 50% at 50% 50%); /* Exemplo de forma elíptica */
	}
`;

export const TeacherName = styled.h3`
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 8px;
`;

export const TeacherBio = styled.p`
	font-size: 14px;
	line-height: 1.4;
	color: ${colors.textWhite};
	max-width: 250px;
`;
