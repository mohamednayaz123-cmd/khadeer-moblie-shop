import { motion } from 'motion/react';
import screenProtectorImg from '../assets/images/screen_protector_1783667798110.jpg';

const images = [
  {
    src: screenProtectorImg,
    alt: 'Premium Tempered Glass',
  },
  {
    src: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=800&auto=format&fit=crop',
    alt: 'Mobile Repair',
  },
  {
    src: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=800&auto=format&fit=crop',
    alt: 'Mobile Accessories',
  },
  {
    src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop',
    alt: 'Digital Banking',
  },
  {
    src: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=800&auto=format&fit=crop',
    alt: 'Store Interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=800&auto=format&fit=crop',
    alt: 'Motherboard Repair',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-sm font-bold text-brand-blue-800 uppercase tracking-wider mb-2">Our Work</h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-extrabold text-brand-blue-900 mb-4"
          >
            Photo <span className="text-brand-orange-500">Gallery</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Take a look at our service center, accessories, and some of the recent repairs we've done.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-xl aspect-[4/3] group shadow-sm border border-slate-200"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-brand-blue-900/0 group-hover:bg-brand-blue-900/60 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 text-sm tracking-wider uppercase">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
