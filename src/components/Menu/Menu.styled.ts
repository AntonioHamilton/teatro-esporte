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

export const NavLink = styled.p<{ $isActive: string; $variant?: string }>`
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
	height: 100vh;
	width: 100%;
	background-color: #1c1c1c;
	z-index: 55;
	display: flex;
	flex-direction: column;
	padding: 2rem;
	transition: transform 0.3s ease-in-out;
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
	gap: 2rem;
	margin-top: 5rem;
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
