import Header from "../Header/index";

// Hooks
import { useState } from "react";

const Footer = () => {
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Number: "",
    Message: "",
  });

  // Resetar formulario aós requisicao
  const resetForm = () => {
    setUser({
        Name: "",
        Email: "",
        Number: "",
        Message: "",
    });
};

  let name, value;
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const getData = async (e) => {
    const { Name, Email, Number, Message } = user;
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify({
        Name,
        Email,
        Number,
        Message,
      }),
    };
    const res = await fetch(
      "https://silvamarcus-contatos-default-rtdb.firebaseio.com/UserData.json",
      options
    );
    if (res) {
      alert("Obrigado por entrar em contato!!!");
      resetForm();  // Zera os inputs após a requisição ser bem-sucedida
    } else {
      alert("Que pena! Aconteceu algo de errado...");
    }
  };

  return (
    <>
      <section className="bg-footer" id="footer">
        <div
          className="container flex bb-gray px-0 mt-5"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2000"
        >
          <div className="grid-5 text-center-mobile">
            <h1>Contato</h1>
            <p className="mt-4 color-white">
              Eu adoraria ouvir sobre suas ideias e como posso ajudar. Preencha
              o formulário e entrarei em contato com você o mais breve possível.
            </p>
          </div>
          <div className="grid-2 disappear"></div>
          <div className="grid-5">
            <form method="POST">
              <input
                type="text"
                placeholder="Nome"
                className="semi-bold"
                required
                name="Name"
                value={user.Name}
                onChange={data}
                autoComplete="off"
              />
              <input
                type="text"
                placeholder="E-mail"
                className="mt-3 semi-bold"
                required
                name="Email"
                value={user.Email}
                onChange={data}
                autoComplete="off"
              />
              <input
                type="text"
                placeholder="Telefone (DDD)"
                className="mt-3 semi-bold"
                required
                name="Number"
                value={user.Number}
                onChange={data}
                autoComplete="off"
              />
              <textarea
                rows="4"
                placeholder="Mensagem"
                className="mt-3 semi-bold"
                required
                name="Message"
                value={user.Message}
                onChange={data}
                autoComplete="off"
              ></textarea>
            </form>
            <div className="flex-end-row mt-4">
              <button
                className="btn-underline uppercase color-gradient bb-gradient"
                onClick={getData}
              >
                Enviar mensagem
              </button>
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
