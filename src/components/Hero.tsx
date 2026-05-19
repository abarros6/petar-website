import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage:
          "url('https://pavcon.ca/wp-content/uploads/2020/02/home-remodeling-bathroom.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#111111]/70" />

      {/* px-6 gives 24px each side → 288px content on a 320px phone */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 text-center text-white">

        {/* w-full forces this element to the padding box width so text wraps at word boundaries */}
        <p className="w-full text-[10px] sm:text-xs font-semibold tracking-[0.08em] sm:tracking-[0.2em] uppercase text-[#c8932a] mb-5">
          Serving Southern Ontario for over 20 Years
        </p>

        {/* text-3xl = 30px; longest single word "remodeling" ≈ 165px — safely fits 288px */}
        <h1 className="w-full text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 break-words">
          We are remodeling{" "}
          <span className="text-[#c8932a]">experts</span>
        </h1>

        <p className="w-full sm:max-w-md text-sm sm:text-base lg:text-lg text-white/70 mb-10">
          Toronto-based construction and custom home builder dedicated to
          delivering high-quality residential projects.
        </p>

        {/* Full-width stacked on mobile; auto-width side-by-side on sm+ */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Link
            href="#contact"
            className="bg-[#c8932a] hover:bg-[#b07a1e] text-white font-semibold px-8 py-3.5 text-sm tracking-wider uppercase transition-colors text-center"
          >
            Get a Free Quote
          </Link>
          <a
            href="tel:4163883989"
            className="border border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 text-sm tracking-wider uppercase transition-colors text-center"
          >
            416 388 3989
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-white/30" />
      </div>
    </section>
  );
}
