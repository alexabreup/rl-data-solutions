import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EcommerceHighlight from './components/EcommerceHighlight';
import EcommerceDetails from './components/EcommerceDetails';
import Services from './components/Services';
import TechnicalSolutions from './components/TechnicalSolutions';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <EcommerceHighlight />
        <EcommerceDetails />
        <Services />
        <TechnicalSolutions />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;