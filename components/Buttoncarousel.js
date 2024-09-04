import React from "react";

// Custom button group for carousel
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="hidden carousel-button-group sm:block">
      {/* Custom previous button */}
      <button
        className={`carousel-button arrows  absolute top-[8rem] right-[22rem] border border-[1px]-black p-4 rounded-full ${
          currentSlide === 0 ? "disabled" : ""
        }`}
        onClick={() => previous()}
      >
        <img
          className="w-[25px] rotate-180"
          src="./images/carousel-right-arrow.svg"
        ></img>
      </button>
      {/* Custom next button */}
      <button
        className="absolute arrows top-[8rem] right-[17.5rem] border border-[1px]-black p-4 rounded-full "
        onClick={() => next()}
      >
        <img
          className="w-[25px] "
          src="./images/carousel-right-arrow.svg"
        ></img>
      </button>
    </div>
  );
};

export default ButtonGroup;
