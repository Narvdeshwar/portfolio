import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Homepage from "./components/pages/Home/Homepage";

function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    let frameId;
    function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return children;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#000000] text-[#FFFFFF] flex flex-col selection:bg-[#4BE1C4] selection:text-[#000000]">
        <ScrollToTop />
        <Header />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
