import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/useTheme';
import { THEME_CONFIGS, type ThemeAccent } from '../context/themeData';
import { Palette, Check, Sparkles } from 'lucide-react';

export const ThemeSelector: React.FC = () => {
  const { accent, setAccent, config } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themes = Object.values(THEME_CONFIGS);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-xs font-mono text-slate-300 transition-all cursor-pointer backdrop-blur-md group"
        title="Change 3D & Accent Theme"
        aria-label="Change portfolio visual theme"
      >
        <span
          className="w-2.5 h-2.5 rounded-full transition-transform group-hover:scale-125 shadow-sm"
          style={{ backgroundColor: config.primaryHex, boxShadow: `0 0 8px ${config.primaryHex}` }}
        />
        <span className="hidden sm:inline text-[11px] font-medium tracking-tight">
          {config.name}
        </span>
        <Palette className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 rounded-2xl bg-[#090d18]/95 border border-white/15 p-2 shadow-2xl backdrop-blur-2xl z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-2.5 py-1.5 mb-1 border-b border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-blue-400" />
              <span>THEME & MOOD</span>
            </span>
            <span>4 PALETTES</span>
          </div>

          <div className="space-y-1">
            {themes.map((t) => {
              const isSelected = accent === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setAccent(t.id as ThemeAccent);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white/10 text-white font-semibold'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{
                        backgroundColor: t.primaryHex,
                        boxShadow: isSelected ? `0 0 10px ${t.primaryHex}` : 'none',
                      }}
                    />
                    <div className="text-left">
                      <div className="text-xs font-medium leading-none">{t.name}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{t.badge}</div>
                    </div>
                  </div>

                  {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
