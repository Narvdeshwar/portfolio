import MinimalHero from "./comp/MinimalHero";
import MinimalProjects from "./comp/MinimalProjects";
import { SkillsComp } from "./comp/SkillsComp";
import AboutComp from "./comp/AboutComp";
import ContactComp from "./comp/ContactComp";
import GithubComp from "./comp/GithubComp";

function Homepage() {
  return (
    <>
      <MinimalHero />
      <MinimalProjects />
      <SkillsComp />
      <AboutComp />
      <GithubComp />
      <ContactComp />
    </>
  );
}

export default Homepage;
