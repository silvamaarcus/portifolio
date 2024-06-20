import avatar from "../../assets/img/avatar.png";

const Hero = () => {
  return (
    <>
      <section className="container py-0 mt-5 flex-start-row flex-wrap">
        <div className="grid-8 flex" id="hero-info">
          <h1>
            Olá! Como vai?
            <br />
            Eu sou o <span>Marcus!</span>
          </h1>
          <p className="ml-0 p1 grid-8">
            Um Desenvolvedor Frontend apaixonado por criar interfaces e dar vida
            a inovações 👋.
          </p>
          <div className="flex-start-row gap-3">
            <button className="btn">Download CV</button>
            <button className="btn-alt">Entrar em contato</button>
          </div>
          <div className="art-services mt-6"></div>
        </div>
        <div className="grid-4" id="hero-art">
          <img src={avatar} />
        </div>
      </section>
    </>
  );
};
export default Hero;
