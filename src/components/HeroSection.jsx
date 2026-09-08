import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Terminal, Cpu, ShieldCheck } from 'lucide-react';
import profilePic from '../assets/profile.jpg';

export default function HeroSection() {
  const roles = [
    "AWS Data Engineer & AVP @ Citi",
    "Distributed Streaming Architect (Kafka & PySpark)",
    "AI Agent Systems Builder (Devin UI & Gemini)",
    "Snowflake & Cloud Warehouse Specialist",
    "Internal Platform Automation Developer"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 overflow-hidden min-h-[85vh] flex items-center bg-[#07090e]">
      {/* Background Ambient Glows */}
      <div className="ambient-glow glow-top-left" />
      <div className="ambient-glow glow-bottom-right" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Content (Left / Primary) */}
          <div className="lg:col-span-8">
            
            {/* Status Badges Row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00F5A0] shadow-[0_0_10px_#00F5A0] shrink-0" />
                <span className="text-xs font-mono font-medium text-[#00F5A0]">
                  ASSISTANT VICE PRESIDENT @ CITI DUBLIN
                </span>
              </div>

              {/* Stamp 4 Highlight Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F5A0]/15 border border-[#00F5A0]/40 text-[#00F5A0] backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00F5A0]" />
                <span className="text-xs font-mono font-bold">
                  STAMP 4 VISA — NO SPONSORSHIP REQUIRED
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.2] mb-6 text-white font-heading">
              Building High-Scale <br />
              <span className="gradient-text-azure">Data Pipelines</span> & <br />
              <span className="gradient-text-emerald">AI-Driven Platforms</span>
            </h1>

            {/* Dynamic Role Switcher */}
            <div className="flex items-center gap-3 mb-6 min-h-[32px]">
              <Cpu className="w-5 h-5 text-[#00F5A0] shrink-0" />
              <span className="font-mono text-sm sm:text-lg text-[#00D2FF] font-medium transition-all">
                {roles[currentRoleIndex]}
              </span>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              5+ years designing real-time data streaming architectures, automated 
              cloud infrastructure on AWS, Snowflake data warehouses, and cutting-edge 
              AI-assisted development tools (Devin UI & Agentic Text-to-SQL).
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="https://text-to-sql-agent-uenh.onrender.com/" target="_blank" rel="noreferrer" className="btn btn-secondary">
                <Sparkles className="w-4 h-4 text-[#00F5A0]" />
                <span>SQL Agent Live Demo 🚀</span>
              </a>

              <a href="#terminal" className="btn btn-secondary font-mono text-xs">
                <Terminal className="w-4 h-4 text-[#00D2FF]" />
                <span>Run Terminal CLI</span>
              </a>
            </div>

          </div>

          {/* Right Column / Classic Executive Portrait Frame */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
            <div className="relative group">
              
              {/* Outer Glow Aura */}
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-[#00F5A0] via-[#00D2FF] to-[#F59E0B] opacity-40 blur-xl group-hover:opacity-70 transition-all duration-500" />

              {/* Portrait Container */}
              <div className="relative w-44 h-56 sm:w-56 sm:h-72 lg:w-60 lg:h-76 rounded-[2.2rem] p-1.5 bg-[#0d111a] border-2 border-[#00F5A0]/60 shadow-[0_0_35px_rgba(0,245,160,0.3)] overflow-hidden">
                <img
                  src={profilePic}
                  alt="Ibrahim Rinub Babu - AVP Citi AWS Data Engineer"
                  className="w-full h-full rounded-[1.8rem] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#07090e]/90 backdrop-blur-md border border-white/10 text-center">
                  <div className="text-xs font-heading font-extrabold text-white">Ibrahim Rinub Babu</div>
                  <div className="text-[10px] font-mono text-[#00F5A0]">AVP @ Citi | AWS Engineer</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Executive Key Metrics Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
          <div className="border-r border-white/10 pr-3 sm:pr-4 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-1">
              5+ <span className="text-xs font-mono text-[#00F5A0]">YRS</span>
            </div>
            <p className="text-xs text-slate-400">Data & App Engineering Expertise</p>
          </div>

          <div className="border-r border-white/10 pr-3 sm:pr-4 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-extrabold font-heading text-[#00F5A0] mb-1">
              &lt;30 <span className="text-xs font-mono text-[#00F5A0]">MIN</span>
            </div>
            <p className="text-xs text-slate-400">Citi "One Click" Onboarding (was 2 Days)</p>
          </div>

          <div className="border-r border-white/10 pr-3 sm:pr-4 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-extrabold font-heading text-[#00D2FF] mb-1">
              2x <span className="text-xs font-mono text-[#00D2FF]">BOOST</span>
            </div>
            <p className="text-xs text-slate-400">Spark PySpark ETL Processing Speed</p>
          </div>

          <div className="pr-2">
            <div className="text-2xl sm:text-3xl font-extrabold font-heading text-[#F59E0B] mb-1">
              95% <span className="text-xs font-mono text-[#F59E0B]">CONSISTENCY</span>
            </div>
            <p className="text-xs text-slate-400">Kafka & DB Schema Drift Detection</p>
          </div>
        </div>

      </div>
    </section>
  );
}
