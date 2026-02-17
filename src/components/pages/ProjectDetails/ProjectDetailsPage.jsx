import { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Monitor, Activity, Code2, Server, Box } from "lucide-react";
import projectsData from "../../../constants/projectData";
import { jspark } from "../../../assets"; // Fallback image
import ArchitectureDiagram from "../../molecules/ArchitectureDiagram";

const ProjectDetailsPage = () => {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Project not found.
      </div>
    );
  }

  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Back Link */}
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          <span className="text-xs font-mono uppercase tracking-widest">Back to Projects</span>
        </Link>

        {/* Hero Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className={`px-3 py-1 text-[10px] font-mono uppercase tracking-widest border ${project.category === 'selected' ? 'border-blue-500 text-blue-400' : 'border-purple-500 text-purple-400'
                }`}>
                {project.category === 'selected' ? 'Featured Work' : 'Engineering Lab'}
              </span>
              {project.stats?.status && (
                <span className="flex items-center gap-2 text-[10px] font-mono text-green-400 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  {project.stats.status}
                </span>
              )}
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              {project.title}
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </motion.div>
        </div>

        {/* Action Bar */}
        <div className="flex flex-wrap gap-4 mb-20">
          {project.links.live && project.links.live !== "#" && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-colors"
            >
              <ExternalLink size={18} />
              Visit Live Site
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
            >
              <Github size={18} />
              View Source
            </a>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Left: Image / Mockup */}
          <div className="md:col-span-8">
            <div className="aspect-video bg-[#121212] border border-white/10 rounded-sm overflow-hidden relative group">
              <img
                src={project.image || jspark}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              />

              {/* Stats Overlay for Selected Projects */}
              {project.category === 'selected' && project.stats?.traffic && (
                <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/10 rounded-full">
                  <Activity size={14} className="text-green-500" />
                  <span className="text-xs font-mono text-white">
                    {project.stats.traffic} Visits
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Tech & Details */}
          <div className="md:col-span-4 flex flex-col gap-12">

            {/* Technologies */}
            <div>
              <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Code2 size={14} />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/5 text-gray-300 text-xs font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Metrics / Features */}
            <div>
              <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Server size={14} />
                Key Metrics
              </h3>
              <ul className="space-y-4">
                {Object.entries(project.stats || {}).map(([key, value]) => (
                  <li key={key} className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-sm text-gray-400 capitalize">{key}</span>
                    <span className="text-sm text-white font-mono">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* System Architecture Section */}
        {project.architecture && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-xl">
                <h3 className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Box size={14} />
                  01. / System Architecture
                </h3>
                <h2 className="text-3xl md:text-5xl font-display font-medium text-white">
                  Engineering Blueprint.
                </h2>
              </div>
              <p className="text-gray-500 text-sm font-mono max-w-xs md:text-right">
                Visualizing the distributed flow and service orchestration.
              </p>
            </div>

            <ArchitectureDiagram architecture={project.architecture} />
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default ProjectDetailsPage;
