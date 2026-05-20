"use client";

import { useEffect, useState } from "react";

interface Props {
  categories: { id: string; label: string }[];
}

export default function CategoryNav({ categories }: Props) {
  const [active, setActive] = useState<string>(categories[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    categories.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [categories]);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav className="sticky top-20 z-30 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ul className="flex items-center gap-1 overflow-x-auto scrollbar-none py-3">
          {categories.map(({ id, label }) => (
            <li key={id} className="shrink-0">
              <button
                onClick={() => scrollTo(id)}
                className={`px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors rounded-sm ${
                  active === id
                    ? "bg-[#153243] text-white"
                    : "text-[#6b7280] hover:text-[#153243]"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
