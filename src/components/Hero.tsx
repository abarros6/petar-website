import Link from "next/link";
import { images } from "@/lib/images";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen hero-bg"
      style={{
        backgroundImage: `url('${images.hero}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/55" />

      {/* px-6 gives 24px each side → 288px content on a 320px phone */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 text-center text-white">

        {/* w-full forces this element to the padding box width so text wraps at word boundaries */}
        <p className="w-full text-[10px] sm:text-xs font-semibold tracking-[0.08em] sm:tracking-[0.2em] uppercase text-[#b39f79] mb-5">
          Serving Southern Ontario for over 20 Years
        </p>

        {/* text-3xl = 30px; longest single word "remodeling" ≈ 165px — safely fits 288px */}
        <h1 className="w-full text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 break-words">
          We are remodeling{" "}
          <span className="text-[#b39f79]">experts</span>
        </h1>

        <p className="w-full sm:max-w-md text-sm sm:text-base lg:text-lg text-white/70 mb-10">
          Toronto-based construction and custom home builder dedicated to
          delivering high-quality residential projects.
        </p>

        <Link
          href="#contact"
          className="bg-[#b39f79] hover:bg-[#1a6c7a] text-white font-semibold px-10 py-4 text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 text-center"
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
