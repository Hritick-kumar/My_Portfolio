import React from 'react';
import { 
  Bot, 
  Network, 
  Database, 
  Wand2, 
  Sparkles
} from 'lucide-react';
import { AI_NATIVE_AREAS, AI_TOOLKIT } from '../data/portfolioData';
import { TiltCard } from '../components/TiltCard';
import { useTheme } from '../context/useTheme';

export const AiNativeSection: React.FC = () => {
  const { config } = useTheme();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return Bot;
      case 'Network': return Network;
      case 'Database': return Database;
      case 'Wand2': return Wand2;
      default: return Sparkles;
    }
  };

  return (
    <section id="ai-native" className="py-20 md:py-28 bg-[#050814]/70 border-t border-white/[0.08] relative overflow-hidden">
      
      {/* Background ambient light */}
      <div 
        className="absolute top-1/2 right-10 w-96 h-96 rounded-full blur-[150px] pointer-events-none opacity-20"
        style={{ backgroundColor: config.secondaryHex }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div 
            className="text-xs font-mono uppercase tracking-wider mb-2 flex items-center gap-1.5 font-semibold"
            style={{ color: config.primaryHex }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Forward Vision</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Building Toward AI-Native Engineering
          </h2>
          <blockquote 
            className="p-4 rounded-xl bg-white/[0.02] border-l-2 text-xs sm:text-sm text-slate-300 italic leading-relaxed backdrop-blur-md"
            style={{ borderColor: config.primaryHex }}
          >
            "My goal is not simply to learn AI as a separate technology. I want to combine my full-stack engineering experience with AI to build products that can understand, automate and improve real-world workflows."
          </blockquote>
        </div>

        {/* AI Focus Areas Grid with 3D TiltCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {AI_NATIVE_AREAS.map((area, idx) => {
            const Icon = getIcon(area.icon);
            return (
              <TiltCard key={idx} maxTilt={6} scale={1.015} className="h-full">
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#0a0e1c] to-[#060912] border border-white/10 hover:border-white/25 transition-all shadow-xl backdrop-blur-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md"
                        style={{
                          backgroundColor: `${config.primaryHex}15`,
                          borderColor: `${config.primaryHex}35`,
                          borderWidth: '1px',
                          color: config.primaryHex,
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {area.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                      {area.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-4 border-t border-white/5">
                    {area.applications.map((app, aIdx) => (
                      <div key={aIdx} className="text-xs text-slate-400 flex items-center gap-2">
                        <span 
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: config.primaryHex }}
                        />
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Development Toolkit & AI-Assisted Engineering */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0c1020] to-[#070a14] border border-white/10 shadow-2xl relative backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6 pb-6 border-b border-white/10">
            <div>
              <span 
                className="text-[11px] font-mono uppercase tracking-wider block mb-1 font-semibold"
                style={{ color: config.primaryHex }}
              >
                Modern Development Toolkit
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                AI-Assisted Engineering Discipline
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              I use modern AI tools for research, debugging, architecture exploration, documentation, code review, refactoring, and accelerating development while maintaining engineering ownership of the final implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AI_TOOLKIT.map((tool, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all"
              >
                <div 
                  className="text-xs font-bold font-mono mb-1"
                  style={{ color: config.primaryHex }}
                >
                  {tool.name}
                </div>
                <div className="text-[11px] text-slate-400 leading-relaxed">
                  {tool.role}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
