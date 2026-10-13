import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  FileText, 
  Search
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeSelector } from './ThemeSelector';
import { useTheme } from '../context/useTheme';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { config } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active section detection
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'approach', 'ai-native', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about", id: "about" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Process", href: "#approach", id: "approach" },
    { label: "AI-Native", href: "#ai-native", id: "ai-native" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#04060d]/85 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-2xl shadow-black/40' 
        : 'bg-transparent py-4 sm:py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a 
          href="#hero" 
          className="flex items-center gap-2.5 text-white font-semibold tracking-tight hover:opacity-90 transition-opacity group"
        >
          <div 
            className="relative w-9 h-9 rounded-xl overflow-hidden border border-white/20 shadow-lg transition-transform group-hover:scale-105 flex-shrink-0"
            style={{
              boxShadow: `0 0 16px ${config.glowColor}`,
            }}
          >
            <img 
              src={PERSONAL_INFO.avatarUrl} 
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
              <span>{PERSONAL_INFO.name}</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: config.primaryHex }} />
            </span>
            <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
              Full Stack Developer · MERN
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#090d18]/70 border border-white/[0.08] rounded-full px-3.5 py-1.5 backdrop-blur-xl shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs px-3 py-1 rounded-full transition-all duration-200 ${
                  isActive 
                    ? 'text-white font-semibold shadow-md' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
                style={isActive ? {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: `1px solid ${config.primaryHex}40`,
                  boxShadow: `0 0 10px ${config.glowColor}`,
                } : {}}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Actions, Theme Switcher & Command Palette Trigger */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Theme / Palette Switcher */}
          <ThemeSelector />

          {/* Quick Cmd+K Palette */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all cursor-pointer backdrop-blur-md"
            aria-label="Open Command Palette"
            title="Search projects & sections (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="font-mono text-[11px] text-slate-400">Cmd+K</span>
          </button>

          {/* Resume Link */}
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-white px-3.5 py-1.5 rounded-full border transition-all cursor-pointer shadow-md"
            style={{
              backgroundColor: `${config.primaryHex}15`,
              borderColor: `${config.primaryHex}50`,
            }}
          >
            <FileText className="w-3.5 h-3.5" style={{ color: config.primaryHex }} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeSelector />
          
          <button
            onClick={onOpenCommandPalette}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300"
            aria-label="Quick search"
          >
            <Search className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-4 pb-6 bg-[#070b16]/95 border-b border-white/10 mt-3 space-y-2 backdrop-blur-2xl animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full text-xs font-semibold py-2.5 rounded-xl text-white shadow-md"
              style={{
                background: `linear-gradient(135deg, ${config.primaryHex} 0%, ${config.secondaryHex} 100%)`,
              }}
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
