import styled from "styled-components";
import { breakpoints } from "./variables.styled";

export const MainContainer = styled.main`
	min-height: 100vh;
	background: #1c1c1c;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 120px 48px 96px;

	@media (max-width: ${breakpoints.md}) {
		padding: 120px 24px 64px;
	}
`;

export const Title = styled.h2`
	font-size: 56px;
	text-align: center;
	font-weight: 700;
	margin-bottom: 48px;

	@media (max-width: ${breakpoints.md}) {
		font-size: 40px;
	}
`;

export const CardSection = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 32px;
	margin-bottom: 48px;
	width: 100%;

	@media (max-width: ${breakpoints.lg}) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: ${breakpoints.sm}) {
		grid-template-columns: 1fr;
	}
`;
