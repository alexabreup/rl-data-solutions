import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/EcommerceHighlight';
import Services from './components/Services';
import Pricing from './components/TechnicalSolutions';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;