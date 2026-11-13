export default function ProjectStack({ stack = [] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {stack.map((tech) => (
        <span
          key={tech}
          className="font-plex-caption text-[11px] text-[#A6A6A6] tracking-[0.72px] border border-[#262626] px-2 py-0.5 bg-[#0D0D0D]"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
