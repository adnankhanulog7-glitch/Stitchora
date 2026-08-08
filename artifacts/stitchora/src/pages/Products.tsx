import { motion } from 'framer-motion';
import { ArrowRight, Award, Factory, Clock, Handshake, Package } from 'lucide-react';
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

const usp = [
  { icon: Award, title: 'Premium Quality', sub: 'Export Standards' },
  { icon: Factory, title: 'Factory Direct', sub: 'Best Pricing' },
  { icon: Clock, title: 'On-Time Delivery', sub: 'Reliable & Fast' },
  { icon: Handshake, title: 'Custom Solutions', sub: 'Built For You' },
];

const products = [
  {
    title: 'Round Neck T-Shirts',
    materials: 'Cotton, Modal, Cotton-Polyester',
    gsm: '180 – 240 GSM',
    bg: 'bg-emerald-50',
    iconBg: 'bg-emerald-600',
    img: '/Round_Neck_1786042913275.png',
  },
  {
    title: 'Polo T-Shirts',
    materials: 'Cotton, Cotton Petty, Polyester Honeycomb',
    gsm: '180 – 240 GSM',
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-700',
    img: '/Polo_Tshirt_1786042913275.png',
  },
  {
    title: 'Oversized T-Shirts',
    materials: 'Cotton, Polyester, Heavy 240',
    gsm: '180 – 240 GSM',
    bg: 'bg-amber-50',
    iconBg: 'bg-orange-500',
    img: '/Oversized_Tshirt_1786042913274.png',
  },
  {
    title: 'Joggers',
    materials: 'Cotton, Polyester, French Terry, Fleece',
    gsm: '280 – 380 GSM',
    bg: 'bg-purple-50',
    iconBg: 'bg-purple-600',
    img: '/Joggers_1786042913274.png',
  },
  {
    title: 'Track Pants',
    materials: 'Cotton, Terry, Dry Fit, Polyester',
    gsm: '200 – 300 GSM',
    bg: 'bg-teal-50',
    iconBg: 'bg-teal-600',
    img: '/Track_Pant_1786042913273.png',
  },
  {
    title: 'Corporate Uniforms',
    materials: 'T-Shirts, Polos, Shirts, Trousers, Aprons & More',
    gsm: 'Custom GSM',
    bg: 'bg-slate-100',
    iconBg: 'bg-slate-700',
    img: '/Corporate_Uniform_1786042913273.png',
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Products' }]} />

        {/* Header row */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-10">
          <motion.div {...fadeUp}>
            <h1 className="text-3xl lg:text-4xl font-black text-[#0D1E40] mb-2">Our Products</h1>
            <p className="text-[#1A7A3C] font-bold text-base mb-3">Premium Apparel. Superior Quality.</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              We manufacture a wide range of knitted apparel for brands, exporters, uniforms and promotional needs.
            </p>
          </motion.div>

          {/* USP badges */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5"
          >
            <div className="grid grid-cols-4 gap-4">
              {usp.map((u) => (
                <div key={u.title} className="text-center">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <u.icon className="w-5 h-5 text-[#0D1E40]" strokeWidth={1.5} />
                  </div>
                  <p className="text-xs font-bold text-[#0D1E40] leading-tight">{u.title}</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">{u.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
            >
              {/* Product image area */}
              <div className="bg-white h-80 relative overflow-hidden p-0">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-contain scale-[1.3] group-hover:scale-[1.35] transition-transform duration-300"
                  />
                </div>
                <div className={`absolute top-3 left-3 w-9 h-9 ${p.iconBg} rounded-full flex items-center justify-center shadow-md`}>
                  <Package className="w-4 h-4 text-white" />
                </div>
              </div>
              {/* Product info */}
              <div className="p-5 bg-white">
                <h3 className="text-base font-black text-[#0D1E40] mb-2">{p.title}</h3>
                <p className="text-xs text-gray-600 mb-1">
                  <span className="font-semibold text-[#1A7A3C]">Materials: </span>{p.materials}
                </p>
                <p className="text-xs text-gray-600 mb-4">
                  <span className="font-semibold text-[#1A7A3C]">GSM: </span>{p.gsm}
                </p>
                <Link href="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 border border-[#0D1E40] text-[#0D1E40] text-xs font-bold rounded-lg hover:bg-[#0D1E40] hover:text-white transition-all">
                  VIEW DETAILS <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-[#0D1E40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white/60" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-lg">Looking for a Custom Product?</p>
              <p className="text-gray-300 text-sm">We can manufacture as per your tech pack, samples and specifications.</p>
            </div>
          </div>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#1A7A3C] text-white text-sm font-bold rounded-lg hover:bg-[#1A7A3C]/90 transition-all whitespace-nowrap">
            REQUEST A QUOTE <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
