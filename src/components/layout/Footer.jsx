import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { Github, Linkedin, Twitter } from "lucide-react";
import socialUrl from "../../constants/socialurls";
import navdata from "../../constants/navdata";
import MagneticButton from "../atoms/MagneticButton";
import SocialLink from "../atoms/SocialLink";
import SystemConsole from "../molecules/SystemConsole";

function Footer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="pt-32 pb-12 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      {/* Background Text Overlay */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden select-none opacity-5">
        <h2 className="text-[20vw] font-display font-black whitespace-nowrap -translate-x-10 translate-y-20">
          CREATIVE <span className="text-blue-500">DEVELOPER</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main CTA */}
        <div className="mb-24 flex flex-col md:flex-row items-center justify-between gap-12 border-b border-white/5 pb-24">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6 flex items-center justify-center md:justify-start gap-2">
              <span className="w-8 h-px bg-white/20" />
              Available for Projects
            </h3>
            <h2 className="text-4xl md:text-8xl font-display font-medium text-white leading-[0.9] tracking-tighter">
              LET'S BUILD <br />
              <span className="text-blue-500">SOMETHING</span> REAL.
            </h2>
          </div>

          <div className="flex flex-col items-center gap-6">
            <MagneticButton />
            <p className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.2em] animate-pulse">
              Click to initiate transmission
            </p>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 pb-20 border-b border-white/5">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="text-white font-display font-bold text-2xl tracking-tight mb-6 block">
                NARVDESHWAR<span className="text-blue-500">.</span>
              </Link>
              <p className="text-gray-500 max-w-sm text-sm md:text-base leading-relaxed">
                Senior Engineering perspective blended with visual excellence. Crafting robust backend architectures and immersive frontend experiences.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <SocialLink href={socialUrl.github} icon={<Github size={18} />} />
              <SocialLink href={socialUrl.linkedin} icon={<Linkedin size={18} />} />
              <SocialLink href={socialUrl.twitter} icon={<Twitter size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-8">Navigation</h4>
            <ul className="space-y-4">
              {navdata.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.link}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors uppercase tracking-wider text-sm"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-blue-500 transition-all duration-300" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Time */}
          <div className="md:col-span-4 lg:pl-12">
            <h4 className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-8">Details</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-blue-500 shrink-0" />
                <div>
                  <span className="block text-gray-400 text-sm">Location</span>
                  <span className="text-white text-lg font-display">New Delhi, India</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-5 h-5 rounded-full border border-blue-500/30 flex items-center justify-center p-1 shrink-0">
                  <div className="w-full h-full bg-blue-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <span className="block text-gray-400 text-sm">Local Time</span>
                  <span className="text-white text-lg font-display font-mono">{time} <span className="text-xs text-gray-500 font-sans ml-1">(IST)</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SystemConsole />

        {/* Legal & Version */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">&copy; 2026</span>
            <span className="text-xs font-mono text-gray-600 uppercase tracking-widest hover:text-white cursor-pointer transition-colors underline decoration-white/10 underline-offset-4">Legal Notice</span>
          </div>

          <div className="text-[10px] font-mono text-gray-800 uppercase tracking-[0.3em]">
            V2.0 // Senior Engineering Lab
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
