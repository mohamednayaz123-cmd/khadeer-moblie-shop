import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-brand-blue-900 mb-4"
          >
            Get In <span className="text-brand-orange-500">Touch</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Visit our store for quick repairs or contact us for any inquiries.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 space-y-8"
          >
            <div className="bg-brand-blue-800 text-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xs font-bold text-brand-orange-500 uppercase tracking-widest mb-6">Visit Us</h3>
              
              <div className="space-y-6">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Mon - Sat:</span>
                    <span className="font-bold text-white">9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Sunday:</span>
                    <span className="font-bold text-white">10:00 AM - 6:00 PM</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10 space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-brand-orange-500 flex-shrink-0" />
                    <span className="text-slate-300"># 11 Mahdevpura Road Sathgali Extensions 1st Stage Mysore</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-brand-orange-500 flex-shrink-0" />
                    <a href="tel:+918553177718" className="text-slate-300 hover:text-white transition-colors">+91 85531 77718</a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6">
                <a 
                  href="https://wa.me/918553177718" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20bd5a] transition-colors shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3"
          >
            <div className="h-full min-h-[400px] w-full bg-slate-200 rounded-xl overflow-hidden shadow-sm border border-slate-100">
              <iframe 
                src="https://maps.google.com/maps?q=12.3320868,76.692492&hl=en&z=17&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Google Maps Location"
                className="w-full h-full object-cover"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
