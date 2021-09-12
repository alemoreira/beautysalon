import { useEffect } from "react";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Service } from "./components/Service";
import { Testimonial } from "./components/Testimonial";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

// Icones
import "./assets/fonts/style.css";
import "./App.scss";

function App() {
  useEffect(() => {
    /* Botão voltar para o topo */
    const backToTopButton = document.querySelector(".back-to-top");

    const backToTop = () => {
      if (window.scrollY >= 560) {
        backToTopButton.classList.add("show");
      } else {
        backToTopButton.classList.remove("show");
      }
    };

    const handleScroll = () => {
      backToTop();
      // activateMenuAtCurrentSection();
    };

    /* When Scroll */
    window.addEventListener("scroll", handleScroll);

    // sempre remover o listener usado no useEffect
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Home />
        <div class="divider-1"></div>
        <About />
        <div class="divider-2"></div>
        <Service />
        <div class="divider-1"></div>
        <Testimonial />
        <div class="divider-2"></div>
        <Contact />
        <div class="divider-1"></div>
        <Footer />
      </main>
      <a href="#home" class="back-to-top">
        <i class="icon-arrow-up"></i>
      </a>
    </>
  );
}

export default App;
