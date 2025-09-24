import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { CommonTranslations } from "@/translations/Common";
import * as SC from "./DonateButton.styled";

type DonationButtonProps = {
	className?: string;
};

export const DonationButton = ({ className }: DonationButtonProps) => {
	const { language } = useTranslation();

	return (
		<SC.DonationButtonContainer className={className}>
			<Link
				href={CommonTranslations[language].donation_link_href}
				passHref
				legacyBehavior
				aria-label={CommonTranslations[language].donation_link_aria_label}
			>
				<SC.StyledDonationButton target="_blank" rel="noopener noreferrer">
					<span className="icon" aria-hidden="true">
						❤️
					</span>
					<span>{CommonTranslations[language].donate}</span>
				</SC.StyledDonationButton>
			</Link>
		</SC.DonationButtonContainer>
	);
};
