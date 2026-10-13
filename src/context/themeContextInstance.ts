import { createContext } from 'react';
import { THEME_CONFIGS, type ThemeAccent, type ThemeConfig } from './themeData';

export interface ThemeContextType {
  accent: ThemeAccent;
  setAccent: (accent: ThemeAccent) => void;
  config: ThemeConfig;
}

export const ThemeContext = createContext<ThemeContextType>({
  accent: 'cyan',
  setAccent: () => {},
  config: THEME_CONFIGS.cyan,
});
