import React, { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { GitBranch, Activity, Award } from "lucide-react";

const GithubComp = () => {
  const [totalCommits, setTotalCommits] = useState(0);
  const [startYear, setStartYear] = useState(new Date().getFullYear());
  const [loading, setLoading] = useState(true);
  const username = "Narvdeshwar";

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`);
        const data = await response.json();

        if (data && data.total) {
          const years = Object.keys(data.total).map(Number).sort((a, b) => a - b);
          if (years.length > 0) setStartYear(years[0]);

          const total = Object.values(data.total).reduce((acc, curr) => acc + curr, 0);
          setTotalCommits(total);
        }
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  // Classic GitHub Emerald Green theme
  const customTheme = {
    light: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <section className="py-32 px-6 border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">
              05. / GitHub Activity
            </h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter">
              CODE CONTRIBUTIONS <span className="text-blue-500 text-2xl align-top">05</span>
            </h3>
          </div>

          <div className="flex gap-12 border-l border-white/10 pl-8">
            <div className="flex flex-col">
              <span className="text-4xl font-display text-white">
                {loading ? "..." : totalCommits}
              </span>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">
                Total Commits
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-display text-gray-400">
                {loading ? "..." : startYear}
              </span>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">
                Since Joined
              </span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group p-8 border border-white/5 bg-[#121212] hover:bg-white/[0.02] transition-colors relative overflow-hidden"
        >
          <div className="relative z-10 overflow-x-auto custom-scrollbar">
            <GitHubCalendar
              username={username}
              blockSize={14}
              blockMargin={5}
              fontSize={14}
              theme={customTheme}
              style={{
                color: '#666',
                margin: '0 auto',
              }}
            />
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12  border-white/5">
            <div className="flex items-start gap-4 group/item">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-blue-500 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all">
                <GitBranch size={18} />
              </div>
              <div>
                <span className="block text-sm font-display text-white mb-1 uppercase tracking-wider">Commit Consistency</span>
                <span className="text-xs text-gray-500 leading-relaxed font-mono">Daily builds and production grade iterations.</span>
              </div>
            </div>
            <div className="flex items-start gap-4 group/item">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-blue-500 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all">
                <Activity size={18} />
              </div>
              <div>
                <span className="block text-sm font-display text-white mb-1 uppercase tracking-wider">Growth Mindset</span>
                <span className="text-xs text-gray-500 leading-relaxed font-mono">Learning through public work and open feedback.</span>
              </div>
            </div>
            <div className="flex items-start gap-4 group/item">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-blue-500 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all">
                <Award size={18} />
              </div>
              <div>
                <span className="block text-sm font-display text-white mb-1 uppercase tracking-wider">Maintenance</span>
                <span className="text-xs text-gray-500 leading-relaxed font-mono">Improving stability and legacy optimization.</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-12">
          <a
            href="https://github.com/narvdeshwar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white uppercase tracking-wider transition-colors"
          >
            Explore My Repositories <GitBranch size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GithubComp;
