import React, { useEffect } from "react";

export const Header = () => {
  useEffect(() => {
    /*  abre e fecha o menu quando clicar no icone: hamburguer e x */
    const nav = document.querySelector("#header nav");
    const toggle = document.querySelectorAll("nav .toggle");

    const handleToogleClick = () => {
      nav.classList.toggle("show");
    };

    for (const element of toggle) {
      element.addEventListener("click", handleToogleClick);
    }

    /* quando clicar em um item do menu, esconder o menu */
    const links = document.querySelectorAll("nav ul li a");

    const handleLinkClick = () => {
      nav.classList.remove("show");
    };

    for (const link of links) {
      link.addEventListener("click", handleLinkClick);
    }

    /* mudar o header da página quando der scroll */
    const header = document.querySelector("#header");
    const navHeight = header.offsetHeight;

    const changeHeaderWhenScroll = () => {
      if (window.scrollY >= navHeight) {
        // scroll é maior que a altura do header
        header.classList.add("scroll");
      } else {
        // menor que a altura do header
        header.classList.remove("scroll");
      }
    };

    /* Menu ativo conforme a seção visível na página */
    const sections = document.querySelectorAll("main section[id]");
    const activateMenuAtCurrentSection = () => {
      const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        const checkpointStart = checkpoint >= sectionTop;
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

        if (checkpointStart && checkpointEnd) {
          document
            .querySelector("nav ul li a[href*=" + sectionId + "]")
            .classList.add("active");
        } else {
          document
            .querySelector("nav ul li a[href*=" + sectionId + "]")
            .classList.remove("active");
        }
      }
    };

    const handleHeaderByScroll = () => {
      changeHeaderWhenScroll();
      activateMenuAtCurrentSection();
    };

    /* When Scroll */
    window.addEventListener("scroll", handleHeaderByScroll);

    // sempre remover o listener usado no useEffect
    return () => {
      for (const element of toggle) {
        element.removeEventListener("click", handleToogleClick);
      }

      for (const link of links) {
        link.removeEventListener("click", handleLinkClick);
      }

      window.removeEventListener("scroll", handleHeaderByScroll);
    };
  }, []);

  return (
    <header id="header">
      <nav className="container">
        <span className="logo">
          beauty<span>salon</span>.
        </span>
        {/* <!-- menu --> */}
        <div className="menu">
          <ul className="grid">
            <li>
              <a className="title" href="#home">
                Início
              </a>
            </li>
            <li>
              <a className="title" href="#about">
                Sobre
              </a>
            </li>
            <li>
              <a className="title" href="#services">
                Serviços
              </a>
            </li>
            <li>
              <a className="title" href="#testimonials">
                Depoimentos
              </a>
            </li>
            <li>
              <a className="title" href="#contact">
                Contato
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- /menu --> */}
        <div className="toggle icon-menu"></div>
        <div className="toggle icon-close"></div>
      </nav>
    </header>
  );
};
