import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const MagneticButton = ({ href = "mailto:narvdeshwar@gmail.com", text = "Get In Touch" }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.a
      href={href}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative group inline-flex items-center gap-8 bg-white px-10 py-6 rounded-full overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-blue-500 origin-left z-0 pointer-events-none"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />

      <span className="relative z-20 text-black group-hover:text-black font-display font-medium text-lg md:text-2xl transition-colors duration-200 pointer-events-none">
        {text}
      </span>

      <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300 overflow-hidden">
        <motion.div
          animate={hovered ? { x: 40, opacity: 0 } : { x: 0, opacity: 1 }}
          className="absolute"
        >
          <Mail size={20} className="text-white group-hover:text-black transition-colors" />
        </motion.div>
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={hovered ? { x: 0, opacity: 1 } : { x: -40, opacity: 0 }}
          className="absolute rounded-full size-20 flex justify-center items-center border p-3 bg-gray-300"
        >
          <ArrowRight size={20} className="text-black" />
        </motion.div>
      </div>
    </motion.a>
  );
};

export default MagneticButton;
