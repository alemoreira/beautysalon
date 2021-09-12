import React from "react";
import hair2 from "../../assets/fotos/hairdresser-2.jpg";
import Fade from "react-reveal/Fade";

export const About = () => {
  return (
    <section className="section" id="about">
      <div className="container grid">
        <Fade right>
          <div className="image">
            <img src={hair2} alt="3 mulheres sorrindo" />
          </div>
        </Fade>
        <Fade left>
          <div className="text">
            <h2 className="title">Sobre nós</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus deleniti perferendis vel molestiae soluta, quaerat
              beatae dicta ducimus praesentium architecto harum dolorum
              distinctio illo earum assumenda itaque. Omnis, quam repellat.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              illum ratione impedit quae eum quis adipisci asperiores, est
              doloribus distinctio excepturi minima eius dolore! Perferendis
              laborum illo aspernatur repellendus ipsum.
            </p>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
              exercitationem, illum sapiente quasi hic iusto odio maiores esse
              quaerat quis necessitatibus at odit, dolores dicta, officia ab
              quos. Provident, quae.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};
