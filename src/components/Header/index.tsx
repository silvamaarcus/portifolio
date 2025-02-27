import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Cross,
  GithubFill,
  LinkedinBoxFill,
  ThreeLineHorizontal,
} from "akar-icons";

import ProfileImg from "/img/profile.png";

import { useThemeSwitcher } from "../../stores/useThemeSwitcher";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const { t } = useTranslation();

  const theme = useThemeSwitcher((state) => state.theme);

  return (
    <section
      className={`custom-container ${theme === "dark" ? "text-soft-white" : "text-soft-black"}`}
    >
      <header
        className={` ${theme === "dark" ? "bg-background/10" : "bg-soft-white/10"} fixed top-0 right-0 left-0 z-50 flex flex-wrap items-center justify-between gap-4 px-4 py-6 backdrop-blur-md md:justify-around md:px-0`}
      >
        <a href="/" className="hidden items-center gap-4 md:flex">
          <img
            src={ProfileImg}
            alt="Marcus Silva"
            className="hover:border-secondary size-16 rounded-full border-4 border-white object-cover"
          />
        </a>

        {/* Menu Mobile */}
        <div className="flex items-center md:hidden">
          <button
            onClick={handleClick}
            className={`hover:text-primary cursor-pointer transition-all duration-700 ease-in-out`}
          >
            <div className="transition-opacity duration-300">
              {isOpen ? (
                <Cross strokeWidth={2} size={32} />
              ) : (
                <ThreeLineHorizontal strokeWidth={2} size={36} />
              )}
            </div>
          </button>
        </div>

        <nav className="hidden gap-8 md:flex">
          <a
            href="/"
            className="hover:border-primary border-b-4 border-transparent text-xl transition-colors duration-500"
          >
            {t("navigation.home")}
          </a>
          <a
            href="#about"
            className="hover:border-primary border-b-4 border-transparent text-xl transition-colors duration-500"
          >
            {t("navigation.about")}
          </a>
          <a
            href="#projects"
            className="hover:border-primary border-b-4 border-transparent text-xl transition-colors duration-500"
          >
            {t("navigation.projects")}
          </a>
          <a
            href="#contact"
            className="hover:border-primary border-b-4 border-transparent text-xl transition-colors duration-500"
          >
            {t("navigation.contact")}
          </a>
        </nav>

        <div className="flex items-center gap-8">
          <a
            href="https://github.com/silvamaarcus"
            className="hover:text-primary transition-all duration-300"
            target="_blank"
          >
            <GithubFill strokeWidth={2} size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/silvamaarcus/"
            className="hover:text-primary transition-all duration-300"
            target="_blank"
          >
            <LinkedinBoxFill strokeWidth={2} size={32} />
          </a>
        </div>
      </header>

      {/* Menu Mobile */}
      <nav>
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } ${theme === "dark" ? "bg-background/10" : "bg-soft-white/10"} fixed top-20 right-0 left-0 z-50 flex-col backdrop-blur-md md:hidden`}
        >
          <li
            className={`border-b p-4 ${theme === "dark" ? "border-background hover:bg-white/10" : "border-soft-white hover:bg-black/10"} text-xl backdrop-blur-md transition-all duration-500 hover:pl-6`}
          >
            <a href="/">{t("navigation.home")}</a>
          </li>
          <li
            className={`border-b p-4 ${theme === "dark" ? "border-background hover:bg-white/10" : "border-soft-white hover:bg-black/10"} text-xl backdrop-blur-md transition-all duration-500 hover:pl-6`}
          >
            <a href="#about">{t("navigation.about")}</a>
          </li>
          <li
            className={`border-b p-4 ${theme === "dark" ? "border-background hover:bg-white/10" : "border-soft-white hover:bg-black/10"} text-xl backdrop-blur-md transition-all duration-500 hover:pl-6`}
          >
            <a href="#projects">{t("navigation.projects")}</a>
          </li>
          <li
            className={`border-b p-4 ${theme === "dark" ? "border-background hover:bg-white/10" : "border-soft-white hover:bg-black/10"} text-xl backdrop-blur-md transition-all duration-500 hover:pl-6`}
          >
            <a href="#contact">{t("navigation.contact")}</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
