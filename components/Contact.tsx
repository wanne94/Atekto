import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

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
          alt="Nature Field Background" 
          className="w-full h-full object-cover opacity-25" 
        />
        <div className="absolute inset-0 bg-stone-950/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Glass Container */}
        <div className="glass-panel rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row bg-stone-900/40 border border-white/10">
          
          {/* Info Side - Semi transparent dark overlay */}
          <div className="bg-black/30 backdrop-blur-sm p-12 lg:w-2/5 flex flex-col justify-between border-r border-white/5">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-6 text-white">Kontaktirajte Nas</h3>
              <p className="text-stone-300 mb-12 font-light">
                Spremni ste za vlastitu oazu mira? Naš tim je tu da odgovori na sva vaša pitanja i pomogne vam u realizaciji projekta.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-wood-500/50 transition-colors mr-4">
                    <Phone className="h-6 w-6 text-wood-400" />
                  </div>
                  <div>
                    <p className="text-xs text-wood-500 uppercase font-semibold tracking-wider">Telefon</p>
                    <p className="text-lg font-medium text-white">+387 61 123 456</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-wood-500/50 transition-colors mr-4">
                     <Mail className="h-6 w-6 text-wood-400" />
                  </div>
                  <div>
                    <p className="text-xs text-wood-500 uppercase font-semibold tracking-wider">Email</p>
                    <p className="text-lg font-medium text-white">info@atekto.ba</p>
                  </div>
                </div>
                <div className="flex items-start group">
                   <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-wood-500/50 transition-colors mr-4">
                      <MapPin className="h-6 w-6 text-wood-400" />
                   </div>
                  <div>
                    <p className="text-xs text-wood-500 uppercase font-semibold tracking-wider">Lokacija</p>
                    <p className="text-lg font-medium text-white">Bjelašnica bb, Sarajevo</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <div className="flex space-x-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-wood-600 hover:border-wood-600 hover:text-white transition-all cursor-pointer text-stone-400">FB</div>
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-wood-600 hover:border-wood-600 hover:text-white transition-all cursor-pointer text-stone-400">IG</div>
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-wood-600 hover:border-wood-600 hover:text-white transition-all cursor-pointer text-stone-400">LN</div>
              </div>
            </div>
          </div>

          {/* Form Side - Transparent */}
          <div className="p-12 lg:w-3/5">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                <CheckCircle className="h-20 w-20 text-wood-500 mb-6 drop-shadow-[0_0_10px_rgba(203,146,77,0.5)]" />
                <h3 className="text-2xl font-bold text-white mb-2">Hvala na upitu!</h3>
                <p className="text-stone-400">Naš tim će vas kontaktirati u roku od 24 sata.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-300 mb-2 ml-1">Ime i Prezime</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-stone-600 focus:border-wood-500 focus:bg-black/30 focus:ring-0 transition-all outline-none" placeholder="Vaše ime" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-300 mb-2 ml-1">Email Adresa</label>
                    <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-stone-600 focus:border-wood-500 focus:bg-black/30 focus:ring-0 transition-all outline-none" placeholder="vas@email.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-stone-300 mb-2 ml-1">Broj Telefona</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-stone-600 focus:border-wood-500 focus:bg-black/30 focus:ring-0 transition-all outline-none" placeholder="+387..." />
                  </div>
                </div>

                <div>
                  <label htmlFor="model" className="block text-sm font-medium text-stone-300 mb-2 ml-1">Zainteresovani ste za model</label>
                  <select id="model" className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white focus:border-wood-500 focus:bg-black/30 focus:ring-0 transition-all outline-none appearance-none">
                    <option value="" className="bg-stone-900 text-stone-400">Odaberite model (opcionalno)</option>
                    <option value="mala-vila" className="bg-stone-900">Mala Vila</option>
                    <option value="planinski-vrh" className="bg-stone-900">Planinski Vrh</option>
                    <option value="veliki-horizont" className="bg-stone-900">Veliki Horizont</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-300 mb-2 ml-1">Vaša Poruka</label>
                  <textarea id="message" rows={4} required className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-stone-600 focus:border-wood-500 focus:bg-black/30 focus:ring-0 transition-all outline-none" placeholder="Napišite nam nešto više o vašim željama..."></textarea>
                </div>

                <button type="submit" className="w-full bg-wood-600 hover:bg-wood-500 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_15px_rgba(203,146,77,0.2)] hover:shadow-[0_0_25px_rgba(203,146,77,0.4)] transform hover:-translate-y-1 border border-wood-500/50">
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