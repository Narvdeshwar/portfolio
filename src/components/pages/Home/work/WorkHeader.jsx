export default function WorkHeader({ count = 0 }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="font-plex-caption text-[#4BE1C4]">
          02
        </span>
        <span className="text-[#262626]">/</span>
        <span className="font-plex-caption text-[#A6A6A6]">
          SELECTED WORK
        </span>
      </div>

      <div className="flex items-baseline justify-between border-b border-[#262626] pb-4">
        <h2 className="font-display-md text-[#FFFFFF] tracking-[-0.52px] uppercase">
          FEATURED PROJECTS
        </h2>
        <span className="font-plex-caption text-xs text-[#A6A6A6]">
          [{String(count).padStart(2, "0")} PROJECTS]
        </span>
      </div>
    </div>
  );
}
