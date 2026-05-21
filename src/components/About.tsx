"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { images } from "@/lib/images";
import SectionHeader from "@/components/ui/SectionHeader";

const INTERVAL_MS = 4500;

export default function About() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const carousel = images.aboutCarousel;

  const goTo = (index: number) => setCurrent((index + carousel.length) % carousel.length);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => setCurrent((i) => (i + 1) % carousel.length), INTERVAL_MS);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, carousel.length]);

  return (
    <section id="about" className="py-16 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <SectionHeader
              label="About Us"
              heading={<>A few words <br />about Pavcon</>}
              headingClassName="mb-6"
            />
            <p className="text-[#4b5563] leading-relaxed mb-5">
              Pavcon is a Toronto-based renovation company specializing in
              kitchen, bathroom, basement, and exterior transformations. We
              deliver high-quality craftsmanship tailored to each homeowner's
              vision and budget.
            </p>
            <p className="text-[#4b5563] leading-relaxed mb-8">
              With over 10 years of experience serving Southern Ontario, our
              team is known for transparent communication, clean job sites, and
              results that last. From a full kitchen remodel to a finished
              basement, we treat every project like it's our own home.
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-gray-100 pt-8">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "100s", label: "Projects Completed" },
                { value: "Client-first", label: "Every Project" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-[#153243]">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-[#6b7280] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel */}
          <div
            className="relative mt-4 lg:mt-0"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              {carousel.map((img, i) => (
                <Image
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-opacity duration-700"
                  style={{ opacity: i === current ? 1 : 0 }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={i === 0}
                />
              ))}

              {/* Prev / Next */}
              <button
                onClick={() => goTo(current - 1)}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white w-8 h-8 flex items-center justify-center transition-colors"
              >
                ‹
              </button>
              <button
                onClick={() => goTo(current + 1)}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white w-8 h-8 flex items-center justify-center transition-colors"
              >
                ›
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
                {carousel.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to image ${i + 1}`}
                    className="w-6 h-6 flex items-center justify-center rounded-full transition-colors"
                  >
                    <span
                      className="block w-1.5 h-1.5 rounded-full transition-colors"
                      style={{ backgroundColor: i === current ? "#b39f79" : "rgba(255,255,255,0.6)" }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Accent block */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-28 h-28 lg:w-32 lg:h-32 bg-[#b39f79] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
