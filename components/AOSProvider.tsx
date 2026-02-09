'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: true, // Animation only happens once
      offset: 0, // Trigger when element enters viewport
      delay: 0,
      disable: false,
      startEvent: 'DOMContentLoaded',
      throttleDelay: 99,
      debounceDelay: 50,
    });
  }, []);

  return <>{children}</>;
}

