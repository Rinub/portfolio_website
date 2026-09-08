import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Award, Building, Sparkles } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      role: "AWS Data Engineer & Application Developer",
      titleBadge: "Assistant Vice President (AVP)",
      company: "Citi",
      location: "Dublin, Ireland",
      period: "May 2023 – Present",
      isCurrent: true,
      color: "#00F5A0",
      achievements: [
        {
          bold: "Citi 'One Click' Platform",
          text: "Built an internal end-to-end automation platform across Kafka, Java PCP configs, Snowflake/Oracle DDLs, and CI/CD pipelines, cutting onboarding time from 2 days to under 30 minutes."
        },
        {
          bold: "Kafka & Real-Time Data Streams",
          text: "Onboarded multiple real-time pipelines by configuring Kafka topics, updating Java configs, deploying Snowflake connectors, DDLs, stored procedures, and secured client views."
        },
        {
          bold: "Automated Schema Drift Engine",
          text: "Engineered a Schema Comparison Tool detecting schema drift across Kafka topics with automated alerts, boosting schema consistency by 95%."
        },
        {
          bold: "Snowflake & Oracle Query Tuning",
          text: "Optimized complex SQL DDL/DML, tasks, and streams, leading to a 30–40% performance boost and substantial compute cost savings."
        },
        {
          bold: "PySpark ETL Migration",
          text: "Migrated legacy Hive scripts to PySpark on AWS, doubling data processing speed and enhancing maintainability."
        },
        {
          bold: "CI/CD & PROD Change Leadership",
          text: "Led Harness, OpenShift, Bitbucket & JFrog CI/CD setups reducing PROD issues by 60%, while serving as Change Coordinator maintaining 100% PROD compliance."
        }
      ],
      techStack: ["AWS", "PySpark", "Kafka", "Snowflake", "FastAPI", "Flask", "Harness", "OpenShift", "Oracle", "Docker"]
    },
    {
      role: "Database Engineer",
      titleBadge: "Data Migration & Analytics",
      company: "HAS",
      location: "Dublin, Ireland",
      period: "Jan 2022 – Mar 2023",
      isCurrent: false,
      color: "#00D2FF",
      achievements: [
        {
          bold: "AWS Database Migration",
          text: "Migrated on-premise IBM DB2 databases to AWS PostgreSQL using AWS Glue Spark jobs and Lambda automation, cutting execution time by 40%."
        },
        {
          bold: "OCR Text Mining Pipeline",
          text: "Developed an internal image text-mining OCR ETL pipeline using Python, Flask, and Pytesseract, reducing manual data entry workload significantly."
        },
        {
          bold: "Power BI & Flask Data API",
          text: "Constructed executive Power BI dashboards with secured Flask REST APIs for fine-grained data access control."
        },
        {
          bold: "S3 Data Lake Backups",
          text: "Implemented automated ETL backup pipelines using Pandas, NumPy, and AWS EC2 instances to load transformed dataset backups into Amazon S3."
        }
      ],
      techStack: ["AWS Glue", "PostgreSQL", "IBM DB2", "AWS Lambda", "Flask", "Pytesseract", "Power BI", "Python", "S3"]
    },
    {
      role: "Data Engineer",
      titleBadge: "Big Data & ML Infrastructure",
      company: "Office Partners 360",
      location: "Tamil Nadu, India",
      period: "Apr 2019 – Dec 2020",
      isCurrent: false,
      color: "#F59E0B",
      achievements: [
        {
          bold: "Streaming ETL on AWS EMR",
          text: "Built real-time PySpark streaming ETL pipelines on Hadoop/EMR clusters, ingesting streaming data into Snowflake and Redshift data warehouses."
        },
        {
          bold: "PySpark MLlib Recommendation Engine",
          text: "Engineered machine learning pipelines using PySpark MLlib to predict optimal stock ordering quantities, minimizing inventory costs."
        },
        {
          bold: "Kubernetes & Docker Deployment",
          text: "Containerized Spark clusters and visualization dashboards using Docker and Kubernetes deployed on AWS EC2."
        }
      ],
      techStack: ["PySpark", "Apache Spark", "AWS EMR", "Snowflake", "Redshift", "Kafka", "Hadoop", "Docker", "Kubernetes"]
    }
  ];

  return (
    <section id="experience" className="section relative bg-[#07090e]">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Progression</span>
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text-emerald">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto">
            5+ years driving high-concurrency data platforms, cloud migrations, and executive leadership at major institutions like Citi.
          </p>
        </div>

        {/* Timeline Cards Container */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {experiences.map((exp, idx) => (
            <div key={idx} className="glass-card p-8 transition-all hover:border-[#00F5A0]/40">
              
              {/* Top Row Info */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-mono font-semibold"
                      style={{ backgroundColor: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}35` }}
                    >
                      {exp.titleBadge}
                    </span>
                    {exp.isCurrent && (
                      <span className="flex items-center gap-1.5 text-xs font-mono text-[#00F5A0]">
                        <span className="w-2 h-2 rounded-full bg-[#00F5A0] animate-pulse" />
                        Current Role
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-extrabold font-heading text-white">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-[#00D2FF] font-semibold mt-1">
                    <Building className="w-4 h-4" />
                    <span>{exp.company}</span>
                    <span className="text-white/30">•</span>
                    <MapPin className="w-4 h-4 text-[#94A3B8]" />
                    <span className="text-[#94A3B8] font-normal">{exp.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-[#94A3B8]">
                  <Calendar className="w-3.5 h-3.5 text-[#00F5A0]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Achievement Bullets */}
              <div className="space-y-4 mb-6">
                {exp.achievements.map((item, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-3 text-sm text-[#94A3B8]">
                    <CheckCircle2 className="w-4 h-4 text-[#00F5A0] shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      <strong className="text-white">{item.bold}:</strong> {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
                <span className="text-xs font-mono text-white/50 mr-2">Technologies:</span>
                {exp.techStack.map((tech) => (
                  <span key={tech} className="tag-badge">
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
