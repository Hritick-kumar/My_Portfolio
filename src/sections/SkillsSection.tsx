import React from 'react';
import { 
  Layout, 
  Server, 
  Database, 
  Cloud, 
  CreditCard, 
  Cpu
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return Layout;
      case 'Server': return Server;
      case 'Database': return Database;
      case 'Cloud': return Cloud;
      case 'CreditCard': return CreditCard;
      case 'Cpu': return Cpu;
      default: return Server;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#07080d]/80 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
            Technical Stack
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            Intelligently Grouped Engineering Expertise
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            A production-proven technology stack focused on high-throughput backend services, reliable database models, and modern frontend interfaces.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.icon);
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0b0e17] border border-white/10 hover:border-blue-500/30 transition-all shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white tracking-tight">
                        {cat.category}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-500">
                        {cat.skills.length} core technologies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills Pill List */}
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`text-xs px-2.5 py-1 rounded-lg font-mono transition-all ${
                          skill.focus
                            ? 'bg-blue-500/10 text-blue-300 border border-blue-500/20 font-medium'
                            : 'bg-white/[0.03] text-slate-300 border border-white/[0.06]'
                        }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Engineered for scale</span>
                  <span className="text-blue-400">Production ready</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
