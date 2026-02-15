import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
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

  return (
    <section className="py-24 px-6 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">
              05. / GitHub Activity
            </h2>
            <p className="text-3xl md:text-4xl font-display text-white">
              My open-source journey and contribution history.
            </p>
          </div>

          <div className="flex gap-12 border-l border-white/10 pl-8">
            <div className="flex flex-col">
              <span className="text-3xl font-display text-blue-500">
                {loading ? "..." : totalCommits}
              </span>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">
                Total Commits
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-display text-purple-500">
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
          className="glass-panel p-8 rounded-sm border border-white/5 relative overflow-hidden group"
        >
          {/* Subtle Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full" />

          <div className="relative z-10 overflow-x-auto">
            <GitHubCalendar
              username={username}
              blockSize={12}
              blockMargin={4}
              fontSize={12}
              colorScheme="dark"
              style={{
                color: '#888',
                margin: '0 auto',
              }}
            />
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/5">
            <div className="flex items-center gap-4 text-gray-400 group/item hover:text-white transition-colors">
              <GitBranch className="text-blue-500" size={20} />
              <div>
                <span className="block text-sm font-medium">Commit Consistency</span>
                <span className="text-xs font-mono text-gray-600">Daily builds and iterations</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-400 group/item hover:text-white transition-colors">
              <Activity className="text-purple-500" size={20} />
              <div>
                <span className="block text-sm font-medium">Growth Mindset</span>
                <span className="text-xs font-mono text-gray-600">Learning through public work</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-400 group/item hover:text-white transition-colors">
              <Award className="text-emerald-500" size={20} />
              <div>
                <span className="block text-sm font-medium">Active Maintenance</span>
                <span className="text-xs font-mono text-gray-600">Improving legacy codebases</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubComp;
