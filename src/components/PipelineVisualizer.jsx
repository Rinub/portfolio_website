import React, { useState } from 'react';
import { Database, Cpu, Layers, Server, Activity, ArrowRight, CheckCircle2, Code2, Terminal, RefreshCw, Zap } from 'lucide-react';

export default function PipelineVisualizer() {
  const [activeNodeId, setActiveNodeId] = useState('spark');

  const nodes = [
    {
      id: 'kafka',
      title: 'Real-Time Ingestion',
      subtitle: 'Apache Kafka & Events',
      icon: Activity,
      color: '#00F5A0',
      badge: 'Streaming',
      metrics: '10M+ Msg/Day',
      description: 'Ingests real-time banking & transactional streams across multi-partition Kafka topics with automated schema registry validation.',
      codeSnippet: `# Kafka Topic Onboarding & Schema Validation Config
from confluent_kafka import Consumer, KafkaError
import json

kafka_config = {
    'bootstrap.servers': 'aws-kafka-cluster.citi.internal:9092',
    'group.id': 'citi-realtime-analytics',
    'auto.offset.reset': 'earliest'
}

def consume_event_stream(topic_name):
    consumer = Consumer(kafka_config)
    consumer.subscribe([topic_name])
    print(f"Subscribed to real-time topic: {topic_name}")
    # Schema drift monitoring active
`
    },
    {
      id: 'spark',
      title: 'Distributed Compute',
      subtitle: 'PySpark & AWS EMR',
      icon: Cpu,
      color: '#00D2FF',
      badge: '2x Performance Boost',
      metrics: 'Distributed Processing',
      description: 'Migrated legacy Hive ETLs to PySpark on AWS EMR. Performs feature engineering, complex window aggregations, and automated partition pruning.',
      codeSnippet: `# PySpark High-Performance ETL Job (Migrated from legacy Hive)
from pyspark.sql import SparkSession
from pyspark.sql.functions import col, window, expr

spark = SparkSession.builder \\
    .appName("Citi-Realtime-PCP-Aggregation") \\
    .config("spark.sql.shuffle.partitions", "200") \\
    .getOrCreate()

df = spark.readStream \\
    .format("kafka") \\
    .option("kafka.bootstrap.servers", "aws-kafka-cluster:9092") \\
    .load()

# Real-time window aggregation boosting throughput by 200%
processed_df = df.selectExpr("CAST(value AS STRING)") \\
    .withColumn("parsed", expr("from_json(value, 'timestamp TIMESTAMP, amount DOUBLE')"))
`
    },
    {
      id: 'snowflake',
      title: 'Enterprise Warehouse',
      subtitle: 'Snowflake & PostgreSQL',
      icon: Database,
      color: '#F59E0B',
      badge: 'Query Optimized',
      metrics: '30-40% Cost Savings',
      description: 'Designed scalable Snowflake data warehouses with automated tasks, streams, stored procedures, and secured views delivering client-ready data.',
      codeSnippet: `-- Snowflake Automated Data Ingestion Stream & Stored Proc
CREATE OR REPLACE STREAM citi_transaction_stream ON TABLE raw_transactions;

CREATE OR REPLACE PROCEDURE sp_curate_banking_data()
RETURNS STRING
LANGUAGE SQL
AS
$$
BEGIN
    INSERT INTO curated_transactions
    SELECT 
        transaction_id,
        user_id,
        amount,
        CURRENT_TIMESTAMP() AS processed_at
    FROM citi_transaction_stream
    WHERE amount IS NOT NULL;
    RETURN 'SUCCESS';
END;
$$;
`
    },
    {
      id: 'api',
      title: 'AI & Data Delivery',
      subtitle: 'FastAPI, Devin & Agents',
      icon: Server,
      color: '#8B5CF6',
      badge: '<30 Min Onboarding',
      metrics: 'API & Agent Integration',
      description: 'Internal "One Click" automation platform and Agentic Text-to-SQL self-healing service delivering zero-touch data delivery to business clients.',
      codeSnippet: `# FastAPI Endpoint & Agentic Text-to-SQL Integration
from fastapi import FastAPI, BackgroundTasks
import sqlite3

app = FastAPI(title="Citi One-Click Data Delivery API")

@app.post("/api/v1/onboard-pipeline")
async def onboard_pipeline(payload: dict, background_tasks: BackgroundTasks):
    """
    Automates end-to-end Kafka setup, Snowflake DDL execution, 
    and CI/CD deployment in under 30 minutes.
    """
    background_tasks.add_task(execute_one_click_provisioning, payload)
    return {"status": "PROVISIONING_INITIATED", "execution_time_est": "18 minutes"}
`
    }
  ];

  const activeNode = nodes.find(n => n.id === activeNodeId) || nodes[0];

  return (
    <section id="architecture" className="section relative bg-[#07090e]">
      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Data Architecture</span>
          </div>
          <h2 className="section-title">
            Enterprise Distributed <span className="gradient-text-azure">Streaming Pipeline</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Click any node in the architecture diagram below to inspect the code snippets, 
            performance metrics, and AWS/Snowflake technologies powering the pipeline.
          </p>
        </div>

        {/* Pipeline Nodes Flow Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            const isActive = node.id === activeNodeId;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNodeId(node.id)}
                className={`text-left p-5 rounded-xl transition-all duration-300 relative border ${
                  isActive
                    ? 'bg-[#121826] border-[#00F5A0] shadow-[0_0_25px_rgba(0,245,160,0.2)] transform -translate-y-1'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                }`}
              >
                {/* Connector Arrow on desktop */}
                {index < nodes.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-20">
                    <div className="w-6 h-6 rounded-full bg-[#0d111a] border border-white/10 flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-[#94A3B8]" />
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between mb-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${node.color}15`, border: `1px solid ${node.color}30` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: node.color }} />
                  </div>
                  <span 
                    className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${node.color}20`, color: node.color }}
                  >
                    {node.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-white text-base mb-1">
                  {node.title}
                </h3>
                <p className="text-xs text-[#94A3B8] font-mono">
                  {node.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Node Details & Live Code Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
          
          {/* Left Description Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activeNode.color }} />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-white/70">
                  Node Details & Strategy
                </span>
              </div>

              <h3 className="text-2xl font-extrabold font-heading text-white mb-3">
                {activeNode.title}
              </h3>

              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                {activeNode.description}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-[#00F5A0]" />
                  <span>Key Impact: <strong className="text-[#00F5A0]">{activeNode.metrics}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
                  <span>Production Status: <strong className="text-white">Active & Scaled</strong></span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-[#94A3B8]">
              <span className="text-[#00F5A0]">$</span> citi-pipeline --inspect --node={activeNode.id}
              <div className="text-[11px] text-white/50 mt-1">
                ✓ Cluster health 100% | Latency &lt; 150ms
              </div>
            </div>
          </div>

          {/* Right Code Inspector Column */}
          <div className="lg:col-span-7">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#080B11]">
              <div className="px-4 py-2.5 bg-[#0d111a] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 font-mono text-xs text-[#94A3B8]">
                    {activeNode.id}_pipeline_executor.py
                  </span>
                </div>
                <Code2 className="w-4 h-4 text-[#00F5A0]" />
              </div>
              <pre className="p-5 font-mono text-xs text-[#E2E8F0] overflow-x-auto leading-relaxed">
                <code>{activeNode.codeSnippet}</code>
              </pre>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
