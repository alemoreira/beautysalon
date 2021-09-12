import React from "react";
import Bounce from "react-reveal/Bounce";

export const Footer = () => {
  return (
    <footer className="section">
      <div className="container grid">
        <Bounce cascade bottom>
          <div className="brand">
            <a className="logo logo-alt" href="#home">
              beauty<span>salon</span>.
            </a>
            <p>©2021 Beautysalon.</p>
            <p>Todos os direitos reservados.</p>
          </div>

          <div className="social grid">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="icon-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="icon-facebook"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <i className="icon-youtube"></i>
            </a>
          </div>
        </Bounce>
      </div>
    </footer>
  );
};
