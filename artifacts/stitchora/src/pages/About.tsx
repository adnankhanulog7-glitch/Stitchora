import { motion } from 'framer-motion';
import { ArrowRight, Target, Eye, Layers, Users, Wrench, Scale, Award, Handshake, Lightbulb } from 'lucide-react';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const capabilities = [
  { icon: Layers, title: 'Fabric Sourcing', desc: 'Premium quality fabrics sourced as per your requirements.' },
  { icon: Users, title: 'Skilled Workers', desc: 'Experienced and trained workforce ensuring superior craftsmanship.' },
  { icon: Wrench, title: 'Modern Machines', desc: 'Advanced machinery and technology for precision and efficiency.' },
];

const values = [
  { icon: Scale, label: 'Integrity', desc: 'We believe in honest communication and ethical business.' },
  { icon: Award, label: 'Quality', desc: 'We never compromise on quality at any stage of production.' },
  { icon: Handshake, label: 'Commitment', desc: 'We are committed to your success and long-term growth.' },
  { icon: Users, label: 'Teamwork', desc: 'We work together, grow together and achieve together.' },
  { icon: Lightbulb, label: 'Innovation', desc: 'We continuously improve processes to deliver better.' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />

        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp} className="space-y-6">
            <p className="flex items-center gap-2 text-xs font-bold text-[#1A7A3C] tracking-widest uppercase">
              <span className="w-8 h-0.5 bg-[#1A7A3C]" /> WHO WE ARE
            </p>
            <h1 className="text-3xl lg:text-4xl font-black text-[#0D1E40] leading-tight">
              A Manufacturing Partner You Can Rely On
            </h1>
            <div className="w-10 h-1 bg-[#1A7A3C]" />
            <p className="text-gray-600 leading-relaxed">
              Stitchora is a leading garment manufacturing company based in Delhi / NCR, India. We specialize
              in the production of high-quality knitted apparel for domestic and international markets.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We work as your manufacturing backbone, helping exporters, buying houses and global brands focus
              on sales, marketing and growing their business — while we ensure consistent quality, on-time
              delivery and complete reliability.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="border border-gray-200 rounded-xl p-5 hover:border-[#1A7A3C]/40 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-[#1A7A3C]/10 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-[#1A7A3C]" />
                  </div>
                  <p className="text-xs font-bold text-[#1A7A3C] tracking-widest uppercase">Our Mission</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To deliver export quality garments with consistency, value, and precision while building
                  long-term partnerships with our clients.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5 hover:border-[#1A7A3C]/40 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-[#0D1E40]/10 rounded-lg flex items-center justify-center">
                    <Eye className="w-5 h-5 text-[#0D1E40]" />
                  </div>
                  <p className="text-xs font-bold text-[#1A7A3C] tracking-widest uppercase">Our Vision</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To become one of India's most trusted garment manufacturing partners for global brands,
                  exporters and buying houses.
                </p>
              </div>
            </div>

            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1A7A3C] text-white text-sm font-bold rounded-lg hover:bg-[#1A7A3C]/90 transition-all">
              GET IN TOUCH <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-lg"
          >
            <img
              src="/about-manufacturing-partner.png"
              alt="Stitchora garment manufacturing facility"
              className="block aspect-[16/10] w-full object-cover"
            />
          </motion.div>
          </div>

          {/* Capabilities */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
            {capabilities.map((c) => (
              <div key={c.title} className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-[#1A7A3C]/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <c.icon className="w-5 h-5 text-[#1A7A3C]" />
                </div>
                <p className="text-xs font-bold text-[#0D1E40] mb-1">{c.title}</p>
                <div className="w-4 h-0.5 bg-[#1A7A3C] mx-auto mb-2" />
                <p className="text-[10px] text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Values Section */}
      <section className="bg-gray-50 border-t border-gray-100 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <motion.div {...fadeUp} className="text-center mb-10">
            <p className="flex items-center justify-center gap-2 text-xs font-bold text-[#1A7A3C] tracking-widest uppercase mb-2">
              <span className="w-8 h-0.5 bg-[#1A7A3C]" /> OUR VALUES <span className="w-8 h-0.5 bg-[#1A7A3C]" />
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border border-gray-100 rounded-xl p-5 text-center hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-[#1A7A3C]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <v.icon className="w-6 h-6 text-[#1A7A3C]" />
                </div>
                <p className="font-bold text-[#0D1E40] mb-1 text-sm">{v.label}</p>
                <p className="text-[11px] text-gray-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
