import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck,
  Cpu,
  Sparkles
} from 'lucide-react';
import type { ProjectCaseStudy } from '../types';
import { TipAppArchitectureVisualizer } from './ArchitectureDiagram';
import { TradingVisualizer } from './TradingVisualizer';
import { SentimentDemo } from './SentimentDemo';
import { useTheme } from '../context/useTheme';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { config } = useTheme();

  useEffect(() => {
    if (!project) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project || typeof document === 'undefined') return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 md:p-8 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-4xl max-h-[88vh] sm:max-h-[85vh] bg-[#080c18] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 backdrop-blur-2xl">
        
        {/* Header - Fixed */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-start justify-between bg-[#0b1022] shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <span 
                className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-full border font-semibold"
                style={{
                  backgroundColor: `${config.primaryHex}15`,
                  borderColor: `${config.primaryHex}35`,
                  color: config.primaryHex,
                }}
              >
                {project.category}
              </span>
              {project.badge && (
                <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {project.badge}
                </span>
              )}
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl line-clamp-2 sm:line-clamp-none">
              {project.shortDesc}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer border border-white/10 shrink-0 ml-3"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body with smooth visible scrollbar */}
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(88vh-130px)] sm:max-h-[calc(85vh-140px)] space-y-6 sm:space-y-8 divide-y divide-white/5 modal-scrollbar">
          
          {/* Interactive Project-Specific Visualizer */}
          <div className="pt-1">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4" style={{ color: config.primaryHex }} />
              <span>Interactive Technical Demonstration</span>
            </h3>

            {project.id === 'tip-app' && <TipAppArchitectureVisualizer />}
            {project.id === 'calm-trade' && <TradingVisualizer />}
            {project.id === 'ai-nlp-sentiment' && <SentimentDemo />}
            {project.id === 'routepilot' && (
              <div className="bg-[#0b0e17] border border-white/10 rounded-2xl p-6 text-center">
                <div 
                  className="inline-flex p-3 rounded-xl mb-3 shadow-md"
                  style={{
                    backgroundColor: `${config.primaryHex}15`,
                    color: config.primaryHex,
                  }}
                >
                  <Layers className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">
                  Logistics Dispatch Architecture (RoutePilot MVP)
                </h4>
                <p className="text-xs text-slate-400 max-w-md mx-auto mb-4">
                  Multi-depot stop sequencer with live drag-and-drop shipment manifests and event-driven status mutations.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-slate-300">
                    Manifest Ingestion
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-slate-300">
                    Route Sequencing
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-slate-300">
                    Carrier Allocation
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-slate-300">
                    Live Dispatch View
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Problem & Solution Grid */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono uppercase font-semibold mb-2">
                <AlertCircle className="w-4 h-4" /> The Technical Challenge
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase font-semibold mb-2">
                <CheckCircle2 className="w-4 h-4" /> The Engineering Solution
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Engineering Contributions */}
          <div className="pt-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Key Engineering Contributions
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {project.myContribution.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-slate-300">
                  <span 
                    className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ backgroundColor: config.primaryHex }}
                  />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className="pt-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-4">
              Architecture & System Highlights
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technicalHighlights.map((hl, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-300 border border-white/10"
                >
                  ✓ {hl}
                </span>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="pt-6 pb-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md text-xs font-medium border"
                  style={{
                    backgroundColor: `${config.primaryHex}15`,
                    borderColor: `${config.primaryHex}35`,
                    color: config.primaryHex,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer - Fixed at bottom */}
        <div className="p-3.5 sm:p-4 px-4 sm:px-6 border-t border-white/10 bg-[#070b16] flex items-center justify-between shrink-0">
          <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" style={{ color: config.primaryHex }} />
            Production architectural showcase
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-white transition-all cursor-pointer shadow-lg transform hover:-translate-y-0.5"
            style={{
              background: `linear-gradient(135deg, ${config.primaryHex} 0%, ${config.secondaryHex} 100%)`,
              boxShadow: `0 4px 16px -2px ${config.glowColor}`,
            }}
          >
            Close Deep Dive
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
