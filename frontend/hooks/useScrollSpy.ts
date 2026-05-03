'use client';

import { useState, useEffect } from 'react';

export function useScrollSpy(ids: string[], offset = 80) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Fallback: if scrolled to the very bottom of the page, activate the last section
    function onScroll() {
      const nearBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 80;
      if (nearBottom && ids.length > 0) {
        setActiveId(ids[ids.length - 1]);
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      {
        rootMargin: `-${offset}px 0px -30% 0px`,
        threshold: 0,
      }
    );

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [ids, offset]);

  return activeId;
}
