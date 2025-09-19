// components/Menu.jsx
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as SC from "./Menu.styled";

type MenuProps = {
	variant?: string;
};

export const Menu = ({ variant }: MenuProps) => {
	const router = useRouter();
	const currentPath = router.pathname;

	const links = [
		{ name: "Home", href: "/" },
		{ name: "Turmas", href: "/turmas" }
		// { name: "Espetáculos", href: "/espetaculos" },
		// { name: "Contato", href: "/contato" }
	];

	return (
		<SC.MenuContainer>
			{links.slice(0, 1).map((link) => (
				<Link key={link.name} href={link.href} passHref legacyBehavior>
					<SC.NavLink
						$variant={variant || "white"}
						$isActive={currentPath === link.href ? "true" : "false"}
					>
						{link.name}
					</SC.NavLink>
				</Link>
			))}

			<Image
				src="/images/teatro-esporte-logo.png"
				alt="Teatro Esporte Logo"
				width={50}
				height={50}
			/>

			{links.slice(1).map((link) => (
				<Link key={link.name} href={link.href} passHref legacyBehavior>
					<SC.NavLink
						$variant={variant || "white"}
						$isActive={currentPath === link.href ? "true" : "false"}
					>
						{link.name}
					</SC.NavLink>
				</Link>
			))}
		</SC.MenuContainer>
	);
};
