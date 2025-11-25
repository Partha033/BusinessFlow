"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * UTILITY: Random number generator for initial blob positions
 */
const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

const InteractiveBackground = () => {
  // 1. Setup Motion Values for Mouse Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Create smooth "Spring" physics for the mouse movement
  // These settings determine how "heavy" the movement feels
  const springConfig = { damping: 25, stiffness: 120 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // 3. Listen for mouse move events
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Center the coordinate system (0,0 is middle of screen)
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX - innerWidth / 2);
      mouseY.set(e.clientY - innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // 4. Parallax Transforms
  // We transform the spring values into movement distances.
  // "Move 50px for every 1 unit of mouse movement"
  const x1 = useTransform(springX, (val) => val / 20); // Moves slow
  const y1 = useTransform(springY, (val) => val / 20);

  const x2 = useTransform(springX, (val) => val / -15); // Moves opposite & faster
  const y2 = useTransform(springY, (val) => val / -15);

  const x3 = useTransform(springX, (val) => val / 10); // Moves fast
  const y3 = useTransform(springY, (val) => val / 10);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-50">
      
      {/* --- NOISE TEXTURE OVERLAY --- 
          This adds that "premium" grainy feel and fixes color banding 
      */}
      <div className="absolute inset-0 z-50 opacity-[0.03] pointer-events-none mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.8" 
              numOctaves="3" 
              stitchTiles="stitch" 
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* --- ANIMATED BLOBS --- */}
      
      {/* Blob 1: Teal (Top Left) */}
      <motion.div
        style={{ x: x1, y: y1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -left-20 -top-20 w-[600px] h-[600px] rounded-full bg-teal-200/40 blur-[100px] mix-blend-multiply"
      >
        {/* Inner gentle floating animation independent of mouse */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full"
        />
      </motion.div>

      {/* Blob 2: Pink (Right Center) */}
      <motion.div
        style={{ x: x2, y: y2 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full bg-pink-200/40 blur-[100px] mix-blend-multiply"
      >
         <motion.div
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full"
        />
      </motion.div>

      {/* Blob 3: Purple (Bottom Left) */}
      <motion.div
        style={{ x: x3, y: y3 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
        className="absolute left-20 bottom-0 w-[550px] h-[550px] rounded-full bg-purple-200/40 blur-[110px] mix-blend-multiply"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full"
        />
      </motion.div>
      
      {/* --- OPTIONAL: GLOWING CENTER --- */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent pointer-events-none" />
      
    </div>
  );
};

export default InteractiveBackground;