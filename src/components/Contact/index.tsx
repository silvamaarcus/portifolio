import Button from "../ui/Button";

const Contact = () => {
  return (
    <>
      <section className="custom-container py-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Contato</h1>
          <p className="my-9 text-center md:w-[70%] md:text-2xl">
            Sinta-se à vontade para entrar em contato comigo enviando o
            formulário abaixo e entrarei em contato com você o mais breve
            possível.
          </p>

          <form className="bg-soft-black mt-10 flex w-full flex-col gap-4 rounded-md p-10 md:w-3/4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-lg">
                Nome
              </label>
              <input
                type="text"
                className="bg-background w-full rounded-md border-0 p-2 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-lg">
                E-mail
              </label>
              <input
                type="text"
                className="bg-background w-full rounded-md border-0 p-2 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-lg">
                Mensagem
              </label>
              <textarea
                name="message"
                rows={5}
                className="bg-background w-full rounded-md border-0 p-2 outline-none"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <Button>Enviar</Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
