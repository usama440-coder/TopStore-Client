"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import LargePrimaryBtn from "../components/LargePrimaryBtn";
import { CSSProperties } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from "../styles/carousel.module.css";

const Carousel = () => {
  return (
    <>
      <Swiper
        style={
          {
            "--swiper-pagination-color": "#fff",
          } as CSSProperties
        }
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className={style.mySwiper}
      >
        <SwiperSlide className={style.swiperSlide}>
          <div
            style={{
              backgroundImage: `url(/img/carousel_img_1.png)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "right top",
            }}
          >
            <div className={style.swiperSlideDescription}>
              <p>Autumn Collection</p>
              <h1>Get Upto 30% Off</h1>
              <h2>New Arrivals</h2>
              <LargePrimaryBtn text="shop now" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
          <div
            style={{
              backgroundImage: `url(/img/carousel_img_1.png)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "right top",
            }}
          >
            <div className={style.swiperSlideDescription}>
              <p>Autumn Collection</p>
              <h1>Get Upto 30% Off</h1>
              <h2>New Arrivals</h2>
              <LargePrimaryBtn text="shop now" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
          <div
            style={{
              backgroundImage: `url(/img/carousel_img_1.png)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "right top",
            }}
          >
            <div className={style.swiperSlideDescription}>
              <p>Autumn Collection</p>
              <h1>Get Upto 30% Off</h1>
              <h2>New Arrivals</h2>
              <LargePrimaryBtn text="shop now" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
