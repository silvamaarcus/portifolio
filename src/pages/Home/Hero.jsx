import avatar_image from "../../assets/img/avatar.png";
import MyCarousel from "../../components/Carousel";
import Carousel from "../../components/Carousel";

const Hero = () => {
  return (
    <>
      <section
        className="container py-0 mt-5 flex-start-row flex-wrap"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
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
            <a
              href="../../../public/pdf/cv_marcus.pdf"
              download="CV MARCUS SILVA.pdf"
            >
              <button className="btn">Download CV</button>
            </a>
            <a href="#footer">
              <button className="btn-alt">Entrar em contato</button>
            </a>
          </div>
          <div className="art-services mt-6">
            <MyCarousel />
          </div>
        </div>
        <div className="grid-4" id="hero-art">
          <img src={avatar_image} />
        </div>
      </section>
    </>
  );
};
export default Hero;
