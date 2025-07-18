"use client";
import { motion } from "motion/react";
export default function Content() {
  return (
    <div
      className="h-screen w-full flex items-center justify-center bg-neutral-950 [perspective::1000px] [transform-style:preserve-3d]"
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 1px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <motion.button
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          boxShadow: "0px 20px 50px rgba(8,112,184,0.7)",
          y: -5,
        }}
        whileTap={{
          y: 0,
          rotateX: 0,
          rotateY: 0,
        }}
        style={{
          translateZ: 100,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="relative group text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset] cursor-pointer"
      >
        <span className="group-hover:text-cyan-500  transition-colors duration-300">
          Follow Me
        </span>
        <span className="absolute bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-full mx-auto blur-sm"></span>
      </motion.button>
    </div>
  );
}
