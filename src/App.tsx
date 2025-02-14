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

function App() {
  return (
    <>
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
      <div className="bg-background space-y-24">
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
