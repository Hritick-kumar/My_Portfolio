import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { useTheme } from '../context/useTheme';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const { config } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#03050c] py-12 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Branding */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1.5">
            <span className="text-sm font-bold text-white tracking-tight">Hritick Kumar</span>
            <span className="text-xs text-slate-500 font-mono">/</span>
            <span className="text-xs text-slate-400 font-mono">Software Analyst & Full-Stack Engineer</span>
          </div>
          <p className="text-xs text-slate-500 italic max-w-sm">
            "Building useful software, one system at a time."
          </p>
        </div>

        {/* Center / Socials */}
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-slate-400 hover:text-white transition-all text-xs flex items-center gap-1.5 hover:border-white/20"
            >
              {link.name === 'GitHub' && <GithubIcon className="w-3.5 h-3.5" />}
              {link.name === 'LinkedIn' && <LinkedinIcon className="w-3.5 h-3.5" />}
              {link.name === 'Email' && <Mail className="w-3.5 h-3.5" />}
              <span className="font-mono text-[11px]">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Right / Copyright & Scroll top */}
        <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
          <span>&copy; {CURRENT_YEAR} Hritick Kumar</span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all cursor-pointer"
            aria-label="Scroll back to top"
            title="Scroll back to top"
            style={{
              borderColor: `${config.primaryHex}30`,
            }}
          >
            <ArrowUp className="w-3.5 h-3.5" style={{ color: config.primaryHex }} />
          </button>
        </div>

      </div>
    </footer>
  );
};
