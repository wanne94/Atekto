import React from 'react';
import { Phone, PenTool, Home } from 'lucide-react';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: ProcessStep[] = [
  {
    number: 1,
    title: "Poziv",
    description: "Kontaktirajte nas telefonom ili putem forme za besplatnu konzultaciju o vašem projektu.",
    icon: <Phone className="h-6 w-6" />
  },
  {
    number: 2,
    title: "Idejno rješenje",
    description: "Izrađujemo personalizirani projekt prema vašim željama, potrebama i lokaciji.",
    icon: <PenTool className="h-6 w-6" />
  },
  {
    number: 3,
    title: "Realizacija",
    description: "Gradimo vaš montažni objekt u dogovorenom roku s garancijom kvalitete.",
    icon: <Home className="h-6 w-6" />
  }
];

export const Process: React.FC = () => {
  return (
    <section id="proces" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-clay uppercase tracking-widest mb-2 block">
            Jednostavan proces
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Kako do <span className="text-clay italic">montažnog objekta</span>?
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          {/* Timeline Line */}
          <div className="relative">
            <div className="absolute top-8 left-[16.666%] right-[16.666%] h-0.5 bg-clay/30" />

            {/* Steps */}
            <div className="grid grid-cols-3 gap-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  {/* Number Circle */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-estate-800 border-2 border-clay flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(231,189,139,0.2)]">
                    <span className="text-2xl font-bold text-clay">{step.number}</span>
                  </div>

                  {/* Card */}
                  <div className="group glass-panel p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 w-full">
                    <div className="bg-clay/20 w-12 h-12 rounded-lg flex items-center justify-center text-clay mb-4 mx-auto group-hover:bg-clay/30 group-hover:text-clay-300 transition-colors">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-stone-white">{step.title}</h3>
                    <p className="text-stone-white/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline (Vertical) */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-clay/30" />

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-6">
                  {/* Number Circle */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-estate-800 border-2 border-clay flex items-center justify-center shadow-[0_0_20px_rgba(231,189,139,0.2)]">
                    <span className="text-2xl font-bold text-clay">{step.number}</span>
                  </div>

                  {/* Card */}
                  <div className="group glass-panel p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="bg-clay/20 w-10 h-10 rounded-lg flex items-center justify-center text-clay group-hover:bg-clay/30 group-hover:text-clay-300 transition-colors">
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-bold text-stone-white">{step.title}</h3>
                    </div>
                    <p className="text-stone-white/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#kontakt"
            className="inline-block bg-soil hover:bg-clay text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(191,142,109,0.3)] border border-clay/50"
          >
            Započnite svoj projekt
          </a>
        </div>
      </div>
    </section>
  );
};
