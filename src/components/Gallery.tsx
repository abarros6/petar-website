import Image from "next/image";
import { images } from "@/lib/images";

function GalleryImage({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div className="relative overflow-hidden group w-full h-full">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-[#153243]/0 group-hover:bg-[#153243]/30 transition-colors duration-300" />
      <span className="absolute bottom-3 left-3 text-xs font-semibold tracking-widest uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity bg-[#b39f79] px-3 py-1.5">
        {label}
      </span>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b39f79] mb-3">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#153243]">
            Gallery
          </h2>
        </div>

        {/* Mobile: simple stacked grid */}
        <div className="grid grid-cols-1 gap-3 sm:hidden">
          {images.gallery.map((p) => (
            <div key={p.src} className="relative h-56">
              <GalleryImage {...p} />
            </div>
          ))}
        </div>

        {/* Tablet+: asymmetric gallery */}
        <div className="hidden sm:grid grid-cols-12 gap-3 auto-rows-[180px] lg:auto-rows-[200px]">
          <div className="col-span-8 row-span-2">
            <GalleryImage {...images.gallery[0]} />
          </div>
          <div className="col-span-4 row-span-1">
            <GalleryImage {...images.gallery[1]} />
          </div>
          <div className="col-span-4 row-span-1">
            <GalleryImage {...images.gallery[2]} />
          </div>
          <div className="col-span-6 row-span-1">
            <GalleryImage {...images.gallery[3]} />
          </div>
          <div className="col-span-6 row-span-1">
            <GalleryImage {...images.gallery[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}
