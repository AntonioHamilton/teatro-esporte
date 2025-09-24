import Image from "next/image";
import * as SC from "./About.styled";
import { useTranslation } from "@/hooks/useTranslation";
import { AboutTranslations } from "@/translations/Home";

export const About = () => {
	const { language } = useTranslation();
	return (
		<SC.AboutSection>
			<SC.Heading>{AboutTranslations[language].about_title}</SC.Heading>
			<SC.ContentWrapper>
				<SC.TextWrapper>
					<SC.Paragraph>
						{AboutTranslations[language].about_paragraph_1}
					</SC.Paragraph>
					<SC.Paragraph>
						{AboutTranslations[language].about_paragraph_2}
					</SC.Paragraph>
					<SC.Paragraph>
						{AboutTranslations[language].about_paragraph_3}
					</SC.Paragraph>
				</SC.TextWrapper>
				<SC.ImageWrapper>
					<Image
						src="/images/teatro-esporte.webp"
						alt={AboutTranslations[language].about_image_alt}
						width={800}
						height={600}
					/>
				</SC.ImageWrapper>
			</SC.ContentWrapper>
		</SC.AboutSection>
	);
};
