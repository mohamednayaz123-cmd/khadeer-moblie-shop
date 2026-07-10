import { motion } from 'motion/react';
import { Award, ShieldCheck, Tag, Clock, Zap, ThumbsUp } from 'lucide-react';

const features = [
  {
    title: 'Experienced Technician',
    description: 'Our skilled technicians have years of hands-on experience repairing all major smartphone brands.',
    icon: Award,
  },
  {
    title: 'Genuine Spare Parts',
    description: 'We use only high-quality, genuine spare parts to ensure the longevity of your device.',
    icon: ShieldCheck,
  },
  {
    title: 'Affordable Pricing',
    description: 'Get premium repair services and accessories at highly competitive and transparent prices.',
    icon: Tag,
  },
  {
    title: 'Same Day Repair',
    description: 'Most common repairs like screen and battery replacements are completed on the same day.',
    icon: Clock,
  },
  {
    title: 'Quick Service',
    description: 'We value your time. Experience fast diagnostics and efficient service delivery.',
    icon: Zap,
  },
  {
    title: 'Customer Satisfaction',
    description: 'Your satisfaction is our priority. We offer reliable support even after the repair.',
    icon: ThumbsUp,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-brand-blue-900 mb-4"
          >
            Why Choose <span className="text-brand-orange-500">Us</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            We combine technical expertise with exceptional customer service to deliver the best repair experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-100 rounded-xl p-6 flex flex-col sm:flex-row gap-4 items-start border border-dashed border-slate-300 hover:border-brand-orange-500 transition-colors"
            >
              <div className="text-brand-orange-500">
                <feature.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-base font-bold text-brand-blue-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
