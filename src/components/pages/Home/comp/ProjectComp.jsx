import { Link } from "react-router-dom";
import Card from "../../../molecules/Card";
import { motion } from "framer-motion";
import projectsData from "../../../../constants/projectData";
import { ArrowRight } from "lucide-react";

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
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-10 py-20 px-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-blue-500 font-mono text-2xl mr-2">02.</span>
            Projects
          </h2>
          <div className="h-px bg-gray-800 w-32 hidden sm:block"></div>
        </div>

        <Link
          to="/work"
          className="group flex items-center gap-2 text-sm font-mono text-blue-400 hover:text-blue-300 transition-colors"
        >
          View Archive <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projectsData.slice(0, 3).map((project, idx) => (
          <motion.div key={idx} variants={cardVariants} className="h-full">
            <Card project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default ProjectComp;
