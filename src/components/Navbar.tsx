"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks, LOGO_SRC } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#153243]/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
          <Link href="/#home" aria-label="Pavcon Home" className="flex items-center gap-3">
            <Image
              src={LOGO_SRC}
              alt=""
              width={40}
              height={40}
              priority
              className="h-10 w-10"
            />
            <span className="text-white font-semibold text-xl tracking-widest uppercase">
              Pavcon
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-white/80 hover:text-[#b39f79] tracking-wide transition-colors uppercase"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>
      </header>

      {/* Mobile overlay — outside <header> so it gets its own top-level stacking context */}
      <div
        className={`md:hidden fixed inset-0 z-[999] bg-[#153243] flex flex-col transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Overlay header row */}
        <div className="flex items-center justify-between px-6 h-20 shrink-0">
          <Link href="/#home" onClick={() => setMenuOpen(false)} aria-label="Pavcon Home" className="flex items-center gap-3">
            <Image
              src={LOGO_SRC}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-white font-semibold text-xl tracking-widest uppercase">
              Pavcon
            </span>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="text-white/70 hover:text-white transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <ul className="flex flex-col px-6 pt-2">
          {navLinks.map((link) => (
            <li key={link.href} className="border-t border-white/10">
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-5 text-3xl font-light text-white/80 hover:text-[#b39f79] tracking-wide transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="border-t border-white/10" />
        </ul>
      </div>
    </>
  );
}
