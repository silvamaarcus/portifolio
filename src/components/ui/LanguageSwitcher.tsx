import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => i18n.changeLanguage("pt-BR")}
        className={`rounded-full p-2 transition-colors duration-300 ${
          i18n.language === "pt-BR"
            ? "bg-primary text-soft-white"
            : "hover:bg-white/10"
        }`}
      >
        PT
      </button>
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={`rounded-full p-2 transition-colors duration-300 ${
          i18n.language === "en" ? "bg-primary text-soft-white" : "hover:bg-white/10"
        }`}
      >
        EN
      </button>
    </div>
  );
};
