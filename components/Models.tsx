import React, { useState, Suspense } from 'react';
import { Ruler, ArrowRight, Box, Image as ImageIcon, Loader2 } from 'lucide-react';
import { HouseModel } from '../types';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Html } from '@react-three/drei';
import { House3D } from './House3D';

interface ExtendedModel extends HouseModel {
  subtitle: string;
  terrace: number;
  rohBau: string;
  kljucURuke: string;
}

const models: ExtendedModel[] = [
  {
    id: 'm1',
    name: 'Model Norway',
    subtitle: 'Sa dodatnom sobom',
    area: 56,
    terrace: 15,
    bedrooms: 2,
    price: 'Od €20,000',
    rohBau: '20,000 €',
    kljucURuke: '45,000 €',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2670&auto=format&fit=crop',
    description: 'Idealan za porodični odmor ili stalni boravak. Prostran raspored sa dodatnom sobom za goste ili radnu sobu.'
  },
  {
    id: 'm2',
    name: 'Model Atlantic',
    subtitle: 'Bez dodatne sobe',
    area: 46,
    terrace: 15,
    bedrooms: 1,
    price: 'Od €17,000',
    rohBau: '17,000 €',
    kljucURuke: '40,000 €',
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2674&auto=format&fit=crop',
    description: 'Kompaktan dizajn sa maksimalnom funkcionalnošću. Savršen za vikendicu ili romantično utočište u prirodi.'
  }
];

export const Models: React.FC = () => {
  // State to track which card has 3D view enabled
  const [active3D, setActive3D] = useState<Record<string, boolean>>({});

  const toggle3D = (id: string) => {
    setActive3D(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getModelType = (id: string): 'small' | 'medium' | 'large' => {
    if (id === 'm1') return 'large'; // Norway - sa dodatnom sobom
    return 'small'; // Atlantic - manji model
  };

  return (
    <section id="modeli" className="py-24 relative overflow-hidden">
      {/* Background Image - Pine Forest */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518730518541-d0843268c287?q=80&w=2670&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2670&auto=format&fit=crop";
          }}
        />
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-estate-800 via-estate-800/80 to-estate-800" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Kolekcija Modela</h2>
          <p className="text-stone-white/70 max-w-2xl mx-auto font-light text-lg">
            Bezkompromisan kvalitet gradnje inspirisan skandinavskim minimalizmom i toplinom planinskog doma.
            <br />
            <span className="text-clay text-sm mt-4 inline-block font-medium bg-clay/10 px-4 py-2 rounded-full border border-clay/20">
              Kliknite na dugme "3D Prikaz" za interaktivni pregled modela
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {models.map((model) => (
            <div key={model.id} className="group glass-panel rounded-2xl overflow-hidden hover:bg-estate/60 transition-all duration-300 transform hover:-translate-y-2 border border-white/5 hover:border-clay/30">
              
              {/* Media Container */}
              <div className="relative h-80 w-full bg-estate overflow-hidden">
                {active3D[model.id] ? (
                  <div className="w-full h-full cursor-move bg-gradient-to-b from-estate-600 to-estate-800">
                    <Suspense fallback={
                      <div className="w-full h-full flex items-center justify-center text-white">
                        <Loader2 className="h-8 w-8 animate-spin text-clay" />
                      </div>
                    }>
                      <Canvas
                        shadows
                        camera={{ position: [8, 5, 10], fov: 40 }}
                        gl={{ antialias: true }}
                        onCreated={(state) => {
                          state.gl.setClearColor('#1a2332');
                        }}
                      >
                        <Suspense fallback={null}>
                          <ambientLight intensity={0.4} />
                          <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow color="#ffdcb5" />
                          <spotLight position={[-5, 5, -5]} intensity={0.5} color="#8fbcd4" />

                          <House3D type={getModelType(model.id)} />

                          <ContactShadows position={[0, -1.1, 0]} resolution={512} scale={15} blur={2.5} opacity={0.4} far={10} color="#000000" />
                          <Environment preset="sunset" />
                          <OrbitControls
                            enablePan={false}
                            minDistance={5}
                            maxDistance={18}
                            maxPolarAngle={Math.PI / 2 - 0.05}
                            autoRotate={false}
                          />
                        </Suspense>
                      </Canvas>
                    </Suspense>
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1.5 rounded-lg text-xs text-white/90 pointer-events-none border border-white/10 flex items-center gap-2">
                      <Box className="w-3 h-3" />
                      Rotirajte model mišem
                    </div>
                  </div>
                ) : (
                  <>
                    <img
                      src={model.image}
                      alt={`${model.name} - ${model.subtitle}`}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 saturate-[0.85] group-hover:saturate-100"
                      loading="lazy"
                      width="600"
                      height="400"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-estate-800 via-transparent to-transparent opacity-90 pointer-events-none"></div>
                  </>
                )}

                {/* 3D Toggle Button */}
                <button
                  onClick={() => toggle3D(model.id)}
                  aria-pressed={active3D[model.id] || false}
                  aria-label={active3D[model.id] ? `Prikaži fotografiju za ${model.name}` : `Prikaži 3D model za ${model.name}`}
                  className="absolute bottom-4 left-4 z-20 flex items-center space-x-2 bg-estate-800/60 hover:bg-soil backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full transition-all text-sm font-semibold shadow-lg group-hover:shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                >
                  {active3D[model.id] ? (
                    <>
                      <ImageIcon className="h-4 w-4" />
                      <span>Fotografija</span>
                    </>
                  ) : (
                    <>
                      <Box className="h-4 w-4" />
                      <span>3D Prikaz</span>
                    </>
                  )}
                </button>

                <div className="absolute top-4 right-4 bg-soil/90 backdrop-blur-md border border-clay/50 px-4 py-1.5 rounded-full text-white font-bold text-sm shadow-lg z-20">
                  {model.price}
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                   <h3 className="text-2xl font-bold text-white group-hover:text-clay transition-colors" id={`model-${model.id}`}>{model.name}</h3>
                   <p className="text-clay/80 text-sm font-medium">{model.subtitle}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 py-3 border-t border-white/5 mb-4">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5">
                    <Ruler className="h-4 w-4 text-clay" />
                    <span className="text-xs text-stone-white/70">{model.area} m² objekat</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5">
                    <Ruler className="h-4 w-4 text-clay" />
                    <span className="text-xs text-stone-white/70">{model.terrace} m² terasa</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <div>
                      <span className="text-white font-semibold">{model.rohBau}</span>
                      <span className="text-stone-white/50 text-xs ml-2">ROH BAU</span>
                    </div>
                    <span className="text-stone-white/40 text-xs">bez temelja i terase</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <div>
                      <span className="text-clay font-bold">{model.kljucURuke}</span>
                      <span className="text-stone-white/50 text-xs ml-2">KLJUČ U RUKE</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-stone-white/60 text-sm">OPREMANJE</span>
                    <span className="text-stone-white/40 text-xs">Po dogovoru</span>
                  </div>
                </div>

                <p className="text-stone-white/40 text-xs mb-4">
                  * Cijene su bez PDV-a. Cijene izvan BiH na upit.
                </p>

                <a href="#kontakt" className="w-full py-3.5 bg-soil border border-clay/30 text-white rounded-xl hover:bg-clay transition-all flex items-center justify-center font-medium shadow-md">
                  Zatraži Ponudu <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};