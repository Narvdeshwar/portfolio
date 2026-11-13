export default function ProjectBadge({ tag, isGovernment = false }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-plex-caption px-2 py-0.5 border text-[10px] tracking-[0.72px] select-none ${
        isGovernment
          ? "border-[#4BE1C4]/40 text-[#4BE1C4] bg-[#4BE1C4]/5"
          : "border-[#262626] text-[#A6A6A6] bg-[#141414]"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          isGovernment ? "bg-[#4BE1C4]" : "bg-neutral-500"
        }`}
      />
      {tag}
    </span>
  );
}
