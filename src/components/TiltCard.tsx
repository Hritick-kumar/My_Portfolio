import React, { useRef, useState, useCallback } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 8,
  perspective = 1000,
  scale = 1.015,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glarePos, setGlarePos] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // Don't calculate on touch devices (saves massive CPU/GPU on mobile scroll)
      if (window.matchMedia && window.matchMedia('(hover: none)').matches) return;
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = -((y - centerY) / centerY) * maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;

      setStyle({
        transform: `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, 1)`,
        transition: 'transform 0.1s cubic-bezier(0.1, 0.4, 0.2, 1)',
      });

      setGlarePos({
        x: glareX,
        y: glareY,
        opacity: 0.15,
      });
    },
    [maxTilt, perspective, scale]
  );

  const handleMouseLeave = useCallback(() => {
    if (window.matchMedia && window.matchMedia('(hover: none)').matches) return;
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
    });
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  }, [perspective]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative md:will-change-transform ${className}`}
    >
      {children}
      {/* Dynamic Specular Glare Sheen */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: glarePos.opacity,
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 65%)`,
        }}
      />
    </div>
  );
};
