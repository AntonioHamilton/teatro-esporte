import { breakpoints, colors } from "@/styles/variables.styled";
import styled from "styled-components";

export const DonationButtonContainer = styled.div`
	position: fixed;
	top: 18px;
	right: 20px;
	z-index: 100;

	@media (max-width: ${breakpoints.md}) {
		&.desktop {
			display: none;
		}

		&.mobile {
			display: flex;
			position: relative;
			top: 0;
			right: 0;
		}
	}
`;

export const StyledDonationButton = styled.a`
	display: flex;
	align-items: center;
	gap: 4px;
	padding: 6px 24px 8px;
	border-radius: 9999px;
	font-weight: 600;
	font-size: 1rem;
	text-decoration: none;
	cursor: pointer;

	background-color: ${colors.highlightYellow};
	color: ${colors.darkText};
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);

	transition:
		background-color 0.2s ease,
		transform 0.15s ease;

	&:hover {
		background-color: ${colors.highlightBlue};
		transform: translateY(-2px);
	}

	.icon {
		font-size: 1rem;
		line-height: 1;
	}
`;
