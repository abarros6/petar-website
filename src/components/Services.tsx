const services = [
  {
    number: "/01",
    title: "Kitchen Remodeling",
    description:
      "Transform your kitchen into a functional, beautiful space tailored to your lifestyle. From custom cabinetry to modern countertops, we handle every detail.",
  },
  {
    number: "/02",
    title: "Bathroom Remodeling",
    description:
      "Elevate your bathroom with premium fixtures, custom tile work, and thoughtful design that blends aesthetics with practicality.",
  },
  {
    number: "/03",
    title: "Living & Dining Areas",
    description:
      "Create inviting, open-concept living and dining spaces that reflect your personal style while maximizing comfort and flow.",
  },
  {
    number: "/04",
    title: "Commercial Renovations",
    description:
      "Deliver polished, professional commercial spaces built to impress clients and support your business operations efficiently.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-28 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 lg:mb-16 gap-4 lg:gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c8932a] mb-3">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-tight">
              Our Services
            </h2>
          </div>
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
              className="group bg-white p-6 lg:p-8 hover:bg-[#111111] transition-colors duration-300 cursor-pointer"
            >
              <p className="text-3xl font-bold text-[#c8932a] mb-5 font-mono">
                {service.number}
              </p>
              <h3 className="text-base lg:text-lg font-bold text-[#111111] group-hover:text-white mb-3 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-[#6b7280] group-hover:text-white/60 leading-relaxed mb-6 transition-colors">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#c8932a]">
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
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
