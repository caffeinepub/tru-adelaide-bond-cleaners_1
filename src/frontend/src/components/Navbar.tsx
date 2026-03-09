import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  const navLinks = [
    { href: "/", label: "Home", ocid: "nav.home.link" },
    { href: "/services", label: "Services", ocid: "nav.services.link" },
    { href: "/about", label: "About", ocid: "nav.about.link" },
    { href: "/contact", label: "Contact", ocid: "nav.contact.link" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-navy shadow-lg">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center font-display font-bold text-white text-lg">
              T
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-display font-bold text-lg leading-tight block">
                Tru Adelaide
              </span>
              <span className="text-brand-green font-body text-xs leading-tight block">
                Bond Cleaners
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                data-ocid={link.ocid}
                className={`px-4 py-2 rounded-md text-sm font-body font-medium transition-colors ${
                  pathname === link.href
                    ? "text-brand-green bg-white/10"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white px-4 py-2 rounded-md text-sm font-body font-semibold transition-colors"
            >
              <Phone size={16} />
              WhatsApp Us
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                data-ocid={link.ocid}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-sm font-body font-medium rounded-md mb-1 transition-colors ${
                  pathname === link.href
                    ? "text-brand-green bg-white/10"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 bg-brand-green text-white px-4 py-3 rounded-md text-sm font-body font-semibold text-center"
            >
              WhatsApp Us
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
