import MinimalHero from "./comp/MinimalHero";
import MinimalProjects from "./comp/MinimalProjects";
import SkillsMatrix from "./comp/SkillsMatrix";
import AboutComp from "./comp/AboutComp";
import ContactComp from "./comp/ContactComp";
import GithubComp from "./comp/GithubComp";
import TerminalHero from "./comp/TerminalHero";
import OSSImpact from "./comp/OSSImpact";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

function Homepage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item}><MinimalHero /></motion.div>
      <motion.div variants={item}><MinimalProjects /></motion.div>
      <motion.div variants={item}><OSSImpact /></motion.div>
      <motion.div variants={item}><SkillsMatrix /></motion.div>
      <motion.div variants={item}><TerminalHero /></motion.div>
      <motion.div variants={item}><AboutComp /></motion.div>
      <motion.div variants={item}><GithubComp /></motion.div>
      <motion.div variants={item}><ContactComp /></motion.div>
    </motion.div>
  );
}

export default Homepage;
