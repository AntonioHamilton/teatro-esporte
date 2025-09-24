type Event = {
	title: string;
	date: string;
	location: string;
	imageSrc: string;
	imageAlt: string;
	href: string;
};

type Events = {
	PT_BR: Event[];
	EN_US: Event[];
};

export const events: Events = {
	PT_BR: [
		{
			title: "Quem ri por último?",
			date: "10 mai - 19:30",
			location: "Teatro do Purificação - Aracaju, SE",
			imageSrc: "/images/tickets/quem-ri-por-ultimo.webp",
			imageAlt: "ingresso do espetáculo quem ri por último, teatro esporte",
			href: "https://www.instagram.com/p/DIEYQ0aOdeg/"
		}
	],
	EN_US: [
		{
			title: "Who laughs last?",
			date: "May 10 - 7:30 PM",
			location: "Teatro do Purificação - Aracaju, SE",
			imageSrc: "/images/tickets/quem-ri-por-ultimo.webp",
			imageAlt: "ticket for the show Who laughs last, teatro esporte",
			href: "https://www.instagram.com/p/DIEYQ0aOdeg/"
		}
	]
};

export const pastEvents: Events = {
	PT_BR: [
		{
			title: "Quem ri por último?",
			date: "10 mai 2025",
			location: "Teatro do Purificação - Aracaju, SE",
			imageSrc: "/images/tickets/quem-ri-por-ultimo.webp",
			imageAlt: "ingresso do espetáculo quem ri por último, teatro esporte",
			href: "https://www.instagram.com/p/DIEYQ0aOdeg/"
		},
		{
			title: "Impro Masters",
			date: "10 mai 2021",
			location: "Teatro Tobias Barreto - Aracaju, SE",
			imageSrc: "/images/tickets/impro-masters.webp",
			imageAlt: "ingresso do espetáculo impro masters, teatro esporte",
			href: "https://www.instagram.com/p/CuaeEXMOEg2/"
		}
	],
	EN_US: [
		{
			title: "Who laughs last?",
			date: "May 10, 2025",
			location: "Teatro do Purificação - Aracaju, SE",
			imageSrc: "/images/tickets/quem-ri-por-ultimo.webp",
			imageAlt: "ticket for the show Who laughs last, teatro esporte",
			href: "https://www.instagram.com/p/DIEYQ0aOdeg/"
		},
		{
			title: "Impro Masters",
			date: "May 10, 2021",
			location: "Teatro Tobias Barreto - Aracaju, SE",
			imageSrc: "/images/tickets/impro-masters.webp",
			imageAlt: "ticket for the show 'Impro Masters', teatro esporte",
			href: "https://www.instagram.com/p/CuaeEXMOEg2/"
		}
	]
};
