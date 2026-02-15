import {
  SiGo, SiReact, SiRedux, SiTailwindcss, SiPostgresql, SiRedis,
  SiAmazon, SiGoogle, SiDocker, SiRabbitmq, SiGit,
  SiPostman, SiVite, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiNodedotjs, SiMongodb, SiShadcnui
} from "react-icons/si";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { icon: <SiGo />, name: "Golang", color: "#00ADD8" },
      { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
      { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
      { icon: <SiHtml5 />, name: "HTML5", color: "#E34F26" },
      { icon: <SiCss3 />, name: "CSS3", color: "#1572B6" },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { icon: <SiNodedotjs />, name: "Node.js", color: "#339933" },
      { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1" },
      { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
      { icon: <SiRedis />, name: "Redis", color: "#DC382D" },
      { icon: <SiRabbitmq />, name: "RabbitMQ", color: "#FF6600" },
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { icon: <SiReact />, name: "React", color: "#61DAFB" },
      { icon: <SiShadcnui />, name: "Shadcn UI", color: "#FFFFFF" },
      { icon: <SiRedux />, name: "Redux", color: "#764ABC" },
      { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4" },
      { icon: <SiVite />, name: "Vite", color: "#646CFF" },
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { icon: <SiAmazon />, name: "AWS", color: "#FF9900" },
      { icon: <SiGoogle />, name: "Google Cloud", color: "#4285F4" },
      { icon: <SiDocker />, name: "Docker", color: "#2496ED" },
      { icon: <SiGit />, name: "Git", color: "#F05032" },
      { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
    ]
  }
];

export const SkillsComp = () => {
  return (
    <section className="py-24 px-6  border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">
            03. / Tech Stack
          </h2>
          <p className="max-w-xl text-3xl font-display text-white">
            The tools I use to build scalable, future-proof solutions.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-lg font-display text-gray-400 mb-6 pl-2 border-l-2 border-blue-500/50">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-px bg-white/5 overflow-hidden rounded-sm border border-white/5">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group bg-[#121212] p-8 flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-all duration-500 relative overflow-hidden"
                  >
                    {/* Hover Glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                      style={{ backgroundColor: skill.color }}
                    ></div>

                    <div
                      className="text-3xl transition-all duration-500 transform group-hover:scale-110 group-hover:filter group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
