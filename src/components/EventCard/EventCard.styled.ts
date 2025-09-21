import styled from "styled-components";
import { colors, breakpoints } from "@styles/variables.styled";

export const EventCard = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 400px;
	background-color: ${colors.textWhite};
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	transition:
		transform 0.3s ease-in-out,
		box-shadow 0.3s ease-in-out;
	cursor: pointer;
	text-decoration: none;
	color: inherit;

	&:hover {
		transform: translateY(-8px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
	}

	@media (max-width: ${breakpoints.md}) {
		max-width: 100%;
	}
`;

export const CardImage = styled.div`
	width: 100%;
	position: relative;

	img {
		object-fit: cover;
	}

	@media (max-width: ${breakpoints.lg}) {
		img {
			width: 100%;
			height: 250px;
		}
	}
`;

export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1.5rem;
	gap: 0.5rem;
`;

export const DateTag = styled.div`
	font-size: 1.5rem;
	font-weight: 700;
	color: ${colors.highlightBlue};
	text-transform: uppercase;
	margin-bottom: 0.5rem;
`;

export const EventTitle = styled.h3`
	font-size: 1.25rem;
	font-weight: 700;
	line-height: 1.3;
	color: ${colors.darkText};
`;

export const EventLocation = styled.p`
	display: flex;
	align-items: center;
	font-size: 1rem;
	color: #555;

	svg {
		margin-right: 0.5rem;
	}
`;
