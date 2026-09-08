import React from 'react';
import { UserCheck, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function SummarySection() {
  const summaryPoints = [
    {
      bold: "Ireland Work Authorization — Stamp 4 Visa",
      text: "Holds Stamp 4 Visa status in Ireland. Fully authorized for immediate full-time employment without requiring visa sponsorship or work permits."
    },
    {
      bold: "Data & Application Engineering Expertise",
      text: "5+ years of expertise in designing scalable batch/real-time data pipelines and internal automation tools for fintech (Citi) and healthcare domains. Proficient in Python, PySpark, Kafka, Snowflake, and AWS."
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
    }
  ];

  return (
    <section id="summary" className="py-20 bg-[#0b0e17] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/30 text-[#00F5A0] text-xs font-mono font-semibold uppercase mb-3">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Professional Overview</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              Executive <span className="gradient-text-azure">Summary</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1.5 rounded-lg bg-[#00F5A0]/15 border border-[#00F5A0]/40 text-[#00F5A0] font-mono text-xs font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00F5A0]" />
              Stamp 4 Visa (No Sponsorship Req.)
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] font-mono text-xs font-semibold">
              AVP @ Citi
            </span>
          </div>
        </div>

        {/* Executive Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {summaryPoints.map((point, idx) => (
            <div 
              key={idx} 
              className={`glass-card p-6 border transition-all ${
                idx === 0 
                  ? 'border-[#00F5A0]/50 bg-[#00F5A0]/[0.03] shadow-[0_0_20px_rgba(0,245,160,0.15)]' 
                  : 'border-white/10 hover:border-[#00D2FF]/40'
              }`}
            >
              <div className="flex items-start gap-3">
                {idx === 0 ? (
                  <ShieldCheck className="w-5 h-5 text-[#00F5A0] shrink-0 mt-1" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-[#00F5A0] shrink-0 mt-1" />
                )}
                <div>
                  <h3 className="font-heading font-extrabold text-base text-white mb-2">
                    {point.bold}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
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
