import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projectsData from "../../../../constants/projectData";
import { ArrowUpRight, Cpu, Layout, Package } from "lucide-react";

const MinimalProjects = () => {
  const fullstackWork = projectsData.filter(p => p.category === 'fullstack');
  const backendWork = projectsData.filter(p => p.category === 'backend').slice(0, 3);
  const frontendWork = projectsData.filter(p => p.category === 'frontend');

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* --- FULLSTACK PRODUCTS --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter uppercase italic">
              PRODUCTS
            </h2>
            <span className="text-[10px] font-mono px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-purple-400 uppercase tracking-widest hidden md:block">
              Full-Fledged Apps
            </span>
          </div>
          <Link to="/work" className="hidden md:flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white uppercase tracking-wider transition-colors mb-2">
            View All Archives <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="flex flex-col mb-32">
          {fullstackWork.map((project, index) => (
            <ProjectItem key={index} project={project} index={index} icon={<Package size={16} />} />
          ))}
        </div>


        {/* --- BACKEND SYSTEMS --- */}
        <div className="mb-12 border-b border-white/10 pb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-display font-medium text-gray-300 tracking-tight flex items-center gap-4 uppercase">
              SYSTEMS CORE
            </h2>
            <span className="text-[10px] font-mono px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded text-yellow-500/70 uppercase tracking-widest">
              Backend Engineering
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {backendWork.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 border border-white/5 bg-[#0D0D0D] hover:border-yellow-500/30 transition-all duration-500 rounded-2xl relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/5 flex items-center justify-center text-yellow-500/50 group-hover:text-yellow-500 transition-colors">
                  <Cpu size={20} />
                </div>
                <Link to={`/work/${project.slug}`} className="text-gray-600 hover:text-white transition-colors">
                  <ArrowUpRight size={20} />
                </Link>
              </div>
              <h3 className="text-xl font-display text-white mb-2 italic tracking-tight">{project.title}</h3>
              <p className="text-sm text-gray-500 line-clamp-3 mb-6 font-mono leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map(t => (
                  <span key={t} className="text-[9px] font-mono text-gray-600 border border-white/5 px-2 py-0.5 uppercase tracking-tighter">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- FRONTEND INTERFACES --- */}
        <div className="mb-12 border-b border-white/10 pb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-display font-medium text-gray-300 tracking-tight flex items-center gap-4 uppercase">
              INTERFACES
            </h2>
            <span className="text-[10px] font-mono px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-blue-400 uppercase tracking-widest">
              UI/UX Showroom
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {frontendWork.map((project, index) => (
            <ProjectItem key={index} project={project} index={index} icon={<Layout size={16} />} isSmall />
          ))}
        </div>

        <div className="mt-20 md:hidden">
          <Link to="/work" className="flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white uppercase tracking-wider transition-colors">
            View All Archives <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProjectItem = ({ project, index, icon, isSmall }) => {
  return (
    <Link to={`/work/${project.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        viewport={{ once: true }}
        className={`group relative border-b border-white/5 ${isSmall ? 'py-8' : 'py-12 md:py-16'} hover:bg-white/[0.02] transition-colors cursor-pointer`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-0">

          {/* Title & Category */}
          <div className="flex flex-col gap-2 md:basis-1/2">
            <div className="flex items-center gap-3">
              <span className="text-blue-500/50 group-hover:text-blue-500 transition-colors">
                {icon}
              </span>
              <span className="font-mono text-[10px] text-gray-600 uppercase tracking-[0.2em]">{project.category}</span>
            </div>
            <h3 className={`${isSmall ? 'text-2xl md:text-3xl' : 'text-3xl md:text-6xl'} font-display font-medium text-gray-300 group-hover:text-white transition-colors tracking-tighter italic`}>
              {project.title}
            </h3>
          </div>

          {/* Short Description */}
          <div className="md:basis-1/3">
            <p className="text-gray-500 text-sm md:text-base max-w-sm line-clamp-2 font-mono">
              {project.description}
            </p>
          </div>

          {/* Link */}
          <div className="md:basis-1/12 flex justify-end">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default MinimalProjects;
