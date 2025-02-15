// CSS
import "./assets/styles/animation.css";
import "animate.css"; // Texts animations

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeSwitcher } from "./components/ui/ThemeSwitcher";
import { LanguageSwitcher } from "./components/ui/LanguageSwitcher";

import { useThemeSwitcher } from "./stores/useThemeSwitcher";

function App() {
  const theme = useThemeSwitcher((state) => state.theme);

  return (
    <section className="relative">
      <div>
        <div className="background -z-10 *:-z-20">
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
        <div className={` space-y-24 ${theme === "dark" ? "bg-background" : "bg-soft-white"}`}>
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>

      <div className="bg-background/10 border-soft-black fixed bottom-4 left-1/2 flex h-14 w-48 -translate-x-1/2 transform items-center justify-center rounded-full border-2 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <div className="h-8 w-[1px] bg-white/20" />
          <LanguageSwitcher />
        </div>
      </div>
    </section>
  );
}

export default App;
