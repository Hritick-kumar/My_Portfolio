import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ABOUT_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
              Background & Focus
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
              Engineering with production reality, not just code perfection.
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {ABOUT_DATA.paragraphs.map((p, idx) => (
                <p key={idx} className="text-slate-300">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Production Integrations</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Sub-100ms API Latency Focus</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Cloud & Process Management</span>
              </div>
            </div>
          </div>

          {/* Right Column: Stack Blueprint Card */}
          <div className="lg:col-span-5 bg-[#0b0e17] border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                <span className="text-xs font-mono font-semibold text-white">
                  Technical Foundation
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase">
                Active Tooling
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-[11px] font-mono text-blue-400 mb-1">MERN Stack Mastery</div>
                <div className="text-slate-300">React.js, Node.js, Express.js, MongoDB</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-[11px] font-mono text-emerald-400 mb-1">Modern Backend & DBs</div>
                <div className="text-slate-300">TypeScript, PostgreSQL, Prisma, Supabase, Redis</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-[11px] font-mono text-amber-400 mb-1">Cloud Infrastructure</div>
                <div className="text-slate-300">AWS EC2, Nginx, PM2, Docker, S3</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-[11px] font-mono text-purple-400 mb-1">Security & Integrations</div>
                <div className="text-slate-300">PayPal PPCP, SnapTrade, OAuth 2.0, JWT, Webhooks</div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Goal-driven development</span>
              <span className="text-emerald-400">Reliable & Maintainable</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
