import Header from "../Header/index";

const Footer = () => {
  return (
    <>
      <section className="bg-footer">
        <div className="container flex bb-gray mt-6">
          <div className="grid-5 text-center-mobile">
            <h1>Contato</h1>
            <p className="mt-4 color-white">
              Eu adoraria ouvir sobre suas ideias e como posso ajudar. Preencha
              o formulário e entrarei em contato com você o mais breve possível.
            </p>
          </div>
          <div className="grid-2 disappear"></div>
          <div className="grid-5">
            <form>
              <input
                type="text"
                placeholder="Nome"
                className="uppercase semi-bold"
              />
              <input
                type="text"
                placeholder="E-mail"
                className="mt-3 uppercase semi-bold"
              />
              <textarea
                rows="4"
                placeholder="Mensagem"
                className="mt-3 uppercase semi-bold"
              ></textarea>
            </form>
            <div className="flex-end-row mt-4">
              <button className="btn_underline uppercase color-gradient bb-gradient">enviar mensagem</button>
            </div>
          </div>
        </div>

        <div className="py-4">
          <Header />
        </div>
      </section>
    </>
  );
};
export default Footer;
