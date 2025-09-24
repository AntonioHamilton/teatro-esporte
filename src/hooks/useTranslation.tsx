import { useEffect, useState } from "react";

export const useTranslation = () => {
	const [language, setLanguage] = useState<"PT_BR" | "EN_US">("PT_BR");

	useEffect(() => {
		const stored = localStorage.getItem("language");
		if (stored === "PT_BR" || stored === "EN_US") setLanguage(stored);

		const handleChange = (e: CustomEvent) => {
			setLanguage(e.detail);
		};

		window.addEventListener("languageChange", handleChange as EventListener);
		return () => {
			window.removeEventListener(
				"languageChange",
				handleChange as EventListener
			);
		};
	}, []);

	return { language };
};
