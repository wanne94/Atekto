import React from 'react';

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop", label: "Moderna Arhitektura", alt: "Moderna A-Frame kuća sa panoramskim prozorima" },
  { src: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2669&auto=format&fit=crop", label: "Sibirski Ariš", alt: "Detalj fasade od sibirskog ariša" },
  { src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2670&auto=format&fit=crop", label: "Planinski Ambijent", alt: "A-Frame kuća u planinskom okruženju" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop", label: "Luksuzni Enterijer", alt: "Moderni enterijer A-Frame kuće" }
];

export const GalleryLight: React.FC = () => {
  return (
    <section id="galerija" className="py-24 relative px-4 bg-gradient-to-br from-white via-stone-50 to-clay-50/20">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden glass-light">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-clay/40 to-transparent"></div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-estate-900 mb-6">Inspiracija iz Stvarnosti</h2>
          <p className="text-estate-600 mb-12 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Spoj antracit krovova, sibirskog ariša i staklenih frontova koji brišu granicu između eksterijera i enterijera.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <div key={item.label} className="group overflow-hidden rounded-2xl aspect-[4/5] relative shadow-lg transition-all hover:-translate-y-2 glass-glow">
                <img
                  src={item.src}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={item.alt}
                  loading="lazy"
                  width="400"
                  height="500"
                />
                <div className="absolute inset-0 glass-overlay opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white text-xs font-bold tracking-widest uppercase text-shadow-sm">{item.label}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-12 glass-button bg-estate-700/80 hover:bg-estate-700 text-white px-10 py-4 rounded-full transition-all text-sm font-bold tracking-widest uppercase">
            Otkrij cijeli portfolio
          </button>
        </div>
      </div>
    </section>
  );
};
