import React from 'react';
import { User, Award, Code, Zap } from 'lucide-react';
import ronaldoImage from '../assets/ronaldo.jpeg';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Engenheiro de Dados',
      description: 'Especialista em análise de dados e transformação digital com mais de 10 anos de experiência'
    },
    {
      icon: Zap,
      title: 'E-commerce B2B/B2C',
      description: 'Experiência em plataformas de alta performance e arquiteturas escaláveis'
    },
    {
      icon: Award,
      title: 'Automação de Processos',
      description: 'Desenvolvimento de pipelines de dados e automação inteligente'
    }
  ];

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-dark-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-white">
            <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 px-4 py-2 rounded-lg text-sm font-ibm-plex-medium mb-6">
              <User className="h-4 w-4 text-primary-400" />
              <span className="text-primary-400">Sobre o Fundador da R&L Data Solutions</span>
            </div>
            
            <h2 className="title-sm font-ibm-plex-bold mb-6">
              Ronaldo Oliveira
            </h2>
            
            <p className="paragraph font-ibm-plex-regular mb-8 leading-relaxed">
              Engenheiro de Dados e Analista de Sistemas com mais de 10 anos de experiência 
              em transformar dados complexos em soluções práticas e eficientes. Especializado 
              em e-commerce B2B e B2C, arquiteturas cloud, pipelines de dados e automação 
              de processos. Fundador da R&L Data Solutions, dedicado a democratizar o acesso 
              a insights valiosos e criar experiências digitais excepcionais.
            </p>

            {/* Professional Photo */}
            <div className="w-32 h-32 rounded-full overflow-hidden mb-8 border-4 border-primary-500/20">
              <img 
                src={ronaldoImage} 
                alt="Ronaldo Oliveira" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/ronaldo-pereira-2a71b914a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 button font-ibm-plex-semibold"
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
                  className="feature-card group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-primary-500/20 to-blue-500/20 border border-primary-500/30 p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 font-ibm-plex-semibold">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed font-ibm-plex-regular">
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