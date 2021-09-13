import React from "react";
import Fade from "react-reveal/Fade";
import "./service.scss";

export const Service = () => {
  return (
    <section className="section" id="services">
      <div className="container grid">
        <Fade>
          <header>
            <h2 className="title">Serviços</h2>
            <p className="subtitle">
              Com mais de 10 anos no mercado, o <strong>Beautysalon</strong> já
              conquistou clientes de inúmeros países com seus tratamentos
              exclusivos e totalmente naturais
            </p>
          </header>
        </Fade>
        <Fade cascade>
          <div className="cards grid">
            <div className="card">
              <i className="icon-woman-hair"></i>
              <h3 className="title">Terapia capilar</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                distinctio neque blanditiis, dolorem aperiam nulla explicabo
                asperiores
              </p>
            </div>
            <div className="card">
              <i className="icon-trim"></i>
              <h3 className="title">Cortes</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                distinctio neque blanditiis, dolorem aperiam nulla explicabo
                asperiores
              </p>
            </div>
            <div className="card">
              <i className="icon-cosmetic"></i>
              <h3 className="title">Tratamentos</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                distinctio neque blanditiis, dolorem aperiam nulla explicabo
                asperiores
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};
