import React from 'react';
import { User, Award, Code, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Especialista em Dados',
      description: 'Engenheiro de Dados com expertise em soluções complexas'
    },
    {
      icon: Zap,
      title: 'E-commerce Avançado',
      description: 'Experiência em plataformas B2B e B2C de alta performance'
    },
    {
      icon: Award,
      title: 'Automação Inteligente',
      description: 'Processos automatizados que maximizam eficiência'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-white">
            <div className="inline-flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium mb-6">
              <User className="h-4 w-4" />
              <span>Sobre o Especialista</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre Ronaldo Oliveira
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Engenheiro de Dados e Analista de Sistemas especializado em transformar dados complexos 
              em soluções práticas e eficientes. Com vasta experiência em e-commerce B2B e B2C, 
              arquiteturas cloud, pipelines de dados e automação de processos, lidero a R&L Data 
              Solutions na missão de democratizar o acesso a insights valiosos e criar experiências 
              digitais excepcionais para empresas de todos os portes.
            </p>

            {/* Professional Photo Placeholder */}
            <div className="bg-blue-600 w-32 h-32 rounded-full flex items-center justify-center mb-8">
              <User className="h-16 w-16 text-white" />
            </div>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/ronaldo-pereira-2a71b914a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              <span>Conectar no LinkedIn</span>
            </a>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;