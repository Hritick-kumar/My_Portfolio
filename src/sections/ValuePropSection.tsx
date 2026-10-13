import React from 'react';
import { 
  Layers, 
  Server, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';
import { QUICK_PILLARS } from '../data/portfolioData';
import { TiltCard } from '../components/TiltCard';
import { useTheme } from '../context/useTheme';

export const ValuePropSection: React.FC = () => {
  const { config } = useTheme();

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
    <section className="py-20 border-y border-white/[0.08] bg-[#050814]/70 relative overflow-hidden backdrop-blur-sm">
      
      {/* Background glow orb */}
      <div 
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[160px] pointer-events-none opacity-15"
        style={{ backgroundColor: config.primaryHex }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div 
              className="text-xs font-mono uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5"
              style={{ color: config.primaryHex }}
            >
              <span>Core Competencies</span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: config.primaryHex }} />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              What I Bring to Engineering Teams
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
            Production rigor across client interfaces, resilient backend microservices, deployment pipelines, and AI systems.
          </p>
        </div>

        {/* 4 Interactive 3D Tilt Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {QUICK_PILLARS.map((pillar, idx) => {
            const IconComponent = getIcon(pillar.icon);
            return (
              <TiltCard key={idx} maxTilt={9} scale={1.02} className="h-full">
                <div className="h-full p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] hover:from-white/[0.07] hover:to-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between shadow-xl backdrop-blur-md group">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div 
                        className="w-11 h-11 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 shadow-lg"
                        style={{
                          backgroundColor: `${config.primaryHex}15`,
                          border: `1px solid ${config.primaryHex}35`,
                          color: config.primaryHex,
                        }}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-1.5 tracking-tight group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h3>

                    <div 
                      className="text-xs font-mono mb-3.5 font-medium"
                      style={{ color: config.primaryHex }}
                    >
                      {pillar.tagline}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-5">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                    {pillar.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] text-slate-300 border border-white/[0.06] group-hover:border-white/15 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
