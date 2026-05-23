import { motion } from "motion/react";
import { Send, Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 bg-neo-yellow border-t-8 border-black overflow-hidden relative">
      {/* Decorative Stickers */}
      <motion.div 
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-10 left-10 hidden xl:block z-0"
      >
        <div className="neo-card bg-neo-pink text-white font-black text-2xl rotate-[-12deg] shadow-[8px_8px_0_0_#000] border-4 border-black">
          SAY HELLO!
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 right-10 hidden xl:block z-0"
      >
        <div className="neo-card bg-neo-green font-black text-xl rotate-[15deg] shadow-[8px_8px_0_0_#000] border-4 border-black border-collapse">
          AVAILABLE FOR HIRE 🚀
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 select-none">
            LET'S <span className="bg-white px-4 border-4 border-black inline-block -rotate-1 shadow-[4px_4px_0_0_#000]">CONNECT</span>
          </h2>
          <p className="text-xl md:text-2xl font-bold uppercase tracking-tight text-stone-900 select-none">
            Have a project in mind? Or want to align fullstack opportunities?
          </p>
        </div>

        <div className="neo-card bg-white p-6 md:p-12 shadow-[12px_12px_0_0_#000] border-[5px] border-black">
          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="font-black uppercase text-sm tracking-widest text-stone-900">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name (e.g. Recruiter)"
                  className="neo-input"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-black uppercase text-sm tracking-widest text-stone-900">Your Email</label>
                <input 
                  type="email" 
                  placeholder="recruiter@company.com"
                  className="neo-input"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-black uppercase text-sm tracking-widest text-stone-900">Message</label>
              <textarea 
                rows={5}
                placeholder="LET'S TALK ABOUT REACT, NEXT.JS 15, NESTJS SERVICES OR YOUR PROJECTS..."
                className="neo-input resize-none"
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="neo-button bg-black text-white text-xl md:text-2xl flex items-center justify-center gap-4 py-5 select-none border-4 border-black"
            >
              SEND MESSAGE <Send size={24} />
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-8">
          {[
            { 
              icon: Mail, 
              label: "Email", 
              href: "mailto:trantrungtien9x@gmail.com", 
              color: "hover:bg-neo-pink text-stone-900" 
            },
            { 
              icon: Linkedin, 
              label: "LinkedIn", 
              href: "https://www.linkedin.com/in/trantrungtien/", 
              color: "hover:bg-neo-blue text-stone-900" 
            },
            { 
              icon: Github, 
              label: "GitHub", 
              href: "https://github.com/trantrungtien", 
              color: "hover:bg-neo-green text-stone-900" 
            },
            { 
              icon: Phone, 
              label: "+84 379 818 940", 
              href: "tel:+84379818940", 
              color: "hover:bg-neo-orange text-stone-900" 
            },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -5 }}
              className={`neo-card bg-white p-4 flex items-center gap-3 transition-colors border-4 border-black shadow-[4px_4px_0_0_#000] cursor-pointer ${social.color}`}
            >
              <social.icon size={20} />
              <span className="font-black uppercase text-xs md:text-sm tracking-widest leading-none">{social.label}</span>
              <ExternalLink size={12} />
            </motion.a>
          ))}
        </div>
      </div>

      <footer className="mt-32 pt-16 border-t-[5px] border-black text-center select-none">
        <div className="font-black text-2xl md:text-4xl tracking-tighter mb-4 text-black uppercase">
          TRAN TRUNG TIEN © 2026
        </div>
        <p className="font-mono font-bold text-xs tracking-widest text-stone-600 uppercase">
          Built with React • Framer Motion • Tailwind CSS • Pure Grit
        </p>
      </footer>
    </section>
  );
}
