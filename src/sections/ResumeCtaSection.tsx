import React from 'react';
import { 
  Download, 
  ExternalLink, 
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TiltCard } from '../components/TiltCard';
import { useTheme } from '../context/useTheme';

export const ResumeCtaSection: React.FC = () => {
  const { config } = useTheme();

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <TiltCard maxTilt={4} scale={1.01}>
          <div className="rounded-3xl bg-gradient-to-b from-[#0c1020] to-[#070a14] border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8 backdrop-blur-2xl">
            
            {/* Subtle light background */}
            <div 
              className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
              style={{ backgroundColor: config.primaryHex }}
            />

            <div className="max-w-xl relative z-10">
              <span 
                className="text-xs font-mono uppercase tracking-wider block mb-2 font-semibold"
                style={{ color: config.primaryHex }}
              >
                Comprehensive Resume & Background
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
                Want the complete picture?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Explore my detailed professional experience, production projects, and technical background in my resume.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  MERN Stack
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  REST & Integrations
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  AWS Deployments
                </span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 relative z-10">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-xs sm:text-sm shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg, ${config.primaryHex} 0%, ${config.secondaryHex} 100%)`,
                  boxShadow: `0 8px 25px -4px ${config.glowColor}`,
                }}
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 font-medium text-xs sm:text-sm transition-all cursor-pointer backdrop-blur-md"
              >
                <ExternalLink className="w-4 h-4 text-slate-400" />
                <span>View Resume</span>
              </a>
            </div>

          </div>
        </TiltCard>

      </div>
    </section>
  );
};
