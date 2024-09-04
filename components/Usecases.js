import React from "react";
import Slider from "./Slider";

const Usecases = () => {
  return (
    <div className="relative w-full sm:min-h-screen min-h-[80vh] pb-5 sm:pb-28 bg-whiteish">
      <div className="flex flex-col items-center gap-3 px-10 pt-12 sm:gap-5 sm:items-start sm:pt-24 sm:pl-36 sm:px-auto">
        <h1 className="sm:text-4xl text-2xl  font-semibold sm:w-[30rem] sm:text-left text-center">
          Explore use cases across existing industries
        </h1>
        <h1 className="text-[1rem] text-center sm:w-fit w-[15rem] sm:leading-normal leading-5 sm:text-xl sm:text-left">
          Customer satisfaction is our topmost priority.
        </h1>
      </div>
      <Slider />
    </div>
  );
};

export default Usecases;
