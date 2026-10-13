import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { TiltCard } from '../components/TiltCard';
import { useTheme } from '../context/useTheme';

export const ExperienceSection: React.FC = () => {
  const { config } = useTheme();

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#050814]/70 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div 
            className="text-xs font-mono uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5"
            style={{ color: config.primaryHex }}
          >
            <span>Professional Experience</span>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: config.primaryHex }} />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            Production Track Record
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Real responsibilities building production systems, designing high-throughput APIs, and orchestrating cloud environments.
          </p>
        </div>

        {/* Experience Timeline */}
        <div 
          className="relative pl-6 sm:pl-8 space-y-12 border-l"
          style={{ borderColor: `${config.primaryHex}40` }}
        >
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline marker node */}
              <div 
                className="absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full border-4 border-[#050814] group-hover:scale-125 transition-transform shadow-lg"
                style={{
                  backgroundColor: config.primaryHex,
                  boxShadow: `0 0 12px ${config.glowColor}`,
                }}
              />

              <TiltCard maxTilt={5} scale={1.01}>
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0a0e1c] to-[#060912] border border-white/10 hover:border-white/25 transition-all shadow-2xl backdrop-blur-xl">
                  
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-5 border-b border-white/10">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase className="w-4 h-4" style={{ color: config.primaryHex }} />
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                      </div>
                      <div className="text-sm font-semibold tracking-wide" style={{ color: config.primaryHex }}>
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {exp.period}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 font-semibold">
                        {exp.status}
                      </span>
                    </div>
                  </div>

                  {/* Highlights Bullets */}
                  <div className="space-y-3.5 mb-7">
                    {exp.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <span 
                          className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                          style={{ backgroundColor: config.primaryHex }}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="pt-5 border-t border-white/5">
                    <div className="text-[11px] font-mono uppercase text-slate-400 mb-3 flex items-center justify-between">
                      <span>Core Technologies</span>
                      <span className="text-[10px]" style={{ color: config.primaryHex }}>Production Validated</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-slate-300 border border-white/[0.08] hover:border-white/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </TiltCard>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
