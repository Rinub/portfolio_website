import React from 'react';
import { UserCheck, CheckCircle2, Shield, Award, Sparkles } from 'lucide-react';

export default function SummarySection() {
  const summaryPoints = [
    {
      bold: "Data & Application Engineering Expertise",
      text: "5+ years of expertise in designing scalable batch/real-time data pipelines and internal automation tools for fintech (Citi) and healthcare domains. Proficient in Python, PySpark, Kafka, Snowflake, and AWS, focusing on system performance, reliability, and automation."
    },
    {
      bold: "Internal Tooling & Workflow Automation",
      text: "Built internal microservice platforms (FastAPI, Django, Flask) to automate pipeline onboarding, schema validation, and API-driven data delivery, reducing manual operational effort by 40%."
    },
    {
      bold: "Snowflake & Cloud Warehouse Specialist",
      text: "Designed high-throughput data warehouses with query tuning, stored procedures, real-time ingestion streams, and automated schema monitoring for data contract integrity."
    },
    {
      bold: "Distributed Clusters & ML Pipelines",
      text: "Deployed Hadoop/Spark clusters on AWS EMR and Cloudera, developing ML pipelines with PySpark MLlib for feature engineering and stock recommendation systems."
    },
    {
      bold: "CI/CD & DevOps Automation",
      text: "Streamlined CI/CD pipelines using Harness, Jenkins, OpenShift, Docker, and Terraform, automating cloud infrastructure and deployment reliability."
    },
    {
      bold: "AI-Assisted Development & Agentic Systems",
      text: "Intensive usage of Devin UI for rapid microservice development, and builder of stateful self-healing Text-to-SQL agents (LangGraph + Gemini 3.6 Flash API)."
    }
  ];

  return (
    <section id="summary" className="section bg-[#0b0e17] relative border-t border-white/10">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
          <div>
            <div className="section-tag">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Professional Overview</span>
            </div>
            <h2 className="section-title mb-2">
              Executive <span className="gradient-text-azure">Summary</span>
            </h2>
            <p className="text-sm text-[#94A3B8] max-w-xl">
              High-concurrency data engineering, AWS cloud architecture, and AI automation background.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/30 text-[#00F5A0] font-mono text-xs font-semibold">
              5+ Years Experience
            </span>
            <span className="px-3 py-1 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] font-mono text-xs font-semibold">
              AVP @ Citi
            </span>
          </div>
        </div>

        {/* Executive Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {summaryPoints.map((point, idx) => (
            <div key={idx} className="glass-card p-6 border border-white/10 hover:border-[#00D2FF]/40">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00F5A0] shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-extrabold text-base text-white mb-2">
                    {point.bold}
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {point.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
