import React from 'react';
import { Mountain, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-estate-900/60 backdrop-blur-md text-stone-white/60 py-12 border-t border-clay/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Mountain className="h-6 w-6 text-clay" />
            <span className="ml-2 text-lg font-bold text-stone-white tracking-wider">ATEKTO</span>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex space-x-4 text-sm">
              <a href="#kontakt" className="hover:text-clay transition-colors">Kontakt</a>
              <a href="#modeli" className="hover:text-clay transition-colors">Modeli</a>
              <a href="#prednosti" className="hover:text-clay transition-colors">Prednosti</a>
            </div>
            <div className="hidden md:flex space-x-3 ml-6 border-l border-clay/20 pl-6">
              <a href="https://facebook.com/atekto" target="_blank" rel="noopener noreferrer" className="hover:text-clay transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://instagram.com/atekto" target="_blank" rel="noopener noreferrer" className="hover:text-clay transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com/company/atekto" target="_blank" rel="noopener noreferrer" className="hover:text-clay transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-stone-white/40">
          &copy; {new Date().getFullYear()} Atekto d.o.o. Sarajevo. Sva prava zadržana.
        </div>
      </div>
    </footer>
  );
};