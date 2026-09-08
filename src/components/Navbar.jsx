import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Sparkles, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Summary', href: '#summary' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#07090e]/95 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/80' 
        : 'bg-[#07090e]/80 backdrop-blur-md py-4 border-b border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00F5A0] to-[#00D2FF] p-[1px] shadow-lg shadow-[#00F5A0]/20 shrink-0">
            <div className="w-full h-full bg-[#07090e] rounded-[11px] flex items-center justify-center font-bold text-white text-base font-heading">
              IR
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-white flex items-center gap-2">
              <span>Ibrahim Rinub Babu</span>
              <span className="hidden sm:inline-block text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B]">
                AVP @ Citi
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono hidden md:block">
              AWS Data Engineer & Application Developer
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono font-medium text-slate-300 hover:text-[#00F5A0] transition-colors py-1.5 px-2.5 rounded-md hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Header Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://text-to-sql-agent-uenh.onrender.com/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary text-xs px-3.5 py-2 flex items-center gap-1.5"
            title="Live Demo - Self-Healing Text-to-SQL Agent"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00F5A0]" />
            <span>SQL Agent Demo</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>

          <a
            href="/resume_faangpath.tex"
            download="Ibrahim_Rinub_Babu_Resume.tex"
            className="btn btn-primary text-xs px-3.5 py-2 flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5 text-[#04120C]" />
            <span>Resume TeX</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0d111a] border-b border-white/10 px-6 py-4 flex flex-col gap-3 shadow-2xl mt-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-mono text-slate-200 hover:text-[#00F5A0] py-2 border-b border-white/5 flex items-center justify-between"
            >
              <span>{link.name}</span>
              <span className="text-slate-500 text-xs">→</span>
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <a
              href="https://text-to-sql-agent-uenh.onrender.com/"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="btn btn-secondary text-center justify-center text-xs py-2.5"
            >
              SQL Agent Live Demo 🚀
            </a>
            <a
              href="/resume_faangpath.tex"
              download="Ibrahim_Rinub_Babu_Resume.tex"
              onClick={() => setMobileOpen(false)}
              className="btn btn-primary text-center justify-center text-xs py-2.5"
            >
              Download Resume (TeX)
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
