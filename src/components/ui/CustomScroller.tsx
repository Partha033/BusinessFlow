// src/components/CustomScroller.tsx
import React, { useEffect, useRef } from "react";

type Props = {
  /* whether to show a small percentage label on the progress bar (default false) */
  showPercentage?: boolean;
  /* throttle interval (ms) for resize checks (default 200) */
  resizeThrottle?: number;
};

const CustomScroller: React.FC<Props> = ({ showPercentage = false, resizeThrottle = 200 }) => {
  const progressRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const progress = progressRef.current;
    if (!progress) return;

    let lastKnownScrollY = window.scrollY;
    let ticking = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      const winHeight = window.innerHeight;
      const scrollable = Math.max(docHeight - winHeight, 1);
      const pct = Math.min(100, Math.max(0, (scrollTop / scrollable) * 100));
      progress.style.width = `${pct}%`;

      if (showPercentage) {
        progress.setAttribute("data-percent", `${Math.round(pct)}%`);
      }

      ticking = false;
    };

    const onScroll = () => {
      lastKnownScrollY = window.scrollY;
      if (!ticking) {
        ticking = true;
        rafRef.current = window.requestAnimationFrame(updateProgress);
      }
    };

    // initial update
    updateProgress();

    window.addEventListener("scroll", onScroll, { passive: true });

    // listen for resize (debounced)
    let resizeTimer: number | undefined;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        // recalc on resize
        updateProgress();
      }, resizeThrottle);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [showPercentage, resizeThrottle]);

  return (
    <>
      <div id="scroll-progress" ref={progressRef} role="progressbar" aria-hidden={!showPercentage} />
      {/* Optional small floating pill showing percent (toggleable via showPercentage) */}
      {showPercentage && (
        <div
          aria-hidden={false}
          className="fixed right-4 bottom-8 z-60 pointer-events-none select-none"
          style={{ transform: "translateZ(0)" }}
        >
          <div className="bg-white/90 px-3 py-2 rounded-full shadow-[0_8px_20px_rgba(2,6,23,0.12)] text-xs font-medium text-slate-800">
            <span id="scroll-percent-label" />
          </div>
        </div>
      )}


    </>
  );
};

export default CustomScroller;
