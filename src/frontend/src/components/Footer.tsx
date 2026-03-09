import { Link } from "@tanstack/react-router";
import { Clock, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center font-display font-bold text-white text-lg">
                T
              </div>
              <div>
                <span className="font-display font-bold text-lg leading-tight block">
                  Tru Adelaide
                </span>
                <span className="text-brand-green font-body text-xs leading-tight block">
                  Bond Cleaners
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm font-body leading-relaxed">
              Adelaide&apos;s most trusted bond and vacate cleaning specialists.
              We help tenants get their full bond back.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-brand-green mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {(
                [
                  { href: "/", label: "Home" },
                  { href: "/services", label: "Our Services" },
                  { href: "/about", label: "About Us" },
                  { href: "/contact", label: "Get a Quote" },
                ] as const
              ).map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-brand-green text-sm font-body transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-brand-green mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                "Bond / Vacate Cleaning",
                "Carpet Steam Cleaning",
                "Oven & Appliance Cleaning",
                "Window Cleaning",
                "Bathroom Deep Clean",
                "Wall Wash & Spot Cleaning",
              ].map((service) => (
                <li key={service}>
                  <span className="text-white/70 text-sm font-body">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-brand-green mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin
                  size={16}
                  className="text-brand-green mt-0.5 flex-shrink-0"
                />
                <span className="text-white/70 text-sm font-body">
                  Adelaide, South Australia &amp; Surrounds
                </span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle
                  size={16}
                  className="text-brand-green flex-shrink-0"
                />
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-brand-green text-sm font-body transition-colors"
                >
                  WhatsApp: 0488 841 883
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock
                  size={16}
                  className="text-brand-green mt-0.5 flex-shrink-0"
                />
                <span className="text-white/70 text-sm font-body">
                  Mon–Sat: 7am–7pm
                  <br />
                  Sun: 8am–5pm
                </span>
              </li>
            </ul>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-brand-green hover:bg-brand-green-dark text-white px-4 py-2 rounded-md text-sm font-body font-semibold transition-colors"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/50 text-sm font-body">
            &copy; {year} Tru Adelaide Bond Cleaners. All rights reserved.
          </p>
          <p className="text-white/40 text-xs font-body">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/60 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
