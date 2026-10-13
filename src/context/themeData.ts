export type ThemeAccent = 'cyan' | 'violet' | 'emerald' | 'amber';

export interface ThemeConfig {
  id: ThemeAccent;
  name: string;
  badge: string;
  primaryHex: string;
  secondaryHex: string;
  glowColor: string;
  threeColorHex: number;
  threeSecondaryHex: number;
}

export const THEME_CONFIGS: Record<ThemeAccent, ThemeConfig> = {
  cyan: {
    id: 'cyan',
    name: 'Cyber Cyan',
    badge: 'Neo-Tech',
    primaryHex: '#00e5ff',
    secondaryHex: '#3b82f6',
    glowColor: 'rgba(0, 229, 255, 0.35)',
    threeColorHex: 0x00e5ff,
    threeSecondaryHex: 0x3b82f6,
  },
  violet: {
    id: 'violet',
    name: 'Holo Violet',
    badge: 'Synthwave',
    primaryHex: '#c084fc',
    secondaryHex: '#f43f5e',
    glowColor: 'rgba(192, 132, 252, 0.35)',
    threeColorHex: 0xc084fc,
    threeSecondaryHex: 0xf43f5e,
  },
  emerald: {
    id: 'emerald',
    name: 'Matrix Mint',
    badge: 'Bio-Digital',
    primaryHex: '#10b981',
    secondaryHex: '#06b6d4',
    glowColor: 'rgba(16, 185, 129, 0.35)',
    threeColorHex: 0x10b981,
    threeSecondaryHex: 0x06b6d4,
  },
  amber: {
    id: 'amber',
    name: 'Quantum Gold',
    badge: 'Solaris',
    primaryHex: '#f59e0b',
    secondaryHex: '#fb923c',
    glowColor: 'rgba(245, 158, 11, 0.35)',
    threeColorHex: 0xf59e0b,
    threeSecondaryHex: 0xfb923c,
  },
};
