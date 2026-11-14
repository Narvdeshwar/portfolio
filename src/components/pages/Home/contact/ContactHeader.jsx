export default function ContactHeader() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="font-plex-caption text-[#4BE1C4]">
          05
        </span>
        <span className="text-[#262626]">/</span>
        <span className="font-plex-caption text-[#A6A6A6]">
          CONTACT
        </span>
      </div>

      <div className="flex items-baseline justify-between border-b border-[#262626] pb-4">
        <h2 className="font-display-md text-[#FFFFFF] tracking-[-0.52px] uppercase">
          GET IN TOUCH
        </h2>
        <span className="font-plex-caption text-xs text-[#4BE1C4]">
          [OPEN FOR WORK]
        </span>
      </div>
    </div>
  );
}
