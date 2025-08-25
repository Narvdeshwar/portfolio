import { BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <div className="border-t mt-6 px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 place-items-center md:place-items-start">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <p className="border-b-4 inline-block px-2 py-1 border-[#cb42c3] rounded-md text-lg font-semibold">
            Narvdeshwar
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end border border-gray-500 p-3 rounded-md gap-2 text-gray-400 w-fit">
          <p className="font-medium">Media</p>
          <div className="flex gap-4 text-xl">
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
