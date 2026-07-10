import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How long does repair take?',
    answer: 'Most common repairs like display and battery replacements are completed within 1-2 hours on the same day. Complex motherboard repairs or specific part orders may take 1-2 days.',
  },
  {
    question: 'Do you provide warranty?',
    answer: 'Yes, we provide a warranty on our genuine spare parts and repair services. The warranty period varies depending on the specific part and repair type.',
  },
  {
    question: 'Can you replace display?',
    answer: 'Absolutely! We specialize in display replacements for all major smartphone models, ensuring a perfect fit and high-quality touch response.',
  },
  {
    question: 'Do you install tempered glass?',
    answer: 'Yes, we install premium quality tempered glass and screen protectors for almost all smartphone models to keep your device safe from scratches and drops.',
  },
  {
    question: 'Do you provide mobile banking?',
    answer: 'Yes, we provide various digital and mobile banking services including money transfer, AEPS (Aadhaar Enabled Payment System), balance enquiry, and mini statements.',
  },
  {
    question: 'Do you repair all smartphone brands?',
    answer: 'Yes, our experienced technicians are trained to repair all major smartphone brands including Apple (iPhone), Samsung, OnePlus, Xiaomi, Vivo, Oppo, Realme, and more.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-brand-blue-900 mb-4"
          >
            Frequently Asked <span className="text-brand-orange-500">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Find answers to common questions about our repair and banking services.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-brand-blue-900 pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-brand-orange-500 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-slate-600 border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
