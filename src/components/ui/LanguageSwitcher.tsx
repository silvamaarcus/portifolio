import { useTranslation } from "react-i18next";

import { useThemeSwitcher } from "../../stores/useThemeSwitcher";

export const LanguageSwitcher = () => {
  const theme = useThemeSwitcher((state) => state.theme);

  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => i18n.changeLanguage("pt-BR")}
        className={`rounded-full p-2 transition-colors duration-300 ${theme === "dark" ? "text-soft-white hover:bg-white/10" : "text-soft-black hover:bg-black/10"} ${
          i18n.language === "pt-BR"
            ? "bg-primary text-white"
            : "hover:bg-white/10"
        }`}
      >
        PT
      </button>
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={`rounded-full p-2 transition-colors duration-300 ${theme === "dark" ? "text-soft-white hover:bg-white/10" : "text-soft-black hover:bg-black/10"} ${
          i18n.language === "en" ? "bg-primary text-white" : "hover:bg-white/10"
        }`}
      >
        EN
      </button>
    </div>
  );
};
