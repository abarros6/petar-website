const testimonials = [
  {
    name: "Edward Jacobs",
    role: "Homeowner, Toronto",
    quote:
      "Pavcon completely transformed our kitchen and living room. The team was professional, communicative, and delivered exactly what we envisioned — on time and on budget.",
  },
  {
    name: "Madison Ortiz",
    role: "Property Owner, Mississauga",
    quote:
      "We hired Pavcon for a full bathroom renovation and couldn't be happier. Their attention to detail is second to none. We'll definitely use them again for our next project.",
  },
  {
    name: "Samantha Carter",
    role: "Homeowner, North York",
    quote:
      "From the initial consultation to the final walkthrough, the Pavcon team was a pleasure to work with. They turned our outdated basement into a beautiful living space.",
  },
  {
    name: "David Chen",
    role: "Business Owner, Etobicoke",
    quote:
      "Pavcon handled our commercial renovation flawlessly. The space looks incredible and they minimized disruption to our operations throughout. Highly recommended.",
  },
];

function StarIcon() {
  return (
    <svg className="w-4 h-4 fill-[#b39f79]" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-28 bg-[#153243]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b39f79] mb-3">
            What Clients Say
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Testimonials
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#1d3a4d] border border-white/5 p-6 lg:p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed flex-1 mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-white/10 pt-5">
                <p className="font-semibold text-white text-sm">{t.name}</p>
                <p className="text-[#b39f79] text-xs mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
