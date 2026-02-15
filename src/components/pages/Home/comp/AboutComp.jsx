import React from "react";
import { herosecond_v2 as herosecond } from "../../../../assets";
import { motion } from "framer-motion";

function AboutComp() {
  return (
    <section className="py-32 px-6  border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* Left: Sticky Header/Image */}
        <div className="md:sticky md:top-32">
          <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-8">
            04. / About Me
          </h2>
          <div className="relative group max-w-sm">
            {/* Corner Accents */}
            <div className="absolute -top-3 -right-3 w-12 h-12  border-r border-white/20"></div>
            <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b border-l border-white/20"></div>

            <div className="relative overflow-hidden w-full aspect-[4/5] border border-white/10 rounded-sm">
              <img
                src={herosecond}
                alt="Narvdeshwar"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90"></div>
            </div>
          </div>
        </div>

        {/* Right: Typography Content */}
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl md:text-5xl font-display font-medium leading-tight text-white mb-8">
              I build systems that work as <span className="text-gray-500">beautifully</span> as they look.
            </h3>

            <div className="space-y-8 text-lg text-gray-400 font-light leading-relaxed">
              <p>
                Hello, I’m <strong className="text-white font-medium">Narvdeshwar</strong>. I’m a software developer with over <strong className="text-white font-medium">3 years</strong> of experience, specializing in designing scalable backends and fluid frontend experiences.
              </p>
              <p>
                My approach to engineering is rooted in <strong className="text-white font-medium">precision</strong> and <strong className="text-white font-medium">simplicity</strong>. Whether I'm architecting a microservice in Go or refining a UI component in React, I strive for code that is clean, maintainable, and performant.
              </p>
              <p>
                Currently, I'm focused on deep-diving into <strong className="text-white font-medium">Cloud Native</strong> technologies and exploring the intersections of design and logic.
              </p>
            </div>
          </motion.div>

          {/* Stats / Quick Facts */}
          <div className="grid grid-cols-2 gap-8 mt-8  border-white/10 pt-8">
            <div>
              <span className="block text-4xl font-display text-white mb-2">3+</span>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Years Experience</span>
            </div>
            <div>
              <span className="block text-4xl font-display text-white mb-2">15+</span>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Projects Completed</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutComp;
