import { BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <div className="border-t mt-6 px-4 py-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 w-[90%] mx-auto">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <p className="border-b-4 inline-block px-2 py-1 border-[#cb42c3] rounded-md text-lg font-semibold">
            Narvdeshwar
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-4 border border-gray-500 p-3 rounded-md text-gray-400">
          <p className="font-medium text-center md:text-left">Social Links:</p>
          <div className="flex gap-4 text-xl justify-center md:justify-start">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#cb42c3] transition-colors"
            >
              <BsGithub />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#cb42c3] transition-colors"
            >
              <LiaLinkedin />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#cb42c3] transition-colors"
            >
              <SiLeetcode />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <p className="text-center text-gray-500 mt-6 text-sm">
        &copy; Made by Narvdeshwar
      </p>
    </div>
  );
}

export default Footer;
