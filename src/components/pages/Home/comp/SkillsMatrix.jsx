import { useState } from "react";
import {
  SiGo, SiReact, SiRedux, SiTailwindcss, SiPostgresql, SiRedis,
  SiAmazon, SiGoogle, SiDocker, SiRabbitmq, SiGit,
  SiPostman, SiVite, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiNodedotjs, SiMongodb, SiShadcnui,
  SiKubernetes, SiGithubactions, SiGrafana, SiPrometheus
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const skillMatrix = [
  {
    id: "backend",
    label: "Backend & Systems",
    skills: [
      { name: "Golang", icon: <SiGo />, level: 95, projects: 8, color: "#00ADD8" },
      { name: "Node.js", icon: <SiNodedotjs />, level: 85, projects: 12, color: "#339933" },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 90, projects: 15, color: "#4169E1" },
      { name: "Redis", icon: <SiRedis />, level: 80, projects: 6, color: "#DC382D" },
      { name: "RabbitMQ", icon: <SiRabbitmq />, level: 75, projects: 4, color: "#FF6600" },
      { name: "MongoDB", icon: <SiMongodb />, level: 85, projects: 10, color: "#47A248" },
    ]
  },
  {
    id: "frontend",
    label: "Frontend & UI",
    skills: [
      { name: "React", icon: <SiReact />, level: 95, projects: 20, color: "#61DAFB" },
      { name: "TypeScript", icon: <SiTypescript />, level: 90, projects: 18, color: "#3178C6" },
      { name: "Tailwind", icon: <SiTailwindcss />, level: 95, projects: 25, color: "#06B6D4" },
      { name: "Redux", icon: <SiRedux />, level: 85, projects: 10, color: "#764ABC" },
      { name: "Next.js", icon: <SiVite />, level: 80, projects: 5, color: "#FFFFFF" },
      { name: "Shadcn UI", icon: <SiShadcnui />, level: 90, projects: 12, color: "#FFFFFF" },
    ]
  },
  {
    id: "cloud",
    label: "Cloud & Infrastructure",
    skills: [
      { name: "AWS", icon: <SiAmazon />, level: 80, projects: 6, color: "#FF9900" },
      { name: "Docker", icon: <SiDocker />, level: 90, projects: 12, color: "#2496ED" },
      { name: "K8s", icon: <SiKubernetes />, level: 70, projects: 3, color: "#326CE5" },
      { name: "CI/CD", icon: <SiGithubactions />, level: 85, projects: 10, color: "#2088FF" },
      { name: "Monitoring", icon: <SiGrafana />, level: 75, projects: 4, color: "#F46800" },
    ]
  }
];

const SkillsMatrix = () => {
  const [activeTab, setActiveTab] = useState(skillMatrix[0].id);

  return (
    <section className="py-20 md:py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 md:mb-20">
          <div>
            <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">03. / Engineering Stack</h2>
            <h3 className="text-4xl md:text-6xl font-display font-medium text-white max-w-2xl leading-[1.1]">
              TECHNICAL <span className="text-blue-500 italic">COCKPIT.</span>
            </h3>
          </div>

          <div className="w-full md:w-auto overflow-x-auto no-scrollbar pb-2 md:pb-0">
            <div className="flex bg-white/5 p-1 rounded-full border border-white/10 min-w-max">
              {skillMatrix.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 md:px-6 py-2 rounded-full text-[10px] md:text-xs font-mono uppercase tracking-widest transition-all duration-300 relative ${activeTab === tab.id ? "text-black" : "text-gray-500 hover:text-white"
                    }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-white"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {skillMatrix.find(t => t.id === activeTab).skills.map((skill, index) => (
              <motion.div
                key={`${activeTab}-${skill.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative bg-[#0D0D0D] border border-white/5 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500"
              >
                {/* Skill Icon & Name */}
                <div className="flex items-start justify-between mb-8">
                  <div
                    className="text-4xl transition-transform duration-500 group-hover:scale-110"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-1">Projects</span>
                    <span className="text-xl font-display text-white">{skill.projects}+</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <h4 className="text-lg font-display text-white group-hover:text-blue-400 transition-colors uppercase">{skill.name}</h4>
                    <span className="text-xs font-mono text-gray-500">{skill.level}% Proficiency</span>
                  </div>

                  {/* Level Bar */}
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-blue-500"
                    />
                  </div>
                </div>

                {/* Ambient Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-2xl pointer-events-none" style={{ backgroundColor: skill.color }} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default SkillsMatrix;
