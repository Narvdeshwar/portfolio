export default function StatusBadge({
  label = "AVAILABLE FOR WORK",
  active = true,
  className = "",
}) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 font-plex-caption text-[#A6A6A6] tracking-[0.84px] select-none ${className}`}
    >
      <span className="relative flex h-2 w-2">
        {active && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4BE1C4] opacity-75" />
        )}
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            active ? "bg-[#4BE1C4]" : "bg-neutral-600"
          }`}
        />
      </span>
      <span>{label}</span>
    </div>
  );
}
