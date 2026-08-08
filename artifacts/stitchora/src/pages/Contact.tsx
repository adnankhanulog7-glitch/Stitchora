import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Shield, Award, Handshake, Globe, Upload, ChevronDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

const contactInfo = [
  { icon: MapPin, label: 'ADDRESS', value: 'Surya Vihar Part II, Sector 91, Faridabad, Haryana 121013, India' },
  { icon: Phone, label: 'PHONE', value: '+91 7303-XXX-XXX' },
  { icon: Mail, label: 'EMAIL', value: 'shlgrowcontact@gmail.com' },
  { icon: Clock, label: 'WORKING HOURS', value: 'Mon–Sat, 10:00 AM – 7:00 PM' },
];

const trust = [
  { icon: Shield, title: 'Quick Response', desc: 'We respond within 24 business hours.' },
  { icon: Award, title: '100% Confidential', desc: 'Your information is safe and secure with us.' },
  { icon: Handshake, title: 'Reliable Partnership', desc: 'Long-term manufacturing partnerships you can trust.' },
  { icon: Globe, title: 'Global Shipping', desc: 'Delivering quality garments worldwide.' },
];

const countries = [
  'India', 'United States', 'United Kingdom', 'UAE', 'Australia',
  'Canada', 'Germany', 'France', 'Italy', 'Singapore', 'Other',
];

export default function Contact() {
  const [form, setForm] = useState({
    fullName: '', company: '', phone: '', email: '',
    address: '', country: '', requirement: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFileName(e.target.files[0].name);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left column */}
          <motion.div {...fadeUp} className="space-y-6">
            <div>
              <h1 className="text-3xl font-black text-[#0D1E40] mb-2">Contact Us</h1>
              <div className="w-10 h-1 bg-[#1A7A3C] mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed">
                We're here to help and answer any question you might have.<br />
                We look forward to hearing from you.
              </p>
            </div>

            {/* Contact info card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <p className="font-bold text-[#0D1E40] mb-4">Get in Touch</p>
              <div className="w-8 h-0.5 bg-[#1A7A3C] mb-5" />
              <div className="space-y-4">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <c.icon className="w-4 h-4 text-[#0D1E40]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#1A7A3C] tracking-widest uppercase">{c.label}</p>
                      <p className="text-sm text-gray-700 font-medium mt-0.5">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative bg-gray-100 rounded-2xl overflow-hidden h-56 border border-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200">
                {/* Stylized map grid */}
                <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#94a3b8" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
                {/* Simulated roads */}
                <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="35%" x2="100%" y2="42%" stroke="#cbd5e1" strokeWidth="3"/>
                  <line x1="0" y1="65%" x2="100%" y2="58%" stroke="#cbd5e1" strokeWidth="2"/>
                  <line x1="30%" y1="0" x2="35%" y2="100%" stroke="#cbd5e1" strokeWidth="2"/>
                  <line x1="65%" y1="0" x2="60%" y2="100%" stroke="#cbd5e1" strokeWidth="3"/>
                </svg>
              </div>
              {/* Map pin */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-10 h-10 bg-[#0D1E40] rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white rounded-lg px-4 py-2 shadow-md border border-gray-100">
                    <p className="text-sm font-bold text-[#0D1E40]">Surya Vihar Part II, Sector 91</p>
                    <p className="text-xs text-gray-500">Faridabad, Haryana 121013, India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column: Quote form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm"
          >
            <h2 className="text-xl font-black text-[#0D1E40] mb-2">Request a Quote</h2>
            <div className="w-8 h-0.5 bg-[#1A7A3C] mb-6" />

            {submitted ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 bg-[#1A7A3C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#1A7A3C]" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p className="text-lg font-black text-[#0D1E40] mb-2">Request Submitted!</p>
                <p className="text-gray-500 text-sm">Thank you for reaching out. We'll respond within 24 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#0D1E40] focus:ring-1 focus:ring-[#0D1E40] transition-colors placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#0D1E40] focus:ring-1 focus:ring-[#0D1E40] transition-colors placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Phone / Mobile <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                      required
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#0D1E40] focus:ring-1 focus:ring-[#0D1E40] transition-colors placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      required
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#0D1E40] focus:ring-1 focus:ring-[#0D1E40] transition-colors placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="City, State"
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#0D1E40] focus:ring-1 focus:ring-[#0D1E40] transition-colors placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Country</label>
                    <div className="relative">
                      <select
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#0D1E40] focus:ring-1 focus:ring-[#0D1E40] transition-colors appearance-none bg-white text-gray-700"
                      >
                        <option value="">Select Country</option>
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Tell us about your Requirement</label>
                  <textarea
                    name="requirement"
                    value={form.requirement}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Product type, quantity, GSM, colors, delivery timeline..."
                    className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#0D1E40] focus:ring-1 focus:ring-[#0D1E40] transition-colors placeholder:text-gray-400 resize-none"
                  />
                </div>

                {/* File upload */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Upload Tech Pack / Design / Sample</label>
                  <label className="block border-2 border-dashed border-gray-200 rounded-xl p-5 text-center cursor-pointer hover:border-[#0D1E40] transition-colors">
                    <input type="file" className="hidden" accept=".pdf,.png,.jpg,.jpeg,.ai" onChange={handleFile} />
                    <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                    {fileName ? (
                      <p className="text-sm font-medium text-[#0D1E40]">{fileName}</p>
                    ) : (
                      <>
                        <p className="text-sm text-gray-600 font-medium">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-400 mt-0.5">PDF, PNG, JPG, AI (max 10MB)</p>
                      </>
                    )}
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1A7A3C] text-white font-bold text-sm rounded-xl hover:bg-[#1A7A3C]/90 transition-all tracking-wide"
                >
                  SUBMIT REQUEST
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Trust indicators */}
      <section className="bg-gray-50 border-t border-gray-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trust.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 bg-[#1A7A3C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <t.icon className="w-5 h-5 text-[#1A7A3C]" />
                </div>
                <div>
                  <p className="font-bold text-[#0D1E40] text-sm">{t.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{t.desc}</p>
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
