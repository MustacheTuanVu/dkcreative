'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';

type CanvaVideoProps = {
  src: string;
  style: CSSProperties;
  poster: string;
  ariaLabel: string;
  eager?: boolean;
  startAt?: number;
  startDelay?: number;
};

export function CanvaVideo({
  src,
  style,
  poster,
  ariaLabel,
  eager = false,
  startAt = 0,
  startDelay = 0,
}: CanvaVideoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReady, setIsReady] = useState(eager);

  useEffect(() => {
    if (isReady || !ref.current) return;
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [isReady]);

  useEffect(() => {
    if (!isReady || !videoRef.current) return;
    const video = videoRef.current;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;

    const begin = () => {
      if (cancelled) return;
      if (startAt > 0 && Number.isFinite(video.duration)) {
        video.currentTime = Math.min(startAt, Math.max(0, video.duration - 0.05));
      }
      void video.play().catch(() => undefined);
    };

    if (startDelay > 0) {
      timer = setTimeout(begin, startDelay);
    } else if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
      begin();
    } else {
      video.addEventListener('loadedmetadata', begin, { once: true });
    }

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
      video.removeEventListener('loadedmetadata', begin);
    };
  }, [isReady, startAt, startDelay]);

  return (
    <div ref={ref} className="canva-video" style={style} aria-label={ariaLabel}>
      {isReady ? (
        <video
          ref={videoRef}
          className="media"
          src={src}
          autoPlay={startDelay <= 0}
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      ) : (
        <img className="media" src={poster} alt="" aria-hidden="true" />
      )}
    </div>
  );
}
