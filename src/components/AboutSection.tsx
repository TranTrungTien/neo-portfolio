import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Briefcase, Code2, Terminal, Cpu, Award, Users, Layers, ExternalLink } from "lucide-react";
import { useState } from "react";
import { skillsData, experienceData, educationData, certificationsData, profileSummary } from "../data";

function WindowCard({ 
  title, 
  children, 
  icon: Icon, 
  shadowColor, 
  actionRow 
}: { 
  title: string; 
  children: React.ReactNode; 
  icon: any; 
  shadowColor: string;
  actionRow?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", damping: 15, stiffness: 100 }}
      className={`neo-card p-0 flex flex-col mb-8 ${shadowColor} hover:-translate-y-1 transition-transform border-[5px] border-black`}
    >
      <div className="border-b-[5px] border-black p-3 bg-white flex justify-between items-center select-none">
        <div className="flex items-center gap-3">
          <div className="bg-black text-white p-1.5 border-2 border-black">
            <Icon size={18} />
          </div>
          <span className="font-mono font-black uppercase tracking-widest text-xs md:text-sm">{title}</span>
        </div>
        <div className="flex items-center gap-3">
          {actionRow}
          <div className="flex gap-1.5">
            <div className="w-3.5 h-3.5 border-2 border-black bg-neo-yellow" />
            <div className="w-3.5 h-3.5 border-2 border-black bg-neo-green" />
            <div className="w-3.5 h-3.5 border-2 border-black bg-neo-pink" />
          </div>
        </div>
      </div>
      <div className="p-4 md:p-6 bg-stone-50/50">
        {children}
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const [activeCompanyIndex, setActiveCompanyIndex] = useState(0);
  const [expandedProjectIndex, setExpandedProjectIndex] = useState<number | null>(0);
  const [activeSkillCategory, setActiveSkillCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const activeCompany = experienceData[activeCompanyIndex];

  return (
    <section id="skills" className="py-24 px-4 bg-white overflow-hidden border-t-8 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column: Story & Highly Interactive Experience */}
          <div className="lg:w-7/12 flex flex-col gap-6">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <h2 className="text-5xl md:text-[5.5rem] font-black uppercase tracking-tighter mb-6 leading-none select-none">
                THE <span className="bg-neo-pink text-white px-3 inline-block -rotate-1 border-4 border-black">CHRONICLE</span> OF TIÊN
              </h2>
              <div className="text-lg md:text-xl font-bold leading-relaxed mb-8 text-stone-700">
                <p className="mb-4">
                  Born in 1999, I am a <span className="bg-neo-yellow text-stone-950 px-1.5 border-2 border-black">Frontend Engineer & Fullstack Innovator</span> based in Hanoi. I view code as a highly expressive, creative output.
                </p>
                <p>
                  With <span className="bg-neo-green px-1.5 border-2 border-black text-stone-950">4+ years of professional engineering</span> at market leaders (FPT Software and Giao Hang Tiet Kiem), I combine architectural design with polished pixel-level visual mechanics.
                </p>
              </div>
            </motion.div>

            {/* Interactive Experience Workboard */}
            <WindowCard 
              title="EXPERIENCE_LEDGER.EXE" 
              icon={Briefcase} 
              shadowColor="shadow-[8px_8px_0px_0px_#FF00FF]"
              actionRow={
                <div className="flex border-2 border-black rounded-none overflow-hidden text-xs font-black">
                  {experienceData.map((exp, idx) => (
                    <button
                      key={exp.company}
                      onClick={() => {
                        setActiveCompanyIndex(idx);
                        setExpandedProjectIndex(0); // Reset expand on swap
                      }}
                      className={`px-3 py-1 uppercase tracking-tight transition-colors cursor-pointer border-r-2 last:border-r-0 border-black ${
                        activeCompanyIndex === idx ? "bg-black text-white" : "bg-white text-black hover:bg-stone-100"
                      }`}
                    >
                      {exp.company === "Giao Hang Tiet Kiem (GHTK)" ? "GHTK" : exp.company}
                    </button>
                  ))}
                </div>
              }
            >
              <div className="flex flex-col gap-4">
                {/* Company banner */}
                <div className="border-4 border-black p-4 bg-white shadow-[4px_4px_0_0_#000] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                      {activeCompany.company}
                    </h3>
                    <p className="font-mono font-bold text-sm text-stone-600 uppercase flex items-center gap-2">
                      <Briefcase size={14} /> {activeCompany.role}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="neo-border bg-neo-yellow font-mono font-black text-xs px-2 py-1 rotate-[2deg]">
                      {activeCompany.period}
                    </span>
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-tighter mt-1">
                      {activeCompany.location}
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-mono font-black uppercase text-xs text-stone-400 tracking-wide mb-3">
                    PROJECTS ACQUIRED ({activeCompany.projects.length})
                  </h4>
                  
                  <div className="flex flex-col gap-3">
                    {activeCompany.projects.map((proj, pIdx) => {
                      const isExpanded = expandedProjectIndex === pIdx;
                      return (
                        <div 
                          key={pIdx}
                          className="border-4 border-black bg-white shadow-[4px_4px_0_0_#000] transition-all overflow-hidden"
                        >
                          {/* Project Header */}
                          <button
                            onClick={() => setExpandedProjectIndex(isExpanded ? null : pIdx)}
                            className="w-full text-left p-4 flex justify-between items-center gap-4 hover:bg-stone-50 cursor-pointer select-none"
                          >
                            <div className="flex-1">
                              <h5 className="font-black text-lg md:text-xl uppercase tracking-tighter hover:text-neo-pink transition-colors">
                                {proj.title}
                              </h5>
                              <div className="flex flex-wrap gap-2 mt-1.5 items-center">
                                <span className="bg-black text-white text-[10px] font-black uppercase px-2 py-0.5">
                                  {proj.role}
                                </span>
                                <span className="text-xs font-bold text-stone-500 uppercase flex items-center gap-1.5">
                                  <Users size={12} /> Team: {proj.teamSize}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center justify-center border-2 border-black w-7 h-7 bg-stone-100 font-black text-sm">
                              {isExpanded ? "−" : "+"}
                            </div>
                          </button>

                          {/* Extra Panel */}
                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="border-t-2 border-black bg-stone-50/50 p-4"
                              >
                                <div className="mb-4">
                                  <span className="font-mono text-[10px] font-black uppercase text-stone-400 block mb-1">
                                    TECH STACK ACCREDITED
                                  </span>
                                  <div className="flex flex-wrap gap-1.5">
                                    {proj.techStack.split(",").map((tech) => (
                                      <span 
                                        key={tech} 
                                        className="border-2 border-black bg-white text-xs font-bold px-2 py-0.5"
                                      >
                                        {tech.trim()}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                <div>
                                  <span className="font-mono text-[10px] font-black uppercase text-stone-400 block mb-2">
                                    CORE ACCOMPLISHMENTS & METRICS
                                  </span>
                                  <ul className="space-y-1.5">
                                    {proj.bullets.map((bullet, bIdx) => (
                                      <li key={bIdx} className="flex gap-2 text-sm font-bold text-stone-700">
                                        <span className="text-neo-pink font-black select-none">⚡</span>
                                        <span>{bullet}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </WindowCard>
          </div>

          {/* Right Column: Skills Portal + Academics & Credentials */}
          <div className="lg:w-5/12 flex flex-col gap-6">
            
            {/* Highly Interactive Skills Module */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="neo-card bg-stone-950 text-white shadow-[10px_10px_0px_0px_#00FF00] border-[5px] border-black p-5 md:p-6 relative overflow-hidden"
            >
              <div className="absolute top-2 right-2 opacity-5 pointer-events-none rotate-12 select-none">
                <Terminal size={140} />
              </div>

              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-3 font-mono font-black text-2xl md:text-3xl uppercase tracking-tighter italic">
                  <Terminal className="text-neo-green" size={28} />
                  THE_ARMORY
                </div>
                <div className="w-5 h-5 bg-neo-green animate-pulse border-2 border-black rounded-none" />
              </div>

              {/* Skill Tabs */}
              <div className="flex overflow-x-auto gap-2 pb-3 border-b border-stone-800 scrollbar-none relative z-10 select-none">
                {skillsData.map((category, index) => (
                  <button
                    key={category.categoryName}
                    onClick={() => setActiveSkillCategory(index)}
                    className={`px-3 py-1 font-mono font-bold text-xs uppercase tracking-tight border-2 border-dashed whitespace-nowrap cursor-pointer transition-colors ${
                      activeSkillCategory === index 
                        ? "bg-neo-green text-black border-black" 
                        : "bg-stone-900 border-stone-700 text-stone-400 hover:text-white"
                    }`}
                  >
                    {category.categoryName}
                  </button>
                ))}
              </div>

              {/* Active Skill List */}
              <div className="mt-6 min-h-[160px] relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSkillCategory}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.15 }}
                    className="flex flex-wrap gap-3"
                  >
                    {skillsData[activeSkillCategory].skills.map((skill) => (
                      <div key={skill.name} className="relative z-10">
                        <motion.div
                          onHoverStart={() => setHoveredSkill(skill.name)}
                          onHoverEnd={() => setHoveredSkill(null)}
                          whileHover={{ y: -4, scale: 1.05 }}
                          className={`neo-border py-2 px-3 font-black uppercase text-xs md:text-sm tracking-wider text-black ${skill.color} shadow-[4px_4px_0px_0px_#000] cursor-help`}
                        >
                          {skill.name}
                        </motion.div>
                        
                        {/* Custom Neon Brutalist Tooltip */}
                        <AnimatePresence>
                          {hoveredSkill === skill.name && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 6, scale: 0.95 }}
                              transition={{ duration: 0.1 }}
                              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5 w-56 z-50 bg-white text-stone-900 border-4 border-black p-3 shadow-[6px_6px_0px_0px_#FF00FF] font-bold text-xs text-center"
                            >
                              <div className="text-black font-black uppercase border-b-2 border-stone-200 pb-1 mb-1.5 tracking-wider">
                                {skill.name}
                              </div>
                              <p className="text-stone-600 leading-snug">{skill.tip}</p>
                              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-[8px] border-x-transparent border-t-[8px] border-t-black" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Extra visual accents */}
              <div className="mt-6 pt-4 border-t border-stone-800 flex justify-between items-center font-mono text-[10px] text-stone-500">
                <span>SYSTEM_CHECK: STABLE</span>
                <span>COMPILER_VERSION: 1.15.0</span>
              </div>
            </motion.div>

            {/* Education & Credential Card */}
            <WindowCard 
              title="CREDENTIALS.LOG" 
              icon={GraduationCap} 
              shadowColor="shadow-[8px_8px_0px_0px_#00CCFF]"
            >
              <div className="flex flex-col gap-5">
                {/* Education Box */}
                <div className="border-4 border-black p-4 bg-white shadow-[4px_4px_0_0_#000]">
                  <div className="flex gap-3 mb-2">
                    <div className="bg-neo-blue p-2 border-2 border-black flex items-center justify-center h-10 w-10 text-black">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h4 className="font-black text-lg uppercase leading-tight">
                        {educationData.degree}
                      </h4>
                      <p className="text-xs font-bold text-stone-500 uppercase">
                        {educationData.institution}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-3 font-mono text-xs font-black">
                    <span className="bg-pale-green text-black px-2 py-0.5 border-2 border-black rotate-[-1deg]">
                      {educationData.period}
                    </span>
                    <span className="text-stone-500">{educationData.location}</span>
                  </div>
                </div>

                {/* Certifications Box */}
                <div className="border-4 border-black p-4 bg-white shadow-[4px_4px_0_0_#000]">
                  <h4 className="font-black uppercase tracking-tight text-sm text-stone-400 font-mono mb-2">
                    PROFESSIONAL CERTIFICATIONS
                  </h4>
                  {certificationsData.map((cert) => (
                    <div key={cert.name} className="flex justify-between items-center gap-4 bg-stone-50 border-2 border-black p-3 font-bold">
                      <div className="flex items-center gap-2">
                        <Award size={18} className="text-neo-pink" />
                        <span className="uppercase text-sm">{cert.name} Verified</span>
                      </div>
                      <span className="bg-neo-green font-mono text-xs px-2 py-0.5 border-2 border-black">
                        {cert.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </WindowCard>

            {/* Fun Stats Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="neo-card bg-neo-yellow border-4 border-black flex flex-col items-center justify-center text-center p-6 group shadow-[6px_6px_0_0_#000]">
                <Code2 size={40} className="mb-2 group-hover:rotate-12 transition-transform" />
                <span className="font-extrabold text-3xl md:text-4xl tracking-tighter text-black">80+</span>
                <span className="font-black uppercase text-[10px] tracking-wider mt-1 text-stone-800">
                  Reusable Components Built
                </span>
              </div>
              <div className="neo-card bg-neo-orange border-4 border-black flex flex-col items-center justify-center text-center p-6 group shadow-[6px_6px_0_0_#000]">
                <Layers size={40} className="mb-2 group-hover:scale-110 transition-transform text-white" />
                <span className="font-extrabold text-3xl md:text-4xl tracking-tighter text-white">4+ Yrs</span>
                <span className="font-black uppercase text-[10px] tracking-wider mt-1 text-stone-200">
                  Enterprise Pedigree
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
