import React from 'react';
import { Leaf, Clock, ShieldCheck, Zap, Thermometer, Wind } from 'lucide-react';
import { FeatureProps } from '../types';

const features: FeatureProps[] = [
  {
    title: "Ekološki Materijali",
    description: "Koristimo samo sertifikovano drvo iz održivih izvora i prirodne izolacione materijale.",
    icon: <Leaf className="h-6 w-6" />
  },
  {
    title: "Brza Izgradnja",
    description: "Modularni sistem omogućava da vaša kuća bude useljiva za samo 45 dana od početka radova.",
    icon: <Clock className="h-6 w-6" />
  },
  {
    title: "Energetska Efikasnost",
    description: "Vrhunska toplotna izolacija i troslojna stakla osiguravaju minimalne troškove grijanja.",
    icon: <Zap className="h-6 w-6" />
  },
  {
    title: "Otpornost na Vremenske Uslove",
    description: "Strmi krov A-Frame oblika savršeno podnosi teške snježne nanose i jake vjetrove.",
    icon: <Wind className="h-6 w-6" />
  },
  {
    title: "Garancija Kvaliteta",
    description: "Dajemo 10 godina garancije na konstrukciju i 2 godine na sve završne radove.",
    icon: <ShieldCheck className="h-6 w-6" />
  },
  {
    title: "Udobnost Tokom Cijele Godine",
    description: "Optimizovano za ugodan boravak i ljeti i zimi, sa sistemom za prirodnu ventilaciju.",
    icon: <Thermometer className="h-6 w-6" />
  }
];

export const Features: React.FC = () => {
  return (
    <section id="prednosti" className="py-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-wood-500 uppercase tracking-widest mb-2 shadow-wood-500/20">Zašto A-Frame?</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white leading-tight">
              Građeno u skladu sa prirodom, za vašu <span className="text-wood-400 italic">budućnost</span>.
            </h3>
            <p className="text-stone-300 text-lg mb-8 leading-relaxed font-light">
              Naše kuće nisu samo lijepe na oko. One su rezultat godina inženjerskog razvoja kako bi se postigao savršen balans između estetike, funkcionalnosti i održivosti.
            </p>
            <button className="text-white border-b border-wood-500 pb-1 hover:text-wood-400 hover:border-wood-400 transition-colors font-medium">
              Saznajte više o tehnologiji gradnje &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="group glass-panel p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                <div className="bg-wood-500/20 w-12 h-12 rounded-lg flex items-center justify-center text-wood-400 mb-4 group-hover:bg-wood-500/30 group-hover:text-wood-300 transition-colors">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold mb-2 text-stone-100">{feature.title}</h4>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};