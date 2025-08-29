import Button from "../atoms/Button";
import OptimisedImage from "../atoms/OptimisedImage";
import { GithubIcon } from "lucide-react";

function Card({ project }) {
  return (
    <div className="border border-gray-500 shadow-md rounded-md overflow-hidden glass">
      <OptimisedImage src={project.image} alt={project.title} className="!rounded-t-md"/>

      {/* Technologies */}
      <div className="grid grid-cols-3 border-b border-gray-500 font-bold px-3 py-1 gap-2">
        {project.technologies.map((tech, index) => (
          <p
            key={index}
            className="text-nowrap font-[300] text-[16px] text-gray-500"
          >
            {tech}
          </p>
        ))}
      </div>

      {/* Project details */}
      <div className="grid grid-rows-2">
        <div className="px-3 mt-2">
          <p className="font-semibold">{project.title}</p>
          <p className="text-sm text-gray-600">{project.description}</p>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 px-3 py-2">
          <Button
            title="Live"
            className="flex justify-center items-center gap-2 hover:text-[#cb42c3] hover:border-[#cb42c3]"
            onClick={() => window.open(project.links.live, "_blank")}
          />
          {project.links.github && (
            <Button
              title="Git"
              className="flex justify-center items-center gap-2 hover:text-[#cb42c3] hover:border-[#cb42c3] hover:font-bold"
              onClick={() => window.open(project.links.github, "_blank")}
            >
              <GithubIcon className="size-4 hover:text-[#cb42c3]" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
