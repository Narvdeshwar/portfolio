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
      <div className="relative h-[300px] sm:h-[400px] md:h-full w-full md:w-1/2 flex justify-center items-center">
        <img
          src={bgdesign}
          alt=""
          className="absolute inset-0 top-10 sm:top-20 left-10 sm:left-20 opacity-70 max-w-[90%] mx-auto"
        />
        <img
          src={Hero}
          alt="Profile Illustration"
          className="z-10 absolute max-w-[70%] sm:max-w-[60%] md:max-w-full"
        />
        <img
          src={dot}
          alt=""
          className="z-20 bottom-20 sm:bottom-40 absolute right-10 sm:right-40 size-12 sm:size-[84px]"
        />

        <Button
          title="Currently building my portfolio"
          className="bottom-6 sm:bottom-16 absolute px-3 py-1 flex gap-2 items-center text-xs sm:text-sm"
          variant="default"
        >
          <div className="size-3 sm:size-4 bg-[#cb42c3] rounded"></div>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
