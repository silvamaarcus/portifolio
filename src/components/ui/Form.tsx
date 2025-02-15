import { useEffect, useState } from "react";

// Component
import Button from "./Button";

// Translations lib
import { useTranslation } from "react-i18next";

// Theme switcher
import { useThemeSwitcher } from "../../stores/useThemeSwitcher";

// Firebase
import { db, collection, addDoc } from "../../services/firabase";

// Resend emails
import emailjs from "emailjs-com";

const FormContact = () => {
  const { t } = useTranslation();

  const theme = useThemeSwitcher((state) => state.theme);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Salvar no Firebase
      await addDoc(collection(db, "contacts"), form);

      // Enviar e-mail de notificação via EmailJS
      await emailjs.send(
        "service_8fwry3s",
        "template_kzqbbxi",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: "devsilvamarcus@gmail.com",
        },
        "YjiEW-CbTf2iLSAR_",
      );

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar:", error);
    } finally {
      setLoading(false);
    }
  };

  // Resetar o estado após 10 segundos
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`mt-10 flex w-full flex-col gap-4 rounded-md p-10 md:w-3/4 ${theme === "dark" ? "bg-soft-black" : "bg-soft-white"}`}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-lg">
            {t("sectionContact.form.name")}
          </label>
          <input
            type="text"
            className={`w-full rounded-md border-0 p-2 outline-none ${theme === "dark" ? "bg-background" : "bg-white"}`}
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-lg">
            {t("sectionContact.form.email")}
          </label>
          <input
            type="text"
            className={`w-full rounded-md border-0 p-2 outline-none ${theme === "dark" ? "bg-background" : "bg-white"}`}
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-lg">
            {t("sectionContact.form.message")}
          </label>
          <textarea
            rows={5}
            className={`w-full rounded-md border-0 p-2 outline-none ${theme === "dark" ? "bg-background" : "bg-white"}`}
            name="message"
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex items-center gap-4">
          <Button type="submit" disabled={loading}>
            {loading ? "Enviando..." : t("buttons.send")}
          </Button>
          {success && (
            <p className="text-secondary mt-2 text-xl">
              Mensagem enviada com sucesso!
            </p>
          )}
        </div>
      </form>
    </>
  );
};

export default FormContact;
