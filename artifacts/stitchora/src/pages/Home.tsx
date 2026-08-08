import { Link } from 'wouter';
import { motion } from 'framer-motion';
import {
  Package, Layers, CheckCircle, Star,
  Factory, Tag, Globe, Truck, Sparkles, Users,
  FileText, Download, Scissors, Shield, ArrowRight, Box, Printer
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const features = [
  { icon: Factory, title: 'Factory Direct' },
  { icon: Tag, title: 'OEM & Private Label' },
  { icon: Globe, title: 'Export Quality' },
  { icon: Truck, title: 'On-Time Delivery' },
  { icon: Sparkles, title: 'Custom Branding' },
  { icon: Users, title: 'Dedicated\nProduction Support' },
];

const stats = [
  { icon: Package, number: '50,000+', label: 'Pieces Monthly\nCapacity' },
  { icon: Layers, number: '20+', label: 'Fabric\nOptions' },
  { icon: CheckCircle, number: '100%', label: 'Quality\nInspected' },
  { icon: Star, number: '7+', label: 'Years\nExperience' },
];

const processSteps = [
  { icon: Scissors, label: 'Cutting' },
  { icon: Sparkles, label: 'Stitching' },
  { icon: Shield, label: 'Quality Check' },
  { icon: Box, label: 'Packing' },
  { icon: Printer, label: 'Printing' },
  { icon: Truck, label: 'Dispatch' },
];

const products = [
  {
    label: 'Round Neck T-Shirts',
    bg: 'bg-emerald-50',
    img: '/Round_Neck_T-Shirts_1786188190818.png',
  },
  {
    label: 'Polo T-Shirts',
    bg: 'bg-blue-50',
    img: '/Polo_T-Shirts_1786188190817.png',
  },
  {
    label: 'Oversized T-Shirts',
    bg: 'bg-amber-50',
    img: '/Oversized_Tshirt_1786042913274.png',
  },
  {
    label: 'Joggers',
    bg: 'bg-purple-50',
    img: '/Joggers_1786042913274.png',
  },
  {
    label: 'Track Pants',
    bg: 'bg-teal-50',
    img: '/Track_Pant_1786042913273.png',
  },
  {
    label: 'Corporate Uniforms',
    bg: 'bg-slate-100',
    img: '/Corporate_Uniform_1786042913273.png',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <motion.div {...fadeUp} className="space-y-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-xs font-semibold tracking-wide text-gray-700 bg-white shadow-sm">
                🇮🇳 INDIA'S TRUSTED GARMENT MANUFACTURER
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-[52px] font-black text-[#0D1E40] leading-[1.12]">
                Factory-Direct Garment Manufacturing for Global Brands &amp; Merchant Exporters
              </h1>

              <p className="text-[15px] text-gray-600 leading-relaxed">
                Manufacturing premium knitted apparel including T-Shirts, Polo Shirts, Oversized T-Shirts,
                Joggers, Track Pants, Corporate Uniforms and Private Label garments with export-quality
                production, factory-direct pricing and reliable delivery.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D1E40] text-white text-sm font-bold rounded-lg hover:bg-[#0D1E40]/90 transition-all shadow-md">
                  <FileText className="w-4 h-4" /> REQUEST A QUOTE
                </Link>
                <a href="/Company_Profile_1786041965784.pdf"
                  download="Company Profile.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 text-sm font-bold rounded-lg hover:border-[#0D1E40] hover:text-[#0D1E40] transition-all">
                  <Download className="w-4 h-4" /> DOWNLOAD COMPANY PROFILE
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 pt-2 border-t border-gray-100">
                {stats.map((s) => (
                  <div key={s.number} className="text-center">
                    <s.icon className="w-5 h-5 text-[#1A7A3C] mx-auto mb-1.5" />
                    <p className="text-xl font-black text-[#0D1E40]">{s.number}</p>
                    <p className="text-[10px] text-gray-500 leading-tight whitespace-pre-line">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Features Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Background factory image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=600&fit=crop&q=80"
                  alt="Garment factory"
                  className="w-full h-full object-cover opacity-20"
                />
              </div>

              <div className="relative bg-white/95 rounded-2xl shadow-xl border border-gray-100 p-6">
                <div className="grid grid-cols-3 gap-3 mb-3">
                  {features.map((f, i) => (
                    <div
                      key={f.title}
                      className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:border-[#1A7A3C]/30 hover:shadow-sm transition-all"
                    >
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <f.icon className="w-6 h-6 text-[#0D1E40]" strokeWidth={1.5} />
                      </div>
                      <p className="text-xs font-semibold text-[#0D1E40] leading-tight whitespace-pre-line">{f.title}</p>
                      <div className="w-4 h-0.5 bg-[#1A7A3C] mx-auto mt-2" />
                    </div>
                  ))}
                </div>

                {/* Trust banner */}
                <div className="bg-[#0D1E40] rounded-xl px-5 py-4 flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#1A7A3C]/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[#4ade80]" />
                  </div>
                  <p className="text-[13px] text-gray-200 leading-snug">
                    Trusted manufacturing partner for{' '}
                    <span className="font-bold text-white">Fashion Brands, Buying Houses</span> and{' '}
                    <span className="font-bold text-white">Merchant Exporters</span> across India &amp; International Markets.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Manufacturing Partner ── */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div {...fadeUp} className="space-y-6">
              <p className="flex items-center gap-2 text-xs font-bold text-[#1A7A3C] tracking-widest uppercase">
                <span className="w-8 h-0.5 bg-[#1A7A3C]" /> YOUR TRUSTED PARTNER
              </p>
              <h2 className="text-3xl lg:text-4xl font-black text-[#0D1E40] leading-tight">
                Your Trusted Manufacturing Partner in India
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Stitchora is an Indian garment manufacturing company specializing in private label apparel
                for domestic and international markets. We work as your manufacturing backbone so you can
                focus on building your brand and business.
              </p>
              <Link href="/about"
                className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-[#0D1E40] text-[#0D1E40] text-sm font-bold rounded-lg hover:bg-[#0D1E40] hover:text-white transition-all">
                LEARN MORE <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Right: Process grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5"
            >
              <div className="grid grid-cols-3 gap-3 mb-3">
                {processSteps.map((step) => (
                  <div key={step.label} className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:border-[#1A7A3C]/30 transition-all">
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <step.icon className="w-5 h-5 text-[#0D1E40]" strokeWidth={1.5} />
                    </div>
                    <p className="text-xs font-semibold text-[#0D1E40] leading-tight">{step.label}</p>
                    <div className="w-4 h-0.5 bg-[#1A7A3C] mx-auto mt-1.5" />
                  </div>
                ))}
              </div>
              {/* In-house banner */}
              <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
                <div className="w-8 h-8 bg-[#1A7A3C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Factory className="w-4 h-4 text-[#1A7A3C]" />
                </div>
                <p className="text-sm text-gray-700 font-medium">In-house end-to-end production</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Product Range ── */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="flex items-center justify-center gap-2 text-xs font-bold text-[#1A7A3C] tracking-widest uppercase mb-3">
              <span className="w-8 h-0.5 bg-[#1A7A3C]" /> OUR PRODUCT RANGE <span className="w-8 h-0.5 bg-[#1A7A3C]" />
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-[#0D1E40]">High Quality Apparel. Made for Your Brand.</h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {products.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`${p.bg} rounded-xl overflow-hidden group cursor-pointer hover:shadow-md transition-all`}
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="bg-white px-3 py-2.5 text-center border-t border-gray-100">
                  <p className="text-[11px] font-semibold text-[#0D1E40] leading-tight">{p.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1A7A3C] text-white text-sm font-bold rounded-lg hover:bg-[#1A7A3C]/90 transition-all shadow-md">
              VIEW ALL PRODUCTS <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
