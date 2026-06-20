import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryNav from "./CategoryNav";
import GalleryGrid from "./GalleryGrid";
import { galleryCategories } from "@/lib/images";

export const metadata = {
  title: "Gallery",
  description:
    "Browse Pavcon's full project gallery — kitchens, bathrooms, living spaces, bars, laundry rooms, and more.",
  alternates: {
    canonical: "https://www.pavcon.ca/gallery",
  },
  openGraph: {
    title: "Project Gallery | Pavcon",
    description:
      "Browse Pavcon's full project gallery — kitchens, bathrooms, living spaces, bars, laundry rooms, and more.",
    url: "https://www.pavcon.ca/gallery",
    images: [
      {
        url: "https://res.cloudinary.com/dxx7wooza/image/upload/w_1200,q_auto,f_jpg/kitchen-5.jpg",
        width: 1200,
        height: 800,
        alt: "Pavcon kitchen renovation project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Gallery | Pavcon",
    description: "Browse Pavcon's full project gallery — kitchens, bathrooms, living spaces, bars, laundry rooms, and more.",
    images: ["https://res.cloudinary.com/dxx7wooza/image/upload/w_1200,q_auto,f_jpg/kitchen-5.jpg"],
  },
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Page header */}
        <div className="bg-[#153243] pt-28 pb-8 lg:pb-10">
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

              <GalleryGrid images={category.images} />
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
}
