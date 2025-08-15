import React from "react";
import { bgdesign, dot, Hero } from "../../../../assets";
import Button from "../../../atoms/Button";

function HeroSection() {
  return (
    <div className="h-[calc(100vh-70px)] flex justify-between p-10 items-center w-[90%] mx-auto">
      {/* left */}
      <div className="w-1/2 space-y-6">
        <p className="text-5xl font-extrabold leading-snug">
          Hi, I’m <span className="text-[#cb42c3]">Narvdeshwar</span>
          <br />A Passionate{" "}
          <span className="text-[#cb42c3]">Full Stack Developer</span>
        </p>
        <p className="text-xl text-gray-300 max-w-xl">
          I specialize in building fast, scalable web apps with modern tech
          stacks like React, Node.js, and MongoDB. I love transforming ideas
          into real-world products with intuitive UI and clean code.
        </p>
        <Button title="Get in Touch" variant="primary" />
      </div>

      {/* right */}
      <div className="relative h-full w-1/2 flex justify-center items-center">
        <img
          src={bgdesign}
          alt=""
          className="absolute inset-0 top-20 left-20 opacity-70"
        />
        <img src={Hero} alt="Profile Illustration" className="z-10 absolute" />
        <img
          src={dot}
          alt=""
          className="z-20 bottom-40 absolute right-40 size-[84px]"
        />

        <Button
          title="Currently building my portfolio"
          className="bottom-16 absolute px-3 py-1 flex gap-2 items-center"
          variant="default"
        >
          <div className="size-4 bg-[#cb42c3] rounded"></div>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
