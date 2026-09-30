import { useEffect, useRef, useState } from 'react';

function ChevronIcon({ direction }) {
  const d = direction === 'left' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7';
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

const arrowButton =
  'absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/15 bg-panel/90 text-ink backdrop-blur transition hover:border-white/30 hover:text-white disabled:pointer-events-none disabled:opacity-30';

export default function Carousel({ children, ariaLabel }) {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= max - 4);
  };

  useEffect(() => {
    updateEdges();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateEdges, { passive: true });
    window.addEventListener('resize', updateEdges);
    return () => {
      el.removeEventListener('scroll', updateEdges);
      window.removeEventListener('resize', updateEdges);
    };
  }, []);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const item = el.querySelector('[data-carousel-item]');
    const gap = 24;
    const amount = (item ? item.getBoundingClientRect().width : el.clientWidth * 0.8) + gap;
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
    window.setTimeout(updateEdges, 400);
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
        className="no-scrollbar flex snap-x snap-mandatory [justify-content:safe_center] gap-6 overflow-x-auto px-6 pb-2 scroll-pl-6 scroll-pr-6"
      >
        {children}
      </div>

      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        disabled={atStart}
        aria-label="Proyecto anterior"
        className={`${arrowButton} left-2`}
      >
        <ChevronIcon direction="left" />
      </button>
      <button
        type="button"
        onClick={() => scrollByCard(1)}
        disabled={atEnd}
        aria-label="Próximo proyecto"
        className={`${arrowButton} right-2`}
      >
        <ChevronIcon direction="right" />
      </button>
    </div>
  );
}
