import { WhatsappFill } from "akar-icons";
import Button from "../ui/Button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { Trans, useTranslation } from "react-i18next";

import { useThemeSwitcher } from "../../stores/useThemeSwitcher";

const Hero = () => {
  const downloadResume = () => {
    window.open("/pdf/marcus-silva-cv.pdf", "_blank");
  };

  const { t } = useTranslation();

  const theme = useThemeSwitcher((state) => state.theme);

  return (
    <>
      <section
        className={`custom-container relative flex h-[600px] flex-col items-center justify-center md:min-h-screen ${
          theme === "dark" ? "text-soft-white" : "text-background"
        }`}
        id="home"
      >
        <div className="flex h-full flex-col items-center justify-center overflow-hidden">
          <h1 className="animate__animated animate__backInRight text-center text-3xl font-bold md:text-8xl">
            <Trans
              i18nKey="hero.title"
              components={{
                br: <br />,
                span: <span className="color-gradient" />,
              }}
              values={{ name: "Marcus Silva." }}
            />
          </h1>
          <p className="animate__animated animate__backInLeft my-10 w-[70%] text-center md:text-2xl">
            {t("hero.subtitle")}
          </p>
          <div className="animate__animated animate__backInLeft flex items-center justify-center gap-4 sm:justify-start">
            <Button onClick={downloadResume}>{t("buttons.download")}</Button>
            <a
              href="https://wa.me/5531997003074"
              target="_blank"
              className="border-primary flex items-center gap-4 rounded-md border-2 px-4 py-2 hover:opacity-90"
            >
              <WhatsappFill strokeWidth={2} size={20} />
              {t("buttons.contact")}
            </a>
          </div>
        </div>
        <button
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          className="absolute bottom-8 cursor-pointer"
        >
          <DotLottieReact
            src="https://lottie.host/ba453da1-161f-479f-aa28-9b8961c54f6a/OZI744whN3.lottie"
            loop
            autoplay
            className="w-40"
          />
        </button>
      </section>
    </>
  );
};

export default Hero;
