import MinimalHero from "./comp/MinimalHero";
import MinimalProjects from "./comp/MinimalProjects";
import SkillsMatrix from "./comp/SkillsMatrix";
import AboutComp from "./comp/AboutComp";
import ContactComp from "./comp/ContactComp";
import GithubComp from "./comp/GithubComp";
import TerminalHero from "./comp/TerminalHero";

function Homepage() {
  return (
    <>
      <MinimalHero />
      <MinimalProjects />
      <SkillsMatrix />
      <TerminalHero />
      <AboutComp />
      <GithubComp />
      <ContactComp />
    </>
  );
}

export default Homepage;
