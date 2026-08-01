import { motion } from 'framer-motion';
import {
  Shirt, Tag, Globe, Handshake, Briefcase, ShoppingBag,
  Megaphone, Hotel, GraduationCap, Truck, ShoppingCart, Factory,
  Building2, Users, Shield, Clock, ArrowRight, Download
} from 'lucide-react';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

const industries = [
  { icon: Shirt, title: 'Fashion Brands', desc: 'Private label and OEM garment production' },
  { icon: Tag, title: 'Clothing Labels', desc: 'Manufacturing according to your brand identity' },
  { icon: Globe, title: 'Merchant Exporters', desc: 'Export-ready apparel with buyer specifications' },
  { icon: Handshake, title: 'Buying Houses', desc: 'Reliable overflow manufacturing capacity' },
  { icon: Briefcase, title: 'Corporate Uniforms', desc: 'Uniform manufacturing for businesses' },
  { icon: ShoppingBag, title: 'Retail Chains', desc: 'Large-scale retail apparel production' },
  { icon: Megaphone, title: 'Promotional Merchandise', desc: 'Event and campaign apparel' },
  { icon: Hotel, title: 'Hotels & Hospitality', desc: 'Uniforms for hotels, cafés and restaurants' },
  { icon: GraduationCap, title: 'Schools & Colleges', desc: 'Institutional uniforms' },
  { icon: Truck, title: 'Logistics & Delivery Companies', desc: 'Industrial workwear and uniforms' },
  { icon: ShoppingCart, title: 'E-commerce Sellers', desc: 'White-label and startup apparel manufacturing' },
  { icon: Factory, title: 'Industrial & Manufacturing Companies', desc: 'Factory uniforms and workwear' },
];

const reasons = [
  { icon: Building2, title: 'Factory Direct Pricing', desc: 'Eliminate middlemen and get the best factory prices.' },
  { icon: Tag, title: 'OEM & Private Label Manufacturing', desc: 'End-to-end OEM and private label manufacturing support.' },
  { icon: Shield, title: 'Export Quality Standards', desc: 'International quality standards in every stitch and process.' },
  { icon: Clock, title: 'Reliable Production Timelines', desc: 'On-time delivery with accurate planning and communication.' },
];

const stats = [
  { number: '500+', label: 'Happy Clients\nWorldwide' },
  { number: '30+', label: 'Countries\nExported To' },
  { number: '50,000+', label: 'Pieces Monthly\nCapacity' },
  { number: '100%', label: 'Quality\nCommitment' },
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Industries' }]} />

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-10">
          <motion.div {...fadeUp}>
            <p className="flex items-center gap-2 text-xs font-bold text-[#1A7A3C] tracking-widest uppercase mb-3">
              WHO WE SERVE <span className="w-8 h-0.5 bg-[#1A7A3C]" />
            </p>
            <h1 className="text-3xl lg:text-4xl font-black text-[#0D1E40] mb-3">
              Industries We Manufacture For
            </h1>
            <p className="text-gray-600 leading-relaxed text-sm">
              Trusted garment manufacturing partner for businesses, exporters, buying houses and organizations
              across India and international markets.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden h-40">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=200&fit=crop&q=80"
                alt="Manufacturing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0D1E40]/30" />
              <div className="absolute right-8 top-1/2 -translate-y-1/2 text-white/10 text-[120px] font-black leading-none select-none">
                S
              </div>
            </div>
          </motion.div>
        </div>

        {/* Industries grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="border border-gray-100 rounded-xl p-5 flex items-start gap-4 hover:border-[#1A7A3C]/30 hover:shadow-sm transition-all bg-white"
            >
              <div className="w-10 h-10 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <ind.icon className="w-5 h-5 text-[#0D1E40]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-bold text-[#0D1E40] text-sm mb-0.5">{ind.title}</p>
                <div className="w-5 h-0.5 bg-[#1A7A3C] mb-1.5" />
                <p className="text-xs text-gray-500 leading-relaxed">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why choose Stitchora */}
        <motion.div {...fadeUp} className="mb-12">
          <div className="text-center mb-8">
            <p className="flex items-center justify-center gap-2 text-xs font-bold text-[#1A7A3C] tracking-widest uppercase mb-1">
              <span className="w-8 h-0.5 bg-[#1A7A3C]" /> Why Businesses Choose Stitchora <span className="w-8 h-0.5 bg-[#1A7A3C]" />
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-gray-50 border border-gray-100 rounded-xl p-5"
              >
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-3">
                  <r.icon className="w-5 h-5 text-[#0D1E40]" strokeWidth={1.5} />
                </div>
                <p className="font-bold text-[#0D1E40] text-sm mb-1">{r.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA with stats */}
      <section className="bg-[#0D1E40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shirt className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-white">Let's Build Your Next Collection Together</h2>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 pl-[74px]">
                Whether you're a fashion brand, buying house, exporter or corporate buyer, Stitchora is
                ready to become your trusted manufacturing partner.
              </p>
              <div className="flex flex-wrap gap-3 pl-[74px]">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1A7A3C] text-white text-sm font-bold rounded-lg hover:bg-[#1A7A3C]/90 transition-all">
                  REQUEST A QUOTE <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 border border-white/30 text-white text-sm font-bold rounded-lg hover:border-white/60 transition-all">
                  <Download className="w-4 h-4" /> DOWNLOAD COMPANY PROFILE
                </a>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.number} className="text-center">
                  <p className="text-2xl lg:text-3xl font-black text-white">{s.number}</p>
                  <p className="text-[11px] text-gray-400 mt-1 whitespace-pre-line leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
