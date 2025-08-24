import React from "react";
import { herosecond } from "../../../../assets";

function AboutComp() {
  return (
    <div className="w-[90%] mx-auto flex flex-col gap-6 p-3">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Title */}
        <div className="flex items-center flex-1 min-w-[150px]">
          <p className="text-[clamp(1.5rem,5vw,3rem)] font-semibold">
            <span className="text-[#cb42c3] italic"># </span>About me
          </p>
          <div className="flex-1 h-1 ml-2 bg-[#cb42c3]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10">
        {/* Text Section */}
        <p className="text-sm sm:text-base lg:text-[16px] text-gray-400 text-justify font-[400]">
          <span className="text-base sm:text-lg lg:text-[18px] font-semibold">
            Hello, I’m Narvdeshwar!
          </span>
          <br />
          <br /> I’m a results-driven Software Developer with around 3 years of
          experience designing and building scalable web applications and
          backend systems. Skilled in JavaScript, Node.js, Express.js, MongoDB,
          and MySQL, I specialize in developing high-performance solutions,
          integrating third-party APIs, and optimizing database operations for
          speed and reliability.
          <br /> <br /> I have successfully delivered real-time applications,
          implemented robust CI/CD pipelines on AWS, and collaborated with
          cross-functional teams to align technical solutions with business
          goals. With hands-on experience in modern frameworks like React.js,
          Next.js, and Tailwind CSS, I strive to create seamless, responsive,
          and impactful digital experiences.
        </p>

        {/* Image Section */}
        <div className="relative w-full flex justify-center">
          <img
            src={herosecond}
            alt="Profile"
            className="max-w-full h-76 object-contain"
          />
          <div className="absolute inset-0 top-3 left-[35%] hidden sm:block">
            <pre className="font-bold">. . . </pre>
            <pre className="font-bold">. . . </pre>
            <pre className="font-bold">. . . </pre>
          </div>
          <div className="absolute bottom-[20%] right-[30%] hidden sm:block">
            <pre className="font-bold">. . . </pre>
            <pre className="font-bold">. . . </pre>
            <pre className="font-bold">. . . </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComp;
