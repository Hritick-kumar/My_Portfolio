import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Copy, 
  Check, 
  Server, 
  Database, 
  Cloud, 
  Cpu, 
  Layers 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { copyToClipboard } from '../lib/utils';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';

export const HeroSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'flow' | 'code'>('flow');

  const handleCopyEmail = () => {
    copyToClipboard(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeSnippet = `const developer = {
  name: "Hritick Kumar",
  role: "Software Analyst · Full-Stack Developer",
  stack: ["React", "Node.js", "TypeScript", "Express"],
  database: ["MongoDB", "PostgreSQL", "Redis"],
  cloud: ["AWS EC2", "Nginx", "PM2", "Docker"],
  integrations: ["PayPal PPCP", "SnapTrade", "OAuth"],
  interests: ["AI/ML", "LLM APIs", "Automations"]
};`;

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Background ambient light gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[250px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Availability status badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-slate-300">
            {PERSONAL_INFO.status}
          </span>
        </div>

        {/* Main Headings */}
        <div className="max-w-3xl mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-4">
            Hi, I'm Hritick Kumar. <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              I build scalable web products and intelligent software.
            </span>
          </h1>

          <p className="text-xs sm:text-sm font-mono text-blue-400 tracking-wider uppercase mb-4">
            {PERSONAL_INFO.title}
          </p>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            {PERSONAL_INFO.subheadline}
          </p>
        </div>

        {/* Action Buttons & Social CTAs */}
        <div className="flex flex-wrap items-center gap-3.5 mb-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-blue-600/20 transition-all cursor-pointer"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 text-slate-200 text-xs sm:text-sm font-medium transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4 text-blue-400" />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 text-slate-200 text-xs sm:text-sm font-medium transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4 text-purple-400" />
            <span>Contact Me</span>
          </a>

          {/* Social Badges */}
          <div className="flex items-center gap-2 pl-2 border-l border-white/10">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] text-slate-400 hover:text-white transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] text-slate-400 hover:text-white transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] text-slate-300 text-xs font-mono transition-all cursor-pointer"
              title="Click to copy email address"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copied ? "Copied Email!" : "Copy Email"}</span>
            </button>
          </div>
        </div>

        {/* Interactive Hero Visual */}
        <div className="relative rounded-2xl border border-white/10 bg-[#0a0d16]/90 shadow-2xl backdrop-blur-xl overflow-hidden">
          
          {/* Visual Header Controls */}
          <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] font-mono text-slate-400 ml-2">
                hritick-kumar-system.arch
              </span>
            </div>

            <div className="flex items-center gap-1 bg-white/5 p-0.5 rounded-lg border border-white/5 text-[11px] font-mono">
              <button
                onClick={() => setActiveTab('flow')}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  activeTab === 'flow' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Pipeline Flow
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  activeTab === 'code' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                TypeScript Spec
              </button>
            </div>
          </div>

          {/* View Tab: Flow vs Code */}
          <div className="p-5 sm:p-7">
            {activeTab === 'flow' ? (
              <div>
                <div className="text-xs text-slate-400 font-mono mb-4 flex items-center justify-between">
                  <span>PRODUCTION DATA PIPELINE & INTEGRATION FLOW</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Latency: Sub-100ms
                  </span>
                </div>

                {/* Animated Pipeline Nodes */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {[
                    { label: "React UI", sub: "Frontend State", icon: Layers, color: "text-blue-400", border: "border-blue-500/30" },
                    { label: "Node / Express", sub: "REST & Auth", icon: Server, color: "text-emerald-400", border: "border-emerald-500/30" },
                    { label: "Payment APIs", sub: "PayPal PPCP", icon: Cloud, color: "text-amber-400", border: "border-amber-500/30" },
                    { label: "Databases", sub: "MongoDB & PG", icon: Database, color: "text-purple-400", border: "border-purple-500/30" },
                    { label: "AWS Cloud", sub: "EC2 & Nginx", icon: Cloud, color: "text-orange-400", border: "border-orange-500/30" },
                    { label: "AI / ML", sub: "LLMs & NLP", icon: Cpu, color: "text-cyan-400", border: "border-cyan-500/30" }
                  ].map((node, i) => {
                    const Icon = node.icon;
                    return (
                      <div 
                        key={i} 
                        className={`p-3.5 rounded-xl bg-slate-900/60 border ${node.border} hover:bg-slate-800/80 transition-all flex flex-col justify-between`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <Icon className={`w-4 h-4 ${node.color}`} />
                          <span className="text-[9px] font-mono text-slate-500">0{i+1}</span>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white tracking-tight">{node.label}</div>
                          <div className="text-[10px] text-slate-400 font-mono mt-0.5">{node.sub}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between text-[11px] text-slate-400 font-mono gap-2">
                  <span className="text-slate-300">
                    Continuous feedback loops: Webhooks → FIFO reconciliation → State invalidation
                  </span>
                  <span className="text-blue-400">
                    Production Architecture
                  </span>
                </div>
              </div>
            ) : (
              <pre className="text-xs sm:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed">
                <code>{codeSnippet}</code>
              </pre>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
