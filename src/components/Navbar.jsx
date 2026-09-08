import React, { useState, useEffect } from 'react';
import { Terminal, Download, Menu, X, Cpu, Sparkles, Layers } from 'lucide-react';

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
    { name: 'Architecture', href: '#architecture' },
    { name: 'AI & Automation', href: '#ai-showcase' },
    { name: 'CLI Terminal', href: '#terminal' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills Matrix', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#07090e]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/50' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00F5A0] to-[#00D2FF] p-[1px] shadow-lg shadow-[#00F5A0]/20 group-hover:shadow-[#00F5A0]/40 transition-all">
            <div className="w-full h-full bg-[#07090e] rounded-[11px] flex items-center justify-center font-bold text-white text-lg font-heading">
              IR
            </div>
          </div>
          <div>
            <div className="font-heading font-extrabold text-lg tracking-tight text-white flex items-center gap-2">
              Ibrahim Rinub Babu
              <span className="hidden sm:inline-flex text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B]">
                AVP @ Citi
              </span>
            </div>
            <p className="text-xs text-[#94A3B8] font-mono hidden md:block">
              AWS Data Engineer & Application Developer
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#94A3B8] hover:text-[#00F5A0] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#00F5A0] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="btn btn-secondary text-xs px-4 py-2 flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00F5A0]" />
            Contact
          </a>
          <a
            href="/resume_faangpath.tex"
            download="Ibrahim_Rinub_Babu_Resume.tex"
            className="btn btn-primary text-xs px-4 py-2 flex items-center gap-1.5"
            title="Download TeX Source / CV"
          >
            <Download className="w-3.5 h-3.5" />
            Resume TeX
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0d111a]/95 backdrop-blur-2xl border-b border-white/10 p-6 shadow-2xl flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-[#F1F5F9] hover:text-[#00F5A0] py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn btn-secondary text-center justify-center text-sm py-2.5"
            >
              Contact Me
            </a>
            <a
              href="/resume_faangpath.tex"
              download="Ibrahim_Rinub_Babu_Resume.tex"
              onClick={() => setMobileOpen(false)}
              className="btn btn-primary text-center justify-center text-sm py-2.5"
            >
              Download Resume (TeX)
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
