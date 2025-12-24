import React from 'react';
import { Mountain } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-md text-stone-400 py-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Mountain className="h-6 w-6 text-wood-500" />
            <span className="ml-2 text-lg font-bold text-stone-200 font-serif tracking-wider">ATEKTO</span>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-wood-400 transition-colors">Privatnost</a>
            <a href="#" className="hover:text-wood-400 transition-colors">Uslovi Korištenja</a>
            <a href="#" className="hover:text-wood-400 transition-colors">Kolačići</a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-stone-600">
          &copy; {new Date().getFullYear()} Atekto. Sva prava zadržana. Designed with AI.
        </div>
      </div>
    </footer>
  );
};