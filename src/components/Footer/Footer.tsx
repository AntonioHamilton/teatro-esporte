import Image from "next/image";
import Link from "next/link";
import * as SC from "./Footer.styled";
import { links } from "@/constants/links";
import { socialLinks } from "@/constants/socialLinks";
import { CommonTranslations } from "@/translations/Common";
import { useTranslation } from "@/hooks/useTranslation";

export const Footer = () => {
	const currentYear = new Date().getFullYear();
	const { language } = useTranslation();

	return (
		<SC.FooterContainer>
			<SC.FooterContent>
				<SC.FooterColumn>
					<Image
						src="/images/teatro-esporte-logo.png"
						alt="Teatro Esporte Logo"
						width={60}
						height={60}
					/>
				</SC.FooterColumn>
				<SC.FooterColumn>
					<SC.FooterHeading>
						{CommonTranslations[language].social_media}
					</SC.FooterHeading>
					<SC.SocialLinks>
						{socialLinks[language].map((socialLink) => (
							<SC.SocialIcon
								key={socialLink.name}
								href={socialLink.href}
								target="_blank"
								rel="noopener noreferrer"
								className={socialLink.name === "Instagram" ? "instagram" : ""}
								aria-label={socialLink.ariaLabel}
							>
								{socialLink.icon}
							</SC.SocialIcon>
						))}
					</SC.SocialLinks>
				</SC.FooterColumn>

				<SC.FooterColumn>
					<SC.FooterHeading>
						{CommonTranslations[language].address}
					</SC.FooterHeading>
					<SC.AddressText>Aracaju - SE</SC.AddressText>
				</SC.FooterColumn>

				<SC.FooterColumn>
					<SC.FooterHeading>
						{CommonTranslations[language].links}
					</SC.FooterHeading>
					{links[language].map((link) => (
						<Link key={link.name} href={link.href} passHref legacyBehavior>
							<SC.FooterLink>{link.name}</SC.FooterLink>
						</Link>
					))}
				</SC.FooterColumn>
			</SC.FooterContent>

			<SC.Copyright>&copy; {currentYear} Teatro Esporte 🎭</SC.Copyright>
		</SC.FooterContainer>
	);
};
