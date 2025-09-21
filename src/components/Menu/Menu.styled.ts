import { breakpoints, colors } from "@/styles/variables.styled";
import styled from "styled-components";

export const MenuContainer = styled.header`
	position: fixed;
	width: 100%;
	background-color: #1c1c1c;
	top: 0;
	left: 0;
	right: 0;
	z-index: 50;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.75rem 0;
	gap: 2.5rem;

	.mobile-logo {
		display: none;
	}

	@media (max-width: ${breakpoints.md}) {
		padding: 0.6rem 1.5rem;
		justify-content: space-between;

		.mobile-logo {
			display: block;
		}
	}
`;

export const NavLink = styled.p<{ $isActive: string }>`
	font-size: 1.125rem;
	font-weight: 500;
	text-decoration: none;
	transition: color 0.3s ease;
	color: ${(props) =>
		props.$isActive === "true" ? colors.highlightYellow : "#fff"};

	&:hover {
		color: ${colors.highlightYellow};
	}
`;

export const DesktopLinks = styled.div`
	display: flex;
	gap: 2.5rem;
	align-items: center;
	@media (max-width: ${breakpoints.md}) {
		display: none;
	}
`;

export const HamburgerButton = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 32px;
	height: 32px;
	padding: 0;
	z-index: 60;

	@media (min-width: ${breakpoints.md}) {
		display: none;
	}

	div {
		width: 32px;
		height: 3px;
		background-color: #facc15;
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;
	}
`;

export const MobileMenuPanel = styled.div<{ $isOpen: string }>`
	position: fixed;
	top: 0;
	left: 0;
	height: 100dvh;
	width: 100%;
	background-color: #1c1c1c;
	z-index: 55;
	display: flex;
	flex-direction: column;
	padding: 4rem 2rem 2rem;
	transition:
		transform,
		opacity 0.3s ease-in-out;
	opacity: ${(props) => (props.$isOpen === "true" ? "1" : "0")};
	transform: ${(props) =>
		props.$isOpen === "true" ? "translateX(0)" : "translateX(-100%)"};

	@media (min-width: ${breakpoints.md}) {
		display: none;
	}
`;

export const CloseButton = styled(HamburgerButton)`
	position: absolute;
	top: 1rem;
	right: 1.5rem;
	z-index: 65;

	div {
		background-color: #facc15;
	}
	div:first-child {
		transform: rotate(45deg);
	}
	div:nth-child(2) {
		transform: rotate(-45deg);
	}
`;

export const MobileNav = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 100%;
`;

export const MobileNavContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.25rem;
`;

export const MenuTitle = styled.h2`
	font-size: 1.5rem;
	color: #fff;
	margin-bottom: 2rem;
`;

export const MobileNavLink = styled(NavLink)`
	font-size: 1.5rem;
	color: ${(props) => (props.$isActive === "true" ? "#facc15" : "#fff")};
`;

export const SocialMediaContainer = styled.div`
	display: flex;
	text-align: center;
	flex-direction: column;
	align-items: center;
	justify-items: center;
`;

export const SocialMediaHeading = styled.h4`
	font-size: 18px;
	font-weight: 700;
	margin-bottom: 8px;
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

	&:hover {
		color: ${colors.highlightYellow};
	}
`;
