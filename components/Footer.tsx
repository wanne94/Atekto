import React from 'react';
import { Facebook, Instagram, Linkedin, Phone, Mail } from 'lucide-react';
import { AtektoLogo } from './AtektoLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="glass-dark text-stone-white/60 py-16 border-t border-clay/20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="text-center md:text-left">
            <AtektoLogo size={32} showText={true} />
            <p className="mt-4 text-stone-white/50 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Moderna A-Frame arhitektura za vašu oazu mira. Ekološki, brzo, kvalitetno.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-stone-white font-semibold mb-4 text-sm uppercase tracking-wider">Brzi Linkovi</h4>
            <nav className="flex flex-col space-y-2" aria-label="Footer navigacija">
              <a href="#modeli" className="hover:text-clay transition-colors text-sm">Modeli</a>
              <a href="#prednosti" className="hover:text-clay transition-colors text-sm">Prednosti</a>
              <a href="#galerija" className="hover:text-clay transition-colors text-sm">Galerija</a>
              <a href="#kontakt" className="hover:text-clay transition-colors text-sm">Kontakt</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-stone-white font-semibold mb-4 text-sm uppercase tracking-wider">Kontakt</h4>
            <div className="space-y-2">
              <a href="tel:+38762712594" className="flex items-center justify-center md:justify-end gap-2 hover:text-clay transition-colors text-sm">
                <Phone className="h-4 w-4" />
                +387 62 712 594
              </a>
              <a href="mailto:info@atekto.ba" className="flex items-center justify-center md:justify-end gap-2 hover:text-clay transition-colors text-sm">
                <Mail className="h-4 w-4" />
                info@atekto.ba
              </a>
            </div>
            {/* Social Links */}
            <div className="flex justify-center md:justify-end space-x-4 mt-6">
              <span className="text-xs text-stone-white/40 mr-2">Pratite nas:</span>
              <a href="https://facebook.com/atekto" target="_blank" rel="noopener noreferrer" className="hover:text-clay transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/atekto" target="_blank" rel="noopener noreferrer" className="hover:text-clay transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/atekto" target="_blank" rel="noopener noreferrer" className="hover:text-clay transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-white/40">
            &copy; {new Date().getFullYear()} Atekto Sarajevo. Sva prava zadržana.
          </p>
          <p className="text-xs text-stone-white/30">
            10 godina garancije na konstrukciju • Izgradnja za 45 dana
          </p>
        </div>
      </div>
    </footer>
  );
};