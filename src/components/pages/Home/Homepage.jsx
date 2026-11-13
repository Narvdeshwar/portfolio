import HeroSection from "./hero/HeroSection";
import WorkSection from "./work/WorkSection";
import CapabilitiesSection from "./capabilities/CapabilitiesSection";
import ExperienceSection from "./experience/ExperienceSection";
import ContactSection from "./contact/ContactSection";

export default function Homepage() {
  return (
    <div className="w-full">
      <HeroSection />
      <WorkSection />
      <CapabilitiesSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
