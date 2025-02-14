import { GithubFill, LinkedinBoxFill } from "akar-icons";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="custom-container border-soft-black mt-12 border-t-2 pt-32">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-12">
          <div className="col-span-12 text-center sm:col-span-6 md:text-start">
            <h1 className="mb-9 text-2xl font-bold md:text-start">
              Marcus Silva
            </h1>
            <p className="text-2xl">
              {t("footer.info")}
            </p>
          </div>

          <div className="col-span-12 sm:col-span-6">
            <div className="flex items-center justify-center gap-8 md:justify-end">
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
          </div>
        </div>
      </section>
      <div className="custom-container border-soft-black border-t-2 py-10">
        <p className="mx-auto w-3/4 text-center">
          {t("footer.copy")}{" "}
          <a
            href="https://github.com/silvamaarcus"
            target="_blank"
            className="text-primary hover:opacity-80"
          >
            Marcus Silva
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
