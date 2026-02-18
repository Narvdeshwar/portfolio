import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code, Cpu, ChevronRight, Hash, Command } from 'lucide-react';

const TerminalHero = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'comment', content: '# Senior Engineering Lab v2.0.4' },
    { type: 'comment', content: '# Type "help" to see available commands' },
    { type: 'system', content: 'System initialized. All services operational.' },
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const commands = {
    help: () => [
      { type: 'info', content: 'Available commands:' },
      { type: 'info', content: '  whoami    - Display developer profile' },
      { type: 'info', content: '  stats     - System & Project metrics' },
      { type: 'info', content: '  ls        - List engineering projects' },
      { type: 'info', content: '  git log   - Recent repository activity' },
      { type: 'info', content: '  clear     - Clear the terminal screen' },
      { type: 'info', content: '  exit      - Close simulation' },
    ],
    whoami: () => [
      { type: 'output', content: '{' },
      { type: 'output', content: '  "name": "Narvdeshwar",' },
      { type: 'output', content: '  "role": "Senior Backend Engineer",' },
      { type: 'output', content: '  "specialization": ["Distributed Systems", "Cloud Arch"],' },
      { type: 'output', content: '  "motto": "Build systems that scale beyond the hype."' },
      { type: 'output', content: '}' },
    ],
    stats: () => [
      { type: 'output', content: 'TRAFFIC_HUB: 12k/mo requests | UP_TIME: 99.98%' },
      { type: 'output', content: 'ACTIVE_WORKERS: 4 | REDIS_CACHE: Hits: 84% Misses: 16%' },
      { type: 'success', content: 'System Status: OPTIMAL' },
    ],
    ls: () => [
      { type: 'info', content: 'DRW-R--R--  JSPARK AI' },
      { type: 'info', content: 'DRW-R--R--  SaaS IoT Platform' },
      { type: 'info', content: 'DRW-R--R--  Distributed Task Queue' },
      { type: 'info', content: 'DRW-R--R--  Legal Check Calc' },
    ],
    'git log': () => [
      { type: 'comment', content: 'commit ac7f82b (HEAD -> master)' },
      { type: 'output', content: 'Author: Narvdeshwar <dev@main>' },
      { type: 'output', content: 'Date:   Tue Feb 17 23:58:00 2026' },
      { type: 'output', content: '    feat: optimize distributed queue polling mechanism' },
    ],
    clear: () => {
      setHistory([]);
      return [];
    },
    exit: () => [
      { type: 'error', content: 'Simulation cannot be exited. You are the system.' }
    ]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();

    setHistory(prev => [...prev, { type: 'command', content: cmd }]);

    if (commands[cmd]) {
      const result = commands[cmd]();
      setHistory(prev => [...prev, ...result]);
    } else if (cmd !== '') {
      setHistory(prev => [...prev, { type: 'error', content: `sh: command not found: ${cmd}` }]);
    }

    setInput('');
  };

  return (
    <section className="py-16 md:py-24 px-6 relative overflow-hidden bg-[#050505] border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left Side: Technical Context */}
        <div>
          <h2 className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Hash size={14} /> The Lab / Sandbox
          </h2>
          <h3 className="text-4xl md:text-6xl font-display font-medium text-white mb-6 md:mb-8 leading-[1.1]">
            INTERACT WITH MY <br />
            <span className="text-gray-500 italic">SYSTEM ARCHITECTURE.</span>
          </h3>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mb-8 md:mb-10">
            A Senior Engineer doesn't just write code; they manage environments.
            Use the terminal to explore the technical depth behind these projects.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-[10px] md:text-xs font-mono text-gray-600">
            <span className="flex items-center gap-1"><Command size={12} /> SHIFT + ENTER to execute</span>
            <span className="hidden md:block w-1 h-1 bg-gray-800 rounded-full" />
            <span>ROOT ACCESS GRANTED</span>
          </div>
        </div>

        {/* Right Side: Re-engineered Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Terminal Box */}
          <div className="bg-[#0D0D0D] rounded-lg overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            {/* Header */}
            <div className="bg-[#1A1A1A] px-4 py-3 flex justify-between items-center border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]/20 border border-[#ff5f56]/30" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/20 border border-[#ffbd2e]/30" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]/20 border border-[#27c93f]/30" />
              </div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 font-mono">zsh — session_082</div>
            </div>

            {/* Scrollable Area */}
            <div
              ref={scrollRef}
              className="p-6 h-[400px] overflow-y-auto font-mono text-sm space-y-2 custom-scrollbar"
            >
              <AnimatePresence>
                {history.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-3"
                  >
                    {line.type === 'command' && <span className="text-blue-500">➜</span>}
                    <span className={`
                      ${line.type === 'comment' ? 'text-gray-600 italic' : ''}
                      ${line.type === 'command' ? 'text-white font-bold' : ''}
                      ${line.type === 'success' ? 'text-emerald-500' : ''}
                      ${line.type === 'error' ? 'text-rose-500' : ''}
                      ${line.type === 'info' ? 'text-blue-400' : ''}
                      ${line.type === 'output' ? 'text-gray-400' : ''}
                      ${line.type === 'system' ? 'text-amber-500/80 bg-amber-500/5 px-2 rounded-sm' : ''}
                    `}>
                      {line.content}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Input Area */}
              <form onSubmit={handleSubmit} className="flex gap-3">
                <span className="text-blue-500">➜</span>
                <input
                  autoFocus
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="bg-transparent border-none outline-none text-white w-full caret-blue-500"
                  spellCheck="false"
                  autoComplete="off"
                />
              </form>
            </div>
          </div>

          {/* Background Glow */}
          <div className="absolute -inset-4 bg-blue-500/5 blur-3xl -z-10 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalHero;
