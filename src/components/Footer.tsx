import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-400">
              R&L Data Solutions
            </span>
          </div>

          {/* Copyright */}
          <div className="flex items-center space-x-2 text-gray-400">
            <span>© 2025 R&L Data Solutions. Todos os direitos reservados.</span>
            <span>|</span>
            <div className="flex items-center space-x-1">
              <span>Desenvolvido com</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>por Ronaldo Oliveira</span>
            </div>
          </div>

          {/* Gradient Line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;