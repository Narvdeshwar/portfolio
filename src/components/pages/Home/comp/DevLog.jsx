import { motion } from "framer-motion";
import { devLogEntries } from "../../../../constants/devLogData";
import { Terminal, Pin } from "lucide-react";

const DevLog = () => {
  return (
    <section className="py-32 px-6 border-b border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Terminal size={14} />
              The Engineering Vault
            </h2>
            <h3 className="text-4xl md:text-6xl font-display font-medium text-white leading-none italic tracking-tighter">
              TECHNICAL <span className="text-gray-500">INSIGHTS.</span>
            </h3>
            <p className="mt-8 text-gray-500 text-sm md:text-base font-mono leading-relaxed max-w-xl">
              Thoughts on architecture, scalability, and solving the complex problems that standard tutorials don't cover.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {devLogEntries.map((log, index) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">{log.date} // {log.topic}</span>
                <Pin size={14} className="text-gray-700" />
              </div>

              <h4 className="text-xl font-display text-white mb-6 group-hover:text-blue-400 transition-colors">
                {log.title}
              </h4>

              <p className="text-sm text-gray-500 leading-relaxed font-mono mb-8">
                "{log.content}"
              </p>

              <div className="pt-6 border-t border-white/5">
                <span className="text-[10px] font-mono text-blue-500/70 uppercase tracking-widest">
                  {log.impact}
                </span>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-blue-500/10 rounded-bl-[60px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevLog;
