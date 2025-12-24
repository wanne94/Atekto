import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(false);
      // Reset form logic would go here
    }, 5000);
  };

  return (
    <section id="kontakt" className="py-24 relative overflow-hidden">
      {/* Background Image - Misty Field */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-25"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2670&auto=format&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-estate-800/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Glass Container */}
        <div className="glass-panel rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row bg-estate/40 border border-white/10">

          {/* Info Side - Semi transparent dark overlay */}
          <div className="bg-black/30 backdrop-blur-sm p-12 lg:w-2/5 flex flex-col justify-between border-r border-white/5">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Kontaktirajte Nas</h2>
              <p className="text-stone-white/70 mb-12 font-light">
                Spremni ste za vlastitu oazu mira? Naš tim je tu da odgovori na sva vaša pitanja i pomogne vam u realizaciji projekta.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="p-3 glass-card rounded-xl group-hover:border-clay/50 transition-all mr-4">
                    <Phone className="h-6 w-6 text-clay" />
                  </div>
                  <div>
                    <p className="text-xs text-clay uppercase font-semibold tracking-wider">Telefon</p>
                    <p className="text-lg font-medium text-white">+387 62 712 594</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="p-3 glass-card rounded-xl group-hover:border-clay/50 transition-all mr-4">
                     <Mail className="h-6 w-6 text-clay" />
                  </div>
                  <div>
                    <p className="text-xs text-clay uppercase font-semibold tracking-wider">Email</p>
                    <p className="text-lg font-medium text-white">info@atekto.ba</p>
                  </div>
                </div>
                <div className="flex items-start group">
                   <div className="p-3 glass-card rounded-xl group-hover:border-clay/50 transition-all mr-4">
                      <MapPin className="h-6 w-6 text-clay" />
                   </div>
                  <div>
                    <p className="text-xs text-clay uppercase font-semibold tracking-wider">Lokacija</p>
                    <p className="text-lg font-medium text-white">Bjelašnica bb, Sarajevo</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <div className="flex space-x-4">
                <a href="https://facebook.com/atekto" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-clay/20 hover:border-clay/50 hover:text-white transition-all cursor-pointer text-stone-white/60">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://instagram.com/atekto" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-clay/20 hover:border-clay/50 hover:text-white transition-all cursor-pointer text-stone-white/60">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com/company/atekto" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-clay/20 hover:border-clay/50 hover:text-white transition-all cursor-pointer text-stone-white/60">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Side - Transparent */}
          <div className="p-12 lg:w-3/5">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                <CheckCircle className="h-20 w-20 text-accent mb-6 drop-shadow-[0_0_10px_rgba(195,221,195,0.5)]" />
                <h3 className="text-2xl font-bold text-white mb-2" role="status">Hvala na upitu!</h3>
                <p className="text-stone-white/60">Naš tim će vas kontaktirati u roku od 24 sata.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-white/70 mb-2 ml-1">Ime i Prezime</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 rounded-xl glass-input text-white placeholder:text-stone-white/40" placeholder="Vaše ime" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-white/70 mb-2 ml-1">Email Adresa</label>
                    <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl glass-input text-white placeholder:text-stone-white/40" placeholder="vas@email.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-stone-white/70 mb-2 ml-1">Broj Telefona</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl glass-input text-white placeholder:text-stone-white/40" placeholder="+387..." />
                  </div>
                </div>

                <div>
                  <label htmlFor="model" className="block text-sm font-medium text-stone-white/70 mb-2 ml-1">Zainteresovani ste za model</label>
                  <select id="model" aria-describedby="model-help" className="w-full px-4 py-3 rounded-xl glass-input text-white appearance-none cursor-pointer">
                    <option value="" className="bg-estate text-stone-white/60">Koji model vas zanima?</option>
                    <option value="norway" className="bg-estate">Model Norway (56m² + terasa)</option>
                    <option value="atlantic" className="bg-estate">Model Atlantic (46m² + terasa)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-white/70 mb-2 ml-1">Vaša Poruka</label>
                  <textarea id="message" rows={4} required className="w-full px-4 py-3 rounded-xl glass-input text-white placeholder:text-stone-white/40 resize-none" placeholder="Napišite nam nešto više o vašim željama..."></textarea>
                </div>

                <button type="submit" className="w-full glass-button bg-soil/80 hover:bg-clay text-white font-bold py-4 rounded-xl transition-all transform hover:-translate-y-1">
                  Pošalji Upit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};