import { breakpoints, colors } from "@/styles/variables.styled";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
	min-height: 100dvh;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 72px;
	width: 80%;
	align-items: center;
	padding: 100px 24px;

	@media (max-width: ${breakpoints.lg}) {
		padding: 0px 32px;
		width: 100%;
	}

	@media (max-width: ${breakpoints.md}) {
		grid-template-columns: 1fr;
		gap: 0px;
		margin-top: 100px;
	}

	@media (max-width: ${breakpoints.sm}) {
		padding: 0px 24px;
	}
`;

export const TextBlock = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	align-items: center;
	text-align: center;

	@media (max-width: ${breakpoints.md}) {
		gap: 12px;
	}
`;

export const Title = styled.h1`
	font-size: 60px;
	font-weight: 800;
	line-height: 1.2;
	color: ${colors.highlightYellow};

	@media (max-width: ${breakpoints.xl}) {
		font-size: 40px;
	}
`;

export const Subtitle = styled.p`
	font-size: 24px;
	color: ${colors.textWhite};

	@media (max-width: ${breakpoints.xl}) {
		font-size: 20px;
	}
`;

export const ButtonGroup = styled.div`
	display: flex;
	gap: 16px;
`;

type ButtonProps = {
	variant?: "primary" | "secondary";
};

export const Button = styled(Link)<ButtonProps>`
	font-weight: bold;
	padding: 4px 40px 6px;
	border-radius: 20px;
	color: #1c1c1c;
	background-color: ${(props) =>
		props.variant === "primary"
			? colors.highlightYellow
			: colors.highlightBlue};
	transition: background-color 0.3s ease;

	&:hover {
		background: ${(props) =>
			props.variant === "primary"
				? colors.highlightBlue
				: colors.highlightYellow};
	}
`;

export const ImageWrapper = styled.div`
	display: flex;
	justify-content: center;

	img {
		height: 600px;
		width: fit-content;

		@media (max-width: ${breakpoints.lg}) {
			height: 400px;
			width: fit-content;
		}

		@media (max-width: ${breakpoints.sm}) {
			height: 360px;
		}

		@media (max-width: ${breakpoints.xs}) {
			height: 280px;
		}
	}
`;
