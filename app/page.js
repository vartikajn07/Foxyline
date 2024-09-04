import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Library from "@/components/Library";
import Navbar from "@/components/Navbar";
import People from "@/components/People";
import Usecases from "@/components/Usecases";
import React from "react";

const page = () => {
  return (
    <div className="w-full min-h-full ">
      <Navbar />
      <Hero />
      <About />
      <Usecases />
      <People />
      <Library />
      <Footer />
    </div>
  );
};

export default page;
