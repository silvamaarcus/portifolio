import Button from "../ui/Button";

import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="custom-container overflow-hidden pt-32" id="contact">
        <div className="animate__animated animate__fadeInUp animate__delay-30000 flex flex-col items-center justify-center">
          <div className="relative">
            <h1 className="text-4xl font-bold">{t("sectionContact.title")}</h1>
            <span className="bg-primary absolute -bottom-4 left-1/2 h-1 w-8 -translate-x-1/2 transform"></span>
          </div>
          <p className="my-12 text-center md:w-[70%] md:text-2xl">
            {t("sectionContact.description")}
          </p>

          <form className="bg-soft-black mt-10 flex w-full flex-col gap-4 rounded-md p-10 md:w-3/4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-lg">
                {t("sectionContact.form.name")}
              </label>
              <input
                type="text"
                className="bg-background w-full rounded-md border-0 p-2 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-lg">
                {t("sectionContact.form.email")}
              </label>
              <input
                type="text"
                className="bg-background w-full rounded-md border-0 p-2 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-lg">
                {t("sectionContact.form.message")}
              </label>
              <textarea
                name="message"
                rows={5}
                className="bg-background w-full rounded-md border-0 p-2 outline-none"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <Button>{t("buttons.send")}</Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
