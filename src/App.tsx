import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

import "./assets/styles/animation.css";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

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
      <div className="bg-background">
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
