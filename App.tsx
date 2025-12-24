import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Models } from './components/Models';
import { Features } from './components/Features';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen font-sans selection:bg-wood-500/30">
      {/* Background Texture & Gradient */}
      <div className="fixed inset-0 z-0 bg-[#0c120f]">
        <img
          src="https://images.unsplash.com/photo-1432889490240-84df33d47091?q=80&w=2564&auto=format&fit=crop"
          className="w-full h-full object-cover opacity-5 mix-blend-overlay grayscale"
          alt=""
          aria-hidden="true"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-transparent to-stone-950 opacity-80"></div>
      </div>

      <div className="relative z-10 flex flex-col">
        <Navbar />
        <Hero />
        <Features />
        <Process />
        <Models />
        
        {/* Gallery Visual Break */}
        <section id="galerija" className="py-24 relative px-4">
          <div className="max-w-7xl mx-auto">
            <div className="glass-card rounded-[2rem] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-wood-500/30 to-transparent"></div>

              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Inspiracija iz Stvarnosti</h2>
              <p className="text-stone-300 mb-12 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                Spoj antracit krovova, sibirskog ariša i staklenih frontova koji brišu granicu između eksterijera i enterijera.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                 {[
                   { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop", label: "Moderna Arhitektura", alt: "Moderna A-Frame kuća sa panoramskim prozorima" },
                   { src: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2669&auto=format&fit=crop", label: "Sibirski Ariš", alt: "Detalj fasade od sibirskog ariša" },
                   { src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2670&auto=format&fit=crop", label: "Planinski Ambijent", alt: "A-Frame kuća u planinskom okruženju" },
                   { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop", label: "Luksuzni Enterijer", alt: "Moderni enterijer A-Frame kuće" }
                 ].map((item, i) => (
                   <div key={item.label} className="group overflow-hidden rounded-2xl aspect-[4/5] relative shadow-2xl transition-all hover:-translate-y-2">
                      <img
                        src={item.src}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        alt={item.alt}
                        loading="lazy"
                        width="400"
                        height="500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <span className="text-white text-xs font-bold tracking-widest uppercase">{item.label}</span>
                      </div>
                   </div>
                 ))}
              </div>

              <button className="mt-12 bg-white/5 border border-white/10 text-stone-200 hover:bg-wood-600 hover:text-white hover:border-wood-600 px-10 py-4 rounded-full transition-all text-sm font-bold tracking-widest uppercase shadow-xl">
                Otkrij cijeli portfolio
              </button>
            </div>
          </div>
        </section>

        <Contact />
        <Footer />
        <ChatWidget />
      </div>
    </div>
  );
};

export default App;