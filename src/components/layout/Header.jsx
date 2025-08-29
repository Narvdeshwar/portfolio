import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import navdata from "../../constants/navdata";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Detect scroll for sticky effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ marginTop: 10, width: "80%", opacity: 0, y: -50 }}
      animate={{
        marginTop: isSticky ? 0 : 10,
        width: isSticky ? "95%" : "80%",
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl 
                 bg-white/10 border border-white/20 shadow-lg 
                 rounded-full"
    >
      <div className="flex justify-between items-center w-full px-6 py-3">
        {/* Logo */}
        <div className="flex items-baseline">
          <p className="text-2xl italic font-semibold border-[#cb42c3] border-b-4 rounded-xl">
            &nbsp;Narvdeshwar&nbsp;
          </p>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          {navdata.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="text-white/90 hover:text-[#C778DD] transition-all italic"
            >
              <span className="text-[#cb42c3] font-bold">#</span>
              {item.title}
            </Link>
          ))}

        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-[70px] right-0 bg-slate-800/90 backdrop-blur-xl 
                     border border-white/20 w-[calc(100vw-70px)] h-[calc(100vh-140px)] rounded-lg shadow-lg 
                     p-3 flex flex-col gap-4 md:hidden"
        >
          {navdata.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              onClick={() => setIsOpen(false)}
              className="text-white/90 hover:text-[#C778DD] transition-all italic"
            >
              <span className="text-[#cb42c3] font-bold">#</span>
              {item.title}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}

export default Header;
