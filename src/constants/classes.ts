type Classes = {
	title: string;
	description: string;
	imageSrc: string;
	imageAlt: string;
	href?: string;
	tags?: string[];
};

export const adultClasses: Classes[] = [
	{
		title: "Academia Despertar Criativo 🎭",
		description:
			"Onde a mágica do improviso começa. Aprenda os fundamentos, como aceitação, espontaneidade e a arte de construir uma cena do zero.",
		imageSrc: "/images/academia-despertar-criativo2025.1.jpg",
		imageAlt:
			"Academia despertar criativo: Adultos em uma aula de improviso, jogando e se divertindo",
		tags: ["Nível 1", "Presencial"],
		href: ""
	},
	{
		title: "Teatro Esporte Club 😜",
		description:
			"Continue a aprimorar suas habilidades com exercícios mais avançados, foco em personagens e narrativas complexas.",
		imageSrc: "/images/teatro-esporte-club.jpg",
		imageAlt: "Adultos treinando improviso, com foco em expressão corporal",
		tags: ["Nível 2", "Presencial"],
		href: ""
	}
];

export const kidsClasses: Classes[] = [
	// {
	// 	title: "Improviso Kids & Teens",
	// 	description:
	// 		"Através de jogos lúdicos, as crianças e jovens desenvolvem a criatividade, a capacidade de comunicação e a confiança.",
	// 	imageSrc: "/images/impro-criancas.jpg",
	// 	imageAlt:
	// 		"Crianças e adolescentes em uma aula de teatro de improviso, brincando e interagindo.",
	// 	tags: ["Infantil", "Teens", "Presencial"],
	// 	href: "/turmas/improviso-kids-teens"
	// }
];

export const pastClasses: Classes[] = [
	{
		title: "Workshop Despertar Criativo 💡",
		description:
			"Uma retrospectiva de nosso workshop intensivo, que explorou comédia física e improviso corporal. Uma experiência inesquecível!",
		imageSrc: "/images/workshop-despertar-criativo1.jpg",
		imageAlt: "Turma de improviso passada, posando para uma foto de grupo",
		href: "https://www.instagram.com/stories/highlights/18002377969441573/",
		tags: ["Comédia Física", "Intensivo"]
	},
	{
		title: "Workshop Palhaço Interior 🎪",
		description:
			"Desperte seu Palhaço Interior! Você já sentiu aquela vontade de rir sem motivo, de soltar o que tem de mais espontâneo e verdadeiro dentro de você?",
		imageSrc: "/images/workshop-palhaco-interior1.jpg",
		imageAlt: "Atores explorando a figura do palhaço em um workshop de teatro.",
		href: "https://www.instagram.com/p/DMGtt2DyK7R/",
		tags: ["Palhaçaria", "Autoconhecimento"]
	},
	{
		title: "Impro Masters 🎪",
		description:
			"Espetáculo de improviso que já esteve nos grandes teatros de Aracaju. O Impro Masters trazia jogos desafiadores e uma verdadeira batalha de improviso dentro dos palcos",
		imageSrc: "/images/impro-masters.jpg",
		imageAlt:
			"Impro Masters: Atores em uma batalha de improviso no palco do teatro Tobias Barreto",
		href: "https://www.instagram.com/p/CUBpKrxNgUa/?img_index=1",
		tags: ["Palhaçaria", "Autoconhecimento"]
	},
	{
		title: "Palhaço Biruta 🤡",
		description:
			"Esse é uma palhaço nada convencional. Personagem criado por Rodolfo Lisboa, nosso diretor e ator, esse palhaço se mostra bem diferente dentro e fora dos palcos.",
		imageSrc: "/images/palhaço-biruta.png",
		imageAlt: "Palhaço biruta no espetáculo Quem Ri Por Último",
		href: "https://www.instagram.com/p/DJ8C9bctZpw/",
		tags: ["Palhaçaria", "Personagem"]
	}
];
