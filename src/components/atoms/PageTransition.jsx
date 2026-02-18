import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        className="relative z-10"
      >
        {children}
      </motion.div>

      {/* Cinematic Shutter Overlay */}
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col pointer-events-none"
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Top Shutter */}
        <motion.div
          variants={{
            initial: { scaleY: 0 },
            animate: { scaleY: 0 },
            exit: {
              scaleY: 1,
              transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
            }
          }}
          className="flex-1 bg-[#050505] origin-top border-b border-white/5"
        />

        {/* Bottom Shutter */}
        <motion.div
          variants={{
            initial: { scaleY: 0 },
            animate: { scaleY: 0 },
            exit: {
              scaleY: 1,
              transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
            }
          }}
          className="flex-1 bg-[#050505] origin-bottom border-t border-white/5"
        />

        {/* Reveal Shutter (Entry Animation) */}
        <motion.div
          variants={{
            initial: { scaleY: 1 },
            animate: {
              scaleY: 0,
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
            }
          }}
          className="absolute inset-0 bg-[#050505] origin-center z-[101]"
        />
      </motion.div>
    </div>
  );
};

export default PageTransition;
