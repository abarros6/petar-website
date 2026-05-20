import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    number: "/01",
    title: "Kitchen Remodeling",
    description:
      "Transform your kitchen into a functional, beautiful space tailored to your lifestyle. From custom cabinetry to modern countertops, we handle every detail.",
    galleryHref: "/gallery#kitchens",
  },
  {
    number: "/02",
    title: "Bathroom Remodeling",
    description:
      "Elevate your bathroom with premium fixtures, custom tile work, and thoughtful design that blends aesthetics with practicality.",
    galleryHref: "/gallery#bathrooms",
  },
  {
    number: "/03",
    title: "Living & Dining Areas",
    description:
      "Create inviting, open-concept living and dining spaces that reflect your personal style while maximizing comfort and flow.",
    galleryHref: "/gallery#living-dining",
  },
  {
    number: "/04",
    title: "Commercial Renovations",
    description:
      "Deliver polished, professional commercial spaces built to impress clients and support your business operations efficiently.",
    galleryHref: "/gallery",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-28 bg-[#eaebed]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 lg:mb-16 gap-4 lg:gap-6">
          <SectionHeader label="What We Do" heading="Our Services" />
          <p className="text-[#6b7280] max-w-md lg:text-right text-sm lg:text-base">
            We offer a full range of renovation and construction services
            designed to exceed your expectations at every stage.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
          {services.map((service) => (
            <div
              key={service.number}
              className="group bg-white p-6 lg:p-8 hover:bg-[#1a6c7a] transition-colors duration-300"
            >
              <p className="text-3xl font-bold text-[#b39f79] mb-5 font-mono">
                {service.number}
              </p>
              <h3 className="text-base lg:text-lg font-bold text-[#153243] group-hover:text-white mb-3 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-[#6b7280] group-hover:text-white/60 leading-relaxed mb-6 transition-colors">
                {service.description}
              </p>
              <Link
                href={service.galleryHref}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#b39f79]"
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
