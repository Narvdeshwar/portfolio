import { BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <div className="border-t mb-3">
      <div className="grid grid-cols-2 place-items-center mt-3 w-[100%]">
        <div className="">
          <p className="border-b-4 p-1 border-[#cb42c3] rounded-md">
            Narvdeshwar
          </p>
        </div>
        <div className="w-fit-content  flex flex-col items-center border border-gray-500 p-3 rounded-md gap-1 text-gray-400">
          <p>Media</p>
          <p className="flex gap-3 items-center">
            <a href="">
              <BsGithub />
            </a>
            <a href="">
              <LiaLinkedin />
            </a>
            <a href="">
              <SiLeetcode />
            </a>
          </p>
        </div>
      </div>
      <p className="text-center text-gray-500"> &copy; Made by Narvdeshwar</p>
    </div>
  );
}

export default Footer;
