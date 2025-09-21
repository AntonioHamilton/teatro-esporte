import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as SC from "./Menu.styled";
import { links } from "@/constants/links";
import { useState } from "react";
import { Instagram } from "@components/Icons/Instagram";
import { Whatsapp } from "@components/Icons/Whatsapp";
import { Youtube } from "@components/Icons/Youtube";
import { Spotify } from "@components/Icons/Spotify";

export const Menu = () => {
	const router = useRouter();
	const currentPath = router.pathname;
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<SC.MenuContainer>
				<Link className="mobile-logo" href="/">
					<Image
						src="/images/teatro-esporte-logo.png"
						alt="Teatro Esporte Logo"
						fetchPriority="high"
						width={40}
						height={40}
					/>
				</Link>
				<SC.DesktopLinks>
					{links.slice(0, 2).map((link) => (
						<Link rel="noopener noreferrer" key={link.name} href={link.href}>
							<SC.NavLink
								$isActive={currentPath === link.href ? "true" : "false"}
							>
								{link.name}
							</SC.NavLink>
						</Link>
					))}
					<Link rel="noopener noreferrer" href="/">
						<Image
							src="/images/teatro-esporte-logo.png"
							alt="Teatro Esporte Logo"
							fetchPriority="high"
							width={40}
							height={40}
						/>
					</Link>
					{links.slice(2).map((link) => (
						<Link
							key={link.name}
							href={link.href}
							rel="noopener noreferrer"
							target={
								link.name === "Contato" || link.name === "Contact"
									? "_blank"
									: ""
							}
						>
							<SC.NavLink
								$isActive={currentPath === link.href ? "true" : "false"}
							>
								{link.name}
							</SC.NavLink>
						</Link>
					))}
				</SC.DesktopLinks>
				<SC.HamburgerButton onClick={toggleMenu}>
					<div />
					<div />
					<div />
				</SC.HamburgerButton>
			</SC.MenuContainer>
			<SC.MobileMenuPanel $isOpen={isMenuOpen ? "true" : "false"}>
				<SC.CloseButton onClick={toggleMenu}>
					<div />
					<div />
				</SC.CloseButton>
				<SC.MobileNav>
					<Link className="mobile-logo" href="/">
						<Image
							src="/images/teatro-esporte-logo.png"
							alt="Teatro Esporte Logo"
							fetchPriority="high"
							width={40}
							height={40}
						/>
					</Link>

					<SC.MobileNavContainer>
						{links.map((link) => (
							<Link
								key={link.name}
								rel="noopener noreferrer"
								target={
									link.name === "Contato" || link.name === "Contact"
										? "_blank"
										: ""
								}
								href={link.href}
							>
								<SC.MobileNavLink
									$isActive={currentPath === link.href ? "true" : "false"}
									onClick={toggleMenu}
								>
									{link.name}
								</SC.MobileNavLink>
							</Link>
						))}
					</SC.MobileNavContainer>

					<SC.SocialMediaContainer>
						<SC.SocialMediaHeading>Redes Sociais</SC.SocialMediaHeading>
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
					</SC.SocialMediaContainer>
				</SC.MobileNav>
			</SC.MobileMenuPanel>
		</>
	);
};
