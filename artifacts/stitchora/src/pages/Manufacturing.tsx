import { Link } from 'wouter';
import { motion } from 'framer-motion';
import {
  Layers, Search, Scissors, Shirt, Printer, Shield,
  Brush, Flame, Box, Truck, Factory, ArrowRight, Handshake
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

const steps = [
  { num: '1', icon: Layers, title: 'Fabric Sourcing', desc: 'We source the right fabrics from certified vendors as per quality requirements.' },
  { num: '2', icon: Search, title: 'Fabric Inspection', desc: 'All fabrics go through GSM testing and defect inspection before production.' },
  { num: '3', icon: Scissors, title: 'Cutting', desc: 'Advanced cutting machines with minimal wastage and strict size compliance.' },
  { num: '4', icon: Shirt, title: 'Stitching', desc: 'Skilled operators and modern machines with minimal wastage at all levels.' },
  { num: '5', icon: Printer, title: 'Printing & Embroidery', desc: 'In-house printing and embroidery with DTG, Screen, Puff and Embroidery options.' },
  { num: '6', icon: Shield, title: 'Quality Inspection', desc: 'Multiple quality checks at every step during and after production.' },
  { num: '7', icon: Brush, title: 'Thread Cleaning', desc: 'Every garment is cleaned for loose threads and finishing checks.' },
  { num: '8', icon: Flame, title: 'Ironing & Finishing', desc: 'Professional pressing and finishing for a perfect end result.' },
  { num: '9', icon: Box, title: 'Packing', desc: 'Custom packing as per buyer requirements with proper documentation.' },
  { num: '10', icon: Truck, title: 'Dispatch', desc: 'On-time delivery with proper documentation and tracking.' },
];

const flowSteps = [
  { icon: Layers, label: 'Fabric\nSourcing' },
  { icon: Search, label: 'Fabric\nInspection' },
  { icon: Scissors, label: 'Cutting' },
  { icon: Shirt, label: 'Stitching' },
  { icon: Printer, label: 'Printing &\nEmbroidery' },
  { icon: Shield, label: 'Quality\nInspection' },
  { icon: Brush, label: 'Thread\nCleaning' },
  { icon: Flame, label: 'Ironing &\nFinishing' },
  { icon: Box, label: 'Packing' },
  { icon: Truck, label: 'Dispatch' },
];

export default function Manufacturing() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Manufacturing' }]} />

        <motion.h1 {...fadeUp} className="text-3xl lg:text-4xl font-black text-[#0D1E40] mb-8">
          Our Manufacturing Process
        </motion.h1>

        {/* Banner with factory image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden mb-12"
        >
          <img
            src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&h=340&fit=crop&q=80"
            alt="Stitchora Manufacturing Facility"
            className="w-full h-48 sm:h-56 object-cover"
          />
          <div className="absolute inset-0 bg-[#0D1E40]/75" />
          <div className="absolute inset-0 p-8 flex items-center gap-6">
            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Factory className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-xl lg:text-2xl font-black text-white mb-1">End-to-End Manufacturing Under One Roof</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                From fabric sourcing to final packing, everything is handled in-house with strict quality control.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all"
            >
              <span className="absolute top-3 left-3 w-6 h-6 bg-[#1A7A3C] text-white text-[10px] font-black rounded-full flex items-center justify-center">
                {s.num}
              </span>
              <div className="pt-5">
                <s.icon className="w-7 h-7 text-[#1A7A3C] mb-3" strokeWidth={1.5} />
                <h3 className="text-sm font-black text-[#0D1E40] mb-2">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual flow */}
        <motion.div {...fadeUp} className="bg-gray-50 rounded-2xl p-6 mb-12">
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {flowSteps.map((f, i) => (
              <div key={f.label} className="flex items-center gap-1.5">
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 bg-white border border-gray-200 rounded-xl shadow-sm flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-[#1A7A3C]" strokeWidth={1.5} />
                  </div>
                  <p className="text-[9px] text-gray-600 text-center mt-1.5 whitespace-pre-line leading-tight w-12">{f.label}</p>
                </div>
                {i < flowSteps.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 mb-5 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div {...fadeUp}
          className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#1A7A3C]/10 rounded-full flex items-center justify-center">
              <Handshake className="w-6 h-6 text-[#1A7A3C]" />
            </div>
            <div>
              <p className="text-lg font-black text-[#0D1E40]">We Manufacture. You Grow.</p>
              <p className="text-sm text-gray-600">Let us handle your tech pack, samples and specifications.</p>
            </div>
          </div>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#1A7A3C] text-white text-sm font-bold rounded-lg hover:bg-[#1A7A3C]/90 transition-all whitespace-nowrap">
            GET IN TOUCH <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
