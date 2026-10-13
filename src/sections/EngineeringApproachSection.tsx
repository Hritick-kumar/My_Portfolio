import React from 'react';
import { ENGINEERING_APPROACH } from '../data/portfolioData';
import { TiltCard } from '../components/TiltCard';
import { useTheme } from '../context/useTheme';

export const EngineeringApproachSection: React.FC = () => {
  const { config } = useTheme();

  return (
    <section id="approach" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div 
            className="text-xs font-mono uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5"
            style={{ color: config.primaryHex }}
          >
            <span>Systematic Methodology</span>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: config.primaryHex }} />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            How I Build
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            A disciplined engineering lifecycle turning complex business requirements into resilient, testable, and maintainable software systems.
          </p>
        </div>

        {/* 6 Step Process Grid with 3D TiltCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGINEERING_APPROACH.map((item, idx) => (
            <TiltCard key={idx} maxTilt={6} scale={1.015} className="h-full">
              <div className="h-full p-6 rounded-2xl bg-gradient-to-b from-[#0a0e1c] to-[#060912] border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between group shadow-xl backdrop-blur-xl">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                    <span 
                      className="text-2xl font-mono font-bold transition-colors"
                      style={{ color: config.primaryHex }}
                    >
                      {item.step}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      Stage {item.step}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block mb-2 font-medium">
                    Key Artifacts & Focus
                  </span>
                  <div className="space-y-1.5">
                    {item.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="text-xs text-slate-400 flex items-center gap-2">
                        <span 
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: config.primaryHex }}
                        />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};
