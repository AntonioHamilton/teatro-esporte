import Image from "next/image";
import Link from "next/link";
import * as SC from "./Footer.styled";
import { links } from "@/constants/links";
import { socialLinks } from "@/constants/socialLinks";

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<SC.FooterContainer>
			<SC.FooterContent>
				<SC.FooterColumn>
					<Image
						src="/images/teatro-esporte-logo.png"
						alt="Teatro Esporte Logo"
						width={120}
						height={120}
					/>
				</SC.FooterColumn>
				<SC.FooterColumn>
					<SC.FooterHeading>Redes Sociais</SC.FooterHeading>
					<SC.SocialLinks>
						{socialLinks.map((socialLink) => (
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
					<SC.FooterHeading>Endereço</SC.FooterHeading>
					<SC.AddressText>
						Rua Fictícia, 123
						<br />
						Bairro Central, Aracaju - SE
					</SC.AddressText>
				</SC.FooterColumn>

				<SC.FooterColumn>
					<SC.FooterHeading>Links</SC.FooterHeading>
					{links.map((link) => (
						<Link key={link.name} href={link.href} passHref legacyBehavior>
							<SC.FooterLink>{link.name}</SC.FooterLink>
						</Link>
					))}
				</SC.FooterColumn>
			</SC.FooterContent>

			<SC.Copyright>CIA Teatro Esporte &copy; {currentYear}</SC.Copyright>
		</SC.FooterContainer>
	);
};
