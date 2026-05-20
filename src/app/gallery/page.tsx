import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryNav from "./CategoryNav";
import { galleryCategories } from "@/lib/images";

export const metadata = {
  title: "Gallery | Pavcon Construction",
  description:
    "Browse Pavcon's full project gallery — kitchens, bathrooms, living spaces, bedrooms, bars, and more.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Page header */}
        <div className="bg-[#153243] pt-32 pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-white/40 hover:text-[#b39f79] text-xs tracking-widest uppercase mb-6 transition-colors"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Our Services
            </Link>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b39f79] mb-3">
              Our Work
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Project Gallery
            </h1>
            <p className="mt-5 text-white/50 text-sm lg:text-base max-w-xl">
              {galleryCategories.reduce((sum, c) => sum + c.images.length, 0)} projects across{" "}
              {galleryCategories.length} categories — browse our full portfolio below.
            </p>
          </div>
        </div>

        {/* Sticky category nav */}
        <CategoryNav categories={galleryCategories.map((c) => ({ id: c.id, label: c.label }))} />

        {/* Category sections */}
        {galleryCategories.map((category) => (
          <section key={category.id} id={category.id} className="py-14 lg:py-20 border-b border-gray-100 last:border-0">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex items-baseline justify-between mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#153243]">
                  {category.label}
                </h2>
                <span className="text-sm text-[#6b7280]">
                  {category.images.length} photo{category.images.length !== 1 ? "s" : ""}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                {category.images.map((img, i) => (
                  <div key={i} className="relative aspect-[4/3] overflow-hidden group">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-[#153243]/0 group-hover:bg-[#153243]/25 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
}
