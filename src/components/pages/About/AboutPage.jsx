import { motion } from "framer-motion";
import { herosecond } from "../../../assets";

const experiences = [
  {
    year: "Nov 2024 - Present",
    duration: "1 yr 3 mos",
    role: "Software Developer",
    company: "Xenelsoft Technologies",
    desc: "Building BI dashboards for NCRB and SaaS IoT platforms using Go and React. Optimized PostgreSQL/Redis for high-volume sensor data."
  },
  {
    year: "Dec 2022 - Nov 2024",
    duration: "1 yr 11 mos",
    role: "Software Engineer",
    company: "GlobalLogic Inc.",
    desc: "Designed secure OTP authentication and OCR document intelligence pipelines. Improved text extraction to 98% accuracy."
  }
];

const AboutPage = () => {
  return (
    <section className="pt-40 pb-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20 border-b border-white/10 pb-8">
          <h1 className="text-[10vw] md:text-[8vw] leading-[0.85] font-bold text-white tracking-tighter">
            PROFILE
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

          {/* Left Column: Image & Bio */}
          <div className="md:col-span-5 flex flex-col gap-10">
            <div className="relative overflow-hidden w-full aspect-[4/5] bg-neutral-900">
              <img
                src={herosecond}
                alt="Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div>
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                I'm <span className="text-white font-medium">Narvdeshwar</span>, a creative developer based in India. I combine technical precision with design sensibility to create digital products that stand out.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                <a
                  href="https://www.linkedin.com/in/narvdeshwar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
                >
                  <h4 className="text-2xl font-display text-white font-bold mb-1 group-hover:text-blue-400 transition-colors">1.2k+</h4>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Linked Followers</span>
                </a>

                <a
                  href="https://github.com/Narvdeshwar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
                >
                  <h4 className="text-2xl font-display text-white font-bold mb-1 group-hover:text-blue-400 transition-colors">6+</h4>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Github Followers</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/narvdeshwar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
                >
                  <h4 className="text-2xl font-display text-white font-bold mb-1 group-hover:text-blue-400 transition-colors">850+</h4>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Linked Views</span>
                </a>

                <a
                  href="https://github.com/Narvdeshwar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
                >
                  <h4 className="text-2xl font-display text-white font-bold mb-1 group-hover:text-blue-400 transition-colors">300+</h4>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Github Views</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Details & Experience */}
          <div className="md:col-span-7 flex flex-col gap-20">

            {/* Intro */}
            <div className="space-y-6 text-gray-400 font-mono text-sm leading-relaxed max-w-xl">
              <p>
                With over 3 years of experience, I specialize in building high-performance backend systems and scalable microservices. My core expertise lies in <strong className="text-white">Golang</strong> and the broader cloud-native ecosystem.
              </p>
              <p>
                I architect distributed systems using <strong className="text-white">RESTful APIs, gRPC, and message brokers like RabbitMQ</strong>. On the frontend, I build responsive interfaces with React and Tailwind. I am deeply focused on concurrency patterns, database optimization (PostgreSQL/Redis), and CI/CD automation on AWS and GCP.
              </p>
            </div>

            {/* Experience List */}
            <div>
              <h3 className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-8">
                Experience
              </h3>
              <div className="flex flex-col border-t border-white/10">
                {experiences.map((exp, index) => (
                  <div key={index} className="py-8 border-b border-white/10 grid grid-cols-1 sm:grid-cols-12 gap-4">
                    <div className="sm:col-span-3 font-mono text-sm text-gray-500 flex flex-col justify-between items-start sm:items-start">
                      <span className="mb-2">{exp.year}</span>
                      <span className="text-xs text-blue-500 bg-blue-500/10 px-2 py-1 rounded inline-block">{exp.duration}</span>
                    </div>
                    <div className="sm:col-span-9">
                      <h4 className="text-xl font-display text-white mb-2">{exp.role}</h4>
                      <div className="text-sm font-mono text-gray-400 mb-4">{exp.company}</div>
                      <p className="text-gray-500 font-light leading-relaxed">
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services / What I do */}
            <div>
              <h3 className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-8">
                Technical Focus
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Golang & Microservices", "Distributed Systems", "Cloud Infrastructure (AWS/GCP)", "Full Stack Web (React/Node)"].map((service, i) => (
                  <div key={i} className="p-4 border border-white/10 hover:bg-white/5 transition-colors text-white font-display text-lg">
                    {service}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPage;
