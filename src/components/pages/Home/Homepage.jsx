import HeroSection from "./hero/HeroSection";
import WorkSection from "./work/WorkSection";
import CapabilitiesSection from "./capabilities/CapabilitiesSection";

export default function Homepage() {
  return (
    <div className="w-full">
      <HeroSection />
      <WorkSection />
      <CapabilitiesSection />
    </div>
  );
}
