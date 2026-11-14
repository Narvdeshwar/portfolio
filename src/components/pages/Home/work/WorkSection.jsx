import { useState } from "react";
import Container from "../../../atoms/Container";
import WorkHeader from "./WorkHeader";
import WorkFilter from "./WorkFilter";
import ProjectItem from "./ProjectItem";
import PROJECTS_DATA from "../../../../constants/projectData";

export default function WorkSection() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  return (
    <section
      id="work"
      aria-label="Selected Systems"
      className="relative w-full py-20 bg-[#000000] border-b border-[#262626]"
    >
      <Container className="flex flex-col gap-8">
        <WorkHeader count={filteredProjects.length} />
        <WorkFilter activeFilter={filter} onSelectFilter={setFilter} />

        <div className="flex flex-col divide-y divide-[#262626] border-t border-[#262626]">
          {filteredProjects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
