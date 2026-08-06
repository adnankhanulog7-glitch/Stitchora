import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import logoImg from '@assets/1_1786019847474.png';

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/manufacturing', label: 'Manufacturing' },
    { href: '/industries', label: 'Industries' },
    { href: '/quality', label: 'Quality' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location === '/';
    return location.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <img
              src={logoImg}
              alt="Stitchora logo"
              className="w-10 h-10 object-contain"
            />
            <img
              src="/stitchora-logo-fixed.png"
              alt="Stitchora"
              className="h-[60px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative pb-0.5 ${
                  isActive(link.href)
                    ? 'text-[#0D1E40] font-semibold'
                    : 'text-gray-600 hover:text-[#0D1E40]'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-[28px] left-0 right-0 h-0.5 bg-[#1A7A3C]" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D1E40] text-white text-sm font-bold rounded-lg hover:bg-[#0D1E40]/90 transition-all"
            >
              GET A QUOTE
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-[#0D1E40] hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'bg-[#0D1E40]/5 text-[#0D1E40] font-semibold'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-[#0D1E40]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/contact"
                className="block text-center px-4 py-2.5 bg-[#0D1E40] text-white text-sm font-bold rounded-lg hover:bg-[#0D1E40]/90 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                GET A QUOTE →
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
