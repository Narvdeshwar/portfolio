import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import navdata from "../../constants/navdata";

import { Resume } from "../../assets";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#121212]/90 backdrop-blur-lg border-b border-white/10 py-4 shadow-lg"
          : "bg-transparent py-8"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="text-white font-display font-bold text-xl tracking-tight z-50">
            NARVDESHWAR<span className="text-blue-500">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10 items-center">
            {navdata.map((item, index) => (
              <NavLink
                to={item.link}
                key={index}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors uppercase tracking-wider relative ${isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.title}
                    {isActive && (
                      <motion.div
                        layoutId="nav-dot"
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-white/20 rounded-full text-xs font-mono uppercase hover:bg-white hover:text-black transition-all"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white z-50"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#121212] z-40 flex flex-col items-center justify-center gap-8"
          >
            {navdata.map((item, index) => (
              <NavLink
                to={item.link}
                key={index}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-3xl font-display font-bold uppercase transition-colors ${isActive ? "text-blue-500" : "text-white hover:text-blue-500"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
