import Image from "next/image";

const projects = [
  {
    src: "https://pavcon.ca/wp-content/uploads/2020/02/home-remodeling-bathroom.jpg",
    alt: "Bathroom remodel",
    label: "Bathroom Renovation",
  },
  {
    src: "https://pavcon.ca/wp-content/uploads/2020/02/home-remodeling-chair.jpg",
    alt: "Living area renovation",
    label: "Living Area",
  },
  {
    src: "https://pavcon.ca/wp-content/uploads/2019/02/projects-06-free-img.jpg",
    alt: "Interior renovation project",
    label: "Interior Renovation",
  },
  {
    src: "https://pavcon.ca/wp-content/uploads/2019/02/projects-07-free-img.png",
    alt: "Custom home project",
    label: "Custom Build",
  },
  {
    src: "https://pavcon.ca/wp-content/uploads/2020/02/home-remodeling-sofa.jpg",
    alt: "Living room renovation",
    label: "Living Room Remodel",
  },
];

function ProjectImage({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div className="relative overflow-hidden group w-full h-full">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/30 transition-colors duration-300" />
      <span className="absolute bottom-3 left-3 text-xs font-semibold tracking-widest uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity bg-[#c8932a] px-3 py-1.5">
        {label}
      </span>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c8932a] mb-3">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]">
            Featured Projects
          </h2>
        </div>

        {/* Mobile: simple stacked grid */}
        <div className="grid grid-cols-1 gap-3 sm:hidden">
          {projects.map((p) => (
            <div key={p.src} className="relative h-56">
              <ProjectImage {...p} />
            </div>
          ))}
        </div>

        {/* Tablet+: asymmetric gallery */}
        <div className="hidden sm:grid grid-cols-12 gap-3 auto-rows-[180px] lg:auto-rows-[200px]">
          {/* Large left — spans 2 rows */}
          <div className="col-span-8 row-span-2">
            <ProjectImage {...projects[0]} />
          </div>
          {/* Right top */}
          <div className="col-span-4 row-span-1">
            <ProjectImage {...projects[1]} />
          </div>
          {/* Right bottom */}
          <div className="col-span-4 row-span-1">
            <ProjectImage {...projects[2]} />
          </div>
          {/* Bottom left */}
          <div className="col-span-6 row-span-1">
            <ProjectImage {...projects[3]} />
          </div>
          {/* Bottom right */}
          <div className="col-span-6 row-span-1">
            <ProjectImage {...projects[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}
