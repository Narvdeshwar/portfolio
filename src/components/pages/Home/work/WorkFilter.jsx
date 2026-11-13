export default function WorkFilter({ activeFilter, onSelectFilter }) {
  const filters = [
    { id: "all", label: "ALL SYSTEMS" },
    { id: "government", label: "GOVERNMENT & MISSION-CRITICAL" },
    { id: "production", label: "PRODUCTION & CLIENT PLATFORMS" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2 pt-2">
      {filters.map((f) => {
        const isActive = activeFilter === f.id;
        return (
          <button
            key={f.id}
            type="button"
            onClick={() => onSelectFilter(f.id)}
            className={`font-plex-caption text-[11px] px-3 py-1.5 border transition-colors cursor-pointer tracking-[0.84px] select-none ${
              isActive
                ? "bg-[#4BE1C4] text-[#000000] border-[#4BE1C4]"
                : "bg-transparent text-[#A6A6A6] border-[#262626] hover:text-[#FFFFFF] hover:border-[#C9C9C9]/30"
            }`}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}
