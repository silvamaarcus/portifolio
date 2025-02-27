import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { Trans, useTranslation } from "react-i18next";

import { useThemeSwitcher } from "../../stores/useThemeSwitcher";

const About = () => {
  const theme = useThemeSwitcher((state) => state.theme);

  const { t } = useTranslation();

  return (
    <>
      <section
        className={`custom-container overflow-hidden pt-32 ${theme === "dark" ? "text-soft-white" : "text-background"}`}
        id="about"
      >
        <div
          className="flex flex-col items-center justify-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="relative">
            <h1
              className={`text-4xl font-bold ${theme === "dark" ? "text-white" : ""}`}
            >
              {t("sectionAbout.title")}
            </h1>
            <span className="bg-primary absolute -bottom-4 left-1/2 h-1 w-8 -translate-x-1/2 transform"></span>
          </div>

          <p className="my-12 text-center md:w-[70%] md:text-2xl">
            {t("sectionAbout.description")}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-12">
          <div
            className="col-span-12 sm:col-span-6"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h1
              className={`mb-9 text-2xl font-bold md:text-start ${theme === "dark" ? "text-white" : ""}`}
            >
              {t("sectionAbout.aboutMe")}
            </h1>
            <span className="space-y-4 text-xl">
              <p>{t("sectionAbout.info.p_1")}</p>

              <p>
                <Trans
                  i18nKey="sectionAbout.info.p_2"
                  components={{
                    github: (
                      <a
                        href="https://github.com/silvamaarcus"
                        target="_blank"
                        className="text-secondary font-bold hover:underline"
                      >
                        GitHub
                      </a>
                    ),
                    linkedin: (
                      <a
                        href="https://www.linkedin.com/in/silvamaarcus/"
                        target="_blank"
                        className="text-secondary font-bold hover:underline"
                      >
                        Linkedin
                      </a>
                    ),
                  }}
                />
              </p>

              <p>{t("sectionAbout.info.p_3")}</p>
            </span>
          </div>

          <div
            className="col-span-12 sm:col-span-6"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <h1
              className={`mb-9 text-2xl font-bold md:text-start ${theme === "dark" ? "text-white" : ""}`}
            >
              {t("sectionAbout.mySkills")}
            </h1>
            <div className="flex flex-wrap gap-4">
              <img
                src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                alt="CSS3"
              />
              <img
                src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                alt="JavaScript"
              />
              <img
                src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
                alt="TypeScript"
              />
              <img
                src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
                alt="Python"
              />
              <img
                src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                alt="HTML5"
              />
              <img
                src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase"
                alt="Firebase"
              />
              <img
                src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"
                alt="Vercel"
              />
              <img
                src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                alt="NodeJS"
              />
              <img
                src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
                alt="Next JS"
              />
              <img
                src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                alt="React"
              />
              <img
                src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
                alt="TailwindCSS"
              />
              <img
                src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"
                alt="Figma"
              />
              <img
                src="https://img.shields.io/badge/storybook-%23FF4785.svg?style=for-the-badge&logo=storybook&logoColor=white"
                alt="Storybook"
              />
              <img
                src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"
                alt="Docker"
              />
              <img
                src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"
                alt="Bootstrap"
              />
              <img
                src="https://img.shields.io/badge/sass-%23CC6699.svg?style=for-the-badge&logo=sass&logoColor=white"
                alt="Sass"
              />
            </div>
            {/* Animation */}
            <div>
              <DotLottieReact
                src="https://lottie.host/0e89894f-890a-4c9e-9819-60aa657c0484/Gy42xtwKLH.lottie"
                loop
                autoplay
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
