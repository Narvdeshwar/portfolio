import { motion } from "framer-motion";
import { GitPullRequest, GitCommit, Users, ExternalLink } from "lucide-react";
import projectsData from "../../../../constants/projectData";

const OSSImpact = () => {
  // Get top 3 engineering projects based on activity/priority
  const topRepos = projectsData
    .filter(p => p.category === 'engineering')
    .slice(-3) // The last ones added are usually the ones we just identified as top impact
    .reverse();

  return (
    <section className="py-24 px-6 border-b border-white/5 bg-[#080808]">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
          <div className="max-w-xl">
            <h2 className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
              Live Engineering Pulse
            </h2>
            <h3 className="text-4xl md:text-6xl font-display font-medium text-white leading-[1.1]">
              MAXIMUM COMMIT <br />
              <span className="text-gray-500 italic">IMPACT ARCHIVE.</span>
            </h3>
          </div>
          <div className="flex gap-10 border-l border-white/10 pl-10">
            <div>
              <span className="block text-3xl font-display text-white italic">1.2k+</span>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Global Commits</span>
            </div>
            <div>
              <span className="block text-3xl font-display text-white italic">18</span>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Active Repos</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topRepos.map((repo, index) => (
            <motion.div
              key={repo.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group p-8 bg-[#0D0D0D] border border-white/5 rounded-2xl hover:border-blue-500/40 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <GitCommit size={20} />
                </div>
                <a
                  href={repo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-white/5 text-gray-500 hover:text-white hover:bg-white/5 transition-all"
                >
                  <ExternalLink size={14} />
                </a>
              </div>

              <h4 className="text-xl font-display text-white mb-2 group-hover:text-blue-400 transition-colors uppercase italic tracking-tight">
                {repo.title}
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-2">
                {repo.description}
              </p>

              <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <GitPullRequest size={12} className="text-gray-600" />
                  <span className="text-[10px] font-mono text-gray-400">{repo.stats?.throughput || repo.stats?.stars || 'Active'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-[10px] font-mono text-gray-400 capitalize">{repo.stats?.status}</span>
                </div>
              </div>

              {/* Decorative Number */}
              <div className="absolute bottom-4 right-8 font-display text-7xl text-white/[0.02] pointer-events-none group-hover:text-blue-500/[0.03] transition-colors font-bold">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OSSImpact;
