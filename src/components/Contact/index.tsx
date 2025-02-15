import { useTranslation } from "react-i18next";

import { useThemeSwitcher } from "../../stores/useThemeSwitcher";
import FormContact from "../ui/Form";

const Contact = () => {
  const { t } = useTranslation();

  const theme = useThemeSwitcher((state) => state.theme);

  return (
    <>
      <section
        className={`custom-container overflow-hidden pt-32 ${theme === "dark" ? "text-soft-white" : "text-background"}`}
        id="contact"
      >
        <div
          className="flex flex-col items-center justify-center"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <div className="relative">
            <h1 className="text-4xl font-bold">{t("sectionContact.title")}</h1>
            <span className="bg-primary absolute -bottom-4 left-1/2 h-1 w-8 -translate-x-1/2 transform"></span>
          </div>
          <p className="my-12 text-center md:w-[70%] md:text-2xl">
            {t("sectionContact.description")}
          </p>

          <FormContact />
        </div>
      </section>
    </>
  );
};

export default Contact;
