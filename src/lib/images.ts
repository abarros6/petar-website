const CLOUD = "dxx7wooza";

// Cloudinary URL builder — applies transformations before delivery
// w_ = max width, q_auto = best quality/size balance, f_auto = WebP/AVIF where supported
function cl(publicId: string, width: number) {
  return `https://res.cloudinary.com/${CLOUD}/image/upload/w_${width},q_auto,f_auto/${publicId}.jpg`;
}

export const images = {
  hero: cl("living-room-1", 1920),
  about: cl("bar-1", 1200),
  aboutCarousel: [
    { src: cl("bar-1", 1200),          alt: "Custom basement bar renovation" },
    { src: cl("kitchen-5", 1200),      alt: "Modern kitchen renovation" },
    { src: cl("bathroom-5", 800),      alt: "Luxury bathroom renovation" },
    { src: cl("living-room-3", 1200),  alt: "Living room renovation" },
    { src: cl("hallway-1", 800),       alt: "Hallway renovation" },
  ],
  gallery: [
    { src: cl("kitchen-5", 1200),    alt: "Modern kitchen renovation",    label: "Kitchen Renovation" },
    { src: cl("bathroom-5", 800),    alt: "Luxury bathroom renovation",   label: "Bathroom Renovation" },
    { src: cl("living-room-5", 800), alt: "Open concept living area",     label: "Living Area" },
    { src: cl("bar-5", 800),         alt: "Custom basement bar",          label: "Custom Bar" },
    { src: cl("hallway-1", 800),     alt: "Hallway renovation",           label: "Other Spaces" },
  ],
};

export const galleryCategories = [
  {
    id: "kitchens",
    label: "Kitchens",
    images: [
      { src: cl("kitchen-1", 1200), alt: "Full kitchen renovation with custom cabinetry by Pavcon" },
      { src: cl("kitchen-2", 1200), alt: "Modern open-concept kitchen remodel in Toronto" },
      { src: cl("kitchen-3", 1200), alt: "Kitchen renovation with quartz countertops and new flooring" },
      { src: cl("kitchen-4", 1200), alt: "Custom kitchen redesign with island and recessed lighting" },
      { src: cl("kitchen-5", 1200), alt: "Contemporary kitchen remodel with new cabinets and backsplash" },
      { src: cl("sink-1", 800),     alt: "Custom undermount kitchen sink installation" },
      { src: cl("sink-2", 800),     alt: "Double basin kitchen sink with designer faucet" },
      { src: cl("sink-3", 800),     alt: "Kitchen sink and countertop detail after Pavcon renovation" },
    ],
  },
  {
    id: "bathrooms",
    label: "Bathrooms",
    images: [
      { src: cl("bathroom-2", 800), alt: "Full bathroom renovation with custom tile work by Pavcon" },
      { src: cl("bathroom-3", 800), alt: "Modern bathroom remodel with glass shower enclosure" },
      { src: cl("bathroom-4", 800), alt: "Master bathroom renovation with double vanity" },
      { src: cl("bathroom-5", 800), alt: "Luxury bathroom remodel with heated floors and rainfall shower" },
      { src: cl("bathtub-1", 800),  alt: "Freestanding soaker bathtub installation in renovated bathroom" },
    ],
  },
  {
    id: "living-dining",
    label: "Living & Dining",
    images: [
      { src: cl("living-room-1", 1200), alt: "Open-concept living room renovation with hardwood flooring" },
      { src: cl("living-room-2", 1200), alt: "Living room remodel with custom built-ins and accent wall" },
      { src: cl("living-room-3", 1200), alt: "Bright living space renovation with pot lights and trim work" },
      { src: cl("living-room-4", 1200), alt: "Modern living room renovation by Pavcon Homes" },
      { src: cl("living-room-5", 1200), alt: "Renovated living and dining area with open layout" },
      { src: cl("dining-room-1", 1200), alt: "Formal dining room renovation with wainscoting and new lighting" },
      { src: cl("dining-room-2", 1200), alt: "Open dining room remodel connected to updated kitchen" },
    ],
  },
  {
    id: "basement-bar",
    label: "Basement & Bar",
    images: [
      { src: cl("bar-1", 800),          alt: "Custom basement bar with quartz countertop and pendant lighting" },
      { src: cl("bar-2", 800),          alt: "Built-in home bar with wine rack and under-cabinet lighting" },
      { src: cl("bar-3", 800),          alt: "Basement bar area with custom cabinetry and bar seating" },
      { src: cl("bar-4", 800),          alt: "Wet bar renovation with tile backsplash and floating shelves" },
      { src: cl("bar-5", 800),          alt: "Finished basement bar with recessed lighting and hardwood floor" },
      { src: cl("bar-6", 800),          alt: "Custom home bar with integrated refrigerator and glassware storage" },
      { src: cl("bar-7", 800),          alt: "Entertainment bar area in finished basement by Pavcon" },
      { src: cl("fireplace-1", 800),    alt: "Custom gas fireplace installation in finished basement" },
      { src: cl("weight-room", 800),    alt: "Home gym conversion with rubber flooring and wall mirrors" },
      { src: cl("weight-room-1", 800),  alt: "Basement home gym renovation with custom storage" },
    ],
  },
  {
    id: "laundry-rooms",
    label: "Laundry Rooms",
    images: [
      { src: cl("laundry-room-1", 800), alt: "Custom laundry room renovation with built-in cabinetry and countertop" },
    ],
  },
  {
    id: "other-spaces",
    label: "Other Spaces",
    images: [
      { src: cl("hallway-1", 800),      alt: "Hallway renovation with new flooring and trim work" },
      { src: cl("hallway-2", 800),      alt: "Entryway remodel with custom built-in storage" },
      { src: cl("hallway-3", 800),      alt: "Renovated hallway with wainscoting and updated lighting" },
      { src: cl("hallway-4", 800),      alt: "Modern hallway renovation with accent wall and pot lights" },
      { src: cl("sauna", 800),          alt: "Custom cedar sauna installation by Pavcon Homes" },
      { src: cl("skylight-1", 800),     alt: "Skylight installation bringing natural light into renovated space" },
      { src: cl("skylight-2", 800),     alt: "Double skylight installation in renovated Toronto home" },
    ],
  },
];
