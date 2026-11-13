import CapabilityTag from "./CapabilityTag";

export default function CapabilityCard({ capability }) {
  const { index, pillar, directive, summary, skills, status } = capability;

  return (
    <div className="group flex flex-col justify-between p-6 md:p-8 border border-[#262626] bg-[#000000] hover:bg-[#141414]/60 transition-colors duration-200">
      {/* Top Meta */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between border-b border-[#262626] pb-3">
          <div className="flex items-center gap-2">
            <span className="font-plex-caption text-[#4BE1C4] text-xs">
              {index}
            </span>
            <span className="text-[#262626]">•</span>
            <span className="font-plex-caption text-[#A6A6A6] text-[10px]">
              {directive}
            </span>
          </div>

          <span className="font-plex-caption text-[10px] text-[#4BE1C4] border border-[#4BE1C4]/30 px-2 py-0.5 bg-[#4BE1C4]/5 select-none">
            {status}
          </span>
        </div>

        {/* Heading */}
        <h3 className="font-inter text-lg md:text-xl font-semibold text-[#FFFFFF] tracking-[-0.3px] group-hover:text-[#4BE1C4] transition-colors">
          {pillar}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#A6A6A6] leading-relaxed">
          {summary}
        </p>
      </div>

      {/* Skills Matrix */}
      <div className="flex flex-wrap items-center gap-2 pt-6 mt-6 border-t border-[#262626]">
        {skills.map((skill) => (
          <CapabilityTag key={skill} label={skill} />
        ))}
      </div>
    </div>
  );
}
