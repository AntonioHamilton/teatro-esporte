type Teacher = {
	name: string;
	bio: string;
	imageSrc: string;
	socialUrl: string;
	imageAlt: string;
};

type Teachers = {
	PT_BR: Teacher[];
	EN_US: Teacher[];
};

export const teachers: Teachers = {
	PT_BR: [
		{
			name: "Rodolfo Lisboa",
			bio: "Fundador do Teatro Esporte, Rodolfo Lisboa é ator, diretor teatral e palhaço. Com sua expertise em improvisação, ele ensina técnicas que aprimoram a comunicação e a criatividade de seus alunos.",
			imageSrc: "/images/rodolfo-lisboa.png",
			imageAlt:
				"Foto de Rodolfo Lisboa, diretor, ator e professor do Teatro Esporte.",
			socialUrl: "https://www.instagram.com/rodolfolisboa/"
		},
		{
			name: "Mateus Mileto",
			bio: "Cofundador do Teatro Esporte, Mateus Mileto é ator e professor com anos de experiência no cenário do teatro sergipano. Sua atuação foi fundamental para o início e desenvolvimento da companhia.",
			imageSrc: "/images/mateus-mileto.png",
			imageAlt: "Foto de Mateus Mileto, ator e professor do Teatro Esporte.",
			socialUrl: "https://www.instagram.com/mateusmileto/"
		}
	],
	EN_US: [
		{
			name: "Rodolfo Lisboa",
			bio: "Founder of Teatro Esporte, Rodolfo Lisboa is an actor, theater director, and clown. With his expertise in improvisation, he teaches techniques that enhance his students' communication and creativity.",
			imageSrc: "/images/rodolfo-lisboa.png",
			imageAlt:
				"Photo of Rodolfo Lisboa, director, actor, and teacher at Teatro Esporte.",
			socialUrl: "https://www.instagram.com/rodolfolisboa/"
		},
		{
			name: "Mateus Mileto",
			bio: "Co-founder of Teatro Esporte, Mateus Mileto is an actor and teacher with years of experience in the Sergipe theater scene. His work was fundamental to the company's beginning and development.",
			imageSrc: "/images/mateus-mileto.png",
			imageAlt: "Photo of Mateus Mileto, actor and teacher at Teatro Esporte.",
			socialUrl: "https://www.instagram.com/mateusmileto/"
		}
	]
};
