import React from 'react';
import { 
  Layers, 
  Server, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';
import { QUICK_PILLARS } from '../data/portfolioData';

export const ValuePropSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Layers': return Layers;
      case 'Server': return Server;
      case 'ShieldCheck': return ShieldCheck;
      case 'Sparkles': return Sparkles;
      default: return Layers;
    }
  };

  return (
    <section className="py-16 border-y border-white/[0.06] bg-[#07080d]/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
              Core Competencies
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              What I Bring to Engineering Teams
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Production rigor across client interfaces, resilient backend microservices, deployment pipelines, and AI systems.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUICK_PILLARS.map((pillar, idx) => {
            const IconComponent = getIcon(pillar.icon);
            return (
              <div
                key={idx}
                className="group p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-blue-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:text-blue-300 transition-all">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-semibold text-white mb-1 tracking-tight">
                    {pillar.title}
                  </h3>

                  <div className="text-xs font-mono text-slate-400 mb-3">
                    {pillar.tagline}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  {pillar.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
