import React, { useEffect, useState } from 'react';
import { 
  Search, 
  Terminal, 
  Code, 
  Layers, 
  Cpu, 
  Mail, 
  FileText, 
  X,
  Sparkles,
  ArrowRight,
  Box,
  Palette
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/useTheme';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (projectId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ 
  isOpen, 
  onClose,
  onSelectProject 
}) => {
  const [query, setQuery] = useState('');
  const { config, setAccent } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigateToSection = (id: string) => {
    onClose();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const commands = [
    {
      title: "View Tip App / PayPal PPCP Platform",
      category: "Projects",
      icon: Code,
      action: () => { onClose(); onSelectProject('tip-app'); }
    },
    {
      title: "View CalmTrade Trading Platform",
      category: "Projects",
      icon: Code,
      action: () => { onClose(); onSelectProject('calm-trade'); }
    },
    {
      title: "View AI / NLP Sentiment Analysis",
      category: "Projects",
      icon: Sparkles,
      action: () => { onClose(); onSelectProject('ai-nlp-sentiment'); }
    },
    {
      title: "View RoutePilot Logistics MVP",
      category: "Projects",
      icon: Layers,
      action: () => { onClose(); onSelectProject('routepilot'); }
    },
    {
      title: "Interactive System Simulation",
      category: "Interactive",
      icon: Box,
      action: () => navigateToSection('hero')
    },
    {
      title: "Switch Theme: Cyber Cyan",
      category: "Theme",
      icon: Palette,
      action: () => { setAccent('cyan'); onClose(); }
    },
    {
      title: "Switch Theme: Holo Violet",
      category: "Theme",
      icon: Palette,
      action: () => { setAccent('violet'); onClose(); }
    },
    {
      title: "Switch Theme: Matrix Mint",
      category: "Theme",
      icon: Palette,
      action: () => { setAccent('emerald'); onClose(); }
    },
    {
      title: "Switch Theme: Quantum Gold",
      category: "Theme",
      icon: Palette,
      action: () => { setAccent('amber'); onClose(); }
    },
    {
      title: "Jump to Experience Timeline",
      category: "Navigation",
      icon: Terminal,
      action: () => navigateToSection('experience')
    },
    {
      title: "Explore Technical Skills Stack",
      category: "Navigation",
      icon: Layers,
      action: () => navigateToSection('skills')
    },
    {
      title: "Explore AI-Native Engineering",
      category: "Navigation",
      icon: Cpu,
      action: () => navigateToSection('ai-native')
    },
    {
      title: "How I Build (Engineering Process)",
      category: "Navigation",
      icon: Layers,
      action: () => navigateToSection('approach')
    },
    {
      title: "Contact Hritick Kumar",
      category: "Contact",
      icon: Mail,
      action: () => navigateToSection('contact')
    },
    {
      title: "Download Resume",
      category: "Resume",
      icon: FileText,
      action: () => {
        onClose();
        window.open(PERSONAL_INFO.resumeUrl, '_blank');
      }
    }
  ];

  const filtered = commands.filter(c => 
    c.title.toLowerCase().includes(query.toLowerCase()) || 
    c.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-xl bg-[#090d18] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col backdrop-blur-2xl">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-white/[0.02]">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none font-mono"
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1 modal-scrollbar">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs font-mono text-slate-500">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={item.action}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-white/10 text-left transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="p-1.5 rounded-lg bg-white/5 text-slate-400 group-hover:text-white transition-colors"
                      style={{ color: config.primaryHex }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400">
                        {item.category}
                      </div>
                    </div>
                  </div>

                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 border-t border-white/5 bg-black/40 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span>Navigation:</span>
            <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">Esc</span> to exit
          </div>
          <span style={{ color: config.primaryHex }}>Interactive Command Nexus</span>
        </div>
      </div>
    </div>
  );
};
