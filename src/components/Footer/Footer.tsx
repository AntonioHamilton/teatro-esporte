import Image from "next/image";
import Link from "next/link";
import * as SC from "./Footer.styled";
import { Whatsapp } from "@components/Icons/Whatsapp";
import { Instagram } from "@components/Icons/Instagram";
import { links } from "@/constants/links";
import { Youtube } from "@components/Icons/Youtube";
import { Spotify } from "@components/Icons/Spotify";

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
						<SC.SocialIcon
							href="https://www.instagram.com/teatroesporte/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Instagram />
						</SC.SocialIcon>
						<SC.SocialIcon
							href="https://wa.me/557991486259"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Whatsapp />
						</SC.SocialIcon>
						<SC.SocialIcon
							href="https://www.youtube.com/channel/UCHqoO2ynN7cOCBgz7GHKEEw"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Youtube />
						</SC.SocialIcon>
						<SC.SocialIcon
							href="https://open.spotify.com/show/71JYWIWmwlwXxRRjqRXsXI?si=010f07b705b44614"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Spotify />
						</SC.SocialIcon>
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
