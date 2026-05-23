import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ClickBurst {
  id: string;
  x: number;
  y: number;
  label: string;
  color: string;
}

const CLICK_LABELS = ["CLICK!", "BAM!", "POW!", "REACT!", "NESTJS!", "CODE!", "TIÊN!", "LOVE!", "10101!"];
const NEON_COLORS = [
  "bg-neo-pink shadow-[3px_3px_0_0_#000]",
  "bg-neo-yellow shadow-[3px_3px_0_0_#000]",
  "bg-neo-green shadow-[3px_3px_0_0_#000]",
  "bg-neo-blue shadow-[3px_3px_0_0_#000]",
  "bg-neo-orange shadow-[3px_3px_0_0_#000]"
];

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailPosition, setTrailPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [clicks, setClicks] = useState<ClickBurst[]>([]);
  const [isMobile, setIsMobile] = useState(true);

  // Use refs for animation frames
  const mouseRef = useRef({ x: -100, y: -100 });
  const trailRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Check if the device matches any touch/coarse pointers (mobile)
    const mediaCheck = window.matchMedia("(pointer: coarse)");
    setIsMobile(mediaCheck.matches);

    const updateMobileStatus = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    mediaCheck.addEventListener("change", updateMobileStatus);

    return () => {
      mediaCheck.removeEventListener("change", updateMobileStatus);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    // Track mouse coordinates
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });

      // Determine if cursor is hovering over interactive components
      const target = e.target as HTMLElement;
      if (target) {
        const isInteractive = 
          target.tagName === "A" || 
          target.tagName === "BUTTON" || 
          target.tagName === "INPUT" || 
          target.tagName === "TEXTAREA" ||
          target.closest("button") !== null ||
          target.closest("a") !== null ||
          target.closest(".cursor-pointer") !== null ||
          target.classList.contains("neo-button") ||
          target.role === "button";
        
        setIsHovering(!!isInteractive);
      }
    };

    // Animate trailing helper ring using a linear interpolation (lerp) loop
    let animationFrameId: number;
    const animateTrail = () => {
      const targetX = mouseRef.current.x;
      const targetY = mouseRef.current.y;
      
      const dx = targetX - trailRef.current.x;
      const dy = targetY - trailRef.current.y;
      
      // Speed factor of the trail interpolation
      const lerpFactor = 0.15;
      
      trailRef.current.x += dx * lerpFactor;
      trailRef.current.y += dy * lerpFactor;
      
      setTrailPosition({ x: trailRef.current.x, y: trailRef.current.y });
      animationFrameId = requestAnimationFrame(animateTrail);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = (e: MouseEvent) => {
      setIsClicking(false);

      // Generate a brand-new retro sticker burst object
      const label = CLICK_LABELS[Math.floor(Math.random() * CLICK_LABELS.length)];
      const color = NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)];
      const newClick: ClickBurst = {
        id: `${Date.now()}-${Math.random()}`,
        x: e.clientX,
        y: e.clientY,
        label,
        color,
      };

      setClicks((prev) => [...prev, newClick]);

      // Prune after animation completes
      setTimeout(() => {
        setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
      }, 600);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    animationFrameId = requestAnimationFrame(animateTrail);

    // Hide real cursor only when custom cursor is active
    document.body.classList.add("cursor-none-wrapper");

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(animationFrameId);
      document.body.classList.remove("cursor-none-wrapper");
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
      {/* 1. Central Brutalist Pointer Square */}
      <motion.div
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: isClicking ? 0.8 : isHovering ? 1.2 : 1,
          rotate: isHovering ? 45 : -10,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50 }}
        className={`fixed w-4 h-4 border-2 border-black ${
          isHovering ? "bg-neo-yellow" : "bg-neo-pink"
        } rounded-none z-50`}
      />

      {/* 2. Slow Trailing Shadow/Outline Box */}
      <div
        className="fixed w-9 h-9 border-3 border-black bg-stone-900/10 rounded-none mix-blend-multiply transition-transform duration-100 ease-out"
        style={{
          left: `${trailPosition.x - 18}px`,
          top: `${trailPosition.y - 18}px`,
          transform: `scale(${isHovering ? 1.5 : 1}) rotate(${isHovering ? -15 : 5}deg)`,
          borderColor: isHovering ? "#00FF00" : "#000000",
          backgroundColor: isHovering ? "rgba(0, 255, 0, 0.1)" : "rgba(0, 0, 0, 0.05)",
          boxShadow: "3px 3px 0px 0px #000",
        }}
      />

      {/* 3. Successive Interactive Sticker & Confetti Burst */}
      <AnimatePresence>
        {clicks.map((click) => {
          // Calculate random drift direction
          const angle = Math.random() * Math.PI * 2;
          const distance = 40 + Math.random() * 30;
          const targetX = Math.cos(angle) * distance;
          const targetY = Math.sin(angle) * distance;

          return (
            <React.Fragment key={click.id}>
              {/* Retro Sticker Text */}
              <motion.div
                initial={{ 
                  opacity: 1, 
                  scale: 0.5, 
                  x: click.x, 
                  y: click.y, 
                  rotate: Math.random() * 40 - 20 
                }}
                animate={{ 
                  opacity: 0, 
                  scale: 1.4, 
                  x: click.x + targetX, 
                  y: click.y + targetY,
                  rotate: Math.random() * 60 - 30
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`fixed z-40 border-3 border-black px-3 py-1 font-mono font-black text-xs text-black select-none ${click.color}`}
              >
                {click.label}
              </motion.div>

              {/* Ring Shockwave */}
              <motion.div
                initial={{ 
                  opacity: 0.8, 
                  scale: 0.1, 
                  x: click.x - 24, 
                  y: click.y - 24
                }}
                animate={{ 
                  opacity: 0, 
                  scale: 2.2, 
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="fixed w-12 h-12 border-[4px] border-black rounded-full pointer-events-none z-30"
              />
            </React.Fragment>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
