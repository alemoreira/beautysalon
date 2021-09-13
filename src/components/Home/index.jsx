import React from "react";
import hair1 from "../../assets/fotos/hairdresser-1.jpg";
// https://www.react-reveal.com/
import Fade from "react-reveal/Fade";
import "./home.scss";

export const Home = () => {
  return (
    <section className="section" id="home">
      <div className="container grid">
        <Fade left>
          <div className="image">
            <img src={hair1} alt="Mulher sorrindo penteando outra mulher" />
          </div>
        </Fade>
        <Fade right>
          <div className="text">
            <h2 className="title">Saúde natural para os seus cabelos</h2>
            <p>
              Um salão exclusivo em São Paulo, especializado em tratamentos
              naturais.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=+5511998456754&text=Oi! Gostaria de agendar um horário"
              className="button"
              target="_blank"
              rel="noreferrer"
            >
              Agendar um horário
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
};
