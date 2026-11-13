import PROFILE_DATA from "../../../../constants/profileData";

export default function HeroHeadline() {
  const { role, discipline, directive } = PROFILE_DATA;

  return (
    <div className="flex flex-col gap-4">
      {/* Super-title / Discipline tag */}
      <div className="flex items-center gap-3">
        <span className="font-plex-caption text-[#4BE1C4]">
          {role}
        </span>
        <span className="text-[#262626]">/</span>
        <span className="font-plex-caption text-[#A6A6A6]">
          {discipline}
        </span>
      </div>

      {/* Main Display Headline */}
      <h1 className="font-display-lg text-[#FFFFFF] max-w-4xl uppercase">
        {directive}
      </h1>
    </div>
  );
}
