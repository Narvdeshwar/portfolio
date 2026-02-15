import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, ChevronRight } from 'lucide-react';

const TerminalHero = () => {
  const [lines, setLines] = useState([
    { type: 'comment', content: '// Initializing development environment...' },
    { type: 'command', content: 'go run main.go' },
    { type: 'output', content: 'Building scalable architecture...' },
    { type: 'success', content: '✓ System operational' },
  ]);

  const [currentCommand, setCurrentCommand] = useState('');

  // Effect to simulate typing a new command after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      addCommand('whoami');
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const addCommand = (cmd) => {
    let i = 0;
    const interval = setInterval(() => {
      setCurrentCommand(cmd.substring(0, i + 1));
      i++;
      if (i > cmd.length) {
        clearInterval(interval);
        setTimeout(() => {
          setLines(prev => [...prev, { type: 'command', content: cmd }]);
          setCurrentCommand('');
          handleCommandOutput(cmd);
        }, 400);
      }
    }, 80);
  };

  const handleCommandOutput = (cmd) => {
    if (cmd === 'whoami') {
      const output = [
        { type: 'object-key', content: 'Name:', value: ' "Narvdeshwar"' },
        { type: 'object-key', content: 'Role:', value: ' "Senior Backend Engineer"' },
        { type: 'object-key', content: 'Exp:', value: ' ">3 Years"' },
        { type: 'object-key', content: 'Stack:', value: ' ["Go", "Docker", "K8s"]' }
      ];

      output.forEach((line, index) => {
        setTimeout(() => {
          setLines(prev => [...prev, line]);
        }, (index + 1) * 200);
      });
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center relative overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 blob-blue opacity-40"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 blob-purple opacity-40"></div>
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>

      <div className="z-10 w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Text Content */}
        <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-blue-400 text-xs font-mono mb-6 border-blue-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for hire
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
              Engineering <br />
              <span className="gradient-title">Pixel-Perfect</span> <br />
              Systems.
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
              Bridging the gap between complex <span className="text-white font-medium">Backend Architectures</span> and intuitive <span className="text-white font-medium">User Interfaces</span>.
            </p>

            <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2">
                View Projects <ChevronRight size={18} />
              </button>
              <button className="px-8 py-4 glass-panel text-white font-semibold rounded-full hover:bg-white/5 transition-all flex items-center gap-2">
                <Code size={18} /> Contact Me
              </button>
            </div>
          </motion.div>
        </div>

        {/* Improved Modern Terminal */}
        <motion.div
          className="order-1 lg:order-2 w-full animate-float"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass-panel rounded-xl overflow-hidden shadow-2xl font-mono text-sm sm:text-base border border-white/10 relative">

            {/* Window Controls */}
            <div className="bg-white/5 px-4 py-3 flex items-center gap-4 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="flex-1 text-center text-xs text-gray-500 font-sans">
                narv @ main — -zsh
              </div>
              <div className="w-10"></div> {/* Spacer for centering */}
            </div>

            {/* Terminal Content */}
            <div className="p-6 md:p-8 min-h-[340px] text-gray-300 space-y-3 bg-black/20">
              {lines.map((line, idx) => (
                <div key={idx} className="break-words">
                  {line.type === 'comment' && <span className="text-gray-500 italic">{line.content}</span>}

                  {line.type === 'command' && (
                    <div className="flex gap-2 text-white">
                      <span className="text-blue-400">➜</span>
                      <span className="text-pink-400">~</span>
                      <span>{line.content}</span>
                    </div>
                  )}

                  {line.type === 'success' && <span className="text-emerald-400">{line.content}</span>}

                  {line.type === 'object-key' && (
                    <div className="pl-4">
                      <span className="text-purple-400">{line.content}</span>
                      <span className="text-yellow-100">{line.value}</span>
                    </div>
                  )}

                  {line.type === 'output' && <span className="text-gray-400">{line.content}</span>}
                </div>
              ))}

              <div className="flex gap-2 items-center text-white">
                <span className="text-blue-400">➜</span>
                <span className="text-pink-400">~</span>
                <span>{currentCommand}</span>
                <span className="w-2 h-5 bg-gray-500 animate-pulse"></span>
              </div>
            </div>
          </div>

          {/* Floating Element behind/near terminal */}
          <div className="absolute -z-10 -bottom-10 -right-10 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default TerminalHero;
