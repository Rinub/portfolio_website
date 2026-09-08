import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function EducationCertifications() {
  const education = [
    {
      degree: "M.Sc in Data Analytics",
      institution: "National College of Ireland",
      location: "Dublin, Ireland",
      period: "Jan 2021 – Jan 2022",
      coursework: "Data Science, Deep Learning, Machine Learning, Programming for Data Science, Statistics & Quantitative Methods, SQL/NoSQL, Business Intelligence."
    },
    {
      degree: "Bachelor of Engineering (B.E.)",
      institution: "Sri Ramakrishna Engineering College",
      location: "Tamil Nadu, India",
      period: "Aug 2016 – May 2020",
      coursework: "Data Structures & Algorithms, Linear Algebra, C Programming, Embedded Programming, Probability & Random Processes."
    }
  ];

  const certifications = [
    {
      title: "IBM Data Science Professional",
      issuer: "Coursera / IBM",
      year: "2021",
      badge: "Professional Certificate"
    },
    {
      title: "Building ML Pipelines in PySpark MLlib",
      issuer: "Coursera / Databricks",
      year: "2022",
      badge: "Big Data & ML"
    },
    {
      title: "Certification in C Programming",
      issuer: "Bharathidasan University",
      year: "2016",
      badge: "Systems Programming"
    },
    {
      title: "Data Analysis using Pandas & Python",
      issuer: "Udemy",
      year: "2017",
      badge: "Data Analysis"
    }
  ];

  return (
    <section id="education" className="section bg-[#0b0e17] relative">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text-azure">Certifications</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Advanced academic qualification in Data Analytics coupled with continuous 
            specialization in big data ML pipelines and software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-heading font-extrabold text-white flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-[#00F5A0]" />
              Academic Qualifications
            </h3>

            {education.map((edu, idx) => (
              <div key={idx} className="glass-card p-6 border border-white/10 hover:border-[#00F5A0]/40">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="text-lg font-bold font-heading text-white">
                    {edu.degree}
                  </h4>
                  <span className="flex items-center gap-1 text-xs font-mono text-[#00F5A0] bg-[#00F5A0]/10 px-2.5 py-1 rounded-full border border-[#00F5A0]/20">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </span>
                </div>

                <div className="text-sm font-semibold text-[#00D2FF] mb-3">
                  {edu.institution} • <span className="text-[#94A3B8] font-normal">{edu.location}</span>
                </div>

                <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-xs text-[#94A3B8] leading-relaxed">
                  <strong className="text-white font-mono">Relevant Coursework:</strong> {edu.coursework}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-heading font-extrabold text-white flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-[#F59E0B]" />
              Verified Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="glass-card p-5 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
                      <h4 className="text-sm font-bold font-heading text-white">
                        {cert.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#94A3B8] font-mono">
                      {cert.issuer} ({cert.year})
                    </p>
                  </div>

                  <span className="text-[10px] font-mono font-semibold px-2 py-1 rounded bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/30 shrink-0">
                    {cert.badge}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
