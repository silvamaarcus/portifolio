import { WhatsappFill } from "akar-icons";
import Button from "../ui/Button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Hero = () => {
  const downloadResume = () => {
    window.open("/pdf/marcus-silva-cv.pdf", "_blank");
  };

  return (
    <>
      <section
        className="custom-containe relative flex h-[600px] flex-col items-center justify-center md:min-h-screen"
        id="home"
      >
        <div className="flex h-full flex-col items-center justify-center overflow-hidden">
          <h1 className="animate__animated animate__backInRight animate__delay-30000s text-center text-3xl font-bold md:text-8xl">
            Prazer em te conhecer! <br /> Eu sou{" "}
            <span className="color-gradient">Marcus Silva.</span>
          </h1>
          <p className="animate__animated animate__backInLeft animate__delay-10000s my-10 w-[70%] text-center md:text-2xl">
            Um desenvolvedor front-end apaixonado por criar interfaces e dar
            vida a inovações 👋.
          </p>
          <div className="animate__animated animate__backInLeft animate__delay-30000s flex items-center justify-center gap-4 sm:justify-start">
            <Button onClick={downloadResume}>Download CV</Button>
            <a
              href="https://wa.me/5531997003074"
              target="_blank"
              className="border-primary flex items-center gap-4 rounded-md border-2 px-4 py-2 text-white hover:opacity-90"
            >
              <WhatsappFill strokeWidth={2} size={20} />
              Contato
            </a>
          </div>
        </div>
        <button
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          className="absolute bottom-8 cursor-pointer"
        >
          <DotLottieReact
            src="https://lottie.host/ba453da1-161f-479f-aa28-9b8961c54f6a/OZI744whN3.lottie"
            loop
            autoplay
            className="w-40"
          />
        </button>
      </section>
    </>
  );
};

export default Hero;
