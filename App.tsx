import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Models } from './components/Models';
import { FeaturesLight } from './components/FeaturesLight';
import { ProcessLight } from './components/ProcessLight';
import { GalleryLight } from './components/GalleryLight';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen font-sans selection:bg-wood-500/30 bg-white">
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <Hero />
        <FeaturesLight />
        <ProcessLight />
        <Models />
        <GalleryLight />
        <Contact />
        <Footer />
        <ChatWidget />
      </div>
    </div>
  );
};

export default App;
