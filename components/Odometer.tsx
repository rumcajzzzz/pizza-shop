'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const OdometerLoader = () => {
  const pathname = usePathname();

  useEffect(() => {
    const interval = setInterval(() => {
      const Odometer = (window as any).Odometer;
      if (!Odometer) return;

      const elements = document.querySelectorAll<HTMLElement>('.odometer[data-value]');

      if (elements.length === 0) return;

      elements.forEach(el => {
        const finalValue = parseInt(el.getAttribute('data-value') || '0', 10);

        if ((el as any)._odometerInitialized) return;

        el.innerHTML = '0';

        const odometer = new Odometer({
          el,
          value: 0,
          format: '(,ddd)',
          theme: 'default',
        });

        (el as any)._odometerInitialized = true;

        setTimeout(() => {
          odometer.update(finalValue);
        }, 300);
      });

      clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, [pathname]);

  return null;
};

export default OdometerLoader;
