import { jspark } from "../../../../assets";

export default function CompanyLogo({ companyId, companyName }) {
  if (companyId === "jspark") {
    return (
      <div className="w-10 h-10 border border-[#262626] bg-[#000000] p-1.5 flex items-center justify-center shrink-0">
        <img
          src={jspark}
          alt={companyName}
          className="w-full h-full object-contain filter brightness-110"
        />
      </div>
    );
  }

  if (companyId === "xenelsoft") {
    return (
      <div className="w-10 h-10 border border-[#262626] bg-[#0D0D0D] flex items-center justify-center shrink-0">
        {/* Xenelsoft Precision Node Mark */}
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#4BE1C4]" fill="none" stroke="currentColor" strokeWidth="1.75">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      </div>
    );
  }

  // GlobalLogic
  return (
    <div className="w-10 h-10 border border-[#262626] bg-[#0D0D0D] flex items-center justify-center shrink-0">
      {/* GlobalLogic Network Mark */}
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#FFFFFF]" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a15 15 0 0 1 0 18" />
        <path d="M12 3a15 15 0 0 0 0 18" />
        <line x1="3" y1="12" x2="21" y2="12" />
      </svg>
    </div>
  );
}
