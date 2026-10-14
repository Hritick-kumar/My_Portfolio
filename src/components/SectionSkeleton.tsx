import React from 'react';
import { useTheme } from '../context/useTheme';

interface SectionSkeletonProps {
  title?: string;
  badge?: string;
  cardCount?: number;
  heightClass?: string;
}

export const SectionSkeleton: React.FC<SectionSkeletonProps> = ({
  title = 'Loading section...',
  badge = 'Syncing',
  cardCount = 3,
  heightClass = 'min-h-[420px]',
}) => {
  const { config } = useTheme();

  return (
    <section className={`py-16 md:py-24 relative overflow-hidden ${heightClass}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Skeleton */}
        <div className="mb-10 max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4 animate-pulse">
            <span
              className="w-1.5 h-1.5 rounded-full animate-ping"
              style={{ backgroundColor: config.primaryHex }}
            />
            <span className="text-[11px] font-mono text-slate-300">
              {badge}
            </span>
          </div>

          {/* Title Placeholder */}
          <div className="h-7 sm:h-9 bg-white/[0.06] rounded-xl w-3/4 mb-3 animate-pulse" />
          {/* Subtitle Placeholder */}
          <div className="h-4 bg-white/[0.04] rounded-lg w-1/2 animate-pulse" />
        </div>

        {/* Card Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: cardCount }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#0c1020]/80 to-[#070a14]/80 p-6 relative overflow-hidden"
              style={{ minHeight: '260px' }}
            >
              {/* Shimmer sweep effect */}
              <div 
                className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none" 
              />

              {/* Card top badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] animate-pulse" />
                <div className="w-16 h-4 rounded-full bg-white/[0.04] animate-pulse" />
              </div>

              {/* Card text lines */}
              <div className="space-y-3 mb-6">
                <div className="h-5 bg-white/[0.08] rounded-lg w-4/5 animate-pulse" />
                <div className="h-3.5 bg-white/[0.04] rounded-md w-full animate-pulse" />
                <div className="h-3.5 bg-white/[0.04] rounded-md w-2/3 animate-pulse" />
              </div>

              {/* Card footer tags */}
              <div className="flex gap-2 mt-auto pt-4 border-t border-white/5">
                <div className="w-14 h-5 rounded-md bg-white/[0.04] animate-pulse" />
                <div className="w-14 h-5 rounded-md bg-white/[0.04] animate-pulse" />
                <div className="w-14 h-5 rounded-md bg-white/[0.04] animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Discreet bottom loading status */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
          <div 
            className="w-3.5 h-3.5 rounded-full border-2 border-white/20 border-t-transparent animate-spin"
            style={{ borderTopColor: config.primaryHex }}
          />
          <span>{title}</span>
        </div>

      </div>
    </section>
  );
};
