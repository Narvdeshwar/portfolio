import PROFILE_DATA from "../../../../constants/profileData";

export default function HeroSummary() {
  const { summary } = PROFILE_DATA;

  return (
    <div className="max-w-2xl">
      <p className="text-[17px] md:text-[18px] text-[#A6A6A6] leading-[1.55] font-normal">
        {summary}
      </p>
    </div>
  );
}
