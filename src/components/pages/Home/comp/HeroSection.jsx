import React from "react";
import { bgdesign, dot, Hero } from "../../../../assets";
import Button from "../../../atoms/Button";

function HeroSection() {
  return (
    <div className="h-[calc(100vh-70px)] flex flex-col md:flex-row justify-between p-6 md:p-10 items-center w-[90%] mx-auto gap-10">
      {/* left */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
          Hi, I’m <span className="text-[#cb42c3]">Narvdeshwar</span>
          <br />
          A Passionate{" "}
          <span className="text-[#cb42c3]">Full Stack Developer</span>
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0">
          I specialize in building fast, scalable web apps with modern tech
          stacks like React, Node.js, and MongoDB. I love transforming ideas
          into real-world products with intuitive UI and clean code.
        </p>
        <div className="flex justify-center md:justify-start">
          <Button title="Get in Touch" variant="primary" />
        </div>
      </div>

      {/* right */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center mb-2">
        <img
          src={bgdesign}
          className="absolute w-[60%] -bottom-0 z-10"
        />
        <img
          src={Hero}
          alt="Profile Illustration"
          className="z-20"
        />
        <img
          src={dot}
          className="w-5"
        />

        <Button
          title="Currently building my portfolio"
          className="text-nowrap absolute -bottom-13 flex gap-2 items-center"
          variant="default"
        >
          <div className="size-3 sm:size-4 bg-[#cb42c3] rounded"></div>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
