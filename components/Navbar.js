"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const controls = useAnimation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      if (scrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (scrollY < lastScrollY) {
        setScrollDirection("up");
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

  useEffect(() => {
    if (scrollDirection === "down") {
      controls.start({ y: "-100%" });
    } else {
      controls.start({ y: "0%" });
    }
  }, [scrollDirection, controls]);

  return (
    <motion.div
      animate={controls}
      initial={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed z-10 bg-white sm:w-full w-screen  lg:h-[5.5vw] sm:h-[5rem] h-[4rem] border-lightgray border-b-[1px] flex justify-around  items-center"
    >
      <h1 className="text-xl font-bold cursor-pointer md:text-2xl">
        <a href="#">
          Foxy<span className="text-blue">line</span>
        </a>
      </h1>
      <div className="hidden gap-10 lg:flex ml-28">
        <h1 className="text-lg underline-anim">Platform</h1>
        <h1 className="text-lg underline-anim">Solutions</h1>
        <h1 className="text-lg underline-anim">Integrations</h1>
        <h1 className="text-lg underline-anim">Pricing</h1>
        <h1 className="text-lg underline-anim">Resources</h1>
      </div>
      <div className="flex gap-2 ">
        <button className="px-5 py-2 text-sm sm:text-[1.1rem]">Log In</button>
        <button className="relative anim sm:px-5 sm:py-2 px-4 py-1 text-black border-[1px] border-black font-semibold sm:text-[1.1rem] text-sm rounded-3xl">
          Sign Up
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;
