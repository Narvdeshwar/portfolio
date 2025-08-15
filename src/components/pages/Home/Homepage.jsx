import LeftOverlay from "./comp/LeftOverlay";
import HeroSection from "./comp/HeroSection";
import ProjectComp from "./comp/ProjectComp";
import { SkillsComp } from "./comp/SkillsComp";
import AboutComp from "./comp/AboutComp";
function Homepage() {
  return (
    <>
      <HeroSection />
      <LeftOverlay />
      <div className="relative overflow-hidden">
        <ProjectComp />
      </div>
      <SkillsComp />
      <AboutComp />
    </>
  );
}

export default Homepage;
