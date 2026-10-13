import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { ABOUT_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { TiltCard } from '../components/TiltCard';
import { useTheme } from '../context/useTheme';

export const AboutSection: React.FC = () => {
  const { config } = useTheme();

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7">
            <div 
              className="text-xs font-mono uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5"
              style={{ color: config.primaryHex }}
            >
              <span>Background & Focus</span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: config.primaryHex }} />
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-5">
              Engineering with production reality, not just code perfection.
            </h2>

            {/* Engineer Profile Spotlight */}
            <div className="flex items-center gap-3.5 mb-6 p-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-white/15 shadow-md flex-shrink-0">
                <img 
                  src={PERSONAL_INFO.avatarUrl} 
                  alt={PERSONAL_INFO.name} 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-white flex items-center gap-2">
                  <span>{PERSONAL_INFO.name}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Full-Stack Engineer
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-mono truncate">
                  Software Analyst & Full-Stack Developer
                </div>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {ABOUT_DATA.paragraphs.map((p, idx) => (
                <p key={idx} className="text-slate-300">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Production Integrations</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Sub-100ms API Latency Focus</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Cloud & Process Management</span>
              </div>
            </div>
          </div>

          {/* Right Column: Stack Blueprint Card with 3D Tilt */}
          <div className="lg:col-span-5">
            <TiltCard maxTilt={6} scale={1.01}>
              <div className="bg-gradient-to-b from-[#0c1020] to-[#070a14] border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                <div 
                  className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl pointer-events-none opacity-20"
                  style={{ backgroundColor: config.primaryHex }}
                />

                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: config.primaryHex }} />
                    <span className="text-xs font-mono font-semibold text-white">
                      Technical Foundation
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">
                    Active Stack
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors">
                    <div className="text-[11px] font-mono mb-1 font-semibold" style={{ color: config.primaryHex }}>
                      MERN Stack Mastery
                    </div>
                    <div className="text-slate-300">React.js, Node.js, Express.js, MongoDB</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors">
                    <div className="text-[11px] font-mono text-emerald-400 mb-1 font-semibold">
                      Modern Backend & DBs
                    </div>
                    <div className="text-slate-300">TypeScript, PostgreSQL, Prisma, Supabase, Redis</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors">
                    <div className="text-[11px] font-mono text-amber-400 mb-1 font-semibold">
                      Cloud Infrastructure
                    </div>
                    <div className="text-slate-300">AWS EC2, Nginx, PM2, Docker, S3</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors">
                    <div className="text-[11px] font-mono text-purple-400 mb-1 font-semibold">
                      Security & Integrations
                    </div>
                    <div className="text-slate-300">PayPal PPCP, SnapTrade, OAuth 2.0, JWT, Webhooks</div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Goal-driven development</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Reliable & Maintainable
                  </span>
                </div>
              </div>
            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
};
