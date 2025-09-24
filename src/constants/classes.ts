type Class = {
	title: string;
	description: string;
	imageSrc: string;
	imageAlt: string;
	href?: string;
	tags?: string[];
};

type Classes = {
	PT_BR: Class[];
	EN_US: Class[];
};

export const adultClasses: Classes = {
	PT_BR: [
		{
			title: "Academia Despertar Criativo 🎭",
			description:
				"Onde a mágica do improviso começa. Aprenda os fundamentos, como aceitação, espontaneidade e a arte de construir uma cena do zero.",
			imageSrc: "/images/academia-despertar-criativo2025.1.webp",
			imageAlt:
				"Academia despertar criativo: Adultos em uma aula de improviso, jogando e se divertindo",
			tags: ["Nível 1", "Presencial"],
			href: ""
		},
		{
			title: "Teatro Esporte Club 😜",
			description:
				"Continue a aprimorar suas habilidades com exercícios mais avançados, foco em personagens e narrativas complexas.",
			imageSrc: "/images/teatro-esporte-club.webp",
			imageAlt: "Adultos treinando improviso, com foco em expressão corporal",
			tags: ["Nível 2", "Presencial"],
			href: ""
		}
	],
	EN_US: [
		{
			title: "Creative Awakening Academy 🎭",
			description:
				"Where the magic of improv begins. Learn the fundamentals, such as acceptance, spontaneity, and the art of building a scene from scratch.",
			imageSrc: "/images/academia-despertar-criativo2025.1.webp",
			imageAlt:
				"Creative Awakening Academy: Adults in an improv class, playing and having fun",
			tags: ["Level 1", "In-person"],
			href: ""
		},
		{
			title: "Teatro Esporte Club 😜",
			description:
				"Continue to hone your skills with more advanced exercises, focusing on characters and complex narratives.",
			imageSrc: "/images/teatro-esporte-club.webp",
			imageAlt: "Adults practicing improv, focusing on body language",
			tags: ["Level 2", "In-person"],
			href: ""
		}
	]
};

export const kidsClasses: Classes = {
	PT_BR: [
		// {
		//  title: "Improviso Kids & Teens",
		//  description:
		//    "Através de jogos lúdicos, as crianças e jovens desenvolvem a criatividade, a capacidade de comunicação e a confiança.",
		//  imageSrc: "/images/impro-criancas.jpg",
		//  imageAlt:
		//    "Crianças e adolescentes em uma aula de teatro de improviso, brincando e interagindo.",
		//  tags: ["Infantil", "Teens", "Presencial"],
		//  href: "/turmas/improviso-kids-teens"
		// }
	],
	EN_US: [
		// {
		//  title: "Improv Kids & Teens",
		//  description:
		//    "Through playful games, children and teenagers develop creativity, communication skills, and confidence.",
		//  imageSrc: "/images/impro-criancas.jpg",
		//  imageAlt:
		//    "Children and teenagers in an improv theater class, playing and interacting.",
		//  tags: ["Kids", "Teens", "In-person"],
		//  href: "/turmas/improviso-kids-teens"
		// }
	]
};

export const pastClasses: Classes = {
	PT_BR: [
		{
			title: "Workshop Despertar Criativo 💡",
			description:
				"Uma retrospectiva de nosso workshop intensivo, que explorou comédia física e improviso corporal. Uma experiência inesquecível!",
			imageSrc: "/images/workshop-despertar-criativo1.webp",
			imageAlt: "Turma de improviso passada, posando para uma foto de grupo",
			href: "https://www.instagram.com/stories/highlights/18002377969441573/",
			tags: ["Comédia Física", "Intensivo"]
		},
		{
			title: "Workshop Palhaço Interior 🤡",
			description:
				"Desperte seu Palhaço Interior! Você já sentiu aquela vontade de rir sem motivo, de soltar o que tem de mais espontâneo e verdadeiro dentro de você?",
			imageSrc: "/images/workshop-palhaco-interior1.webp",
			imageAlt:
				"Atores explorando a figura do palhaço em um workshop de teatro.",
			href: "https://www.instagram.com/p/DMGtt2DyK7R/",
			tags: ["Palhaçaria", "Autoconhecimento"]
		},
		{
			title: "Impro Masters 🎪",
			description:
				"Espetáculo de improviso que já esteve nos grandes teatros de Aracaju. O Impro Masters trazia jogos desafiadores e uma verdadeira batalha de improviso dentro dos palcos",
			imageSrc: "/images/impro-masters.webp",
			imageAlt:
				"Impro Masters: Atores em uma batalha de improviso no palco do teatro Tobias Barreto",
			href: "https://www.instagram.com/p/CUBpKrxNgUa/?img_index=1",
			tags: ["Palhaçaria", "Autoconhecimento"]
		},
		{
			title: "Palhaço Biruta 🤪",
			description:
				"Esse é uma palhaço nada convencional. Personagem criado por Rodolfo Lisboa, nosso diretor e ator, esse palhaço se mostra bem diferente dentro e fora dos palcos.",
			imageSrc: "/images/palhaço-biruta.webp",
			imageAlt: "Palhaço biruta no espetáculo Quem Ri Por Último",
			href: "https://www.instagram.com/p/DJ8C9bctZpw/",
			tags: ["Palhaçaria", "Personagem"]
		}
	],
	EN_US: [
		{
			title: "Creative Awakening Workshop 💡",
			description:
				"A retrospective of our intensive workshop, which explored physical comedy and corporal improv. An unforgettable experience!",
			imageSrc: "/images/workshop-despertar-criativo1.webp",
			imageAlt: "Past improv class, posing for a group photo",
			href: "https://www.instagram.com/stories/highlights/18002377969441573/",
			tags: ["Physical Comedy", "Intensive"]
		},
		{
			title: "Inner Clown Workshop 🤡",
			description:
				"Awaken your Inner Clown! Have you ever felt like laughing for no reason, letting go of what's most spontaneous and true inside you?",
			imageSrc: "/images/workshop-palhaco-interior1.webp",
			imageAlt:
				"Actors exploring the figure of the clown in a theater workshop.",
			href: "https://www.instagram.com/p/DMGtt2DyK7R/",
			tags: ["Clowning", "Self-knowledge"]
		},
		{
			title: "Impro Masters 🎪",
			description:
				"An improv show that has been in the great theaters of Aracaju. Impro Masters brought challenging games and a true improv battle on stage",
			imageSrc: "/images/impro-masters.webp",
			imageAlt:
				"Impro Masters: Actors in an improv battle on the stage of the Tobias Barreto theater",
			href: "https://www.instagram.com/p/CUBpKrxNgUa/?img_index=1",
			tags: ["Clowning", "Self-knowledge"]
		},
		{
			title: "Biruta the Clown 🤪",
			description:
				"This is a very unconventional clown. A character created by Rodolfo Lisboa, our director and actor, this clown shows himself to be very different both on and off stage.",
			imageSrc: "/images/palhaço-biruta.webp",
			imageAlt: "Biruta the clown in the show 'Quem Ri Por Último'",
			href: "https://www.instagram.com/p/DJ8C9bctZpw/",
			tags: ["Clowning", "Character"]
		}
	]
};
