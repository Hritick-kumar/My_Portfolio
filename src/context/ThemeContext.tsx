import React, { useState, useEffect } from 'react';
import { THEME_CONFIGS, type ThemeAccent } from './themeData';
import { ThemeContext } from './themeContextInstance';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accent, setAccentState] = useState<ThemeAccent>(() => {
    try {
      const saved = localStorage.getItem('portfolio-accent-theme');
      if (saved && saved in THEME_CONFIGS) {
        return saved as ThemeAccent;
      }
    } catch {
      // ignore
    }
    return 'cyan';
  });

  const setAccent = (newAccent: ThemeAccent) => {
    setAccentState(newAccent);
    try {
      localStorage.setItem('portfolio-accent-theme', newAccent);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', accent);
  }, [accent]);

  const config = THEME_CONFIGS[accent];

  return (
    <ThemeContext.Provider value={{ accent, setAccent, config }}>
      {children}
    </ThemeContext.Provider>
  );
};
