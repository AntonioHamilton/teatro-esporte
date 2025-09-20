// components/Menu.jsx
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as SC from "./Menu.styled";
import { links } from "@/constants/links";

type MenuProps = {
	variant?: string;
};

export const Menu = ({ variant }: MenuProps) => {
	const router = useRouter();
	const currentPath = router.pathname;

	return (
		<SC.MenuContainer>
			{links.slice(0, 1).map((link) => (
				<Link rel="noopener noreferrer" key={link.name} href={link.href}>
					<SC.NavLink
						$variant={variant || "white"}
						$isActive={currentPath === link.href ? "true" : "false"}
					>
						{link.name}
					</SC.NavLink>
				</Link>
			))}
			<Link href="/">
				<Image
					src="/images/teatro-esporte-logo.png"
					alt="Teatro Esporte Logo"
					fetchPriority="high"
					width={50}
					height={50}
				/>
			</Link>

			{links.slice(1).map((link) => (
				<Link rel="noopener noreferrer" key={link.name} href={link.href}>
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
