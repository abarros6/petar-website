import Image from "next/image";
import { images } from "@/lib/images";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
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
              Pavcon is a Toronto-based construction and custom home builder
              dedicated to delivering high-quality residential projects. We
              specialize in renovations, additions, custom builds, and
              multi-unit conversions.
            </p>
            <p className="text-[#4b5563] leading-relaxed mb-8">
              Our team brings transparent communication, practical design
              solutions, and an unwavering commitment to quality to every
              project. With over 10 years of experience serving Southern
              Ontario, we understand what it takes to bring your vision to
              life.
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
