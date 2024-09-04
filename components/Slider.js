"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./Buttoncarousel";

const Slider = ({ deviceType }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 30, // Adjust the gutter for partial visibility
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 10,
    },
  };

  return (
    <div className="mx-5 mt-14 sm:ml-44 sm:mx-auto">
      <Carousel
        responsive={responsive}
        swipeable={true}
        arrows={false}
        draggable={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        partialVisible={true}
      >
        <div className="slider-card hover:slider cursor-pointer sm:w-[24rem] w-[18rem] h-[24rem] sm:h-[26rem] relative">
          <div className="absolute z-10 flex flex-col items-start gap-3 py-12 px-7 sm:px-10 sm:py-14">
            <h1 className="text-lg font-semibold text-white sm:text-xl">
              Sales via the web
            </h1>
            <h1 className="sm:text-lg text-[1rem] sm:w-fit w-[14rem] sm:leading-7 text-white">
              Increase sales via the web, maximize traffic independently.
            </h1>
            <button className="relative px-4 py-2 sm:mt-40 mt-36 sm:text-lg text-[1rem] text-white border border-white sm:px-5 sm:py-2 slider rounded-3xl">
              Learn more
            </button>
          </div>
          <img
            className="object-cover w-full h-full rounded-2xl"
            src="./images/slider-image1.jpg"
          ></img>
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 z-1 rounded-2xl"
            style={{
              background: `linear-gradient(to bottom, black, transparent 40%, transparent 50%, black)`,
              pointerEvents: "none",
            }}
          ></div>
        </div>
        <div className="slider-card hover:slider cursor-pointer sm:w-[24rem] w-[18rem] h-[24rem] sm:h-[26rem] relative">
          <div className="absolute z-10 flex flex-col items-start gap-3 py-12 px-7 sm:px-10 sm:py-14">
            <h1 className="text-lg font-semibold text-white sm:text-xl">
              Content management
            </h1>
            <h1 className="sm:text-lg text-[1rem] sm:w-fit w-[14rem] sm:leading-7 text-white">
              Maximize social media engagement to make it more efficient.
            </h1>
            <button className="relative px-4 py-2 sm:mt-40 mt-32 sm:text-lg text-[1rem] text-white border border-white sm:px-5 sm:py-2 slider rounded-3xl">
              Learn more
            </button>
          </div>
          <img
            className="object-cover w-full h-full rounded-2xl"
            src="./images/slider-image2.jpg"
          ></img>
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 z-1 rounded-2xl"
            style={{
              background: `linear-gradient(to bottom, black, transparent 40%, transparent 50%, black)`,
              pointerEvents: "none",
            }}
          ></div>
        </div>
        <div className="slider-card hover:slider cursor-pointer sm:w-[24rem] w-[18rem] h-[24rem] sm:h-[26rem] relative">
          <div className="absolute z-10 flex flex-col items-start gap-3 py-12 px-7 sm:px-10 sm:py-14">
            <h1 className="text-lg font-semibold text-white sm:text-xl">
              Increase mobile app users
            </h1>
            <h1 className="sm:text-lg text-[1rem] sm:w-fit w-[14rem] sm:leading-7 text-white">
              We carry out various campaigns so that users would download our
              app.
            </h1>
            <button className="relative px-4 py-2 sm:mt-40 mt-32 sm:text-lg text-[1rem] text-white border border-white sm:px-5 sm:py-2 slider rounded-3xl">
              Learn more
            </button>
          </div>
          <img
            className="object-cover w-full h-full rounded-2xl"
            src="./images/slider-image3.avif"
          ></img>
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 z-1 rounded-2xl"
            style={{
              background: `linear-gradient(to bottom, black, transparent 40%, transparent 50%, black)`,
              pointerEvents: "none",
            }}
          ></div>
        </div>
        <div className="slider-card hover:slider cursor-pointer sm:w-[24rem] w-[18rem] h-[24rem] sm:h-[26rem] relative">
          <div className="absolute z-10 flex flex-col items-start gap-3 py-12 px-7 sm:px-10 sm:py-14">
            <h1 className="text-lg font-semibold text-white sm:text-xl">
              Data and Intelligence
            </h1>
            <h1 className="sm:text-lg text-[1rem] sm:w-fit w-[14rem] sm:leading-7 text-white">
              Track your busines growth with critical data and insights.
            </h1>
            <button className="relative px-4 py-2 sm:mt-40 mt-36 sm:text-lg text-[1rem] text-white border border-white sm:px-5 sm:py-2 slider rounded-3xl ">
              Learn more
            </button>
          </div>
          <img
            className="object-cover w-full h-full rounded-2xl"
            src="./images/slider-image4.jpg"
          ></img>
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 z-1 rounded-2xl"
            style={{
              background: `linear-gradient(to bottom, black, transparent 40%, transparent 50%, black)`,
              pointerEvents: "none",
            }}
          ></div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
