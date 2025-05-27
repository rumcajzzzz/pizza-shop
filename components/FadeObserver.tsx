'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function FadeObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-on-scroll');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname])
  return null;
}