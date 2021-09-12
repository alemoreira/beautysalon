import React from "react";
import Slide from "react-reveal/Slide";

export const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container grid">
        <Slide left>
          <div className="text">
            <h2 className="title">Entre em contato com a gente!</h2>
            <p>
              Entre em contato com a Beautysalon, queremos tirar suas dúvidas,
              ouvir suas críticas e sugestões.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=+5511998456754&text=Oi! Gostaria de agendar um horário"
              className="button"
              target="_blank"
              rel="noreferrer"
            >
              <i className="icon-whatsapp"></i> Entrar em contato
            </a>
          </div>
        </Slide>

        <Slide cascade right>
          <div className="links">
            <ul className="grid">
              <li>
                <i className="icon-phone"></i> 11 99845-6754
              </li>
              <li>
                <i className="icon-map-pin"></i> R. Amauri Souza, 346
              </li>
              <li>
                <i className="icon-mail"></i> contato@beautysalon.com
              </li>
            </ul>
          </div>
        </Slide>
      </div>
    </section>
  );
};
