"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const People = () => {
  // Create a ref for the Slider component
  const sliderRef = useRef(null);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Go to the next slide
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Go to the previous slide
    }
  };

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col items-center justify-center gap-8 py-14 sm:gap-14 sm:py-28 ">
        <div className="flex flex-col items-center gap-2 sm:gap-5">
          <h1 className="text-2xl font-semibold sm:text-4xl">
            Why they prefer Foxy<span className="text-blue">line</span>
          </h1>
          <h1 className="text-lg sm:w-fit sm:leading-normal leading-6 w-[18rem] text-center sm:text-xl">
            To accelerate the growth of their company.
          </h1>
        </div>
        <div className="sm:w-[68rem] sm:h-[25rem] w-[20rem] h-[30rem]">
          <Slider {...settings} ref={sliderRef}>
            <div className="slider-item sm:w-[65rem] sm:h-[25rem] w-[20rem] h-[30rem] border-[1px] border-lightgray">
              <div className="flex flex-col w-full h-full sm:flex-row">
                <div className="w-full sm:w-1/2 sm:h-full h-1/2">
                  <img
                    className="object-center w-full h-full object-fit"
                    src="./images/people-image1.avif"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col items-start w-full gap-2 px-5 sm:gap-3 pt-7 sm:pt-20 sm:w-1/2 sm:h-full h-1/2 sm:px-14">
                  <img
                    className="sm:w-[60px] w-[20px]"
                    src="./images/double-quotes.png"
                  ></img>
                  <h1 className="sm:text-xl text-[1rem] sm:leading-normal w-[17rem]  sm:w-[26rem] sm:font-semibold sm:ml-3">
                    "I made the switch to Foxyline from PayPal for my writing
                    agency. It was EASY. It was FAST. And they don't charge a
                    dime! This is a business that believes in small businesses."
                  </h1>
                  <h1 className="text-xs sm:ml-3 sm:text-lg">
                    MARINA HUTATA, CEO, RIKO KOWALSKI INC.
                  </h1>
                </div>
              </div>
            </div>
            <div className="slider-item sm:w-[65rem] sm:h-[25rem] w-[20rem] h-[30rem] border-[1px] border-lightgray">
              <div className="flex flex-col w-full h-full sm:flex-row">
                <div className="w-full sm:w-1/2 sm:h-full h-1/2">
                  <img
                    className="object-center w-full h-full object-fit"
                    src="./images/people-image2.avif"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col items-start w-full gap-2 px-5 sm:w-1/2 h-1/2 sm:h-full sm:gap-3 sm:pt-20 pt-7 sm:px-14">
                  <img
                    className="sm:w-[60px] w-[20px]"
                    src="./images/double-quotes.png"
                  ></img>
                  <h1 className="sm:text-xl text-[1rem] w-[17rem] sm:w-[26rem] sm:font-semibold sm:ml-3">
                    “FoxyLine simplifies business scheduling and reduces
                    time-to-plan. With integrated tools for tracking growth and
                    real-time data features, we've made exponential progress!”
                  </h1>
                  <h1 className="text-xs sm:ml-3 sm:text-lg">
                    ANNE HATHAWAY, ANALYST AT MODERNLOOP
                  </h1>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div className="flex gap-3">
          <button
            className="arrows border border-[1px]-black p-3 rounded-full"
            onClick={prevSlide}
          >
            <img
              className="w-[20px] rotate-180"
              src="./images/carousel-right-arrow.svg"
            ></img>
          </button>
          <button
            className=" arrows border border-[1px]-black p-3 rounded-full"
            onClick={nextSlide}
          >
            <img
              className="w-[20px] "
              src="./images/carousel-right-arrow.svg"
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default People;
