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
		bio: "Fundador, diretor e ator. Rodolfo é professor de improviso corporal, teatro tradicional e especialista em improvisação artística para crianças e adultos",
		imageSrc: "/images/rodolfo-lisboa.png",
		imageAlt:
			"Foto de Rodolfo Lisboa, diretor, ator e professor do Teatro Esporte.",
		socialUrl: "https://www.instagram.com/rodolfolisboa/"
	},
	{
		name: "Mateus Mileto",
		bio: "Ator e professor com anos de atuação no cenário de teatro sergipano, Mateus ajudou Rodolfo a começar o Teatro Esporte",
		imageSrc: "/images/mateus-mileto.png",
		imageAlt: "Foto de Mateus Mileto, professor do Teatro Esporte.",
		socialUrl: "https://www.instagram.com/mateusmileto/"
	}
];
