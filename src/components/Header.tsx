import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home", color: "bg-neo-yellow" },
  { name: "Projects", href: "#projects", color: "bg-neo-green" },
  { name: "Skills & Exp", href: "#skills", color: "bg-neo-blue" },
  { name: "Contact", href: "#contact", color: "bg-neo-orange" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none">
      <nav className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
        <div className="neo-card py-2 px-4 bg-white flex items-center gap-2 font-black text-xl tracking-tighter border-black">
          <span className="bg-black text-white p-1 px-2 border-2 border-black">TP</span>
          <span className="text-black">PORTFOLIO</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`neo-border neo-shadow-lg py-2 px-4 font-bold text-sm uppercase tracking-widest neo-shadow-hover ${item.color} text-black inline-block active:bg-white`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden neo-card p-2 bg-neo-yellow neo-shadow-hover"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { x: 0 } : { x: "100%" }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        className="fixed inset-0 bg-white z-40 md:hidden flex flex-col items-center justify-center gap-8 p-10 pointer-events-auto border-l-8 border-black shadow-[-20px_0_0_0_rgba(0,0,0,0.1)]"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 neo-card p-2 bg-neo-pink"
        >
          <X size={32} />
        </button>
        
        <ul className="flex flex-col gap-6 w-full max-w-sm">
          {navItems.map((item, i) => (
            <motion.li
              key={item.name}
              initial={{ x: 50, opacity: 0 }}
              animate={isOpen ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`neo-card block py-4 px-6 text-center font-black text-2xl uppercase tracking-widest ${item.color} neo-shadow-hover`}
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
}
