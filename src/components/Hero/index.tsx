import { ArrowDown } from "akar-icons";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <>
      <section className="custom-containe relative flex h-[600px] flex-col items-center justify-center md:min-h-screen">
        <div className="flex h-full flex-col items-center justify-center">
          <h1 className="text-center text-3xl font-bold md:text-8xl">
            Prazer em te conhecer! <br /> Eu sou{" "}
            <span className="border-primary border-b-4">Marcus Silva</span>.
          </h1>
          <p className="my-10 text-center w-[70%] md:text-2xl">
            Um desenvolvedor front-end apaixonado por criar interfaces e dar
            vida a inovações 👋.
          </p>
          <div className="flex justify-center gap-4 sm:justify-start">
            <Button>Download CV</Button>
            <Button variant="secondary">Contato</Button>
          </div>
        </div>
        <button
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          className="bg-secondary absolute bottom-8 animate-bounce cursor-pointer rounded-full mb-4 p-3 text-black hover:opacity-70"
        >
          <ArrowDown strokeWidth={2} size={24} />
        </button>
      </section>
    </>
  );
};

export default Hero;
