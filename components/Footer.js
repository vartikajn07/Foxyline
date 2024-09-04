import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer class=" bg-black text-white min-h-[80vh] relative rounded-tl-2xl rounded-tr-2xl">
      <div className="flex justify-between px-6 pt-14 pb-36 sm:py-16 sm:pt-auto sm:pb-auto sm:px-44">
        <h1 className="sm:text-4xl text-2xl font-semibold sm:w-[30rem] sm:tracking-wide sm:leading-[3rem] leading-7 ">
          Your business partner to increase the level.
        </h1>
        <button className="absolute flex items-center gap-2 py-2 text-[1rem] sm:gap-3 sm:text-xl sm:py-3 sm:px-7 px-3 sm:top-20 top-36 sm:right-48 right-44 bg-blue rounded-3xl">
          Register for free
          <IoIosArrowRoundForward style={{ scale: "1.7" }} />
        </button>
      </div>

      <div className="container bg-blackish rounded-3xl px-6 md:px-[10rem] py-12 mx-auto sm:w-[80rem] sm:h-[19rem]">
        <div className="grid grid-cols-1 gap-6 w-fit sm:grid-cols-2 sm:gap-y-10 md:grid-cols-7">
          <div className="md:col-span-3 sm:col-span-3">
            <h1 className=" sm:text-[30px] text-2xl font-semibold cursor-pointer ">
              Foxy<span className="text-blue">line</span>
            </h1>
            <h1 className=" sm:text-[30px] md:text-lg w-[15rem] mt-3 text-gray">
              One stop solution for all your business problems.
            </h1>
          </div>
          <div>
            <p className="text-[16px] text-white cursor-pointer">Platform</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="cursor-pointer text-gray">Social analytics</p>
              <p className="cursor-pointer text-gray ">Social publishing</p>
              <p className="cursor-pointer text-gray ">Social listening</p>
            </div>
          </div>

          <div>
            <p className=" text-[16px] text-white cursor-pointer">Resources</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="cursor-pointer text-gray">Case studies</p>
              <p className="cursor-pointer text-gray">Guides</p>
              <p className="cursor-pointer text-gray">Web reports</p>
            </div>
          </div>
          <div>
            <p className="text-[16px] text-white cursor-pointer">Solutions</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="cursor-pointer text-gray ">Enterprise</p>
              <p className="cursor-pointer text-gray">Agencies</p>
              <p className="cursor-pointer text-gray ">Social</p>
            </div>
          </div>
          <div>
            <p className="text-[16px] text-white cursor-pointer">Company</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="cursor-pointer text-gray">About</p>
              <p className="cursor-pointer text-gray">Pricing</p>
              <p className="cursor-pointer text-gray">Careers</p>
            </div>
          </div>
        </div>

        <hr className="h-1 mt-12 mb-4 border-gray " />
        <div className="sm:flex sm:items-center sm:justify-center">
          <h1 className="sm:text-lg text-[12px] tracking-wide">
            This site was designed and developed by{" "}
            <a
              className="font-semibold text-blue"
              href="https://github.com/vartikajn07"
            >
              Vartika Jain.
            </a>
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
