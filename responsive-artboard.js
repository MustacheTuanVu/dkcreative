(() => {
  const DESIGN_WIDTH = 1366;
  const stageSelector = '.artboard, .canvas';

  function init() {
    const viewport = document.querySelector('.artboard-viewport');
    const stage = viewport?.querySelector(stageSelector);
    if (!viewport || !stage) return;

    const baseHeight = stage.offsetHeight;
    const sync = () => {
      const availableWidth = Math.max(window.innerWidth || document.documentElement.clientWidth, 1);
      const scale = availableWidth / DESIGN_WIDTH;

      document.documentElement.style.setProperty('--responsive-scale', String(scale));
      document.documentElement.style.setProperty(
        '--responsive-page-height',
        `${baseHeight * scale}px`,
      );
    };

    sync();
    requestAnimationFrame(sync);
    setTimeout(sync, 0);
    setTimeout(sync, 100);
    if ('ResizeObserver' in window) {
      new ResizeObserver(sync).observe(viewport);
    }
    window.addEventListener('resize', sync, { passive: true });
    window.addEventListener('orientationchange', sync, { passive: true });
    window.visualViewport?.addEventListener('resize', sync, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
