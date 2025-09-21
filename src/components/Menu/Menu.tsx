import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as SC from "./Menu.styled";
import { links } from "@/constants/links";
import { useState } from "react";

type MenuProps = {
	variant?: string;
};

export const Menu = ({ variant }: MenuProps) => {
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
								$variant={variant || "white"}
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
								$variant={variant || "white"}
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
				</SC.MobileNav>
			</SC.MobileMenuPanel>
		</>
	);
};
