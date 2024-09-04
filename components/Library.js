import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Library = () => {
  return (
    <div className="w-full min-h-screen px-5 pb-20 sm:px-44 pt-14">
      <div className="relative flex flex-col gap-14">
        <div className="flexjustify-start">
          <h1 className="sm:text-4xl text-xl font-semibold sm:w-[25rem] w-[12rem] sm:tracking-wide">
            Browse our growing content library
          </h1>
          <button className="anim sm:px-6 px-2 sm:py-3 py-1 absolute sm:top-5 top-3 right-1 sm:text-lg text-[1rem] sm:right-20 border border-[1px]-black rounded-3xl font-semibold">
            Learn more
          </button>
        </div>
        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="flex sm:h-[30rem] sm:w-[35rem] flex-col cursor-pointer ">
            <div className="w-full h-[55%]">
              <img
                className="object-center w-full"
                src="./images/library-image1.avif"
              />
            </div>
            <div className="flex flex-col items-start w-full gap-3 px-4 py-5 sm:px-10 bg-grayish h-1/2">
              <button className="px-3 py-1 sm:text-[14px] text-xs bg-purple rounded-3xl">
                SOCIAL MEDIA STRATEGY
              </button>
              <h1 className="sm:text-2xl text-xl sm:leading-normal leading-6 font-semibold sm:w-[25rem] w-[15rem]">
                3 ways to adapt content for the era of social media
                entertainment.
              </h1>
              <button className="flex items-center gap-2 sm:mt-4 sm:text-xl mt-2 text-[1rem] underline-anim">
                Read more
                <IoIosArrowRoundForward style={{ scale: "1.3" }} />
              </button>
            </div>
          </div>
          <div className="flex sm:h-[30rem] sm:w-[35rem] flex-col cursor-pointer">
            <div className="w-full h-[55%]">
              <img
                className="object-center w-full"
                src="./images/library-image2.avif"
              />
            </div>
            <div className="flex flex-col items-start w-full gap-3 px-4 py-5 sm:px-10 bg-grayish h-1/2">
              <button className="px-3 py-1 sm:text-[14px] text-xs bg-purple rounded-3xl">
                MARKETING DISCIPLINES
              </button>
              <h1 className=" font-semibold sm:w-[27rem] sm:text-2xl text-xl sm:leading-normal leading-6 w-[18rem]">
                15 business intelligence tools (BI tools) to use in 2023.
              </h1>
              <button className="flex items-center gap-2 sm:mt-4 sm:text-xl text-[1rem] mt-2 underline-anim">
                Read more
                <IoIosArrowRoundForward style={{ scale: "1.3" }} />
              </button>
            </div>
          </div>
        </div>
        <div className="demo-div cursor-pointer sm:w-[73rem] h-[16rem] sm:h-[23rem] sm:my-10 px-5 my-3 bg-blue rounded-3xl flex flex-col sm:gap-10 gap-5 sm:px-16 justify-center sm:items-start items-center ">
          <h1 className="sm:text-6xl text-3xl w-[16rem] sm:font-bold font-semibold sm:text-left text-center sm:w-[45rem] sm:leading-[4rem] sm:tracking-wide text-white">
            Reach your business goals right on schedule.
          </h1>
          <button className="flex items-center sm:h-[3.5rem] h-[2.3rem] w-[8rem] sm:w-[11.5rem] sm:text-xl text-[1rem] text-white bg-black demo rounded-3xl">
            <h1 className="ml-3 sm:ml-5 ">Get a demo</h1>

            <div className="ml-4 sm:ml-8 demo-circle">
              <IoIosArrowRoundForward className="demo-arrow" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Library;
