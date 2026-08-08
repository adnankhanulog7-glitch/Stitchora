import { Link } from 'wouter';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0D1E40] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 3L20.5 7l-2.5 1V21H6V8L3.5 7 8 3c0 0 1 2 4 2S16 3 16 3z"/>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black text-white tracking-tight leading-none">STITCHORA</span>
                <span className="text-[9px] font-medium text-gray-400 tracking-[0.15em] uppercase leading-none mt-0.5">
                  — Precision in Every Stitch —
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-5">
              India's trusted garment manufacturing partner for Fashion Brands, Buying Houses, and Merchant Exporters.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
              <span className="w-4 h-0.5 bg-[#1A7A3C]" />
              <span className="font-semibold text-white">50,000+</span>
              <span>Pieces Monthly Capacity</span>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-widest text-white">Company</h3>
            <ul className="space-y-2">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/manufacturing', label: 'Manufacturing' },
                { href: '/manufacturing/printing', label: 'Printing & Embroidery' },
                { href: '/quality', label: 'Quality Control' },
                { href: '/industries', label: 'Industries We Serve' },
                { href: '/contact', label: 'Contact Us' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-widest text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>Surya Vihar Part II, Sector 91, Faridabad, Haryana 121013, India</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📞</span>
                <span>+91 78277 10760</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✉️</span>
                <span>shlgrowcontact@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🕐</span>
                <span>Mon–Sat, 10:00 AM – 7:00 PM</span>
              </li>
            </ul>
            <div className="flex gap-2.5 mt-5">
              <a
                href="https://wa.me/917827710760"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaWhatsapp className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-center text-sm text-gray-400">
            © 2026 Stitchora. All rights reserved. | Made in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
