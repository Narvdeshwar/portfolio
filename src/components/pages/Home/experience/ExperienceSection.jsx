import Container from "../../../atoms/Container";
import ExperienceHeader from "./ExperienceHeader";
import ExperienceItem from "./ExperienceItem";
import EXPERIENCE_DATA from "../../../../constants/experienceData";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-label="Career Timeline"
      className="relative w-full py-20 bg-[#000000] border-b border-[#262626]"
    >
      <Container className="flex flex-col gap-10">
        <ExperienceHeader />

        <div className="flex flex-col gap-6">
          {EXPERIENCE_DATA.map((exp) => (
            <ExperienceItem key={exp.id} exp={exp} />
          ))}
        </div>
      </Container>
    </section>
  );
}
