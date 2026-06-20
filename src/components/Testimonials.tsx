import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    name: "Matthew I.",
    role: "Google Review",
    quote:
      "Pavcon Homes did an excellent job from start to finish. Their team is reliable, friendly, and extremely professional. They truly do everything and they do it well. The quality of workmanship really stands out, and it's clear they take pride in what they deliver. Communication was smooth, timelines were respected, and the end result exceeded expectations. I wouldn't hesitate to recommend Pavcon Homes to anyone looking for high-quality work and a team you can trust.",
  },
  {
    name: "Roman Kuk",
    role: "Google Review",
    quote:
      "Had a great experience working with Pavcon. Couldn't be happier with the results. Professional, reliable, and detail-oriented from start to finish. The quality of work exceeded expectations and the project was completed on time. Highly recommend to anyone looking for honest and skilled renovation professionals.",
  },
  {
    name: "Angjelo Prifti",
    role: "Google Review",
    quote:
      "My family has been buying, building, renovating, selling homes for almost 20 years. We've been through a number of different General Contractors and Custom Home builders. Varying degrees of success. Pavcon Homes is a breath of fresh air. The quality is elite, and importantly, they are attentive, fair, detailed. Petar runs a tight ship and we took a punt on this new company, but it paid off for us! We had an AMAZING experience. I've recommended them to a couple of clients as well, and the feedback has been nothing but positive. Highly recommend.",
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
        <div className="mb-10 lg:mb-16">
          <SectionHeader label="What Clients Say" heading="Testimonials" center light />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
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
                <a
                  href="https://www.google.com/search?q=Pavcon+Homes+Reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b39f79] text-xs mt-1 hover:underline"
                >
                  {t.role}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
