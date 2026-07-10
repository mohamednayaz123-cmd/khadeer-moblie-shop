import { motion } from 'motion/react';
import { PhoneCall, MessageCircle, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-blue-900 border-b-4 border-brand-orange-500">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        <img
          src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=2070&auto=format&fit=crop"
          alt="Technician repairing smartphone"
          className="w-full h-full object-cover mix-blend-overlay opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-900/90 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-0">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-brand-orange-500 text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded mb-4 tracking-widest uppercase shadow-sm">
              #1 Mobile Repair Shop in Town
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight mb-6 text-balance">
              Fast & Trusted <br />
              <span className="text-brand-orange-500">Mobile Repair</span> Services
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-10 text-balance leading-relaxed"
          >
            We provide professional smartphone repair, tempered glass installation, mobile accessories, software support, and mobile banking services at affordable prices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:+918553177718"
              className="flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-orange-500 text-white font-bold rounded-xl hover:bg-brand-orange-600 transition-colors"
            >
              <PhoneCall className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/918553177718"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
            >
              <MapPin className="w-5 h-5" />
              Directions
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-6 pt-8 border-t border-white/10"
          >
            <div>
              <p className="text-3xl font-heading font-bold text-white mb-1">5k+</p>
              <p className="text-sm text-slate-400">Devices Repaired</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-white mb-1">10+</p>
              <p className="text-sm text-slate-400">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-white mb-1">4.9</p>
              <p className="text-sm text-slate-400">Customer Rating</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
