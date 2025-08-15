import { DiJava } from "react-icons/di";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
} from "react-icons/si";

const skills = [
  { icon: <DiJava className="text-orange-500 text-5xl" />, name: "JAVA" },
  { icon: <FaHtml5 className="text-orange-500 text-5xl" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500 text-5xl" />, name: "CSS" },
  {
    icon: <SiJavascript className="text-yellow-400 text-5xl" />,
    name: "JavaScript",
  },
  { icon: <FaReact className="text-cyan-400 text-5xl" />, name: "React" },
  { icon: <SiRedux className="text-purple-500 text-5xl" />, name: "Redux" },
  {
    icon: <SiTailwindcss className="text-sky-400 text-5xl" />,
    name: "Tailwind",
  },
  { icon: <FaNodeJs className="text-green-500 text-5xl" />, name: "Node.js" },
  { icon: <SiMongodb className="text-green-400 text-5xl" />, name: "MongoDB" },
];

// Duplicate the array for seamless infinite scroll
const duplicatedSkills = [...skills, ...skills, ...skills];

export const SkillsComp = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center w-full">
        <p className="text-5xl font-bold">
          <span className="text-[#cb42c3] italic"># </span>Skills
        </p>
        <p className="w-[50%] bg-[#cb42c3] h-1 ml-2"></p>
      </div>
      <div className="w-full overflow-hidden py-6 relative">
        <div className="flex gap-8 animate-scroll">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 min-w-[120px] p-4 bg-gray-800 rounded-xl hover:bg-[#cb42c3]/10 transition"
            >
              {skill.icon}
              <p className="text-gray-300 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
