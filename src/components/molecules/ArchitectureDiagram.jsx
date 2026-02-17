import React from 'react';
import { motion } from 'framer-motion';

const ArchitectureDiagram = ({ architecture }) => {
  if (!architecture || !architecture.nodes) return null;

  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#0d1117]/50 rounded-xl border border-white/5 overflow-hidden p-4 md:p-8 shadow-2xl group/diag">
      {/* Local Grid Background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {architecture.connections.map((conn, idx) => {
          const fromNode = architecture.nodes.find(n => n.id === conn.from);
          const toNode = architecture.nodes.find(n => n.id === conn.to);
          if (!fromNode || !toNode) return null;

          return (
            <React.Fragment key={`conn-${idx}`}>
              {/* Connection Path */}
              <motion.line
                x1={fromNode.x} y1={fromNode.y} x2={toNode.x} y2={toNode.y}
                stroke="rgb(59, 130, 246)"
                strokeWidth="0.5"
                strokeOpacity="0.2"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
              />

              {/* Data Flow Dot */}
              <circle r="0.8" fill="#60a5fa" filter="url(#glow)">
                <animateMotion
                  dur={`${2 + Math.random()}s`}
                  repeatCount="indefinite"
                  path={`M ${fromNode.x} ${fromNode.y} L ${toNode.x} ${toNode.y}`}
                />
              </circle>
            </React.Fragment>
          );
        })}
      </svg>

      {/* Nodes */}
      <div className="relative w-full h-full">
        {architecture.nodes.map((node, idx) => (
          <motion.div
            key={node.id}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', damping: 12, delay: idx * 0.1 }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <div className={`
              px-4 py-2 rounded-lg border backdrop-blur-md shadow-xl flex flex-col items-center gap-1
              ${node.type === 'service' ? 'bg-blue-500/10 border-blue-500/30' :
                node.type === 'queue' ? 'bg-purple-500/10 border-purple-500/30' :
                  node.type === 'db' ? 'bg-green-500/10 border-green-500/30' :
                    'bg-gray-800/50 border-white/10'}
            `}>
              <span className={`text-[10px] font-mono uppercase tracking-[0.2em] 
                ${node.type === 'service' ? 'text-blue-400' :
                  node.type === 'queue' ? 'text-purple-400' :
                    node.type === 'db' ? 'text-green-400' : 'text-gray-500'}
              `}>
                {node.type}
              </span>
              <span className="text-xs md:text-sm font-bold text-white whitespace-nowrap">
                {node.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
