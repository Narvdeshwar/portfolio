import CompanyLogo from "./CompanyLogo";
import { formatTenure } from "../../../../utils/dateUtils";

export default function ExperienceItem({ exp }) {
  const { id, index, period, role, company, status, summary, highlights, stack, startDate, endDate } = exp;
  const tenure = formatTenure(startDate, endDate);

  return (
    <article className="group p-6 md:p-8 border border-[#262626] bg-[#000000] hover:bg-[#141414]/60 transition-colors duration-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Logo + Company + Role + Dynamic Tenure */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-plex-caption text-[#4BE1C4] text-xs">
                {index}
              </span>
              <span className="text-[#262626]">•</span>
              <span className="font-plex-caption text-[10px] text-[#4BE1C4] border border-[#4BE1C4]/30 px-2 py-0.5 bg-[#4BE1C4]/5">
                {status}
              </span>
            </div>
            <span className="font-plex-caption text-[11px] text-[#A6A6A6] border border-[#262626] px-2 py-0.5 bg-[#0D0D0D]">
              {tenure}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <CompanyLogo companyId={id} companyName={company} />
            <div className="flex flex-col">
              <h3 className="font-inter text-lg md:text-xl font-semibold text-[#FFFFFF] tracking-[-0.3px] group-hover:text-[#4BE1C4] transition-colors">
                {company}
              </h3>
              <span className="font-plex-caption text-xs text-[#A6A6A6] tracking-[0.84px]">
                {role}
              </span>
            </div>
          </div>

          <span className="font-plex-caption text-xs text-[#737373] tracking-[0.5px]">
            {period}
          </span>
        </div>

        {/* Right Column: Narrative + Highlights + Stack */}
        <div className="lg:col-span-8 flex flex-col gap-5">
          <p className="text-sm md:text-base text-[#D4D4D4] leading-relaxed">
            {summary}
          </p>

          <ul className="space-y-2.5">
            {highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-[#A6A6A6] leading-relaxed">
                <span className="text-[#4BE1C4] font-mono select-none pt-0.5">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#262626]">
            {stack.map((t) => (
              <span
                key={t}
                className="font-plex-caption text-[10px] text-[#A6A6A6] border border-[#262626] px-2 py-0.5 bg-[#0D0D0D]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
