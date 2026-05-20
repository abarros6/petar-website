"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { images } from "@/lib/images";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    let scrollY = 0;

    const onScroll = () => {
      scrollY = window.scrollY;
      if (!ticking) {
        requestAnimationFrame(() => {
          if (bgRef.current) {
            bgRef.current.style.transform = `translate3d(0, ${scrollY * 0.35}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-x-0 top-[-30%] bottom-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url('${images.hero}')` }}
      />
      <div className="absolute inset-0 bg-black/62" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 text-center text-white">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-5">
          Serving Southern Ontario for 10+ Years
        </p>

        <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
          Renovation{" "}
          <span className="text-accent">experts</span>
          <br />you can trust
        </h1>

        <p className="max-w-md text-sm sm:text-base lg:text-lg text-white/80 mb-10 leading-relaxed">
          Custom home builds and full renovations across the Greater Toronto Area.
          Quality craftsmanship, on time and on budget.
        </p>

        <Link
          href="#contact"
          className="bg-accent hover:bg-[#1a6c7a] text-white font-semibold px-10 py-4 text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 text-center"
        >
          Get a Free Quote
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-white/30" />
      </div>
    </section>
  );
}
