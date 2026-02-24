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
			date: "07 mar 2026",
			location: "Espaço Cultural Yázigi - Aracaju, SE",
			imageSrc: "/images/tickets/quem-ri-por-ultimo-1-2026.webp",
			imageAlt:
				"ingresso do espetáculo quem ri por último março 2026, teatro esporte",
			href: "https://www.instagram.com/p/DUlk8zbj1eU/"
		}
	],
	EN_US: [
		{
			title: "Who laughs last?",
			date: "March 7, 2026",
			location: "Yázigi Cultural Space - Aracaju, SE",
			imageSrc: "/images/tickets/quem-ri-por-ultimo-1-2026.webp",
			imageAlt:
				"ticket for the show Who laughs last March 2026, Teatro Esporte",
			href: "https://www.instagram.com/p/DUlk8zbj1eU/"
		}
	]
};

export const pastEvents: Events = {
	PT_BR: [
		{
			title:
				"Noite secreta do clube do improviso que acontece a cada 3 meses se for em um sábado e todos estiverem disponíveis",
			date: "06 Dez - 19:30",
			location: "Espaço Cultural Yazigi - Aracaju, SE",
			imageSrc: "/images/tickets/noite-do-improviso.jpg",
			imageAlt:
				"ingresso do espetáculo noite secreta do improviso, teatro esporte",
			href: "https://www.instagram.com/p/DQcDFXwjuCQ/"
		},
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
			title:
				"Secret Improv Club Night, held every 3 months if it falls on a Saturday and everyone is available",
			date: "Dec 10 - 7:30 PM",
			location: "Espaço Cultural Yazigi - Aracaju, SE",
			imageSrc: "/images/tickets/noite-do-improviso.jpg",
			imageAlt: "ticket for the show Secret Improv Club Night, teatro esporte",
			href: "https://www.instagram.com/p/DQcDFXwjuCQ/"
		},
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
