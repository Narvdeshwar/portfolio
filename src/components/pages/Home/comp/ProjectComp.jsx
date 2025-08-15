import { Link } from "react-router-dom";
import Card from "../../../molecules/Card";
import projectsData from "../../../../constants/projectData.json";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
function ProjectComp() {
  return (
    <div className="flex flex-col gap-3 mb-3 w-[90%] mx-auto">
      <div className="items-center flex justify-between">
        <div className="flex items-center w-[100%]">
          <p className="text-5xl">
            <span className="text-[#cb42c3] italic"># </span>Projects
          </p>
          <p className="w-[70%] bg-[#cb42c3] h-1 ml-2"></p>
        </div>
        <div className="bg-gradient-to-r from-[#da92d5] to-[#cb42c3] bg-no-repeat bg-[length:0%_2px] bg-left-bottom transition-all duration-700 hover:bg-[length:100%_2px] cursor-pointer text-nowrap py-1">
          <Link to="/work">View all {"-->"}</Link>
        </div>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 p-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projectsData.map((project, idx) => (
          <motion.div key={idx} variants={cardVariants}>
            <Card project={project} />
          </motion.div>
        ))}
      </motion.div>
      <div className="border h-48 w-32 hidden md:absolute -right-10 top-[30%]">

      </div>
    </div>
  );
}

export default ProjectComp;
