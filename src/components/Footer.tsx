import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f1f2b] text-white/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="https://pavcon.ca/wp-content/uploads/2023/12/cropped-Pavcon-logo-website-New-2-190x63.png"
              alt="Pavcon Logo"
              width={120}
              height={40}
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed mt-4 max-w-xs">
              Toronto-based construction and custom home builder. Serving
              Southern Ontario for over 20 years.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#b39f79] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:4163883989" className="hover:text-[#b39f79] transition-colors">
                  416 388 3989
                </a>
              </li>
              <li className="text-white/40">Toronto, Ontario, Canada</li>
              <li className="text-white/40">Serving Southern Ontario</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Pavcon. All rights reserved.</p>
          <p>Toronto-based Construction &amp; Custom Home Builder</p>
        </div>
      </div>
    </footer>
  );
}
