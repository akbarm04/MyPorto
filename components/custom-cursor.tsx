"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useMobile } from "@/hooks/use-mobile";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const isMobile = useMobile();

  useEffect(() => {
    if (isMobile) return; // Don't set up mouse events on mobile

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        (e.target.tagName === "A" ||
          e.target.tagName === "BUTTON" ||
          e.target.closest("a") ||
          e.target.closest("button"))
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile]);

  // Don't render the cursor on mobile devices
  if (isMobile) return null;

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }
        a,
        button,
        [role="button"] {
          cursor: none;
        }
      `}</style>
      <motion.div
        className={`fixed top-0 left-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 ${
          isDark ? "mix-blend-difference" : "mix-blend-multiply"
        } pointer-events-none z-[100]`}
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      <motion.div
        className={`fixed top-0 left-0 w-10 h-10 rounded-full border ${
          isDark ? "border-white/30" : "border-black/30"
        } pointer-events-none z-[100]`}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.8,
        }}
      />
    </>
  );
}
