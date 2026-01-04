"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/how-to-use", label: "How to Use" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - 使用增强版Logo组件 */}
          <Logo size="md" variant="default" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#tool"
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2.5 px-5 rounded-lg transition-colors"
            >
              Try Free
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <nav className="container-custom py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#tool"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 px-4 mt-2 bg-primary-600 hover:bg-primary-700 text-white text-center font-semibold rounded-lg transition-colors"
            >
              Try Free
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
