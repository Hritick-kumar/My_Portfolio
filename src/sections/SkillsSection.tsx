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
import { TiltCard } from '../components/TiltCard';
import { useTheme } from '../context/useTheme';

export const SkillsSection: React.FC = () => {
  const { config } = useTheme();

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
    <section id="skills" className="py-20 md:py-28 bg-[#050814]/70 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div 
            className="text-xs font-mono uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5"
            style={{ color: config.primaryHex }}
          >
            <span>Technical Stack</span>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: config.primaryHex }} />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            Intelligently Grouped Engineering Expertise
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            A production-proven technology stack focused on high-throughput backend services, reliable database models, and modern frontend interfaces.
          </p>
        </div>

        {/* Categories Grid with 3D TiltCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.icon);
            return (
              <TiltCard key={idx} maxTilt={6} scale={1.015} className="h-full">
                <div className="h-full p-6 rounded-2xl bg-gradient-to-b from-[#0a0e1c] to-[#060912] border border-white/10 hover:border-white/25 transition-all shadow-xl flex flex-col justify-between group backdrop-blur-xl">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-md"
                        style={{
                          backgroundColor: `${config.primaryHex}15`,
                          borderColor: `${config.primaryHex}35`,
                          borderWidth: '1px',
                          color: config.primaryHex,
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
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
                              ? 'font-medium'
                              : 'bg-white/[0.03] text-slate-300 border border-white/[0.06]'
                          }`}
                          style={skill.focus ? {
                            backgroundColor: `${config.primaryHex}15`,
                            color: '#ffffff',
                            border: `1px solid ${config.primaryHex}40`,
                          } : {}}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Engineered for scale</span>
                    <span style={{ color: config.primaryHex }}>Production ready</span>
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
