import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">R&L</span>
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-white font-ibm-plex-bold">
                R&L Data Solutions
              </h1>
              <p className="text-xs text-gray-400 font-ibm-plex-light">
                Transformando dados em resultados
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#inicio" className="nav-link font-ibm-plex-medium">Início</a>
            <a href="#recursos" className="nav-link font-ibm-plex-medium">Recursos</a>
            <a href="#depoimentos" className="nav-link font-ibm-plex-medium">Depoimentos</a>
            <a href="#precos" className="nav-link font-ibm-plex-medium">Preços</a>
            <a href="#sobre" className="nav-link font-ibm-plex-medium">Sobre</a>
            <a href="#contato" className="nav-link font-ibm-plex-medium">Contato</a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="button-outline font-ibm-plex-medium">
              Começar Agora
            </button>
            <button className="button font-ibm-plex-medium">
              Fale Conosco
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-800/90 backdrop-blur-md rounded-lg mt-4 border border-white/10">
              <a
                href="#inicio"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200 font-ibm-plex-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#recursos"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200 font-ibm-plex-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Recursos
              </a>
              <a
                href="#depoimentos"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200 font-ibm-plex-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a
                href="#precos"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200 font-ibm-plex-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Preços
              </a>
              <a
                href="#sobre"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200 font-ibm-plex-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#contato"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200 font-ibm-plex-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <div className="pt-4 space-y-2">
                <button className="w-full button-outline font-ibm-plex-medium">
                  Começar Agora
                </button>
                <button className="w-full button font-ibm-plex-medium">
                  Fale Conosco
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;