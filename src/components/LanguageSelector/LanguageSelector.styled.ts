import { breakpoints } from "@/styles/variables.styled";
import styled from "styled-components";

export const LanguageSelectorContainer = styled.div`
	position: fixed;
	top: 26px;
	left: 20px;
	z-index: 100;
	display: flex;
	gap: 8px;

	@media (max-width: ${breakpoints.md}) {
		left: unset;
		right: 80px;
	}
`;

export const LanguageButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
`;
