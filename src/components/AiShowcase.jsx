import React, { useState } from 'react';
import { Sparkles, Bot, Terminal, CheckCircle, RefreshCw, Cpu, Database, Zap, Shield, Play } from 'lucide-react';

export default function AiShowcase() {
  const [queryInput, setQueryInput] = useState("Show top 5 Citi users with pipeline processing errors in Dublin");
  const [simState, setSimState] = useState('idle'); // idle, processing, healed, complete
  const [simOutput, setSimOutput] = useState(null);

  const runSimulation = () => {
    setSimState('processing');
    setSimOutput(null);

    setTimeout(() => {
      setSimState('healed');
      setTimeout(() => {
        setSimState('complete');
        setSimOutput({
          initialSql: "SELECT user_id, error_count FROM users WHERE city = 'Dublin' GROUP BY user_id HAVING error_count > 0;",
          errorDetected: "OperationalError: column 'error_count' does not exist in table 'users'. Did you mean 'pipeline_failures'?",
          healedSql: `SELECT u.user_id, u.user_name, COUNT(p.failure_id) AS pipeline_failures
FROM citi_users u
JOIN pcp_failures p ON u.user_id = p.user_id
WHERE u.location = 'Dublin'
GROUP BY u.user_id, u.user_name
ORDER BY pipeline_failures DESC
LIMIT 5;`,
          results: [
            { id: "USR-9921", name: "Alpha_Trader_Group", failures: 42, latency: "14ms" },
            { id: "USR-4810", name: "EMEA_Clearance_Ops", failures: 28, latency: "19ms" },
            { id: "USR-1092", name: "Global_Payments_DB", failures: 19, latency: "12ms" },
            { id: "USR-8821", name: "Risk_Analytics_Svc", failures: 11, latency: "16ms" },
            { id: "USR-3301", name: "Compliance_Monitor", failures: 7, latency: "10ms" }
          ]
        });
      }, 1400);
    }, 1200);
  };

  return (
    <section id="ai-showcase" className="section relative bg-[#0b0e17]">
      <div className="ambient-glow glow-center" />

      <div className="container relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI-Assisted & Agentic Engineering</span>
          </div>
          <h2 className="section-title">
            Self-Healing <span className="gradient-text-emerald">Text-to-SQL & Devin UI</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Leveraging state-of-the-art LLMs (Google Gemini API, LangGraph, Devin UI) 
            to create resilient, self-correcting database query engines and automated software workflows.
          </p>
        </div>

        {/* Live Interactive Agentic Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Controls & Input Column */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Bot className="w-5 h-5 text-[#00F5A0]" />
                <h3 className="font-heading font-extrabold text-xl text-white">
                  Agentic Text-to-SQL Simulator
                </h3>
              </div>

              <p className="text-xs text-[#94A3B8] mb-6 leading-relaxed">
                Test the self-healing workflow. When the initial generated query throws a schema error, 
                the agentic loop catches the traceback, re-inspects DDL metadata, and automatically patches the query.
              </p>

              <label className="block text-xs font-mono text-white/80 mb-2">
                Natural Language Query Input:
              </label>
              <div className="relative mb-4">
                <input
                  type="text"
                  value={queryInput}
                  onChange={(e) => setQueryInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white font-mono text-xs focus:border-[#00F5A0] focus:outline-none transition-colors"
                />
              </div>

              <div className="flex items-center gap-3 mb-6">
                <button
                  onClick={runSimulation}
                  disabled={simState === 'processing' || simState === 'healed'}
                  className="btn btn-primary w-full text-xs py-3 flex items-center justify-center gap-2"
                >
                  {simState === 'processing' || simState === 'healed' ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-[#04120C]" />
                      <span>Executing Self-Healing Loop...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 text-[#04120C]" />
                      <span>Run Agent Execution</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-2 font-mono text-[11px]">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/30 border border-white/5">
                  <span className="text-white/60">LLM Engine:</span>
                  <span className="text-[#00D2FF]">Google Gemini API</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/30 border border-white/5">
                  <span className="text-white/60">State Graph:</span>
                  <span className="text-[#00F5A0]">LangGraph Self-Healing Agent</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/30 border border-white/5">
                  <span className="text-white/60">Development UI:</span>
                  <span className="text-[#F59E0B]">Devin AI Interface</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#94A3B8]">
              <Shield className="w-4 h-4 text-[#00F5A0]" />
              <span>Zero manual SQL debugging required</span>
            </div>
          </div>

          {/* Interactive Agent Terminal Execution View */}
          <div className="lg:col-span-7 rounded-2xl bg-[#080B11] border border-white/10 overflow-hidden flex flex-col">
            <div className="px-4 py-3 bg-[#0d111a] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-[#00F5A0]" />
                <span className="font-mono text-xs text-white font-semibold">
                  LangGraph Agent Execution Monitor
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00F5A0]/10 text-[#00F5A0] border border-[#00F5A0]/30">
                {simState === 'idle' && 'READY'}
                {simState === 'processing' && 'LLM GENERATING'}
                {simState === 'healed' && 'SELF-HEALING DETECTED'}
                {simState === 'complete' && 'EXECUTION SUCCESSFUL'}
              </span>
            </div>

            <div className="p-5 font-mono text-xs overflow-y-auto flex-1 space-y-4">
              {simState === 'idle' && (
                <div className="text-center py-16 text-[#64748B]">
                  <Terminal className="w-8 h-8 mx-auto mb-3 opacity-40" />
                  <p>Click "Run Agent Execution" to watch the self-healing SQL loop in action.</p>
                </div>
              )}

              {(simState === 'processing' || simState === 'healed' || simState === 'complete') && (
                <div className="space-y-3">
                  <div className="text-[#94A3B8]">
                    <span className="text-[#00D2FF]">[STEP 1]</span> Prompt Received: "{queryInput}"
                  </div>

                  <div className="text-[#94A3B8]">
                    <span className="text-[#00D2FF]">[STEP 2]</span> Querying Gemini API for SQL generation...
                  </div>
                </div>
              )}

              {(simState === 'healed' || simState === 'complete') && (
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
                    <div className="font-bold text-[11px] mb-1">⚠ Initial Query Error (Schema Drift):</div>
                    <code className="text-[11px]">SELECT user_id, error_count FROM users...</code>
                    <div className="text-[10px] opacity-80 mt-1">
                      OperationalError: column 'error_count' does not exist in table 'users'.
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#00F5A0]/10 border border-[#00F5A0]/30 text-[#00F5A0]">
                    <div className="font-bold text-[11px] mb-1 flex items-center gap-1.5">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      Self-Healing Agent Intercepted Traceback:
                    </div>
                    <div className="text-[11px] text-white/90">
                      Re-fetching DDL schema $\rightarrow$ Discovered table 'pcp_failures' $\rightarrow$ Injecting corrected JOIN clause.
                    </div>
                  </div>
                </div>
              )}

              {simState === 'complete' && simOutput && (
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-black/60 border border-white/10 text-[#00F5A0]">
                    <div className="text-[10px] text-white/60 mb-1">✓ Patched SQL Query:</div>
                    <pre className="text-[11px] overflow-x-auto text-[#00F5A0] leading-relaxed">
                      <code>{simOutput.healedSql}</code>
                    </pre>
                  </div>

                  {/* Results Table */}
                  <div>
                    <div className="text-xs font-semibold text-white mb-2">Query Execution Results:</div>
                    <div className="border border-white/10 rounded-lg overflow-hidden">
                      <table className="w-full text-left text-[11px]">
                        <thead className="bg-[#0d111a] text-[#94A3B8] border-b border-white/10">
                          <tr>
                            <th className="p-2">User ID</th>
                            <th className="p-2">Client Name</th>
                            <th className="p-2">PCP Failures</th>
                            <th className="p-2">Query Latency</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-white/90">
                          {simOutput.results.map((row) => (
                            <tr key={row.id} className="hover:bg-white/[0.02]">
                              <td className="p-2 font-mono text-[#00D2FF]">{row.id}</td>
                              <td className="p-2">{row.name}</td>
                              <td className="p-2 font-bold text-[#F59E0B]">{row.failures}</td>
                              <td className="p-2 font-mono text-[#00F5A0]">{row.latency}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6">
            <div className="w-12 h-12 rounded-xl bg-[#00F5A0]/10 border border-[#00F5A0]/30 flex items-center justify-center mb-4">
              <Bot className="w-6 h-6 text-[#00F5A0]" />
            </div>
            <h3 className="font-heading font-extrabold text-lg text-white mb-2">
              Devin UI Development
            </h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Utilizing autonomous AI engineering agents (Devin UI) to scaffold microservices, 
              generate unit test suites, and write boilerplate ETL adapters with rapid speed.
            </p>
          </div>

          <div className="glass-card p-6">
            <div className="w-12 h-12 rounded-xl bg-[#00D2FF]/10 border border-[#00D2FF]/30 flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-[#00D2FF]" />
            </div>
            <h3 className="font-heading font-extrabold text-lg text-white mb-2">
              LangGraph & Gemini API
            </h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Designing stateful graph workflows with error-retry loops that parse runtime tracebacks 
              and correct natural language to SQL parameters in real time.
            </p>
          </div>

          <div className="glass-card p-6">
            <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-[#F59E0B]" />
            </div>
            <h3 className="font-heading font-extrabold text-lg text-white mb-2">
              Internal Pipeline Automation
            </h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Combining FastAPI backends with AI automation to build internal tools 
              that cut pipeline onboarding times by 80% across enterprise teams.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
