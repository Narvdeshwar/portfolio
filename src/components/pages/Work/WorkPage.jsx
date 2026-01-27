import { motion } from "framer-motion";
import projectsData from "../../../constants/projectData";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const WorkPage = () => {
  return (
    <section className="pt-40 pb-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
          <h1 className="text-[10vw] md:text-[8vw] leading-[0.85] font-bold text-white tracking-tighter">
            WORK
          </h1>
          <div className="mb-2 text-right">
            <span className="block text-sm font-mono text-gray-500 uppercase tracking-widest">
              Selected Projects
            </span>
            <span className="block text-sm font-mono text-gray-500 uppercase tracking-widest">
              ( {projectsData.length} )
            </span>
          </div>
        </div>

        {/* List */}
        <div className="flex flex-col">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-white/10 text-xs font-mono text-gray-500 uppercase tracking-widest">
            <div className="col-span-1">No.</div>
            <div className="col-span-5">Project</div>
            <div className="col-span-4">Stack</div>
            <div className="col-span-2 text-right">Link</div>
          </div>

          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group border-b border-white/5 py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-white/[0.02] transition-colors"
            >
              {/* Number */}
              <div className="hidden md:block col-span-1 font-mono text-sm text-gray-600 group-hover:text-blue-500 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Title */}
              <div className="col-span-12 md:col-span-5">
                <h3 className="text-3xl md:text-5xl font-display font-medium text-gray-300 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                {/* Mobile Stack */}
                <div className="md:hidden mt-2 text-sm text-gray-500 font-mono">
                  {project.technologies.slice(0, 3).join(", ")}
                </div>
              </div>

              {/* Desktop Stack */}
              <div className="hidden md:block col-span-4 text-sm font-mono text-gray-500">
                {project.technologies.slice(0, 3).join(", ")}
              </div>

              {/* Link */}
              <div className="col-span-12 md:col-span-2 flex justify-end">
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300"
                >
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkPage;
