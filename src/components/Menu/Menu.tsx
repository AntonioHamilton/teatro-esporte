import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as SC from "./Menu.styled";
import { links } from "@/constants/links";
import { useState } from "react";
import { socialLinks } from "@/constants/socialLinks";

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
				<SC.HamburgerButton
					onClick={toggleMenu}
					aria-label="Abrir menu"
					aria-expanded={isMenuOpen}
					aria-controls="mobile-menu"
				>
					<div />
					<div />
					<div />
				</SC.HamburgerButton>
			</SC.MenuContainer>
			<SC.MobileMenuPanel
				id="mobile-menu"
				$isOpen={isMenuOpen ? "true" : "false"}
			>
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
							{socialLinks.map((socialLink) => (
								<SC.SocialIcon
									key={socialLink.name}
									href={socialLink.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={socialLink.ariaLabel}
								>
									{socialLink.icon}
								</SC.SocialIcon>
							))}
						</SC.SocialLinks>
					</SC.SocialMediaContainer>
				</SC.MobileNav>
			</SC.MobileMenuPanel>
		</>
	);
};
