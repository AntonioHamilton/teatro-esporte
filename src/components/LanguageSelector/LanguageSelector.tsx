import Image from "next/image";
import * as SC from "./LanguageSelector.styled";
import { useTranslation } from "@/hooks/useTranslation";
import { CommonTranslations } from "@/translations/Common";

export const LanguageSelector = () => {
	const { language } = useTranslation();

	const handleLanguageChange = (lang: string) => {
		localStorage.setItem("language", lang);
		window.dispatchEvent(new CustomEvent("languageChange", { detail: lang }));
	};

	return (
		<SC.LanguageSelectorContainer>
			<SC.LanguageButton
				type="button"
				onClick={() => handleLanguageChange("PT_BR")}
				aria-label={
					CommonTranslations[language].language_switcher_aria_label_portuguese
				}
			>
				<Image
					src="/icons/br-flag.svg"
					alt={
						CommonTranslations[language].language_switcher_aria_label_portuguese
					}
					width={25}
					height={18}
				/>
			</SC.LanguageButton>
			<SC.LanguageButton
				type="button"
				onClick={() => handleLanguageChange("EN_US")}
				aria-label={
					CommonTranslations[language].language_switcher_aria_label_english
				}
			>
				<Image
					src="/icons/us-flag.svg"
					alt={
						CommonTranslations[language].language_switcher_aria_label_english
					}
					width={25}
					height={18}
				/>
			</SC.LanguageButton>
		</SC.LanguageSelectorContainer>
	);
};
