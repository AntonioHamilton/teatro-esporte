import Image from "next/image";
import * as SC from "./Header.styled";
import { useTranslation } from "@/hooks/useTranslation";
import { HeaderTranslations } from "@/translations/Home";

export const Header = () => {
	const { language } = useTranslation();
	return (
		<SC.Container>
			<SC.TextBlock>
				<SC.Title>{HeaderTranslations[language].header_title}</SC.Title>
				<SC.Subtitle>
					{HeaderTranslations[language].header_subtitle}
				</SC.Subtitle>
				<SC.ButtonGroup>
					<SC.Button href="/classes" variant="primary">
						{HeaderTranslations[language].header_button_classes}
					</SC.Button>
					{/* <SC.Button href="/tickets" variant="secondary">
						{HeaderTranslations[language].header_button_tickets}
					</SC.Button> */}
				</SC.ButtonGroup>
			</SC.TextBlock>
			<SC.ImageWrapper>
				<Image
					src="/images/bg1.png"
					alt={HeaderTranslations[language].header_image_alt}
					priority
					width={424}
					height={600}
				/>
			</SC.ImageWrapper>
		</SC.Container>
	);
};
