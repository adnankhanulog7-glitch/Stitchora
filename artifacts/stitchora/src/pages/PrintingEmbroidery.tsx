import { motion } from 'framer-motion';
import { Printer, Scissors, Zap, Award, Globe, Layers, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

const printingOptions = [
  'Screen Printing', 'Rubber Printing',
  'DTF Printing', 'Discharge Printing',
  'Plastisol Printing', 'Foil Printing',
  'Sublimation Printing', 'Reflective Printing',
  'High Density Printing', 'Water Based Printing',
];

const embroideryServices = [
  'Flat Embroidery',
  '3D Puff Embroidery',
  'Logo Embroidery',
  'Computer Embroidery',
  'Patch Embroidery',
  'Badge Embroidery',
];

const packagingItems = [
  { label: 'Woven Label' },
  { label: 'Care Label' },
  { label: 'Heat Transfer' },
  { label: 'Hang Tags' },
  { label: 'Poly Bag' },
  { label: 'Custom Packing' },
  { label: 'Custom Box' },
  { label: 'Neck Label' },
];

const qualityPoints = [
  { icon: Shield, label: 'Sharp & Durable Prints' },
  { icon: Scissors, label: 'Long Lasting Embroidery' },
  { icon: Zap, label: 'Color Fastness Guaranteed' },
  { icon: Globe, label: 'Export Quality Standards' },
];

export default function PrintingEmbroidery() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Printing & Embroidery' }]} />

        {/* Header with image */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">
          <motion.div {...fadeUp}>
            <h1 className="text-3xl lg:text-4xl font-black text-[#0D1E40] mb-3">Printing &amp; Embroidery</h1>
            <p className="text-gray-600 max-w-xl leading-relaxed">
              Premium decoration techniques that elevate your brand identity and add lasting value to your garments.
            </p>
            <div className="w-10 h-1 bg-[#1A7A3C] mt-4" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl overflow-hidden h-40">
              <img
                src="https://images.unsplash.com/photo-1599391836761-afc3ad717b4d?w=600&h=200&fit=crop&q=80"
                alt="Embroidery"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Two panels */}
        <div className="grid lg:grid-cols-2 gap-6 mb-14">
          {/* Printing options */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
          >
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#1A7A3C]/10 rounded-xl flex items-center justify-center">
                  <Printer className="w-5 h-5 text-[#1A7A3C]" />
                </div>
                <h2 className="text-lg font-black text-[#0D1E40]">Printing Options</h2>
              </div>
              <div className="w-8 h-0.5 bg-[#1A7A3C]" />
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {printingOptions.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-gray-50 border border-gray-200 rounded flex items-center justify-center flex-shrink-0">
                      <Printer className="w-3 h-3 text-[#0D1E40]" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Embroidery services */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col"
          >
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#1A7A3C]/10 rounded-xl flex items-center justify-center">
                  <Scissors className="w-5 h-5 text-[#1A7A3C]" />
                </div>
                <h2 className="text-lg font-black text-[#0D1E40]">Embroidery Services</h2>
              </div>
              <div className="w-8 h-0.5 bg-[#1A7A3C]" />
            </div>
            <div className="p-6 flex-1">
              <div className="space-y-3">
                {embroideryServices.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-gray-50 border border-gray-200 rounded flex items-center justify-center flex-shrink-0">
                      <Scissors className="w-3 h-3 text-[#0D1E40]" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0D1E40] p-5">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-[#4ade80] flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-bold">Custom Digitizing Available</p>
                  <p className="text-gray-300 text-xs mt-0.5">Send us your artwork and we'll handle the rest.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Branding & Packaging */}
        <motion.section {...fadeUp} className="mb-14">
          <div className="text-center mb-8">
            <p className="flex items-center justify-center gap-3 text-xs font-bold text-[#1A7A3C] tracking-widest uppercase mb-2">
              <span className="w-8 h-0.5 bg-[#1A7A3C]" /> Branding &amp; Packaging Solutions <span className="w-8 h-0.5 bg-[#1A7A3C]" />
            </p>
            <p className="text-gray-500 text-sm">Complete branding and packaging solutions to represent your brand the right way.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {packagingItems.map((item) => (
              <div key={item.label}
                className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center hover:bg-[#1A7A3C]/5 hover:border-[#1A7A3C]/30 transition-all">
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Layers className="w-5 h-5 text-[#0D1E40]" strokeWidth={1.5} />
                </div>
                <p className="text-[11px] font-semibold text-[#0D1E40] leading-tight">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Bottom quality bar */}
      <section className="bg-[#0D1E40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-0">
            <div className="sm:flex-1 sm:pr-10 sm:border-r sm:border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#1A7A3C]/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-[#4ade80]" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Premium Quality. Perfect Finishing.</p>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    Advanced printing and embroidery techniques with strict quality control at every step.
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:flex-1 sm:pl-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {qualityPoints.map((q) => (
                <div key={q.label} className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <q.icon className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-white text-xs font-semibold leading-tight">{q.label}</p>
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
