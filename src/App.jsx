import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

// Biblioteca de animação para Scroll.
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
