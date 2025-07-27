import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <ShoppingCart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              R&L Data Solutions
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Início', id: 'hero' },
              { name: 'E-commerce', id: 'ecommerce' },
              { name: 'Serviços', id: 'services' },
              { name: 'Soluções', id: 'solutions' },
              { name: 'Sobre', id: 'about' },
              { name: 'Contato', id: 'contact' }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-blue-400 font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900 border-t border-gray-700 shadow-lg">
            <nav className="flex flex-col space-y-4 p-4">
              {[
                { name: 'Início', id: 'hero' },
                { name: 'E-commerce', id: 'ecommerce' },
                { name: 'Serviços', id: 'services' },
                { name: 'Soluções', id: 'solutions' },
                { name: 'Sobre', id: 'about' },
                { name: 'Contato', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-white hover:text-blue-400 font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;