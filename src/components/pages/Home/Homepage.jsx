import HeroSection from "./hero/HeroSection";
import PerspectiveScrollSection from "./interactive/PerspectiveScrollSection";
import WorkSection from "./work/WorkSection";
import CapabilitiesSection from "./capabilities/CapabilitiesSection";
import ExperienceSection from "./experience/ExperienceSection";
import ContactSection from "./contact/ContactSection";

export default function Homepage() {
  return (
    <div className="w-full">
      <HeroSection />
      <PerspectiveScrollSection />
      <WorkSection />
      <CapabilitiesSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
