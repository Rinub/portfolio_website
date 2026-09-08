import React, { useState } from 'react';
import { Cpu, Database, Server, Terminal, Cloud, ShieldCheck, Search, Code, Check } from 'lucide-react';

export default function SkillsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Cloud & AWS Architecture',
    'Big Data & Streaming',
    'Web & AI Frameworks',
    'Databases & Storage',
    'CI/CD & DevOps'
  ];

  const skillGroups = [
    {
      category: 'Cloud & AWS Architecture',
      name: 'AWS Cloud Ecosystem',
      icon: Cloud,
      color: '#00D2FF',
      skills: ['AWS Glue', 'AWS S3', 'AWS EMR', 'AWS RDS', 'AWS EC2', 'AWS Lambda', 'AWS IAM', 'AWS Athena', 'Cloud Native']
    },
    {
      category: 'Big Data & Streaming',
      name: 'Distributed Big Data',
      icon: Cpu,
      color: '#00F5A0',
      skills: ['PySpark', 'Apache Spark', 'Apache Kafka', 'Hadoop / HDFS', 'Hive', 'Snowflake', 'Airflow', 'Apache Sqoop']
    },
    {
      category: 'Web & AI Frameworks',
      name: 'Backend & AI Integration',
      icon: Server,
      color: '#8B5CF6',
      skills: ['FastAPI', 'Flask', 'Django', 'Devin AI UI', 'LangGraph', 'Gemini API', 'PySpark MLlib', 'RESTful APIs', 'Python 3.x']
    },
    {
      category: 'Databases & Storage',
      name: 'Enterprise Database Systems',
      icon: Database,
      color: '#F59E0B',
      skills: ['Snowflake Data Warehouse', 'PostgreSQL', 'Oracle DB', 'MySQL', 'MongoDB', 'MS SQL Server', 'IBM DB2', 'PL/SQL', 'Complex DDL/DML']
    },
    {
      category: 'CI/CD & DevOps',
      name: 'Automation & Operations',
      icon: Terminal,
      color: '#EC4899',
      skills: ['Harness', 'Jenkins', 'OpenShift', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'JFrog', 'Bitbucket / Git', 'Unix/Linux Shell']
    }
  ];

  const filteredGroups = skillGroups.filter(group => {
    const categoryMatch = selectedCategory === 'All' || group.category === selectedCategory;
    const searchMatch = searchQuery === '' || 
      group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  return (
    <section id="skills" className="section relative bg-[#0b0e17]">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="section-tag">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="section-title">
            Technical <span className="gradient-text-azure">Skills & Stack</span> Matrix
          </h2>
          <p className="section-subtitle mx-auto">
            Comprehensive breakdown of distributed big data tools, AWS cloud services, 
            web microservices, and AI workflow integration.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#00F5A0] text-[#04120C] font-bold shadow-[0_0_15px_rgba(0,245,160,0.3)]'
                    : 'bg-white/5 text-[#94A3B8] hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. PySpark)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full bg-black/40 border border-white/15 text-xs text-white placeholder-[#64748B] focus:border-[#00F5A0] focus:outline-none transition-colors"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div key={idx} className="glass-card p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${group.color}15`, border: `1px solid ${group.color}30` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: group.color }} />
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-white text-base">
                        {group.name}
                      </h3>
                      <p className="text-xs text-[#94A3B8] font-mono">{group.category}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {group.skills.map((skill) => {
                      const isHighlighted = searchQuery && skill.toLowerCase().includes(searchQuery.toLowerCase());
                      return (
                        <span
                          key={skill}
                          className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                            isHighlighted
                              ? 'bg-[#00F5A0] text-[#04120C] font-bold shadow-[0_0_10px_#00F5A0]'
                              : 'bg-white/[0.04] border border-white/10 text-white/90 hover:border-white/30'
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/40">
                  <span>Verified Competency</span>
                  <span className="text-[#00F5A0]">✓ Production Grade</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
