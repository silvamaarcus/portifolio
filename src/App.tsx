// CSS
import "./assets/styles/animation.css";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeSwitcher } from "./components/ui/ThemeSwitcher";
import { LanguageSwitcher } from "./components/ui/LanguageSwitcher";

// Stores
import { useThemeSwitcher } from "./stores/useThemeSwitcher";

// Biblioteca de animação para Scroll.
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  const theme = useThemeSwitcher((state) => state.theme);

  return (
    <section className="relative overflow-hidden">
      <div>
        <div
          className={`background -z-10 *:-z-20 ${theme === "dark" ? "bg-background" : "bg-soft-white"}`}
        >
          <span className="ball"></span>
          <span className="ball"></span>
          <span className="ball"></span>
          <span className="ball"></span>
          <span className="ball"></span>
          <span className="ball"></span>
          <span className="ball"></span>
          <span className="ball"></span>
        </div>
        <Header />
        <Hero />
        <div
          className={`space-y-24 ${theme === "dark" ? "bg-background" : "bg-white"}`}
        >
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>

      <div
        className={`fixed bottom-4 left-1/2 flex h-14 w-48 -translate-x-1/2 transform items-center justify-center rounded-full border-2 backdrop-blur-md ${theme === "dark" ? "bg-soft-white/1 border-soft-black" : "bg-background/10 border-soft-white"}`}
      >
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <div
            className={`h-8 w-[1px] ${theme === "dark" ? "bg-white/20" : "bg-black/20"}`}
          />
          <LanguageSwitcher />
        </div>
      </div>
    </section>
  );
}

export default App;
