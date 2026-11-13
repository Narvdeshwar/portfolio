import PROFILE_DATA from "../../../../constants/profileData";

export default function HeroTelemetry() {
  const { telemetry } = PROFILE_DATA;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 border border-[#262626] divide-y sm:divide-y-0 sm:divide-x divide-[#262626] bg-[#000000]">
      {telemetry.map((item) => (
        <div key={item.label} className="p-5 flex flex-col gap-2">
          <span className="font-plex-caption text-[#A6A6A6]">
            {item.label}
          </span>
          <span className="text-sm md:text-base font-medium text-[#FFFFFF]">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}
