import StatusBadge from "../../../atoms/StatusBadge";
import LiveClock from "../../../molecules/LiveClock";
import PROFILE_DATA from "../../../../constants/profileData";

export default function HeroStatus() {
  const { status } = PROFILE_DATA;

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-[#262626]">
      <StatusBadge
        label={`${status.label} • ${status.period}`}
        active={status.state === "ONLINE"}
      />
      <div className="flex items-center gap-3">
        <span className="font-plex-caption text-[#A6A6A6]">
          {status.location || "INDIA"}
        </span>
        <span className="text-[#262626] font-mono">•</span>
        <LiveClock timezone={status.timezone} label={status.tzAbbr} />
      </div>
    </div>
  );
}
