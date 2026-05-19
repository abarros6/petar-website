import Image from "next/image";
import { images } from "@/lib/images";

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b39f79] mb-4">
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#153243] leading-tight mb-6">
              A few words <br />about Pavcon
            </h2>
            <p className="text-[#4b5563] leading-relaxed mb-5">
              Pavcon is a Toronto-based construction and custom home builder
              dedicated to delivering high-quality residential projects. We
              specialize in renovations, additions, custom builds, and
              multi-unit conversions.
            </p>
            <p className="text-[#4b5563] leading-relaxed mb-8">
              Our team brings transparent communication, practical design
              solutions, and an unwavering commitment to quality to every
              project. With over 20 years of experience serving Southern
              Ontario, we understand what it takes to bring your vision to
              life.
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-gray-100 pt-8">
              {[
                { value: "20+", label: "Years Experience" },
                { value: "500+", label: "Projects Completed" },
                { value: "100%", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-[#153243]">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-[#6b7280] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative mt-4 lg:mt-0">
            <div className="aspect-[4/3] sm:aspect-[4/5] relative overflow-hidden">
              <Image
                src={images.about}
                alt="Pavcon renovation project"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Accent block — hidden on mobile to avoid overflow */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-28 h-28 lg:w-32 lg:h-32 bg-[#b39f79] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
