import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "../../../constants/projectData";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const WorkPage = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Cases" },
    { id: "backend", label: "Systems" },
    { id: "frontend", label: "Interfaces" },
    { id: "fullstack", label: "Products" },
  ];

  const filteredProjects = filter === "all"
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section className="pt-40 pb-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
          <div>
            <span className="block text-[10px] font-mono text-blue-500 uppercase tracking-[0.5em] mb-4">The Archive</span>
            <h1 className="text-[10vw] md:text-[8vw] leading-[0.85] font-bold text-white tracking-tighter">
              WORK
            </h1>
          </div>
          <div className="mb-2 text-right">
            <span className="block text-sm font-mono text-gray-500 uppercase tracking-widest">
              Success Stories
            </span>
            <span className="block text-sm font-mono text-gray-500 uppercase tracking-widest">
              ( {filteredProjects.length} / {projectsData.length} )
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-8 py-3 rounded-full text-[10px] font-mono uppercase tracking-widest border transition-all duration-300 ${filter === cat.id
                  ? "bg-white text-black border-white"
                  : "text-gray-500 border-white/10 hover:border-white/30 hover:text-white"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="flex flex-col">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-white/10 text-xs font-mono text-gray-500 uppercase tracking-widest">
            <div className="col-span-1">No.</div>
            <div className="col-span-1">Type</div>
            <div className="col-span-4">Project</div>
            <div className="col-span-4">Stack</div>
            <div className="col-span-2 text-right">Link</div>
          </div>

          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <Link to={`/work/${project.slug}`} className="block">
                  <div className="group border-b border-white/5 py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-white/[0.02] transition-colors cursor-pointer">
                    {/* Number */}
                    <div className="hidden md:block col-span-1 font-mono text-sm text-gray-600 group-hover:text-blue-500 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Category Tag */}
                    <div className="hidden md:block col-span-1">
                      <span className={`text-[8px] font-mono px-2 py-1 rounded-sm border uppercase tracking-wider ${project.category === 'backend' ? 'border-yellow-500/30 text-yellow-500/70' :
                          project.category === 'frontend' ? 'border-blue-500/30 text-blue-500/70' :
                            'border-purple-500/30 text-purple-500/70'
                        }`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="col-span-12 md:col-span-4">
                      <h3 className="text-3xl md:text-5vw font-display font-medium text-gray-300 group-hover:text-white transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      {/* Mobile Labels */}
                      <div className="md:hidden mt-2 flex items-center gap-3">
                        <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest">{project.category}</span>
                        <div className="w-1 h-1 bg-gray-600 rounded-full" />
                        <span className="text-[10px] font-mono text-gray-500">{project.technologies.slice(0, 2).join(", ")}</span>
                      </div>
                    </div>

                    {/* Desktop Stack */}
                    <div className="hidden md:block col-span-4 text-sm font-mono text-gray-500 lg:pr-20">
                      {project.technologies.slice(0, 4).join(", ")}
                    </div>

                    {/* Link */}
                    <div className="col-span-12 md:col-span-2 flex justify-end">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:text-white transition-all duration-300">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default WorkPage;
