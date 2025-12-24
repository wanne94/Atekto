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

export const FeaturesLight: React.FC = () => {
  return (
    <section id="prednosti" className="py-24 relative overflow-hidden bg-gradient-to-br from-white via-stone-50 to-clay-50/30">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-bold text-clay uppercase tracking-widest mb-2 block">Zašto A-Frame?</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-estate-900 leading-tight">
              Građeno u skladu sa prirodom, za vašu <span className="text-clay italic">budućnost</span>.
            </h2>
            <p className="text-stone-600 text-lg mb-8 leading-relaxed font-light">
              Naše kuće nisu samo lijepe na oko. One su rezultat godina inženjerskog razvoja kako bi se postigao savršen balans između estetike, funkcionalnosti i održivosti.
            </p>
            <a href="#modeli" className="inline-block text-estate-900 border-b border-clay pb-1 hover:text-clay hover:border-soil transition-colors font-medium">
              Pogledajte naše modele &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="group p-6 rounded-2xl glass-light transition-all duration-300 hover:-translate-y-1 glass-glow">
                <div className="bg-clay/20 w-12 h-12 rounded-xl flex items-center justify-center text-clay mb-4 group-hover:bg-clay/30 group-hover:text-clay-600 transition-colors backdrop-blur-sm">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-estate-800">{feature.title}</h3>
                <p className="text-estate-600 text-sm leading-relaxed">
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
