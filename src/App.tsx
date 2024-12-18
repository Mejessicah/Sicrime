import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Map from './components/Map';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Map />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;