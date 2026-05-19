export default function ContactCTA() {
  return (
    <section id="contact" className="py-16 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: CTA text */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c8932a] mb-4">
              Get In Touch
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-tight mb-5">
              Contact us /<br />
              reimagine your home
            </h2>
            <p className="text-[#6b7280] mb-8 leading-relaxed text-sm lg:text-base">
              Ready to start your renovation journey? Reach out today for a
              free consultation and quote. Our team is here to help bring your
              vision to life.
            </p>
            <a
              href="tel:4163883989"
              className="inline-flex items-center gap-3 text-[#111111] font-semibold hover:text-[#c8932a] transition-colors"
            >
              <span className="w-10 h-10 bg-[#c8932a] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              416 388 3989
            </a>
          </div>

          {/* Right: Form */}
          <div className="bg-[#111111] p-6 sm:p-8 lg:p-10">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-white/50 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-[#c8932a] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-white/50 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-[#c8932a] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-white/50 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-[#c8932a] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-white/50 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="(416) 000-0000"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-[#c8932a] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-white/50 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-[#c8932a] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#c8932a] hover:bg-[#b07a1e] text-white font-semibold py-3.5 text-sm tracking-wider uppercase transition-colors"
              >
                Get a Free Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
