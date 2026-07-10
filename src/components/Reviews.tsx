import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Rahul Sharma',
    date: '1 week ago',
    text: 'Excellent service. Mobile repaired within one hour.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    date: '2 weeks ago',
    text: 'Very affordable prices.',
    rating: 5,
  },
  {
    name: 'Amit Kumar',
    date: '1 month ago',
    text: 'Best mobile repair shop in the area.',
    rating: 5,
  },
  {
    name: 'Neha Singh',
    date: '2 months ago',
    text: 'Friendly staff and genuine spare parts used. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Vikas Verma',
    date: '3 months ago',
    text: 'Quick tempered glass installation and great accessory collection.',
    rating: 5,
  },
  {
    name: 'Sneha Gupta',
    date: '4 months ago',
    text: 'Convenient mobile banking services. Saves a lot of time!',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-sm font-bold text-brand-blue-800 uppercase tracking-wider mb-2">Testimonials</h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-extrabold text-brand-blue-900 mb-4"
          >
            Customer <span className="text-brand-orange-500">Reviews</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Don't just take our word for it. Here's what our satisfied customers have to say.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-5 bg-slate-50 rounded-xl border-l-4 border-brand-orange-500 shadow-sm"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm italic text-slate-600 mb-4 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-bold text-brand-blue-900">— {review.name}</span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
