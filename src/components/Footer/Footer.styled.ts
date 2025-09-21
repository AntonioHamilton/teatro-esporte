import styled from "styled-components";
import { colors, breakpoints } from "@styles/variables.styled";

export const FooterContainer = styled.footer`
	background-color: ${colors.lightBackground};
	color: ${colors.darkText};
	padding: 32px 64px 24px;
	width: 100%;

	@media (max-width: ${breakpoints.md}) {
		padding: 24px;
	}
`;

export const FooterContent = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
	gap: 64px;
	width: 100%;

	@media (max-width: ${breakpoints.md}) {
		flex-direction: column;
		align-items: center;
		gap: 48px;
	}
`;

export const FooterColumn = styled.div`
	display: flex;
	text-align: center;
	flex-direction: column;
	align-items: center;
	justify-items: center;
`;

export const FooterHeading = styled.h4`
	font-size: 18px;
	font-weight: 700;
	margin-bottom: 8px;
`;

export const FooterLink = styled.a`
	color: ${colors.darkText};
	font-size: 16px;
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: ${colors.highlightYellow};
	}
`;

export const SocialLinks = styled.div`
	display: flex;
	gap: 12px;
	justify-content: flex-start;
	align-items: center;

	svg {
		width: 32px;
		height: 32px;
		transform: scale(1);
		transition: transform 0.2s ease;

		&:hover {
			transform: scale(1.2);
		}
	}

	@media (max-width: ${breakpoints.md}) {
		justify-content: center;
	}
`;

export const SocialIcon = styled.a`
	color: ${colors.darkText};
	font-size: 24px;
	transition: color 0.2s ease;

	&.instagram {
		svg {
			border-radius: 5px;
			background: linear-gradient(
				45deg,
				#f09433 0%,
				#e6683c 25%,
				#dc2743 50%,
				#cc2366 75%,
				#bc1888 100%
			);
		}
	}
`;

export const AddressText = styled.p`
	font-size: 14px;
	line-height: 1.6;
	max-width: 250px;
	color: ${colors.darkText};
`;

export const Copyright = styled.div`
	font-size: 14px;
	color: #999;
	text-align: center;
	margin-top: 24px;

	@media (max-width: ${breakpoints.md}) {
		margin-top: 48px;
	}
`;
