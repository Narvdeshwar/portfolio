import LeftOverlay from "./comp/LeftOverlay";
import HeroSection from "./comp/HeroSection";
import ProjectComp from "./comp/ProjectComp";
import { SkillsComp } from "./comp/SkillsComp";
import AboutComp from "./comp/AboutComp";
import ContactComp from "./comp/ContactComp";
function Homepage() {
  return (
    <>
      <HeroSection />
      <LeftOverlay />
      <ProjectComp />
      <SkillsComp />
      {/* <AboutComp />
      <ContactComp /> */}
    </>
  );
}

export default Homepage;
