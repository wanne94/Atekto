import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Modern A-Frame by the Lake */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2672&auto=format&fit=crop" 
          alt="Modern Dark A-Frame house by the lake" 
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback image if the main one fails
            e.currentTarget.src = "https://images.unsplash.com/photo-1518730518541-d0843268c287?q=80&w=2670&auto=format&fit=crop";
          }}
        />
        {/* Overlay gradient - adjusted for lake mood */}
        <div className="absolute inset-0 bg-gradient-to-b from-estate-800/80 via-estate-800/50 to-estate-800" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <span className="inline-block py-1 px-3 rounded-full bg-clay/20 backdrop-blur-md border border-clay/30 text-clay text-xs font-semibold tracking-widest uppercase mb-6 animate-fade-in shadow-[0_0_15px_rgba(231,189,139,0.2)]">
          Oaza Mira na Jezeru
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 tracking-tight drop-shadow-2xl">
          Moderna <br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-clay to-soil">A-Frame</span> Estetika
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-stone-white/90 font-light mb-10 leading-relaxed drop-shadow-lg text-shadow-sm">
          Buđenje uz pogled na vodu. Spoj crnog metala, toplog drveta i prirode koja se ogleda u vašem domu.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#modeli" className="bg-soil hover:bg-clay text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(191,142,109,0.3)] border border-clay/50">
            Pogledaj Modele
          </a>
          <a href="#kontakt" className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all hover:border-white/40">
            Zakaži Obilazak
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-clay">
        <ArrowDown className="h-8 w-8" />
      </div>
    </div>
  );
};