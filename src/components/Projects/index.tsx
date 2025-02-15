// Images
import Project_1_img from "/img/project_1.png";
import Project_2_img from "/img/project_2.png";
import Project_3_img from "/img/project_3.png";

import { useTranslation } from "react-i18next";

import { useThemeSwitcher } from "../../stores/useThemeSwitcher";

const Projects = () => {
  const theme = useThemeSwitcher((state) => state.theme);

  const { t } = useTranslation();

  return (
    <>
      <section
        className={`custom-container overflow-hidden pt-32 ${theme === "dark" ? "text-soft-white" : "text-background"}`}
        id="projects"
      >
        <div className="animate__animated animate__fadeInUp animate__delay-30000 flex flex-col items-center justify-center">
          <div className="relative">
            <h1
              className={`text-4xl font-bold ${theme === "dark" ? "text-white" : ""}`}
            >
              {t("sectionProjects.title")}
            </h1>
            <span className="bg-primary absolute -bottom-4 left-1/2 h-1 w-8 -translate-x-1/2 transform"></span>
          </div>
          <p className="my-12 text-center md:w-[70%] md:text-2xl">
            {t("sectionProjects.description")}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-12">
          {/* Project 1 */}
          <div className="animate__animated animate__fadeInDown animate__delay-20000 col-span-12 sm:col-span-4">
            <a href="https://forest-page-pi.vercel.app/" target="_blank">
              <div
                className={`group relative flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-md border-4 text-center backdrop-blur-md transition-all duration-700 ${theme === "dark" ? "border-soft-black bg-white/1" : "border-soft-white bg-black/1"}`}
              >
                <img
                  src={Project_1_img}
                  alt="Forest"
                  className="absolute inset-0 h-full w-full object-cover opacity-10 blur-sm transition duration-700 group-hover:scale-110 group-hover:opacity-100"
                />
                <div className="relative z-10 space-y-4 px-10 py-8">
                  <p className="text-2xl">Forest</p>
                  <img
                    src={Project_1_img}
                    alt="Forest"
                    className="rounded-lg transition duration-700 group-hover:scale-105"
                  />
                  <div className="flex flex-wrap justify-center gap-4 md:flex-nowrap">
                    <img
                      src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                      alt="React"
                    />
                    <img
                      src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
                      alt="TypeScript"
                    />
                    <img
                      src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
                      alt="TailwindCSS"
                    />
                  </div>

                  <p className="color-gradient text-lg">2025</p>
                </div>
              </div>
            </a>
          </div>
          {/* Project 2 */}
          <div className="animate__animated animate__fadeInUp animate__delay-25000 col-span-12 sm:col-span-4">
            <a href="https://wedding-ms-psi.vercel.app/" target="_blank">
              <div className={`group relative flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-md border-4 text-center backdrop-blur-md transition-all duration-700 ${theme === "dark" ? "border-soft-black bg-white/1" : "border-soft-white bg-black/1"}`}>
                <img
                  src={Project_2_img}
                  alt="Site de Casamento"
                  className="absolute inset-0 h-full w-full object-cover opacity-10 blur-sm transition duration-700 group-hover:scale-110 group-hover:opacity-100"
                />
                <div className="relative z-10 space-y-4 px-10 py-8">
                  <p className="text-2xl">Site de Casamento</p>
                  <img
                    src={Project_2_img}
                    alt="Site de Casamento"
                    className="rounded-lg transition duration-700 group-hover:scale-105"
                  />
                  <div className="flex justify-center gap-4">
                    <img
                      src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                      alt="HTML5"
                    />
                    <img
                      src="https://img.shields.io/badge/sass-%23CC6699.svg?style=for-the-badge&logo=sass&logoColor=white"
                      alt="Sass"
                    />
                    <img
                      src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                      alt="JavaScript"
                    />
                  </div>

                  <p className="color-gradient text-lg">2024</p>
                </div>
              </div>
            </a>
          </div>
          {/* Project 3 */}
          <div className="animate__animated animate__fadeInDown animate__delay-30000 col-span-12 sm:col-span-4">
            <a href="https://portifolio-bikcraft.vercel.app/" target="_blank">
              <div className={`group relative flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-md border-4 text-center backdrop-blur-md transition-all duration-700 ${theme === "dark" ? "border-soft-black bg-white/1" : "border-soft-white bg-black/1"}`}>
                <img
                  src={Project_3_img}
                  alt="Bikcraft"
                  className="absolute inset-0 h-full w-full object-cover opacity-10 blur-sm transition duration-700 group-hover:scale-110 group-hover:opacity-100"
                />
                <div className="relative z-10 space-y-4 px-10 py-8">
                  <p className="text-2xl">Bikcraft</p>
                  <img
                    src={Project_3_img}
                    alt="Bikcraft"
                    className="rounded-lg transition duration-700 group-hover:scale-105"
                  />
                  <div className="flex justify-center gap-4">
                    <img
                      src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                      alt="React"
                    />
                    <img
                      src="https://img.shields.io/badge/sass-%23CC6699.svg?style=for-the-badge&logo=sass&logoColor=white"
                      alt="Sass"
                    />
                  </div>

                  <p className="color-gradient text-lg">2023</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
