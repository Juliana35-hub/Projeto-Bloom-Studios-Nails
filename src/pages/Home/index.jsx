import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Hero from '../../components/sections/Hero';
import Manifesto from '../../components/sections/Manifesto';
import Services from '../../components/sections/Services';
import Gallery from '../../components/sections/Gallery';
import Academy from '../../components/sections/Academy';
import CTA from '../../components/sections/CTA';
import Footer from '../../components/layout/Footer';

const Home = () => {
  return (
    <div className="bg-bloom-fundo overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <Gallery />
        <Academy />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
