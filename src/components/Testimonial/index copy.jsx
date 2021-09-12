import React, { useEffect } from "react";
import Swiper, { Pagination } from "swiper";
import wanessa from "../../assets/fotos/10.jpeg";
import franciele from "../../assets/fotos/26.jpeg";
import valeska from "../../assets/fotos/56.jpeg";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/pagination/pagination.min.css";

export const Testimonial = () => {
  useEffect(() => {
    /* Testimonials carousel slider swiper */
    Swiper.use([Pagination]);

    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
      breakpoints: {
        767: {
          slidesPerView: 2,
          setWrapperSize: true,
        },
      },
    });
  }, []);

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <header>
          <h2 className="title">Depoimentos de quem já passou por aqui</h2>
        </header>
        <div className="testimonials swiper-container">
          <div className="swiper-wrapper">
            <div className="testimonial swiper-slide">
              <blockquote>
                <p>
                  <span>&ldquo;</span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  blanditiis saepe nam excepturi explicabo ipsa error ipsam
                  neque
                </p>
                <cite>
                  <img src={wanessa} alt="Foto de Wanessa Souza" />
                  Wanessa Souza
                </cite>
              </blockquote>
            </div>

            <div className="testimonial swiper-slide">
              <blockquote>
                <p>
                  <span>&ldquo;</span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  blanditiis saepe nam excepturi explicabo ipsa error ipsam
                  neque
                </p>
                <cite>
                  <img src={franciele} alt="Foto de Franciele Venega" />
                  Franciele Venega
                </cite>
              </blockquote>
            </div>

            <div className="testimonial swiper-slide">
              <blockquote>
                <p>
                  <span>&ldquo;</span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  blanditiis saepe nam excepturi explicabo ipsa error ipsam
                  neque
                </p>
                <cite>
                  <img src={valeska} alt="Fotos de Valeska Fabris" />
                  Valeska Fabris
                </cite>
              </blockquote>
            </div>
          </div>

          {/* <!-- If we need pagination --> */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};
