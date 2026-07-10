import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

export default function AboutUs() {
  const highlights = [
    'Expert Mobile Technicians',
    'Secure Digital Banking Services',
    'Premium Accessories Collection',
    'Fast & Reliable Support'
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?q=80&w=2070&auto=format&fit=crop" 
                alt="Professional smartphone repair" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900/60 to-transparent"></div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-orange-500 text-white p-6 rounded-xl shadow-lg hidden md:block">
              <p className="text-4xl font-heading font-bold">10+</p>
              <p className="font-medium text-sm">Years of Trust</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-blue-900 mb-6">
              Your Trusted Partner for <br />
              <span className="text-brand-orange-500">Mobile Care & Digital Banking</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At Mobile Care Center, we understand how essential your smartphone is to your daily life. That's why our dedicated team of experienced technicians is committed to providing reliable, fast, and professional mobile repair services.
            </p>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Beyond just repairs, we are a comprehensive digital hub. From premium mobile accessories and tempered glass installations to essential mobile banking and AEPS services, we bring everyday digital convenience closer to our community.
            </p>

            <ul className="space-y-4 mb-10">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center text-slate-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-brand-orange-500 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-blue-800 text-white font-bold rounded-xl hover:bg-brand-blue-700 transition-colors shadow-sm"
            >
              Visit Our Store
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
