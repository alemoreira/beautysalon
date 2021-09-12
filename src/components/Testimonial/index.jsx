import React from "react";
import Zoom from "react-reveal/Zoom";

// https://swiperjs.com/react
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  Keyboard,
  Mousewheel,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import wanessa from "../../assets/fotos/10.jpeg";
import franciele from "../../assets/fotos/26.jpeg";
import valeska from "../../assets/fotos/56.jpeg";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Autoplay, Pagination, Navigation, Keyboard, Mousewheel]);

export const Testimonial = () => {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <Zoom>
          <header>
            <h2 className="title">Depoimentos de quem já passou por aqui</h2>
          </header>
        </Zoom>
        <Swiper
          className="testimonials"
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          keyboard={{
            enabled: true,
          }}
          mousewheel={true}
          breakpoints={{
            // 640: {
            //   slidesPerView: 2,
            //   spaceBetween: 20,
            // },
            // 768: {
            //   slidesPerView: 2,
            //   spaceBetween: 40,
            // },
            1024: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide className="testimonial">
            <blockquote>
              <p>
                <span>&ldquo;</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                blanditiis saepe nam excepturi explicabo ipsa error ipsam neque
              </p>
              <cite>
                <img src={wanessa} alt="Foto de Wanessa Souza" />
                Wanessa Souza
              </cite>
            </blockquote>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <blockquote>
              <p>
                <span>&ldquo;</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                blanditiis saepe nam excepturi explicabo ipsa error ipsam neque
              </p>
              <cite>
                <img src={franciele} alt="Foto de Franciele Venega" />
                Franciele Venega
              </cite>
            </blockquote>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <blockquote>
              <p>
                <span>&ldquo;</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                blanditiis saepe nam excepturi explicabo ipsa error ipsam neque
              </p>
              <cite>
                <img src={valeska} alt="Fotos de Valeska Fabris" />
                Valeska Fabris
              </cite>
            </blockquote>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
