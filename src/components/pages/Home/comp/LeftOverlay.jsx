import { GithubIcon, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import socialUrl from "../../../../constants/socialurls";

function LeftOverlay() {
  return (
    <div className="flex md:flex-col gap-4 p-4 
                    fixed bottom-2 left-1/2 -translate-x-1/2 
                    md:translate-x-0 md:left-2 md:top-1 
                    items-center md:items-start z-50">
      
      {/* Line (only show on desktop) */}
      <div className="hidden md:flex justify-center">
        <div className="w-1 h-40 bg-white hover:bg-[#cb42c3] rounded-full"></div>
      </div>

      {/* Social Icons */}
      <div className="flex flex-row md:flex-col items-center gap-6">
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
            className="size-7 hover:opacity-80"
          />
        </Link>
      </div>
    </div>
  );
}

export default LeftOverlay;
