import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "../../../atoms/Container";
import Button from "../../../atoms/Button";
import WorldMapGraphic from "./WorldMapGraphic";
import PerspectiveCards from "./PerspectiveCards";

export default function PerspectiveScrollSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.45, 0.8, 1], [16, 0, 0, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.45, 0.8, 1], [0.92, 1, 1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0.8, 1, 1, 0.85]);

  return (
    <section
      id="about"
      ref={containerRef}
      aria-label="Engineering Perspective"
      className="relative w-full min-h-[680px] md:min-h-[760px] py-24 md:py-32 bg-[#000000] border-b border-[#262626] overflow-hidden flex items-center"
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{
          rotateX,
          scale,
          opacity,
          transformStyle: "preserve-3d",
        }}
        className="w-full relative will-change-transform"
      >
        <WorldMapGraphic />

        <Container className="relative z-10 flex flex-col gap-10 md:gap-14">
          {/* Main Statement in Simple English */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-inter font-semibold text-[#FFFFFF] leading-[1.18] tracking-[-0.7px] max-w-4xl text-balance drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Modern applications need clean architecture, fast databases, and reliable systems that stay online under heavy load.
          </h2>

          {/* 3 Pillars */}
          <PerspectiveCards />

          {/* Action Button */}
          <div className="pt-2">
            <Button href="#work" variant="primary" size="default">
              VIEW PROJECTS
            </Button>
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
