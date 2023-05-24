"use client";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

import "pure-react-carousel/dist/react-carousel.es.css";
import style from "../styles/testimonial.module.css";

const Testimonial = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={3}
      interval={5000}
      isPlaying={true}
      className={style.testimonialSliderContainer}
    >
      <ButtonBack className={style.testimonialSliderBtn}>
        <FaRegArrowAltCircleLeft className={style.testimonialSliderBtnIcon} />
      </ButtonBack>
      <Slider className={style.testimonialSlider}>
        <Slide className={style.testimonialSlide} index={0}>
          <div>
            <FaQuoteLeft className={style.sliderQuote} />
            <p>
              This store is really something. Amazing customer support, great
              designs and hight quanlity material as they promise. Really worth
              it and you wont regret after purchasing.
            </p>
            <p>
              <b>Usman Mir</b>
            </p>
            <FaQuoteRight className={style.sliderQuote} />
          </div>
        </Slide>
        <Slide className={style.testimonialSlide} index={0}>
          <div>
            <FaQuoteLeft className={style.sliderQuote} />
            <p>
              This store is really something. Amazing customer support, great
              designs and hight quanlity material as they promise. Really worth
              it and you wont regret after purchasing.
            </p>
            <p>
              <b>Usman Mir</b>
            </p>
            <FaQuoteRight className={style.sliderQuote} />
          </div>
        </Slide>
        <Slide className={style.testimonialSlide} index={0}>
          <div>
            <FaQuoteLeft className={style.sliderQuote} />
            <p>
              This store is really something. Amazing customer support, great
              designs and hight quanlity material as they promise. Really worth
              it and you wont regret after purchasing.
            </p>
            <p>
              <b>Usman Mir</b>
            </p>
            <FaQuoteRight className={style.sliderQuote} />
          </div>
        </Slide>
      </Slider>
      <ButtonNext className={style.testimonialSliderBtn}>
        <FaRegArrowAltCircleRight className={style.testimonialSliderBtnIcon} />
      </ButtonNext>
    </CarouselProvider>
  );
};

export default Testimonial;
