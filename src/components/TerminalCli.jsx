import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Trash2, Shield } from 'lucide-react';

export default function TerminalCli() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'Ibrahim Rinub Babu Interactive Shell v2.4.0 (x86_64-citi-aws-emr)'
    },
    {
      type: 'system',
      text: 'Type "help" or click any prompt chip below to execute commands.'
    }
  ]);

  const terminalBodyRef = useRef(null);
  const isInitialMount = useRef(true);

  const commandChips = ['help', 'citi', 'aws', 'ai', 'skills', 'contact'];

  useEffect(() => {
    // Only scroll the internal terminal container when user inputs a command, avoiding window scroll
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'user', text: `$ ${cmdStr}` }];

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let response = '';

    switch (trimmed) {
      case 'help':
        response = `Available Commands:
  • citi        - Details on AVP AWS Data Engineer accomplishments at Citi
  • aws         - AWS Cloud Architecture & Infrastructure Stack (Glue, S3, EMR, RDS)
  • ai          - Devin UI, Gemini API & Agentic Text-to-SQL system summary
  • skills      - Complete list of programming, database & DevOps technologies
  • contact     - Direct contact numbers, email & location
  • clear       - Clear terminal history`;
        break;

      case 'citi':
        response = `[CITI BANK - AVP AWS Data Engineer & App Developer | Dublin, Ireland]
  • Onboarded real-time Kafka streams, Java PCP configurations, Snowflake connectors & DDLs.
  • Built "One Click" Platform: Cut pipeline setup from 2 days to <30 minutes.
  • Engineered Schema Comparison Tool: Detected Kafka schema drift with 95% consistency.
  • Query Tuning: Optimized Snowflake & Oracle SQL scripts by 30-40% compute cost reduction.
  • Migrated legacy Hive scripts to PySpark (2x performance boost).`;
        break;

      case 'aws':
        response = `[AWS CLOUD ARCHITECTURE STACK]
  • Compute & Big Data: AWS EMR (Spark/Hadoop clusters), EC2, Lambda, Glue ETL jobs.
  • Databases & Storage: AWS RDS (PostgreSQL), Athena, S3 Data Lake, Redshift, DynamoDB.
  • DevOps & Deployment: Terraform, Docker, Kubernetes (EKS), Harness, OpenShift.`;
        break;

      case 'ai':
        response = `[AI & AUTOMATION ENGINEERING]
  • AI Development: Intensive usage of Devin UI for rapid microservice & backend scaffolding.
  • Agentic Systems: Designed Self-Healing Text-to-SQL system using LangGraph & Gemini API.
  • Automation: FastAPI, Flask & Django tools reducing manual team overhead by 40%.`;
        break;

      case 'skills':
        response = `[TECHNICAL SKILLS MATRIX]
  • Languages    : Python, SQL, PySpark, PL/SQL, Shell Scripting, Java
  • Cloud & Data : AWS (EMR, Glue, S3, RDS, Lambda), Snowflake, Kafka, Airflow, Hadoop
  • Web & APIs   : FastAPI, Flask, Django, React, RESTful APIs
  • Databases    : PostgreSQL, Oracle, MySQL, MongoDB, MS SQL Server
  • CI/CD        : Harness, Jenkins, OpenShift, Docker, Terraform, Git, Bitbucket`;
        break;

      case 'contact':
        response = `[CONTACT DETAILS]
  • Email    : rinubibrahim@gmail.com
  • Phone    : +353 892081811
  • Status   : Stamp 4 Visa Holder (No Sponsorship Required)
  • LinkedIn : https://www.linkedin.com/in/ibrahimbabu/
  • GitHub   : https://github.com/Rinub
  • Location : Dublin, Ireland`;
        break;

      default:
        response = `Command not recognized: "${cmdStr}". Type "help" for a list of commands.`;
        break;
    }

    newHistory.push({ type: 'output', text: response });
    setHistory(newHistory);
    setInputVal('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <section id="terminal" className="py-20 bg-[#07090e] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/30 text-[#00F5A0] text-xs font-mono font-semibold uppercase mb-3">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Interactive CLI Shell</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mb-3">
            Developer <span className="gradient-text-azure">Command Line</span> Interface
          </h2>
          <p className="text-sm text-slate-400 mx-auto">
            Interact directly with Ibrahim's portfolio system via terminal commands. 
            Type custom queries or click the quick action chips below.
          </p>
        </div>

        {/* Terminal Card */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#080B11] border border-white/15 shadow-2xl overflow-hidden backdrop-blur-xl">
          
          {/* Top Bar */}
          <div className="px-4 py-3 bg-[#0d111a] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#00F5A0]" />
                rinub@citi-aws-node:~$
              </span>
            </div>

            <button
              onClick={() => handleCommand('clear')}
              className="p-1.5 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              title="Clear terminal"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Preset Quick Chips */}
          <div className="px-4 py-2.5 bg-black/40 border-b border-white/5 flex items-center gap-2 overflow-x-auto">
            <span className="text-[11px] font-mono text-slate-500 shrink-0">Quick Chips:</span>
            {commandChips.map((chip) => (
              <button
                key={chip}
                onClick={() => handleCommand(chip)}
                className="px-2.5 py-1 rounded bg-white/5 hover:bg-[#00F5A0]/15 border border-white/10 hover:border-[#00F5A0]/40 text-xs font-mono text-[#00F5A0] transition-colors shrink-0"
              >
                ${chip}
              </button>
            ))}
          </div>

          {/* Terminal Screen Body */}
          <div ref={terminalBodyRef} className="p-5 h-[320px] overflow-y-auto font-mono text-xs space-y-3">
            {history.map((item, idx) => (
              <div key={idx}>
                {item.type === 'user' && (
                  <div className="text-[#00F5A0] font-bold">{item.text}</div>
                )}
                {item.type === 'system' && (
                  <div className="text-[#00D2FF]">{item.text}</div>
                )}
                {item.type === 'output' && (
                  <pre className="text-slate-200 whitespace-pre-wrap leading-relaxed">
                    {item.text}
                  </pre>
                )}
              </div>
            ))}
          </div>

          {/* Command Input Form */}
          <form onSubmit={onSubmit} className="px-4 py-3 bg-[#0d111a] border-t border-white/10 flex items-center gap-2">
            <span className="font-mono text-[#00F5A0] text-sm font-bold">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type command ('help', 'citi', 'aws', 'skills', 'contact')..."
              className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder-slate-500"
            />
            <button
              type="submit"
              className="p-2 rounded bg-[#00F5A0]/10 hover:bg-[#00F5A0]/20 border border-[#00F5A0]/30 text-[#00F5A0] transition-colors"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
