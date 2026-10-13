import React from 'react';
import { ENGINEERING_APPROACH } from '../data/portfolioData';

export const EngineeringApproachSection: React.FC = () => {
  return (
    <section id="approach" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
            Systematic Methodology
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            How I Build
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            A disciplined engineering lifecycle turning complex business requirements into resilient, testable, and maintainable software systems.
          </p>
        </div>

        {/* 6 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGINEERING_APPROACH.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0b0e17] border border-white/10 hover:border-blue-500/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                  <span className="text-2xl font-mono font-bold text-blue-400/80 group-hover:text-blue-400 transition-colors">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    Stage {item.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5">
                <span className="text-[10px] font-mono uppercase text-slate-400 block mb-2">
                  Key Artifacts & Focus
                </span>
                <div className="space-y-1.5">
                  {item.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="text-xs text-slate-400 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-blue-400" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
