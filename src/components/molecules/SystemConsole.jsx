import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, ShieldCheck, Zap, Search, Users } from "lucide-react";

const SystemConsole = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Simulate a senior-level traffic ingestion metric
    const baseCount = 12450;
    const localHits = parseInt(localStorage.getItem("site_hits") || "0");
    const newHits = localHits + 1;
    localStorage.setItem("site_hits", newHits.toString());
    setVisitorCount(baseCount + newHits);
  }, []);

  const metrics = [
    { label: "Performance", value: 100, icon: <Zap size={14} />, color: "text-green-500" },
    { label: "Accessibility", value: 100, icon: <ShieldCheck size={14} />, color: "text-blue-500" },
    { label: "Total Hits", value: visitorCount.toLocaleString(), icon: <Users size={14} />, color: "text-yellow-500", isString: true },
    { label: "SEO", value: 100, icon: <Search size={14} />, color: "text-orange-500" },
  ];

  return (
    <div className="mt-20 pt-12 border-t border-white/5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Diagnostic Label */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
            <Activity size={20} className="text-blue-500 animate-pulse" />
          </div>
          <div>
            <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">System Integrity</h4>
            <div className="flex items-center gap-2">
              <span className="text-sm font-display text-white italic">Health Dashboard.v4</span>
              <span className="text-[10px] font-mono text-green-500 uppercase opacity-70">● Stable</span>
            </div>
          </div>
        </div>

        {/* Lighthouse Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center relative group-hover:border-blue-500/20 transition-colors">
                {/* Progress Ring Background */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="24" cy="24" r="21"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-white/5"
                  />
                  <motion.circle
                    cx="24" cy="24" r="21"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="131.9"
                    initial={{ strokeDashoffset: 131.9 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1.5, delay: 0.5 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className={metric.color}
                  />
                </svg>
                <span className={`${metric.isString ? "text-[8px]" : "text-xs"} font-mono font-bold ${metric.color}`}>
                  {metric.value}
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-0.5">{metric.label}</span>
                <div className="flex items-center gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
                  {metric.icon}
                  <span className="text-[9px] font-mono text-gray-400">Audit Pass</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Runtime Context */}
        <div className="hidden lg:block text-right">
          <span className="block text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-2">Build Environment</span>
          <div className="flex items-center justify-end gap-3 text-[10px] font-mono">
            <span className="px-2 py-0.5 bg-blue-900/20 border border-blue-500/20 text-blue-400 rounded">PRODUCTION</span>
            <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-gray-500 rounded">VITE + VERCEL</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SystemConsole;
