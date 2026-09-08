import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Terminal, Database, Server, Cpu, ShieldCheck, Zap, Layers } from 'lucide-react';

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
    <section className="relative pt-36 pb-24 overflow-hidden min-h-[92vh] flex items-center">
      {/* Background Ambient Glows */}
      <div className="ambient-glow glow-top-left" />
      <div className="ambient-glow glow-bottom-right" />

      {/* Cyber Grid Lines overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 animate-pulse-glow">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00F5A0] shadow-[0_0_10px_#00F5A0]" />
            <span className="text-xs font-mono font-medium text-[#00F5A0]">
              ASSISTANT VICE PRESIDENT @ CITI DUBLIN
            </span>
            <span className="text-xs text-white/30">|</span>
            <span className="text-xs font-mono text-[#94A3B8]">
              AWS Data Engineer & AI Specialist
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Building High-Scale <br />
            <span className="gradient-text-azure">Data Pipelines</span> & <br />
            <span className="gradient-text-emerald">AI-Driven Platforms</span>
          </h1>

          {/* Dynamic Role Switcher */}
          <div className="h-10 mb-6 flex items-center gap-3">
            <Cpu className="w-5 h-5 text-[#00F5A0] animate-spin-slow" />
            <span className="font-mono text-lg sm:text-xl text-[#00D2FF] font-medium transition-all duration-500">
              {roles[currentRoleIndex]}
            </span>
          </div>

          {/* Subtitle / Intro */}
          <p className="text-lg sm:text-xl text-[#94A3B8] leading-relaxed max-w-2xl mb-10">
            5+ years designing real-time data streaming architectures, automated 
            cloud infrastructure on AWS, Snowflake data warehouses, and cutting-edge 
            AI-assisted development tools (Devin UI & Agentic Text-to-SQL).
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a href="#architecture" className="btn btn-primary">
              <span>Explore Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a href="#ai-showcase" className="btn btn-secondary">
              <Sparkles className="w-4 h-4 text-[#00F5A0]" />
              <span>AI Agent Simulator</span>
            </a>

            <a href="#terminal" className="btn btn-secondary font-mono text-xs">
              <Terminal className="w-4 h-4 text-[#00D2FF]" />
              <span>Run Terminal CLI</span>
            </a>
          </div>

          {/* Executive Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
            <div className="border-r border-white/10 pr-4 last:border-r-0">
              <div className="text-3xl font-extrabold font-heading text-white mb-1">
                5+ <span className="text-sm font-mono text-[#00F5A0]">YRS</span>
              </div>
              <p className="text-xs text-[#94A3B8]">Data & App Engineering Expertise</p>
            </div>

            <div className="border-r border-white/10 pr-4 last:border-r-0">
              <div className="text-3xl font-extrabold font-heading text-[#00F5A0] mb-1">
                &lt;30 <span className="text-sm font-mono text-[#00F5A0]">MIN</span>
              </div>
              <p className="text-xs text-[#94A3B8]">Citi "One Click" Onboarding (was 2 Days)</p>
            </div>

            <div className="border-r border-white/10 pr-4 last:border-r-0">
              <div className="text-3xl font-extrabold font-heading text-[#00D2FF] mb-1">
                2x <span className="text-sm font-mono text-[#00D2FF]">BOOST</span>
              </div>
              <p className="text-xs text-[#94A3B8]">Spark PySpark ETL Processing Speed</p>
            </div>

            <div>
              <div className="text-3xl font-extrabold font-heading text-[#F59E0B] mb-1">
                95% <span className="text-sm font-mono text-[#F59E0B]">CONSISTENCY</span>
              </div>
              <p className="text-xs text-[#94A3B8]">Kafka & DB Schema Drift Detection</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
