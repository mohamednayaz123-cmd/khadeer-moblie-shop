import { useState, useEffect } from 'react';
import { Menu, X, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import logoImg from '../assets/images/mobile_care_plus_logo_1783822444739.jpg';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact Us', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-blue-800/95 backdrop-blur-md py-3 shadow-md' : 'bg-brand-blue-800 py-4 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 bg-white shadow-sm flex-shrink-0 group-hover:border-white transition-colors">
              <img src={logoImg} alt="Mobile Care Logo" className="w-full h-full object-contain p-1" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold text-white tracking-tight leading-none">
                MOBILE <span className="text-blue-400">CARE +</span>
              </span>
              <span className="text-[10px] font-medium text-slate-300 uppercase tracking-wider mt-1">Mobile Repair & Service</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-brand-orange-500 font-medium text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+918553177718"
              className="px-5 py-2 bg-white text-brand-blue-800 font-bold rounded-full hover:bg-slate-100 transition-all shadow-sm"
            >
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-slate-300 hover:text-white focus:outline-none p-3 -mr-3 relative z-50 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 right-0 bg-brand-blue-800 border-t border-brand-blue-700 shadow-xl z-40"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-brand-orange-500 hover:bg-brand-blue-700 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+918553177718"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mt-4 w-full text-center px-5 py-3 bg-brand-orange-500 text-white font-bold rounded-lg hover:bg-brand-orange-600 transition-colors"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
