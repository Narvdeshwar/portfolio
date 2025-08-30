import { Link } from "react-router-dom";
import Card from "../../../molecules/Card";
import { motion } from "framer-motion";
import projectsData from "../../../../constants/projectData";

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
    <div className="flex flex-col gap-6 w-[90%] mx-auto mt-62 md:mt-10 p-3">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Title */}
        <div className="flex items-center flex-1 min-w-[150px]">
          <p className="text-[clamp(1.5rem,5vw,3rem)] font-semibold">
            <span className="text-[#cb42c3] italic"># </span>Projects
          </p>
          <div className="flex-1 h-1 ml-2 bg-[#cb42c3]"></div>
        </div>

        {/* Link */}
        <div className="bg-gradient-to-r from-[#da92d5] to-[#cb42c3] bg-no-repeat bg-[length:0%_2px] bg-left-bottom transition-all duration-700 hover:bg-[length:100%_2px] cursor-pointer text-nowrap py-1">
          <Link to="/work" className="text-sm md:text-base">
            View all {"-->"}
          </Link>
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-3"
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
    </div>
  );
}

export default ProjectComp;
