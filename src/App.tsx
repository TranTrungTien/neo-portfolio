/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Header from "./components/Header.tsx";
import AboutSection from "./components/AboutSection.tsx";
import ProjectsSection from "./components/ProjectsSection.tsx";
import ContactSection from "./components/ContactSection.tsx";
import CustomCursor from "./components/CustomCursor.tsx";
import { motion, useMotionValue, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(event: React.MouseEvent) {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
  }

  const parallaxX = useTransform(mouseX, [-500, 500], [-30, 30]);
  const parallaxY = useTransform(mouseY, [-500, 500], [-30, 30]);

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="min-h-screen selection:bg-neo-pink selection:text-white"
    >
      <Header />
      
      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-24 px-4 overflow-hidden bg-stone-50">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="flex flex-col gap-8 order-2 lg:order-1">
              <motion.div 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", damping: 15 }}
                className="neo-card bg-neo-yellow inline-block self-start rotate-[-2deg] border-4 border-black py-2 px-4 shadow-[4px_4px_0_0_#000]"
              >
                <h2 className="font-mono font-black text-xs md:text-sm uppercase tracking-wider text-black">
                  Frontend-Focused Fullstack Engineer • React & NestJS
                </h2>
              </motion.div>
              
              <motion.h1 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-[7.5rem] font-black leading-[0.85] tracking-tighter uppercase text-stone-950"
              >
                I BUILD <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-white mix-blend-difference">SCALABLE</span>
                  <motion.span 
                    initial={{ width: 0 }}
                    animate={{ width: "110%" }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute inset-y-0 -left-[5%] bg-black -rotate-1 z-0 border-2 border-black" 
                  />
                </span> <br />
                SYSTEMS.
                <span className="relative inline-block">
                  <motion.span 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -right-12 -top-20 md:-right-24 md:-top-24 w-20 h-20 md:w-32 md:h-32 bg-neo-green neo-border rounded-full flex items-center justify-center font-black text-[9px] md:text-xs text-center p-3 leading-tight shadow-[6px_6px_0_0_#000] rotate-12"
                  >
                    4+ YEAR • CODER • HANOI VN • INDIE HEIR • 
                  </motion.span>
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl font-bold max-w-xl leading-relaxed text-stone-700"
              >
                Hi, I'm <span className="bg-neo-blue px-1.5 border-2 border-black text-black select-all">Tran Trung Tien</span>. I develop high-performance B2B logistical systems and creative computational tools that deliver real business impact.
              </motion.p>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <a href="#projects" className="neo-button bg-neo-pink text-white text-lg md:text-xl border-4 border-black">
                  EXPLORE WORKS
                </a>
                <a href="#skills" className="neo-button bg-white text-stone-900 text-lg md:text-xl border-4 border-black">
                  SKILLS & RESUME
                </a>
              </motion.div>
            </div>
            
            <div className="relative order-1 lg:order-2 flex justify-center items-center">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", damping: 10, delay: 0.5 }}
                className="relative z-10 w-full max-w-sm aspect-[4/5] bg-white neo-border neo-shadow-lg overflow-hidden group border-4 border-black"
              >
                 {/* Placeholder for an Image / Avatar */}
                 <div className="w-full h-full flex flex-col items-center justify-center text-[10rem] bg-neo-blue/10 selection:bg-transparent">
                   <motion.span
                    animate={{ rotate: [0, 6, -6, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                   >
                    📷
                   </motion.span>
                   <div className="mt-4 font-black text-2xl uppercase border-4 border-black px-5 py-2 bg-white shadow-[4px_4px_0_0_#000] tracking-wider text-black select-none">
                      TRUNG TIEN 
                   </div>
                 </div>
                 <div className="absolute inset-0 bg-neo-pink/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                     <span className="neo-card bg-neo-yellow font-black uppercase text-lg border-4 border-black rotate-3 shadow-[4px_4px_0_0_#000]">Fullstack Artisan</span>
                 </div>
              </motion.div>
              
              {/* Geometric Background Shapes with Parallax */}
              <motion.div 
                style={{ x: parallaxX, y: parallaxY, rotate: 12 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
                className="absolute -top-12 -right-12 w-40 h-40 bg-neo-pink neo-border neo-shadow-lg z-0"
              />
              <motion.div 
                style={{ x: useTransform(parallaxX, x => x * -1.2), y: useTransform(parallaxY, y => y * -1.2) }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.9 }}
                className="absolute -bottom-10 -left-20 w-48 h-48 bg-neo-green neo-border neo-shadow-lg rounded-full z-0"
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 -left-32 w-24 h-24 bg-neo-yellow neo-border neo-shadow -rotate-6 z-0 hidden lg:block"
              />
            </div>
            
          </div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-20 flex flex-col items-center gap-2"
          >
            <span className="font-bold uppercase tracking-widest text-sm text-stone-500">Explore Further</span>
            <ArrowDown className="bg-neo-yellow p-1 neo-border" />
          </motion.div>
        </section>

        <AboutSection />

        <ProjectsSection />

        <ContactSection />
      </main>
      
      {/* Dynamic interactive custom cursor and sticker burst effect */}
      <CustomCursor />
    </div>
  );
}

