import React, { useState } from 'react';
import { 
  ArrowRight, 
  Truck
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import type { ProjectCaseStudy } from '../types';
import { ProjectModal } from '../components/ProjectModal';
import { TipAppArchitectureVisualizer } from '../components/ArchitectureDiagram';
import { TradingVisualizer } from '../components/TradingVisualizer';
import { SentimentDemo } from '../components/SentimentDemo';
import { TiltCard } from '../components/TiltCard';
import { useTheme } from '../context/useTheme';

interface ProjectsSectionProps {
  selectedProject: ProjectCaseStudy | null;
  setSelectedProject: (project: ProjectCaseStudy | null) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  selectedProject,
  setSelectedProject,
}) => {
  const [filter, setFilter] = useState<'all' | 'production' | 'mvp'>('all');
  const { config } = useTheme();

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === 'all') return true;
    return p.type === filter;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div 
              className="text-xs font-mono uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5"
              style={{ color: config.primaryHex }}
            >
              <span>Featured Engineering Showcases</span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: config.primaryHex }} />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Production Systems & Technical Implementations
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-white/[0.04] border border-white/10 rounded-2xl self-start md:self-auto text-xs font-mono backdrop-blur-md">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                filter === 'all' 
                  ? 'text-white font-semibold shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
              style={filter === 'all' ? {
                backgroundColor: `${config.primaryHex}25`,
                border: `1px solid ${config.primaryHex}50`,
                color: '#ffffff',
              } : {}}
            >
              All ({PROJECTS_DATA.length})
            </button>
            <button
              onClick={() => setFilter('production')}
              className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                filter === 'production' 
                  ? 'text-white font-semibold shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
              style={filter === 'production' ? {
                backgroundColor: `${config.primaryHex}25`,
                border: `1px solid ${config.primaryHex}50`,
                color: '#ffffff',
              } : {}}
            >
              Production Systems
            </button>
            <button
              onClick={() => setFilter('mvp')}
              className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                filter === 'mvp' 
                  ? 'text-white font-semibold shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
              style={filter === 'mvp' ? {
                backgroundColor: `${config.primaryHex}25`,
                border: `1px solid ${config.primaryHex}50`,
                color: '#ffffff',
              } : {}}
            >
              MVPs & Concepts
            </button>
          </div>
        </div>

        {/* Project Large Showcases */}
        <div className="space-y-12">
          {filteredProjects.map((project) => {
            return (
              <TiltCard key={project.id} maxTilt={4} scale={1.008}>
                <div className="rounded-2xl bg-gradient-to-b from-[#0b0f20] to-[#060912] border border-white/10 hover:border-white/25 transition-all p-6 sm:p-8 shadow-2xl relative overflow-hidden group backdrop-blur-xl">
                  
                  {/* Subtle top corner ambient glow */}
                  <div 
                    className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-3xl pointer-events-none opacity-15"
                    style={{ backgroundColor: config.primaryHex }}
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                    
                    {/* Left Column: Details & Solution */}
                    <div className="lg:col-span-6 flex flex-col justify-between">
                      <div>
                        {/* Meta badges */}
                        <div className="flex flex-wrap items-center gap-2 mb-3.5">
                          <span 
                            className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full border font-semibold"
                            style={{
                              backgroundColor: `${config.primaryHex}15`,
                              borderColor: `${config.primaryHex}35`,
                              color: config.primaryHex,
                            }}
                          >
                            {project.category}
                          </span>
                          {project.badge && (
                            <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                              project.type === 'production' 
                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                                : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                            }`}>
                              {project.badge}
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-cyan-200 transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                          {project.shortDesc}
                        </p>

                        {/* Problem & Solution Mini Blocks */}
                        <div className="space-y-3 mb-6">
                          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                            <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                              Core Challenge
                            </span>
                            <p className="text-xs text-slate-300 line-clamp-2">
                              {project.problem}
                            </p>
                          </div>

                          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                            <span className="text-[11px] font-mono uppercase text-emerald-400 block mb-1">
                              Engineering Resolution
                            </span>
                            <p className="text-xs text-slate-300 line-clamp-2">
                              {project.solution}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Tech Badges & CTA */}
                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.techStack.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.03] text-slate-300 border border-white/[0.08]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-xs font-semibold transition-all cursor-pointer shadow-lg transform hover:-translate-y-0.5"
                          style={{
                            background: `linear-gradient(135deg, ${config.primaryHex} 0%, ${config.secondaryHex} 100%)`,
                            boxShadow: `0 4px 20px -4px ${config.glowColor}`,
                          }}
                        >
                          <span>View Interactive Case Study</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Right Column: Embedded Interactive Feature Preview */}
                    <div className="lg:col-span-6">
                      <div className="border border-white/10 rounded-2xl overflow-hidden bg-black/50 shadow-inner backdrop-blur-md">
                        <div className="px-4 py-2.5 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
                          <span className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: config.primaryHex }} />
                            Live Interactive Architecture
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            Click to interact
                          </span>
                        </div>

                        <div className="p-3 sm:p-4">
                          {project.id === 'tip-app' && <TipAppArchitectureVisualizer />}
                          {project.id === 'calm-trade' && <TradingVisualizer />}
                          {project.id === 'ai-nlp-sentiment' && <SentimentDemo />}
                          {project.id === 'routepilot' && (
                            <div className="p-6 text-center">
                              <div 
                                className="w-12 h-12 rounded-xl mx-auto flex items-center justify-center mb-3 shadow-lg"
                                style={{
                                  backgroundColor: `${config.primaryHex}15`,
                                  color: config.primaryHex,
                                }}
                              >
                                <Truck className="w-6 h-6" />
                              </div>
                              <h4 className="text-sm font-semibold text-white mb-1">
                                Logistics Dispatch MVP Console
                              </h4>
                              <p className="text-xs text-slate-400 max-w-sm mx-auto mb-4">
                                Multi-leg freight scheduling engine with waypoint optimization and real-time shipment manifest tracking.
                              </p>
                              <button
                                onClick={() => setSelectedProject(project)}
                                className="text-xs hover:underline font-mono cursor-pointer"
                                style={{ color: config.primaryHex }}
                              >
                                Explore RoutePilot Architecture →
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
