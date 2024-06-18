const Footer = () => {
  return (
    <>
      <section className="bg-footer">
        <div className="container flex-center">
          <div className="grid-5">
            <h1>Contato</h1>
            <p className="mt-4">
              Eu adoraria ouvir sobre suas ideias e como posso ajudar. Preencha
              o formulário e entrarei em contato com você o mais breve possível.
            </p>
          </div>
          <div className="grid-2 disappear"></div>
          <div className="grid-5">
            <form>
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="E-mail" className="mt-3"/>
              <textarea rows="4" placeholder="Mensagem" className="mt-3"></textarea>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
