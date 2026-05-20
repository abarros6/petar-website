const CLOUD = "dxx7wooza";

// Cloudinary URL builder — applies transformations before delivery
// w_ = max width, q_auto = best quality/size balance, f_auto = WebP/AVIF where supported
function cl(publicId: string, width: number) {
  return `https://res.cloudinary.com/${CLOUD}/image/upload/w_${width},q_auto,f_auto/${publicId}.jpg`;
}

export const images = {
  hero: cl("living-room-1", 1920),
  about: cl("kitchen-1", 1200),
  gallery: [
    { src: cl("kitchen-5", 1200),    alt: "Modern kitchen renovation",    label: "Kitchen Renovation" },
    { src: cl("bathroom-5", 800),    alt: "Luxury bathroom renovation",   label: "Bathroom Renovation" },
    { src: cl("living-room-5", 800), alt: "Open concept living area",     label: "Living Area" },
    { src: cl("bedroom-1", 800),     alt: "Master bedroom custom build",  label: "Master Bedroom" },
    { src: cl("bar-5", 800),         alt: "Custom basement bar",          label: "Custom Bar" },
  ],
};

export const galleryCategories = [
  {
    id: "kitchens",
    label: "Kitchens",
    images: [
      { src: cl("kitchen-1", 1200), alt: "Kitchen renovation" },
      { src: cl("kitchen-2", 1200), alt: "Kitchen renovation" },
      { src: cl("kitchen-3", 1200), alt: "Kitchen renovation" },
      { src: cl("kitchen-4", 1200), alt: "Kitchen renovation" },
      { src: cl("kitchen-5", 1200), alt: "Kitchen renovation" },
      { src: cl("sink-1", 800),     alt: "Custom kitchen sink" },
      { src: cl("sink-2", 800),     alt: "Custom kitchen sink" },
      { src: cl("sink-3", 800),     alt: "Custom kitchen sink" },
    ],
  },
  {
    id: "bathrooms",
    label: "Bathrooms",
    images: [
      { src: cl("bathroom-1", 800), alt: "Bathroom renovation" },
      { src: cl("bathroom-2", 800), alt: "Bathroom renovation" },
      { src: cl("bathroom-3", 800), alt: "Bathroom renovation" },
      { src: cl("bathroom-4", 800), alt: "Bathroom renovation" },
      { src: cl("bathroom-5", 800), alt: "Bathroom renovation" },
      { src: cl("bathtub-1", 800),  alt: "Luxury freestanding bathtub" },
    ],
  },
  {
    id: "living-dining",
    label: "Living & Dining",
    images: [
      { src: cl("living-room-1", 1200), alt: "Living room renovation" },
      { src: cl("living-room-2", 1200), alt: "Living room renovation" },
      { src: cl("living-room-3", 1200), alt: "Living room renovation" },
      { src: cl("living-room-4", 1200), alt: "Living room renovation" },
      { src: cl("living-room-5", 1200), alt: "Living room renovation" },
      { src: cl("dining-room-1", 1200), alt: "Dining room renovation" },
      { src: cl("dining-room-2", 1200), alt: "Dining room renovation" },
    ],
  },
  {
    id: "bedrooms",
    label: "Bedrooms",
    images: [
      { src: cl("bedroom-1", 1200),    alt: "Master bedroom renovation" },
      { src: cl("baby-room-1", 800),   alt: "Baby room renovation" },
      { src: cl("baby-room-2", 800),   alt: "Baby room renovation" },
      { src: cl("baby-room-3", 800),   alt: "Baby room renovation" },
      { src: cl("kids-room-1", 800),   alt: "Kids room renovation" },
    ],
  },
  {
    id: "basement-bar",
    label: "Basement & Bar",
    images: [
      { src: cl("bar-1", 800),          alt: "Custom home bar" },
      { src: cl("bar-2", 800),          alt: "Custom home bar" },
      { src: cl("bar-3", 800),          alt: "Custom home bar" },
      { src: cl("bar-4", 800),          alt: "Custom home bar" },
      { src: cl("bar-5", 800),          alt: "Custom home bar" },
      { src: cl("bar-6", 800),          alt: "Custom home bar" },
      { src: cl("bar-7", 800),          alt: "Custom home bar" },
      { src: cl("fireplace-1", 800),    alt: "Custom fireplace installation" },
      { src: cl("weight-room", 800),    alt: "Home gym renovation" },
      { src: cl("weight-room-1", 800),  alt: "Home gym renovation" },
      { src: cl("sauna", 800),          alt: "Custom sauna installation" },
    ],
  },
  {
    id: "other-spaces",
    label: "Other Spaces",
    images: [
      { src: cl("hallway-1", 800),      alt: "Hallway renovation" },
      { src: cl("hallway-2", 800),      alt: "Hallway renovation" },
      { src: cl("hallway-3", 800),      alt: "Hallway renovation" },
      { src: cl("hallway-4", 800),      alt: "Hallway renovation" },
      { src: cl("laundry-room-1", 800), alt: "Laundry room renovation" },
      { src: cl("skylight-1", 800),     alt: "Skylight installation" },
      { src: cl("skylight-2", 800),     alt: "Skylight installation" },
    ],
  },
];
