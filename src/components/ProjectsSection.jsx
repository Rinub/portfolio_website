import React from 'react';
import { Layers, Sparkles, ExternalLink, Code2, ArrowUpRight, Zap, Database, ShieldAlert, Cpu } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Citi "One Click" Automated Pipeline Onboarding Platform',
      category: 'Enterprise Automation & Cloud Platform',
      badge: '95% Effort Reduction',
      description: 'Engineered an internal platform automating end-to-end data pipeline setup across Kafka topics, Java batch PCP configs, Snowflake/Oracle DDLs, and Harness CI/CD pipelines. Cut client onboarding time from 2 days to under 30 minutes.',
      metrics: ['2 Days $\\rightarrow$ <30 Mins', '100% CI/CD Compliance', 'Zero Manual DDL Errors'],
      techStack: ['Python', 'FastAPI', 'Kafka', 'Snowflake', 'Harness', 'OpenShift', 'Oracle'],
      color: '#00F5A0'
    },
    {
      title: 'Self-Healing Text-to-SQL Agentic System',
      category: 'AI & Natural Language Processing',
      badge: 'Gemini API + LangGraph',
      description: 'Built a self-repairing Text-to-SQL agentic service. When generated SQL queries trigger database schema errors or syntax failures, the agentic loop intercepts runtime tracebacks, re-evaluates database DDLs, and auto-corrects the query.',
      metrics: ['Zero Manual SQL Fixes', 'Stateful LangGraph Agent', 'FastAPI Web Service'],
      techStack: ['LangGraph', 'Google Gemini API', 'SQLite', 'PostgreSQL', 'FastAPI', 'Python'],
      color: '#8B5CF6'
    },
    {
      title: 'Kafka & Database Schema Drift Monitoring Engine',
      category: 'Data Governance & System Reliability',
      badge: '95% Consistency',
      description: 'Created an automated schema comparison engine that monitors Kafka topics and target database schemas for breaking changes, triggering automated email alerts and preventing downstream ETL job failures.',
      metrics: ['95% Consistency', '70% Faster Incident Response', 'Real-Time Alerting'],
      techStack: ['Python', 'Kafka', 'Flask', 'ITRS', 'Snowflake', 'Oracle', 'SMTP'],
      color: '#00D2FF'
    },
    {
      title: 'IBM DB2 to AWS PostgreSQL Cloud Migration Suite',
      category: 'Cloud Migration & Data Lake',
      badge: '40% Time Reduction',
      description: 'Architected end-to-end migration pipelines converting legacy on-premise IBM DB2 databases to AWS PostgreSQL using AWS Glue Spark jobs and Lambda triggers for automated data restructuring into Amazon S3.',
      metrics: ['40% Execution Savings', 'AWS Serverless', 'Power BI Integration'],
      techStack: ['AWS Glue', 'PySpark', 'AWS Lambda', 'AWS PostgreSQL', 'S3', 'Power BI'],
      color: '#F59E0B'
    }
  ];

  return (
    <section id="projects" className="section bg-[#07090e] relative">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Innovation</span>
          </div>
          <h2 className="section-title">
            Key Architectural <span className="gradient-text-emerald">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            High-impact platforms built for enterprise banking operations, AI automation, 
            and large-scale cloud data migrations.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="glass-card p-8 flex flex-col justify-between group hover:border-[#00F5A0]/50"
            >
              <div>
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#94A3B8]">{project.category}</span>
                  <span 
                    className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full"
                    style={{ backgroundColor: `${project.color}15`, color: project.color, border: `1px solid ${project.color}35` }}
                  >
                    {project.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-extrabold text-xl text-white mb-3 group-hover:text-[#00F5A0] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Metrics Pill Grid */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.metrics.map((metric, mIdx) => (
                    <span 
                      key={mIdx}
                      className="px-3 py-1 rounded-md bg-black/40 border border-white/10 text-xs font-mono text-white/90"
                    >
                      ⚡ {metric}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack Footer */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tag-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-xs font-mono text-[#00F5A0] flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>Architecture Verified</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
