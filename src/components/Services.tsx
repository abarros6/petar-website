import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    title: "Kitchen Remodeling",
    description:
      "Transform your kitchen into a functional, beautiful space tailored to your lifestyle. From custom cabinetry to modern countertops, we handle every detail.",
    galleryHref: "/gallery#kitchens",
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Elevate your bathroom with premium fixtures, custom tile work, and thoughtful design that blends aesthetics with practicality.",
    galleryHref: "/gallery#bathrooms",
  },
  {
    title: "Basement Finishing",
    description:
      "Turn your unfinished basement into valuable living space — whether a rec room, home office, or in-law suite, we build it right.",
    galleryHref: "/gallery#basements",
  },
  {
    title: "Exterior Renovations",
    description:
      "Boost your home's curb appeal and durability with expert exterior work including siding, decks, windows, and entryways.",
    galleryHref: "/gallery#exterior",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-28 bg-[#eaebed]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 lg:mb-16 gap-4 lg:gap-6">
          <SectionHeader label="What We Do" heading="Our Services" />
          <p className="text-[#6b7280] text-sm lg:text-base max-w-md">
            From kitchens and bathrooms to basements and exteriors — we handle every renovation with the same attention to detail.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col bg-white p-6 lg:p-8 hover:bg-[#1a6c7a] transition-colors duration-300"
            >
              <h3 className="text-base lg:text-lg font-bold text-[#153243] group-hover:text-white mb-3 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-[#6b7280] group-hover:text-white/60 leading-relaxed mb-6 transition-colors">
                {service.description}
              </p>
              <Link
                href={service.galleryHref}
                className="mt-auto inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#153243] group-hover:text-white transition-colors"
              >
                Explore
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
