import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/LanguageSwitcher.css";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (
		<div className="language-switcher">
			<select
				onChange={(e) => changeLanguage(e.target.value)}
				value={i18n.language}
			>
				<option value="es">🇪🇸 Español</option>
				<option value="pt">🇧🇷 Português</option>
				<option value="en">🇺🇸 English</option>
			</select>
		</div>
	);
};

export default LanguageSwitcher;
