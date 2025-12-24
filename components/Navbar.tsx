import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { AtektoLogo } from './AtektoLogo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const navLinks = [
    { name: 'Modeli', href: '#modeli' },
    { name: 'Prednosti', href: '#prednosti' },
    { name: 'Galerija', href: '#galerija' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-[100] transition-all duration-500 ${
          isScrolled || isOpen
            ? 'glass-navbar py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button
              type="button"
              className="flex items-center cursor-pointer group bg-transparent border-none p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-estate rounded-lg"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                if(isOpen) toggleMenu();
              }}
              aria-label="Atekto - Povratak na vrh stranice"
            >
              <AtektoLogo size={36} showText={true} />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-stone-white/80 hover:text-clay transition-colors tracking-wide"
                >
                  {link.name}
                </a>
              ))}
              <a href="#kontakt" className="bg-soil hover:bg-clay text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all shadow-lg shadow-soil/30 border border-clay/30 active:scale-95">
                Zatraži Ponudu
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none transition-all active:scale-90"
                aria-label="Izbornik"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Full-Screen Menu Overlay */}
        <div 
          className={`md:hidden fixed inset-0 top-[74px] h-[calc(100vh-74px)] w-full glass-navbar border-t border-white/5 transition-all duration-500 ease-in-out ${
            isOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="flex flex-col h-full p-6 space-y-2 animate-slide-down">
            <p className="text-[10px] font-bold text-clay/60 uppercase tracking-[0.2em] mb-4">Navigacija</p>
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center justify-between text-2xl text-white py-4 border-b border-white/5 hover:text-clay transition-colors"
                onClick={toggleMenu}
              >
                {link.name}
                <ChevronRight className="h-5 w-5 text-clay/40" />
              </a>
            ))}

            <div className="pt-10">
              <a
                href="#kontakt"
                onClick={toggleMenu}
                className="block w-full bg-soil hover:bg-clay text-white py-5 rounded-2xl font-bold text-lg shadow-2xl border border-clay/20 active:scale-95 transition-all text-center"
              >
                Zatraži Ponudu
              </a>
              <div className="mt-8 text-center">
                <a href="mailto:info@atekto.ba" className="text-clay/60 text-sm hover:text-clay transition-colors">info@atekto.ba</a>
                <a href="tel:+38762712594" className="block text-clay/60 text-sm mt-1 hover:text-clay transition-colors">+387 62 712 594</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};