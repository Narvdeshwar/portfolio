export default function CapabilityTag({ label }) {
  return (
    <span className="font-plex-caption text-[11px] text-[#A6A6A6] tracking-[0.72px] border border-[#262626] px-2.5 py-1 bg-[#0D0D0D] transition-colors hover:border-[#4BE1C4]/50 hover:text-[#FFFFFF] select-none">
      {label}
    </span>
  );
}
