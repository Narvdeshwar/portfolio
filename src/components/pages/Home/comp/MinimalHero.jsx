import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Hero_v2 as Hero } from "../../../../assets";

const LiveClock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZoneName: 'short'
      };
      setTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span>{time}</span>;
};

const MinimalHero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between px-6 pt-32 pb-6 overflow-hidden">
      {/* Background Grid is handled globally by .bg-grid-pattern in index.css */}

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 z-10 flex-grow">

        {/* Top Label */}
        <div className="md:col-span-12 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            Available for work 2026
          </motion.div>
        </div>

        {/* Heavy Heading */}
        <div className="md:col-span-12">
          <h1 className="text-[12vw] leading-[0.85] font-bold tracking-tighter text-white/90">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ ease: [0.33, 1, 0.68, 1], duration: 1, delay: 0.4 }}
              className="overflow-hidden"
            >
              <span className="block reveal-text text-gray-500">SOFTWARE</span>
            </motion.div>
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ ease: [0.33, 1, 0.68, 1], duration: 1, delay: 0.5 }}
              className="overflow-hidden"
            >
              <span className="block reveal-text">DEVELOPER</span>
            </motion.div>
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-4 flex items-center gap-4 text-[10px] font-mono text-gray-600 uppercase tracking-[0.5em]"
          >
            Backend Architecture / Distributed Systems / Cloud Native
          </motion.div>
        </div>

        {/* Hero Image / Left Column */}
        <div className="md:col-span-5 mt-12 md:mt-24 hidden md:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="relative group aspect-[4/5] max-w-sm"
          >
            {/* Decorative engineering lines */}
            <div className="absolute -top-4 -left-4 w-20 h-20  border-l border-blue-500/30"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b border-r border-blue-500/30"></div>

            <div className="relative overflow-hidden w-full h-full border border-white/5 rounded-sm">
              <img
                src={Hero}
                className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                alt="Hero"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>

              {/* Floating Label */}
              <div className="absolute bottom-6 left-6 font-mono text-[10px] text-gray-500 uppercase tracking-widest vertical-rl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                EST. 2026 / SYS_ARCH
              </div>
            </div>
          </motion.div>
        </div>

        {/* Intro Text / Right Column */}
        <div className="md:col-span-6 md:col-start-7 mt-12 md:mt-24 mb-12 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed text-balance"
          >
            Crafting digital experiences where <span className="text-white font-normal">engineering</span> meets <span className="text-white font-normal">elegance</span>.
            I build scalable applications with a focus on performance and fluid interaction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12 flex flex-col sm:flex-row gap-6"
          >
            <Link to="/work" className="px-8 py-4 bg-white text-black font-medium text-sm tracking-wide hover:bg-gray-200 transition-colors uppercase text-center">
              View Projects
            </Link>
            <Link to="/aboutme" className="px-8 py-4 border border-white/20 text-white font-medium text-sm tracking-wide hover:bg-white/5 transition-colors uppercase text-center">
              Read About Me
            </Link>
          </motion.div>
        </div>

      </div>

      {/* Decorative Footer in Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="max-w-7xl mx-auto w-full flex justify-between items-end  border-white/10 pt-6 z-10"
      >
        <div className="text-xs text-gray-600 font-mono">
          LOCAL TIME <br />
          <LiveClock />
        </div>
        <div className="text-xs text-gray-600 font-mono text-right">
          SCROLL TO EXPLORE <br />
          ↓
        </div>
      </motion.div>
    </section>
  );
};

export default MinimalHero;
