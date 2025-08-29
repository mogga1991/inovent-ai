"use client"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

// Add type declaration for UnicornStudio
declare global {
  interface Window {
    UnicornStudio: {
      __inited?: boolean;
      init?: (() => void) | undefined;
      play?: () => void;
      pause?: () => void;
    };
  }
}

export function HeroSection() {
  useEffect(() => {
    // UnicornStudio loader with performance optimization
    (function () {
      function initUS() {
        if (window.UnicornStudio && !window.UnicornStudio.__inited && window.UnicornStudio.init) {
          window.UnicornStudio.init();
          window.UnicornStudio.__inited = true;
        }
      }
      if (!window.UnicornStudio) {
        const s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js';
        s.async = true;
        s.onload = initUS;
        (document.head || document.body).appendChild(s);
      } else {
        initUS();
      }

      // Pause animation when hero is off-screen (saves GPU)
      const hero = document.querySelector('#hero');
      if ('IntersectionObserver' in window && hero) {
        const io = new IntersectionObserver((entries) => {
          const e = entries[0];
                  if (!window.UnicornStudio || !window.UnicornStudio.play || !window.UnicornStudio.pause) return;
        if (e.isIntersecting && window.UnicornStudio.play) {
          window.UnicornStudio.play();
        } else if (window.UnicornStudio.pause) {
          window.UnicornStudio.pause();
        }
        }, { threshold: 0.1 });
        io.observe(hero);
      }
    })();
  }, []);

  return (
    <section id="hero" className="hero relative min-h-screen flex items-end overflow-hidden">
      {/* BACKGROUND: UnicornStudio animation (behind content) */}
      <div id="us-bg" data-us-project="mv4DpxfHwKNl0KZvG2FC" aria-hidden="true"></div>

      {/* Optional color wash to match InnoventAI palette */}
      <div className="hero-overlay" aria-hidden="true"></div>

      {/* Your hero content */}
      <div className="hero-inner relative z-10 w-full px-8 pb-24 md:px-16 lg:px-24">
        <div className="max-w-6xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground mb-6 sm:mb-8">
            Unlock AI‑Powered Growth
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary mb-4 sm:mb-6">
            Strategic AI Consulting, Automation & Training Services
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-foreground mb-8 sm:mb-10 max-w-4xl leading-relaxed drop-shadow-xl">
            At InnoventAI, we turn artificial intelligence into a competitive advantage. Whether you&apos;re exploring AI or ready to scale across your organisation, our consultants guide you through every step – from vision and strategy to custom development, automation and training. Discover how AI can streamline operations, cut costs and drive revenue growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto">
              Get Your Free AI‑First Blueprint
            </Button>
            <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
