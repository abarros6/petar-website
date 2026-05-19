const CLOUD = "dxx7wooza";

// Cloudinary URL builder — applies transformations before delivery
// w_ = max width, q_auto = best quality/size balance, f_auto = WebP/AVIF where supported
function cl(publicId: string, width: number) {
  return `https://res.cloudinary.com/${CLOUD}/image/upload/w_${width},q_auto,f_auto/${publicId}.jpg`;
}

// ─── Replace the publicId values below with your actual Cloudinary image IDs ───
// To find a publicId: click an image in Cloudinary → copy the URL
// The publicId is everything after /upload/vXXXXXXXX/ e.g. "IMG_0486_yvcurb"

export const images = {
  // Hero background — full-width, needs largest size
  hero: cl("living-room-1", 1920),

  // About section image
  about: cl("kitchen-1", 1200),

  // Gallery — 5 images
  gallery: [
    { src: cl("kitchen-5", 1200),    alt: "Modern kitchen renovation",    label: "Kitchen Renovation" },
    { src: cl("bathroom-5", 800),    alt: "Luxury bathroom renovation",   label: "Bathroom Renovation" },
    { src: cl("living-room-5", 800), alt: "Open concept living area",     label: "Living Area" },
    { src: cl("bedroom-1", 800),     alt: "Master bedroom custom build",  label: "Master Bedroom" },
    { src: cl("bar-5", 800),         alt: "Custom basement bar",          label: "Custom Bar" },
  ],
};
