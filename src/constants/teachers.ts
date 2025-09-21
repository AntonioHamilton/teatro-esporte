type Teacher = {
	name: string;
	bio: string;
	imageSrc: string;
	socialUrl: string;
	imageAlt: string;
};

export const teachers: Teacher[] = [
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
];
