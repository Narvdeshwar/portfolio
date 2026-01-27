import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import projectsData from "../../../../constants/projectData";
import { ArrowUpRight } from "lucide-react";

const MinimalProjects = () => {
  const selectedWork = projectsData.filter(p => p.category === 'selected');
  const engineeringWork = projectsData.filter(p => p.category === 'engineering').slice(0, 3);

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* --- SELECTED WORK SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter">
            SELECTED WORK <span className="text-blue-500 text-2xl align-top">02</span>
          </h2>
          <Link to="/work" className="hidden md:flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white uppercase tracking-wider transition-colors mb-2">
            View All Archives <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="flex flex-col mb-32">
          {selectedWork.map((project, index) => (
            <ProjectItem key={index} project={project} index={index} />
          ))}
        </div>


        {/* --- ENGINEERING LABS SECTION --- */}
        <div className="mb-12 border-b border-white/10 pb-6">
          <h2 className="text-2xl md:text-3xl font-display font-medium text-gray-400 tracking-tight flex items-center gap-4">
            ENGINEERING LABS <span className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-gray-500 uppercase">Backend & Systems</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringWork.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 border border-white/5 bg-[#121212] hover:bg-white/5 transition-colors cursor-default"
            >
              <div className="flex justify-between items-start mb-4">
                {project.stats?.status === "Active" ? (
                  <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
                ) : (
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                )}
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <ArrowUpRight size={16} />
                </a>
              </div>
              <h3 className="text-xl font-display text-white mb-2">{project.title}</h3>
              <p className="text-sm text-gray-500 line-clamp-3 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.slice(0, 3).map(t => (
                  <span key={t} className="text-[10px] font-mono text-gray-600 border border-white/5 px-2 py-1 uppercase">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:hidden">
          <Link to="/work" className="flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white uppercase tracking-wider transition-colors">
            View All Archives <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProjectItem = ({ project, index }) => {
  return (
    <Link to={`/work/${project.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        viewport={{ once: true }}
        className="group relative border-b border-white/5 py-12 md:py-16 hover:bg-white/[0.02] transition-colors cursor-pointer"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-0">

          {/* Title & Category */}
          <div className="flex flex-col gap-2 md:basis-1/3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-blue-500 uppercase tracking-widest">{project.category}</span>
              {project.stats?.traffic && (
                <span className="font-mono text-[10px] text-green-400 bg-green-900/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
                  {project.stats.traffic} Visits
                </span>
              )}
            </div>
            <h3 className="text-3xl md:text-5xl font-display font-medium text-gray-300 group-hover:text-white transition-colors">
              {project.title}
            </h3>
          </div>

          {/* Short Description */}
          <div className="md:basis-1/3">
            <p className="text-gray-500 text-sm md:text-base max-w-sm line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Link / Year */}
          <div className="md:basis-1/6 flex justify-end">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 transform group-hover:scale-110">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default MinimalProjects;
