import { motion } from 'motion/react';
import { 
  Smartphone, Battery, Zap, Volume2, Mic, Camera, 
  Droplets, Download, RefreshCw, Unlock, Database, 
  Shield, Headphones, CreditCard, Send, Wallet, 
  FileText, ShieldCheck, Banknote, PenTool, CheckCircle, SmartphoneNfc
} from 'lucide-react';

const services = [
  { name: 'Mobile Display Replacement', icon: Smartphone },
  { name: 'Touch Screen Repair', icon: PenTool },
  { name: 'Battery Replacement', icon: Battery },
  { name: 'Charging Port Repair', icon: Zap },
  { name: 'Speaker Repair', icon: Volume2 },
  { name: 'Microphone Repair', icon: Mic },
  { name: 'Camera Repair', icon: Camera },
  { name: 'Water Damage Repair', icon: Droplets },
  { name: 'Software Installation', icon: Download },
  { name: 'Android Software Update', icon: RefreshCw },
  { name: 'Mobile Unlocking', icon: Unlock },
  { name: 'Data Backup & Recovery', icon: Database },
  { name: 'Tempered Glass Installation', icon: Shield },
  { name: 'Mobile Cover & Accessories', icon: Headphones },
  { name: 'SIM Activation Assistance', icon: SmartphoneNfc },
  { name: 'Recharge Services', icon: Zap },
  { name: 'Money Transfer', icon: Send },
  { name: 'AEPS Service', icon: Banknote },
  { name: 'Mini Statement', icon: FileText },
  { name: 'Balance Enquiry', icon: Wallet },
  { name: 'Aadhaar Enabled Banking', icon: ShieldCheck },
  { name: 'Mobile Banking Assistance', icon: CreditCard },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-brand-blue-900 mb-4"
          >
            Our <span className="text-brand-orange-500">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Comprehensive repair and banking solutions tailored to meet your everyday digital needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center text-center transition-all hover:shadow-md hover:border-brand-orange-500/50 group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-3 text-brand-blue-800 group-hover:bg-brand-orange-500 group-hover:text-white transition-colors">
                <service.icon className="w-5 h-5" />
              </div>
              <h3 className="text-[13px] font-bold text-brand-blue-900 leading-tight uppercase tracking-wide">
                {service.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
