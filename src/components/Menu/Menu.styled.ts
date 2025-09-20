// styles/menu.styled.js
import { breakpoints } from "@/styles/variables.styled";
import styled from "styled-components";

export const MenuContainer = styled.header`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: 50;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2.5rem;
	padding: 2rem 0;

	@media (max-width: ${breakpoints.md}) {
		padding: 1rem 0;
	}
`;

export const NavLink = styled.p<{ $isActive: string; $variant?: string }>`
	font-size: 1.125rem;
	font-weight: 500;
	text-decoration: none;
	transition: color 0.3s ease;
	color: ${(props) =>
		props.$isActive === "true"
			? "#facc15"
			: props.$variant === "dark"
				? "#000"
				: "#fff"};

	&:hover {
		color: #facc15;
	}
`;
