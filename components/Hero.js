import React from "react";

const Hero = () => {
  return (
    <div className="w-screen min-h-screen px-10 pb-10 bg-whiteish pt-36 sm:pt-48 sm:w-full">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center gap-3 sm:gap-6">
          <h1 className="sm:text-6xl text-3xl text-black font-semibold sm:w-[70%] text-center sm:tracking-wide sm:leading-[3.5rem]">
            Help your business grow quickly.
          </h1>
          <h1 className="text-[1rem] w-[14rem] text-center text-black sm:w-fit sm:text-xl">
            One stop solution for all your business worries.
          </h1>
          <div className="flex flex-col items-center gap-3 mt-3 sm:gap-5 sm:mt-auto sm:flex-row">
            <button className=" sm:px-12 sm:py-[11px] px-16 py-2 text-white text-lg rounded-3xl bg-blue">
              Register for free
            </button>
            <button className="google relative flex items-center gap-3 px-4 sm:py-2.5 py-2 text-lg border-[1px] text-black border-black rounded-3xl">
              <div className="px-1 py-1 bg-white rounded-full ">
                <img className="w-[20px]" src="/images/search.png"></img>
              </div>
              Get started with Google
            </button>
          </div>
        </div>
        <div className="sm:w-[80%] sm:h-[35rem] h-[20rem]">
          <video
            className="object-cover object-center w-full h-full rounded-2xl"
            muted
            autoPlay
            loop
            src="/images/Hero-video.mp4"
            type="video/mp4"
          ></video>
        </div>
        <div className="sm:mt-14 hero-marquee">
          <div className="marquee__inner">
            <img className="" src="/images/slack.svg"></img>
            <img className="" src="/images/zoom.svg"></img>
            <img className="" src="/images/webflow.svg"></img>
            <img className="" src="/images/coinbase.svg"></img>
            <img className="" src="/images/adobe.svg"></img>
            <img className="" src="/images/spotify.svg"></img>
            <img className="" src="/images/grammarly.svg"></img>
            <img className="" src="/images/mailchimp.svg"></img>
            <img className="" src="/images/gumroad.svg"></img>
            <img className="" src="/images/uber.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
