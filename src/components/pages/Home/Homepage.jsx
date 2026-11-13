import HeroSection from "./hero/HeroSection";
import WorkSection from "./work/WorkSection";

export default function Homepage() {
  return (
    <div className="w-full">
      <HeroSection />
      <WorkSection />
    </div>
  );
}
