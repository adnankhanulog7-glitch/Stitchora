import { motion } from 'framer-motion';
import {
  Search, Scale, Ruler, Palette, Scissors, Printer,
  Layers, CheckSquare, Magnet, Box, Shield, Target, CheckCircle
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

const qcSteps = [
  { num: '01', icon: Search, title: 'Fabric Inspection', desc: 'Check for defects, color, GSM & shrinkage' },
  { num: '02', icon: Scale, title: 'GSM Verification', desc: 'Every fabric goes through GSM testing as per requirement' },
  { num: '03', icon: Ruler, title: 'Measurement Check', desc: 'Every size is measured as per requirement' },
  { num: '04', icon: Palette, title: 'Shade Matching', desc: '100% shade matching with Pantone standards' },
  { num: '05', icon: Scissors, title: 'Stitch Quality', desc: 'Stitch count & density checked for perfection' },
  { num: '06', icon: Printer, title: 'Printing Quality', desc: 'Checked for clarity, ink coverage & print quality' },
  { num: '07', icon: Layers, title: 'Embroidery Quality', desc: 'Checked for neatness, stitch count & density' },
  { num: '08', icon: CheckSquare, title: 'Final AQL Inspection', desc: 'Standard AQL sampling for final packing' },
  { num: '09', icon: Magnet, title: 'Needle Detection', desc: 'Before packing (if required)' },
  { num: '10', icon: Box, title: 'Packing Inspection', desc: 'Before dispatch' },
];

const highlights = [
  { icon: Shield, title: 'In-Process QC', desc: 'Checks at every stage of production to ensure consistency.' },
  { icon: Target, title: 'Final Inspection', desc: 'AQL 2.5 standard sampling before shipment.' },
  { icon: CheckCircle, title: 'Zero Defect Policy', desc: 'Re-work and replacement at no extra cost.' },
];

export default function Quality() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Quality Control' }]} />

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">
          <motion.div {...fadeUp}>
            <h1 className="text-3xl lg:text-4xl font-black text-[#0D1E40] mb-2">Quality Control</h1>
            <p className="text-[#1A7A3C] font-bold text-base mb-2">Quality in Every Step. Perfection in Every Piece.</p>
            <p className="text-gray-600 text-sm mb-4">We follow a strict quality control process to deliver only the best.</p>
            <div className="w-10 h-1 bg-[#1A7A3C]" />
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
                alt="Quality control"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0D1E40]/20" />
              {/* Decorative S watermark */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-white/10 text-[120px] font-black leading-none select-none">
                S
              </div>
            </div>
          </motion.div>
        </div>

        {/* QC steps grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {qcSteps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all text-center"
            >
              <span className="absolute top-3 left-3 text-xs font-black text-gray-300">{s.num}</span>
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-3 mt-3">
                <s.icon className="w-6 h-6 text-[#1A7A3C]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xs font-black text-[#0D1E40] mb-1">{s.title}</h3>
              <p className="text-[10px] text-gray-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom highlight bar */}
      <section className="bg-[#0D1E40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid sm:grid-cols-3 gap-8">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <h.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold mb-1">{h.title}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
