import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, ShieldCheck } from 'lucide-react';

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'AI & Agentic Systems', 'Enterprise Data Platforms', 'Cloud & Migrations'];

  const projects = [
    {
      id: 'text-to-sql',
      category: 'AI & Agentic Systems',
      title: 'Self-Healing Text-to-SQL Agent',
      badge: 'Live on Render 🚀',
      badgeColor: '#00F5A0',
      description: 'Ask questions in plain English and get answers from your database. Powered by Google Gemini 3.6 Flash and a stateful LangGraph agentic pipeline with automated self-healing SQL generation (up to 3 retries on syntax or schema errors), Swagger UI docs, and read-only execution safety.',
      architectureHighlights: [
        'LangGraph StateGraph agent with typed state management',
        'Google Gemini 3.6 Flash LLM (Free API)',
        'FastAPI backend with Swagger UI at /docs',
        'Automatic error interception & self-correcting retry loop (max 3 retries)',
        'Read-only safety guard blocking destructive operations (DROP, DELETE, etc.)'
      ],
      techStack: ['FastAPI', 'LangGraph', 'Google Gemini', 'SQLite / PostgreSQL', 'SQLAlchemy', 'Python 3.10+'],
      demoUrl: 'https://text-to-sql-agent-uenh.onrender.com/',
      githubUrl: 'https://github.com/Rinub/text-to-sql-agent'
    },
    {
      id: 'one-click',
      category: 'Enterprise Data Platforms',
      title: 'Citi "One Click" Automated Pipeline Onboarding Platform',
      badge: '95% Effort Reduction',
      badgeColor: '#00D2FF',
      description: 'Engineered an internal platform automating end-to-end data pipeline setup across Kafka topics, Java batch PCP configurations, Snowflake/Oracle DDLs, and Harness CI/CD pipelines. Cut client onboarding time from 2 days to under 30 minutes.',
      architectureHighlights: [
        'Automated Kafka topic creation & schema validation',
        'Java PCP batch config generation & validation',
        'Snowflake & Oracle DDL / Stored Procedure provisioning',
        'Harness & OpenShift CI/CD pipeline automation'
      ],
      techStack: ['FastAPI', 'Python', 'Kafka', 'Snowflake', 'Harness', 'OpenShift', 'Oracle'],
      demoUrl: null,
      githubUrl: 'https://github.com/Rinub/portfolio_website'
    },
    {
      id: 'schema-drift',
      category: 'Enterprise Data Platforms',
      title: 'Kafka & Database Schema Drift Monitoring Engine',
      badge: '95% Consistency',
      badgeColor: '#F59E0B',
      description: 'Created an automated schema comparison engine that detects schema drift across Kafka topics and target database schemas, triggering automated email alerts and preventing downstream ETL pipeline failures.',
      architectureHighlights: [
        'Real-time schema comparison engine',
        'Automated email & alert notifications',
        'Reduced PROD data incidents by 60%',
        'Improved incident response time by 70%'
      ],
      techStack: ['Python', 'Kafka', 'Flask', 'ITRS', 'Snowflake', 'Oracle', 'SMTP'],
      demoUrl: null,
      githubUrl: 'https://github.com/Rinub/portfolio_website'
    },
    {
      id: 'db2-migration',
      category: 'Cloud & Migrations',
      title: 'IBM DB2 to AWS PostgreSQL Cloud Migration Suite',
      badge: '40% Time Reduction',
      badgeColor: '#8B5CF6',
      description: 'Architected end-to-end migration pipelines converting legacy on-premise IBM DB2 databases to AWS PostgreSQL using AWS Glue Spark jobs and Lambda triggers for automated data restructuring into Amazon S3 data lakes.',
      architectureHighlights: [
        'AWS Glue Spark jobs for large dataset restructuring',
        'AWS Lambda automated triggers and event orchestration',
        'Backup pipelines to Amazon S3 using EC2 instances',
        'Power BI dashboards with Flask REST data API'
      ],
      techStack: ['AWS Glue', 'PySpark', 'AWS Lambda', 'AWS PostgreSQL', 'S3', 'Power BI', 'Flask'],
      demoUrl: null,
      githubUrl: 'https://github.com/Rinub/portfolio_website'
    }
  ];

  const filteredProjects = projects.filter(p => {
    if (activeTab === 'All') return true;
    return p.category === activeTab;
  });

  return (
    <section id="projects" className="py-20 bg-[#07090e] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/30 text-[#00F5A0] text-xs font-mono font-semibold uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Projects Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              Featured <span className="gradient-text-emerald">Software & AI Projects</span>
            </h2>
          </div>

          {/* Filter Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-[#00F5A0] text-[#04120C] font-bold shadow-[0_0_15px_rgba(0,245,160,0.3)]'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Project Cards Container */}
        <div className="space-y-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="glass-card p-6 sm:p-8 transition-all hover:border-[#00F5A0]/50"
            >
              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-slate-400">{project.category}</span>
                    <span className="text-white/20">•</span>
                    <span 
                      className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full"
                      style={{ backgroundColor: `${project.badgeColor}15`, color: project.badgeColor, border: `1px solid ${project.badgeColor}35` }}
                    >
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white">
                    {project.title}
                  </h3>
                </div>

                {/* Direct Action Links */}
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary text-xs px-4 py-2 flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#04120C]" />
                      <span>Live Demo (Render)</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary text-xs px-4 py-2 flex items-center gap-1.5"
                    >
                      <Github className="w-3.5 h-3.5 text-white" />
                      <span>GitHub Code</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Key Architecture Highlights */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 mb-6">
                <div className="text-xs font-mono text-[#00F5A0] font-bold mb-2 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Key Highlights & Architecture:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.architectureHighlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-200 font-mono">
                      <span className="text-[#00D2FF] font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
                <span className="text-xs font-mono text-slate-500 mr-2">Technologies:</span>
                {project.techStack.map((tech) => (
                  <span key={tech} className="tag-badge emerald">
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
