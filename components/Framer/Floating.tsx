"use client"; // remove if not using Next.js app router

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorEffect() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 24,
        height: 24,
        borderRadius: "50%",
        background: "rgba(0, 0, 0, 0.6)",
        pointerEvents: "none",
        x: springX,
        y: springY,
        zIndex: 9999,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
}
