'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type ResponsiveArtboardProps = {
  children: ReactNode;
};

export function ResponsiveArtboard({ children }: ResponsiveArtboardProps) {
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const stage = viewport?.firstElementChild as HTMLElement | null;
    if (!viewport || !stage) return;

    const sync = () => {
      const baseHeight = stage.offsetHeight;
      if (!baseHeight) return;
      const scale = Math.max(window.innerWidth, 1) / 1366;
      document.documentElement.style.setProperty('--responsive-scale', String(scale));
      document.documentElement.style.setProperty('--responsive-page-height', `${baseHeight * scale}px`);
    };

    sync();
    const frame = window.requestAnimationFrame(sync);
    const settle = window.setTimeout(sync, 100);
    const observer = 'ResizeObserver' in window ? new ResizeObserver(sync) : null;
    observer?.observe(viewport);
    window.addEventListener('resize', sync, { passive: true });
    window.addEventListener('orientationchange', sync, { passive: true });
    window.visualViewport?.addEventListener('resize', sync, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(settle);
      observer?.disconnect();
      window.removeEventListener('resize', sync);
      window.removeEventListener('orientationchange', sync);
      window.visualViewport?.removeEventListener('resize', sync);
    };
  }, []);

  return (
    <div className="artboard-viewport" ref={viewportRef}>
      {children}
    </div>
  );
}
