import Image from "next/image";
import Link from "next/link";
import * as SC from "./EventCard.styled";

type EventCardProps = {
	title: string;
	date: string;
	location: string;
	imageSrc: string;
	imageAlt: string;
	href: string;
};

export const EventCard = ({
	title,
	date,
	location,
	imageSrc,
	imageAlt,
	href
}: EventCardProps) => {
	return (
		<Link href={href} rel="noopener noreferrer" target="_blank">
			<SC.EventCard>
				<SC.CardImage>
					<Image
						src={imageSrc}
						alt={imageAlt}
						width={400}
						height={260}
						objectFit="cover"
					/>
				</SC.CardImage>
				<SC.CardContent>
					<SC.DateTag>{date}</SC.DateTag>
					<SC.EventTitle>{title}</SC.EventTitle>
					<SC.EventLocation>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
						</svg>
						{location}
					</SC.EventLocation>
				</SC.CardContent>
			</SC.EventCard>
		</Link>
	);
};
