import { useState } from "react";
import PROFILE_DATA from "../../../../constants/profileData";

export default function ContactChannels() {
  const [copied, setCopied] = useState(false);
  const { links } = PROFILE_DATA;

  const copyEmail = () => {
    navigator.clipboard.writeText(links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-6 justify-between p-6 md:p-8 border border-[#262626] bg-[#000000]">
      <div className="flex flex-col gap-4">
        <span className="font-plex-caption text-xs text-[#A6A6A6]">
          EMAIL ADDRESS
        </span>

        <div className="flex flex-col gap-2">
          <a
            href={`mailto:${links.email}`}
            className="font-inter text-xl md:text-2xl font-semibold text-[#FFFFFF] hover:text-[#4BE1C4] transition-colors break-all"
          >
            {links.email}
          </a>

          <button
            type="button"
            onClick={copyEmail}
            className="self-start font-plex-caption text-[11px] text-[#4BE1C4] hover:text-[#FFFFFF] cursor-pointer tracking-[0.84px] pt-1"
          >
            {copied ? "✓ COPIED TO CLIPBOARD" : "[CLICK TO COPY EMAIL]"}
          </button>
        </div>

        <p className="text-sm text-[#A6A6A6] leading-relaxed pt-2">
          I am available for backend engineering, full-stack systems development, and exciting engineering opportunities.
        </p>
      </div>

      <div className="flex flex-col gap-4 pt-6 border-t border-[#262626]">
        <span className="font-plex-caption text-[10px] text-[#737373]">
          ONLINE PROFILES & RESUME
        </span>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-plex-btn text-[11px] text-[#FFFFFF] hover:text-[#4BE1C4] transition-colors tracking-[0.84px]"
          >
            GITHUB ↗
          </a>
          <span className="text-[#262626]">•</span>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-plex-btn text-[11px] text-[#FFFFFF] hover:text-[#4BE1C4] transition-colors tracking-[0.84px]"
          >
            LINKEDIN ↗
          </a>
          <span className="text-[#262626]">•</span>
          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="font-plex-btn text-[11px] text-[#4BE1C4] hover:text-[#FFFFFF] transition-colors tracking-[0.84px]"
          >
            VIEW RESUME ↗
          </a>
        </div>
      </div>
    </div>
  );
}
