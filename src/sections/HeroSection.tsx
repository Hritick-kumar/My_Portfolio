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
  Layers,
  Box,
  Code,
  Sparkles
} from 'lucide-react';
import { lazy, Suspense } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { copyToClipboard } from '../lib/utils';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import { useTheme } from '../context/useTheme';

const HeroThreeCanvas = lazy(() =>
  import('../components/HeroThreeCanvas').then((m) => ({ default: m.HeroThreeCanvas }))
);

export const HeroSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'3d' | 'flow' | 'code'>('3d');
  const { config } = useTheme();

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
  threeJs: ["3D WebGL", "Interactive Shaders", "Scenes"],
  integrations: ["PayPal PPCP", "SnapTrade", "OAuth"],
  interests: ["AI/ML", "LLM APIs", "Automations"]
};`;

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Background ambient light gradients adapting to active theme */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 opacity-25"
        style={{ backgroundColor: config.primaryHex }}
      />
      <div 
        className="absolute top-1/3 left-1/4 w-[400px] h-[300px] rounded-full blur-[120px] pointer-events-none transition-all duration-700 opacity-20"
        style={{ backgroundColor: config.secondaryHex }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          
          {/* Hero Left: Intro & Actions */}
          <div className="lg:col-span-8">
            {/* Availability status badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-6 shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: config.primaryHex }} />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-slate-300 font-mono">
                {PERSONAL_INFO.status}
              </span>
            </div>

            {/* Main Headings */}
            <div className="max-w-3xl mb-8">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-4">
                Hi, I'm Hritick Kumar. <br />
                <span 
                  className="bg-clip-text text-transparent transition-all duration-500"
                  style={{
                    backgroundImage: `linear-gradient(135deg, #ffffff 0%, ${config.primaryHex} 45%, ${config.secondaryHex} 100%)`
                  }}
                >
                  I build scalable web products and intelligent software.
                </span>
              </h1>

              <p 
                className="text-xs sm:text-sm font-mono tracking-wider uppercase mb-4 font-semibold flex items-center gap-2"
                style={{ color: config.primaryHex }}
              >
                <span>{PERSONAL_INFO.title}</span>
                {/* <span className="text-xs opacity-60">·</span> */}
                {/* <span className="text-emerald-400 font-mono">Three.js 3D</span> */}
              </p>

              <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                {PERSONAL_INFO.subheadline}
              </p>
            </div>

            {/* Action Buttons & Social CTAs */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-xs sm:text-sm font-semibold shadow-xl transition-all cursor-pointer hover:opacity-95 transform hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg, ${config.primaryHex} 0%, ${config.secondaryHex} 100%)`,
                  boxShadow: `0 8px 25px -4px ${config.glowColor}`,
                }}
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 text-xs sm:text-sm font-medium transition-all cursor-pointer backdrop-blur-md"
              >
                <FileText className="w-4 h-4" style={{ color: config.primaryHex }} />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 text-xs sm:text-sm font-medium transition-all cursor-pointer backdrop-blur-md"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </a>

              {/* Social Badges */}
              <div className="flex items-center gap-2 pl-0 sm:pl-2 border-l-0 sm:border-l border-white/10">
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
          </div>

          {/* Hero Right: Profile Photo Showcase Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group max-w-[270px] sm:max-w-[290px] w-full">
              {/* Decorative dynamic ambient glow */}
              <div 
                className="absolute -inset-1.5 rounded-3xl opacity-40 blur-xl group-hover:opacity-75 transition-all duration-700 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${config.primaryHex}, ${config.secondaryHex})`,
                }}
              />
              
              {/* Outer card frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#0e1326]/90 to-[#070a14]/95 shadow-2xl backdrop-blur-xl p-2.5">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-900 border border-white/10 shadow-inner">
                  <img 
                    src={PERSONAL_INFO.avatarUrl} 
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle lighting vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070a14] via-black/20 to-transparent opacity-85 pointer-events-none" />

                  {/* Overlay Badges */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                    <div className="bg-[#070a14]/85 backdrop-blur-md border border-white/15 px-2.5 py-1.5 rounded-lg shadow-lg">
                      <div className="text-xs font-mono font-bold text-white leading-tight">
                        {PERSONAL_INFO.name}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">
                        Full-Stack Engineer
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono shadow-lg backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Available</span>
                    </div>
                  </div>
                </div>

                {/* Sub-card quick info */}
                <div className="mt-2.5 px-2 py-1 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: config.primaryHex }} />
                    Software Analyst
                  </span>
                  <span className="text-[10px] text-slate-400">
                    India
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Visual Showcase Container */}
        <div className="relative rounded-2xl border border-white/10 bg-[#090d18]/90 shadow-2xl backdrop-blur-2xl overflow-hidden">
          
          {/* Header Controls with Tab Navigation */}
          <div className="px-4 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] font-mono text-slate-400 ml-2 hidden sm:inline">
                hritick-kumar-system.arch
              </span>
            </div>

            {/* Showcase Mode Tabs */}
            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5 text-[11px] font-mono overflow-x-auto max-w-full">
              <button
                onClick={() => setActiveTab('3d')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeTab === '3d' 
                    ? 'bg-white/20 text-white font-semibold shadow-md' 
                    : 'text-slate-400 hover:text-white'
                }`}
                style={activeTab === '3d' ? { backgroundColor: `${config.primaryHex}30`, color: '#ffffff' } : {}}
              >
                <Box className="w-3.5 h-3.5" style={{ color: config.primaryHex }} />
                <span>3D Viewport</span>
              </button>

              <button
                onClick={() => setActiveTab('flow')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeTab === 'flow' 
                    ? 'bg-white/20 text-white font-semibold shadow-md' 
                    : 'text-slate-400 hover:text-white'
                }`}
                style={activeTab === 'flow' ? { backgroundColor: `${config.primaryHex}30`, color: '#ffffff' } : {}}
              >
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                <span>Pipeline Flow</span>
              </button>

              <button
                onClick={() => setActiveTab('code')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeTab === 'code' 
                    ? 'bg-white/20 text-white font-semibold shadow-md' 
                    : 'text-slate-400 hover:text-white'
                }`}
                style={activeTab === 'code' ? { backgroundColor: `${config.primaryHex}30`, color: '#ffffff' } : {}}
              >
                <Code className="w-3.5 h-3.5 text-purple-400" />
                <span>TypeScript Spec</span>
              </button>
            </div>
          </div>

          {/* View Tab Contents */}
          <div className="p-4 sm:p-6">
            {activeTab === '3d' && (
              <div className="space-y-4">
                <Suspense
                  fallback={
                    <div className="relative w-full h-[360px] sm:h-[400px] rounded-2xl bg-gradient-to-b from-black/50 via-[#070b16]/70 to-black/80 border border-white/10 flex flex-col items-center justify-center gap-3">
                      <div 
                        className="w-8 h-8 rounded-full border-2 border-white/20 border-t-transparent animate-spin"
                        style={{ borderTopColor: config.primaryHex }}
                      />
                      <span className="text-xs font-mono text-slate-400">Loading 3D Viewport Engine...</span>
                    </div>
                  }
                >
                  <HeroThreeCanvas />
                </Suspense>
                <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-400 font-mono pt-2 border-t border-white/5 gap-2">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Sparkles className="w-3.5 h-3.5" style={{ color: config.primaryHex }} />
                     Interactive Engine: GPU hardware acceleration with dynamic lighting & orbit controls.
                  </span>
                  <span style={{ color: config.primaryHex }}>
                    Interactive 3D Layer
                  </span>
                </div>
              </div>
            )}

            {activeTab === 'flow' && (
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
            )}

            {activeTab === 'code' && (
              <pre className="text-xs sm:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed p-4 rounded-xl bg-black/40 border border-white/5">
                <code>{codeSnippet}</code>
              </pre>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
