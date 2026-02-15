import Button from "../atoms/Button";
import OptimisedImage from "../atoms/OptimisedImage";
import { GithubIcon, ExternalLink } from "lucide-react";

function Card({ project }) {
  return (
    <div className="glass-panel rounded-xl overflow-hidden hover:translate-y-[-5px] transition-transform duration-300 flex flex-col h-full group">
      <div className="relative overflow-hidden aspect-video">
        <OptimisedImage
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button
            title="View Project"
            className="bg-white text-black font-medium border-none hover:bg-white"
            onClick={() => window.open(project.links.live, "_blank")}
          />
        </div>
      </div>

      {/* Technologies */}
      <div className="px-5 pt-4 pb-2 flex flex-wrap gap-2 text-xs">
        {project.technologies.slice(0, 4).map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded font-mono"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="px-2 py-1 text-gray-500 font-mono">+{project.technologies.length - 4}</span>
        )}
      </div>

      {/* Project details */}
      <div className="px-5 pb-6 flex-1 flex flex-col gap-3">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">{project.description}</p>
        </div>

        <div className="mt-auto flex gap-4 pt-2">
          <button
            onClick={() => window.open(project.links.live, "_blank")}
            className="flex items-center gap-2 text-sm text-white hover:text-blue-400 transition-colors"
          >
            <ExternalLink size={16} /> Live Demo
          </button>
          {project.links.github && (
            <button
              onClick={() => window.open(project.links.github, "_blank")}
              className="flex items-center gap-2 text-sm text-white hover:text-blue-400 transition-colors"
            >
              <GithubIcon size={16} /> Source Code
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
