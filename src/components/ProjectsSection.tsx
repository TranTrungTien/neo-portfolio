import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, X, Github, ExternalLink, Code, Server, Shield, Database, Webhook } from "lucide-react";
import { personalProjectsData, experienceData } from "../data";
import { Project } from "../types";

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"personal" | "enterprise">("personal");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Group everything into Project interface for the UI grid
  const personalProjects: Project[] = personalProjectsData;

  const enterpriseProjects: Project[] = [];
  experienceData.forEach((comp, compIdx) => {
    comp.projects.forEach((proj, pIdx) => {
      // Create a unified schema of Project for display
      enterpriseProjects.push({
        id: `ent-${compIdx}-${pIdx}`,
        title: proj.title,
        category: "Enterprise Project",
        description: `Proprietary system engineered during tenure at ${comp.company}. Focused on addressing complex business domains with high-volume performance.`,
        role: proj.role,
        teamSize: proj.teamSize,
        techStack: proj.techStack.split(",").map(t => t.trim()),
        bulletPoints: proj.bullets,
        image: compIdx === 0 
          ? "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" // FPT Software: Corporate block
          : "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800", // GHTK: Logistics
        color: compIdx === 0 ? "bg-neo-blue" : "bg-neo-pink",
        shadow: compIdx === 0 ? "shadow-[10px_10px_0px_0px_#00CCFF]" : "shadow-[10px_10px_0px_0px_#FF00FF]",
      });
    });
  });

  const displayedProjects = activeTab === "personal" ? personalProjects : enterpriseProjects;

  return (
    <section id="projects" className="py-24 px-4 bg-stone-50 border-t-8 border-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header container */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col xl:flex-row xl:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none select-none">
              FEATURED <br />
              <span className="bg-neo-yellow px-3 border-4 border-black inline-block -rotate-1 shadow-[4px_4px_0_0_#000]">
                PROJECTS
              </span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            {/* Filter buttons */}
            <div className="border-4 border-black p-1.5 bg-white flex flex-col md:flex-row text-center font-black rounded-none">
              <button
                onClick={() => setActiveTab("personal")}
                className={`px-6 py-3 cursor-pointer uppercase text-xs md:text-sm tracking-widest transition-colors ${
                  activeTab === "personal" 
                    ? "bg-black text-white" 
                    : "bg-white text-stone-600 hover:bg-stone-50"
                }`}
              >
                Personal Open-Source ({personalProjects.length})
              </button>
              <button
                onClick={() => setActiveTab("enterprise")}
                className={`px-6 py-3 cursor-pointer uppercase text-xs md:text-sm tracking-widest transition-colors ${
                  activeTab === "enterprise" 
                    ? "bg-black text-white" 
                    : "bg-white text-stone-600 hover:bg-stone-50"
                }`}
              >
                Enterprise Products ({enterpriseProjects.length})
              </button>
            </div>

            <div className="neo-card bg-white py-3 px-4 max-w-xs rotate-1 text-xs font-bold leading-normal border-4 border-black">
              {activeTab === "personal" 
                ? "Drawn directly from my actual active GitHub repositories, showcasing impressive custom engineering solutions."
                : "Scalable B2B platforms, enterprise logistics engines, and applications deployed under high-load enterprise contexts."
              }
            </div>
          </div>
        </motion.div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ scale: 0.95, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: -30 }}
                transition={{ type: "spring", stiffness: 100, delay: index * 0.05 }}
                whileHover={{ rotate: 0.5, scale: 1.015 }}
                className={`group relative border-[5px] border-black p-4 bg-white transition-all cursor-pointer ${project.shadow} hover:bg-stone-50`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Frame */}
                <div className="aspect-video border-4 border-black mb-5 overflow-hidden bg-stone-200 relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  {/* Floating category banner */}
                  <span className="absolute top-2 left-2 border-2 border-black bg-white text-stone-900 font-mono font-black text-[10px] uppercase px-2 py-0.5 shadow-[2px_2px_0_0_#000]">
                    {project.category}
                  </span>
                </div>

                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none group-hover:text-neo-pink transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-bold text-stone-500 mt-2 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span 
                          key={tech} 
                          className="bg-stone-100 border-2 border-black text-black text-[10px] font-black uppercase px-2 py-0.5"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="bg-stone-100 border-2 border-black text-black text-[10px] font-black px-1.5 py-0.5">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0 border-2 border-black bg-black text-white p-2 group-hover:bg-neo-yellow group-hover:text-black transition-colors">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Slide-out Overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Dark background panel */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs cursor-pointer"
            />

            {/* Custom Interactive Drawer Modal */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed inset-x-4 md:inset-x-0 bottom-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2 max-w-4xl mx-auto z-50"
            >
              <div className="neo-card bg-white border-[5px] border-black p-6 md:p-8 relative shadow-[16px_16px_0_0_#000] overflow-y-auto max-h-[90vh]">
                
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 border-4 border-black p-1.5 bg-neo-pink text-white hover:bg-black hover:rotate-90 transition-all cursor-pointer"
                >
                  <X size={22} />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-4">
                  
                  {/* Left block (images, quick summaries) */}
                  <div className="md:col-span-5 flex flex-col gap-4">
                    <div className="border-[5px] border-black aspect-video overflow-hidden shadow-[8px_8px_0_0_#000] bg-stone-100">
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="border-4 border-black p-4 bg-stone-50 font-bold text-xs flex flex-col gap-2">
                      <div className="flex justify-between items-center border-b border-stone-200 pb-1.5">
                        <span className="uppercase text-stone-400 font-mono">ROLE:</span>
                        <span className="uppercase text-black">{selectedProject.role}</span>
                      </div>
                      
                      {selectedProject.teamSize && (
                        <div className="flex justify-between items-center border-b border-stone-200 pb-1.5">
                          <span className="uppercase text-stone-400 font-mono">TEAM SIZE:</span>
                          <span className="uppercase text-black">{selectedProject.teamSize}</span>
                        </div>
                      )}

                      <div className="flex justify-between items-center">
                        <span className="uppercase text-stone-400 font-mono">CREDITING:</span>
                        <span className="uppercase text-black">{selectedProject.category}</span>
                      </div>
                    </div>

                    {selectedProject.githubUrl && (
                      <a 
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="neo-button bg-stone-900 text-white flex items-center justify-center gap-2 hover:bg-neo-pink hover:text-black py-3.5 select-none text-center"
                      >
                        <Github size={18} /> OPEN GITHUB REPO <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  {/* Right block (bullets and technical content) */}
                  <div className="md:col-span-7">
                    <span className="neo-card bg-neo-yellow py-1 px-3 border-4 border-black text-xs font-black uppercase inline-block mb-3 rotate-[-1deg]">
                      {selectedProject.category}
                    </span>
                    
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
                      {selectedProject.title}
                    </h2>

                    <p className="text-md font-bold leading-relaxed mb-6 text-stone-600 border-l-4 border-black pl-3 py-1 bg-stone-50/50">
                      {selectedProject.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-mono text-xs font-black uppercase text-stone-400 tracking-wide mb-2">
                        TECHNOLOGIES COMMITTED
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.techStack.map((tech) => (
                          <span 
                            key={tech} 
                            className="bg-white border-2 border-black text-black text-xs font-black px-2.5 py-1"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-mono text-xs font-black uppercase text-stone-400 tracking-wide mb-3">
                        TECHNICAL ACHIEVEMENTS & CONTRIBUTIONS
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.bulletPoints.map((bullet, idx) => (
                          <li key={idx} className="flex gap-2 text-sm font-bold text-stone-800 leading-snug">
                            <span className="text-neo-pink font-black select-none">⚡</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
