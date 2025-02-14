import { ArrowDown } from "akar-icons";
import Button from "../ui/Button";

const Hero = () => {
  const downloadResume = () => {
    window.open("/pdf/marcus-silva-cv.pdf", "_blank");
  };

  return (
    <>
      <section className="custom-containe relative flex h-[600px] flex-col items-center justify-center md:min-h-screen" id="home">
        <div className="flex h-full flex-col items-center justify-center">
          <h1 className="text-center text-3xl font-bold md:text-8xl">
            Prazer em te conhecer! <br /> Eu sou{" "}
            <span className="border-primary border-b-4">Marcus Silva</span>.
          </h1>
          <p className="my-10 w-[70%] text-center md:text-2xl">
            Um desenvolvedor front-end apaixonado por criar interfaces e dar
            vida a inovações 👋.
          </p>
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            <Button onClick={downloadResume}>Download CV</Button>
            <a
              href="https://wa.me/5531997003074"
              target="_blank"
              className="border-primary rounded-md border-2 px-4 py-2 text-white hover:opacity-90"
            >
              Contato
            </a>
          </div>
        </div>
        <button
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          className="bg-secondary absolute bottom-8 mb-4 animate-bounce cursor-pointer rounded-full p-3 text-black hover:opacity-70"
        >
          <ArrowDown strokeWidth={2} size={24} />
        </button>
      </section>
    </>
  );
};

export default Hero;
