import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../styles/Testimonial.css";
import AVTR1 from "../images/avtar1.jpg";
import AVTR2 from "../images/avtar2.jpg";
import AVTR3 from "../images/avtar3.jpg";
import AVTR4 from "../images/avtar4.jpg";

const data = [
  {
    avtar: AVTR1,
    name: "sheela",
    review:
      " The food was delicious, especially the kebabs. The service was a bit slow, but the staff was friendly",
  },
  {
    avtar: AVTR2,
    name: "Roncky",
    review:
      " Great experience! The atmosphere was lovely, and the food was amazing. Will definitely be coming back",
  },
  {
    avtar: AVTR3,
    name: "Hales",
    review:
      " Disappointing. The food was bland and overpriced. Service was average",
  },
  {
    avtar: AVTR4,
    name: "shery ",
    review:
      " I loved the authenticity of the dishes. It felt like a true taste of Afghanistan. The staff was attentive and kind",
  },
];
function Testimonial() {
  return (
    <section id="testimonials">
      <h3>Review from clients</h3>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avtar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avtar">
                <img src={avtar} alt="avtr1" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonial;
