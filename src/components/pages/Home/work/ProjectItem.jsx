import ProjectBadge from "./ProjectBadge";
import ProjectStack from "./ProjectStack";

export default function ProjectItem({ project }) {
  const isGov = project.category === "government";

  return (
    <article className="group relative border-b border-[#262626] py-8 transition-colors duration-200 hover:bg-[#141414]/60">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Left: Index + Title + Description */}
        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 flex-1">
          <span className="font-plex-caption text-[#4BE1C4] text-xs pt-1 select-none">
            {project.index}
          </span>

          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-inter text-xl md:text-2xl font-semibold text-[#FFFFFF] tracking-[-0.52px] group-hover:text-[#4BE1C4] transition-colors">
                {project.title}
              </h3>
              <ProjectBadge tag={project.tag} isGovernment={isGov} />
            </div>

            <span className="font-plex-caption text-xs text-[#A6A6A6] tracking-[0.5px]">
              {project.subtitle}
            </span>

            <p className="text-sm text-[#A6A6A6] leading-relaxed mt-1">
              {project.description}
            </p>
          </div>
        </div>

        {/* Right: Stack + Live Link / Status */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4">
          <ProjectStack stack={project.stack} />

          <div className="pt-1">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-plex-btn text-[11px] text-[#4BE1C4] hover:text-[#FFFFFF] transition-colors tracking-[0.84px]"
              >
                VISIT SITE
                <span className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            ) : (
              <span className="font-plex-caption text-[11px] text-[#737373] tracking-[0.84px]">
                {project.status}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
