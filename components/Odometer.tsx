'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface WindowWithOdometer extends Window {
  Odometer: new (options: {
    el: HTMLElement;
    value: number;
    format?: string;
    theme?: string;
  }) => {
    update: (value: number) => void;
  };
}

interface HTMLElementWithOdometer extends HTMLElement {
  _odometerInitialized?: boolean;
}




const OdometerLoader = () => {
  const pathname = usePathname();

  useEffect(() => {
    const interval = setInterval(() => {

      const win = window as unknown as WindowWithOdometer;
      const Odometer = win.Odometer;
      if (!Odometer) return;

      const elements = document.querySelectorAll<HTMLElementWithOdometer>('.odometer[data-value]');

      if (elements.length === 0) return;

      elements.forEach(el => {
        const finalValue = parseInt(el.getAttribute('data-value') || '0', 10);

        if (el._odometerInitialized) return;
        el._odometerInitialized = true;
        el.innerHTML = '0';

        const odometer = new Odometer({
          el,
          value: 0,
          format: '(,ddd)',
          theme: 'default',
        });

        (el as HTMLElementWithOdometer)._odometerInitialized = true;

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
