import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/useTheme';

interface TopLoadingBarProps {
  isLoading: boolean;
}

export const TopLoadingBar: React.FC<TopLoadingBarProps> = ({ isLoading }) => {
  const { config } = useTheme();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer1: ReturnType<typeof setTimeout>;
    let timer2: ReturnType<typeof setTimeout>;
    let timer3: ReturnType<typeof setTimeout>;
    let timerDone: ReturnType<typeof setTimeout>;

    if (isLoading) {
      const startTimer = setTimeout(() => {
        setVisible(true);
        setProgress(15);
      }, 0);
      timer1 = setTimeout(() => setProgress(45), 200);
      timer2 = setTimeout(() => setProgress(75), 600);
      timer3 = setTimeout(() => setProgress(90), 1200);

      return () => {
        clearTimeout(startTimer);
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    } else {
      const finishTimer = setTimeout(() => {
        setProgress(100);
      }, 0);
      timerDone = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 350);

      return () => {
        clearTimeout(finishTimer);
        clearTimeout(timerDone);
      };
    }
  }, [isLoading]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-transparent">
      <div
        className="h-full transition-all duration-300 ease-out shadow-lg"
        style={{
          width: `${progress}%`,
          background: `linear-gradient(90deg, ${config.primaryHex}, ${config.secondaryHex})`,
          boxShadow: `0 0 10px ${config.primaryHex}`,
        }}
      />
    </div>
  );
};
