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
      { icon: <SiGo />, name: "Golang" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiHtml5 />, name: "HTML5" },
      { icon: <SiCss3 />, name: "CSS3" },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiRedis />, name: "Redis" },
      { icon: <SiRabbitmq />, name: "RabbitMQ" },
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { icon: <SiReact />, name: "React" },
      { icon: <SiShadcnui />, name: "Shadcn UI" },
      { icon: <SiRedux />, name: "Redux" },
      { icon: <SiTailwindcss />, name: "Tailwind" },
      { icon: <SiVite />, name: "Vite" },
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { icon: <SiAmazon />, name: "AWS" },
      { icon: <SiGoogle />, name: "Google Cloud" },
      { icon: <SiDocker />, name: "Docker" },
      { icon: <SiGit />, name: "Git" },
      { icon: <SiPostman />, name: "Postman" },
    ]
  }
];

export const SkillsComp = () => {
  return (
    <section className="py-24 px-6 border-t border-white/5">
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
                    className="group bg-[#121212] p-8 flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-colors"
                  >
                    <div className="text-3xl text-gray-500 group-hover:text-white transition-colors duration-500">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest group-hover:text-blue-500 transition-colors">
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
