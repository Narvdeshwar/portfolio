import { GithubIcon, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import socialUrl from "../../../../constants/socialurls";
function LeftOverlay() {
  return (
    <div className="md:absolute top-1 left-2 flex flex-col gap-4 p-4">
      <div className="flex justify-center">
        <div className="w-1 h-40 bg-white hover:bg-[#cb42c3] rounded-full"></div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Link to={socialUrl.github} target="_blank" rel="noopener noreferrer">
          <GithubIcon className="size-6 hover:text-[#cb42c3]" />
        </Link>
        <Link to={socialUrl.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin className="size-6 hover:text-[#cb42c3]" />
        </Link>
        <Link to={socialUrl.leetcode} target="_blank" rel="noopener noreferrer">
          <img
            src="https://assets.leetcode.com/static_assets/public/images/LeetCode_logo_rvs.png"
            alt="LeetCode"
            className="size-7"
          />
        </Link>
      </div>
    </div>
  );
}

export default LeftOverlay;
