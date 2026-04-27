import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collection', href: '/collection' },
    { name: 'Boutique', href: '/shop' },
    { name: 'Durabilité', href: '/sustainability' },
    { name: 'L\'Histoire', href: '/about' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out px-6 md:px-12",
        isScrolled ? "bg-nerea-cloud/95 backdrop-blur-sm py-4 border-b border-nerea-butter" : "bg-transparent py-8"
      )}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Mobile Toggle - Left */}
        <button 
          className="md:hidden text-nerea-deep" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <Menu className="w-6 h-6 stroke-1" />
        </button>

        {/* Desktop Links - Left */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-[11px] uppercase tracking-[0.2em] font-medium hover:text-nerea-olive transition-colors underline-offset-8 hover:underline"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link 
          to="/" 
          className="text-3xl md:text-4xl font-serif tracking-[0.1em] text-nerea-deep absolute left-1/2 -translate-x-1/2"
        >
          NÉRÉA
        </Link>

        {/* Desktop Links - Right */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.slice(2).map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-[11px] uppercase tracking-[0.2em] font-medium hover:text-nerea-olive transition-colors underline-offset-8 hover:underline"
            >
              {link.name}
            </Link>
          ))}
          <button className="relative group">
            <ShoppingBag className="w-5 h-5 stroke-1" />
            <span className="absolute -top-1 -right-1 bg-nerea-olive text-[8px] text-white w-3 h-3 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">0</span>
          </button>
        </div>

        {/* Mobile Cart - Right */}
        <button className="md:hidden">
          <ShoppingBag className="w-6 h-6 stroke-1" />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-nerea-cloud z-[60] flex flex-col p-12"
          >
            <button 
              className="absolute top-8 left-6 text-nerea-deep" 
              onClick={() => setIsOpen(false)}
            >
              <X className="w-8 h-8 stroke-1" />
            </button>
            
            <div className="flex flex-col space-y-8 mt-24">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-serif italic hover:pl-4 transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto border-t border-nerea-butter pt-8">
              <p className="text-[10px] uppercase tracking-widest text-nerea-olive mb-4">Suivez-nous</p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="hover:opacity-50 transition-opacity">Instagram</a>
                <a href="#" className="hover:opacity-50 transition-opacity">Journal</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
