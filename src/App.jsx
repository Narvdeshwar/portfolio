import { lazy, Suspense, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import CustomCursor from "./components/atoms/CustomCursor";
import PageTransition from "./components/atoms/PageTransition";
import Lenis from "lenis";

// Lazy Loaded Pages
const Homepage = lazy(() => import("./components/pages/Home/Homepage"));
const WorkPage = lazy(() => import("./components/pages/Work/WorkPage"));
const AboutPage = lazy(() => import("./components/pages/About/AboutPage"));
const ContactPage = lazy(() => import("./components/pages/Contact/ContactPage"));
const ProjectDetailsPage = lazy(() => import("./components/pages/ProjectDetails/ProjectDetailsPage"));

// Loading Component
const PageLoading = () => (
  <div className="fixed inset-0 bg-[#050505] flex items-center justify-center z-[100]">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center gap-4"
    >
      <div className="w-12 h-12 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
      <span className="text-[10px] font-mono uppercase tracking-[.3em] text-gray-500 italic">Initializing Systems</span>
    </motion.div>
  </div>
);

const SmoothScroll = ({ children }) => {
  const { pathname } = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Handle Scroll to Top on Route Change and Initial Mount
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    // Also force browser scroll to top just in case
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

// Liquid Ambient Background
const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ willChange: "transform" }}
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[80px]"
      />
      <motion.div
        animate={{
          x: [0, -40, 40, 0],
          y: [0, 60, -60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
        style={{ willChange: "transform" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[100px]"
      />
    </div>
  )
}

function App() {
  const location = useLocation();

  return (
    <SmoothScroll>
      <div className="main mx-auto relative text-gray-200 min-h-screen flex flex-col">
        <div className="bg-grid-pattern" />
        <LiquidBackground />
        <CustomCursor />

        <Header />

        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Suspense fallback={<PageLoading />}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Homepage /></PageTransition>} />
                <Route path="/work" element={<PageTransition><WorkPage /></PageTransition>} />
                <Route path="/work/:slug" element={<PageTransition><ProjectDetailsPage /></PageTransition>} />
                <Route path="/aboutme" element={<PageTransition><AboutPage /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
