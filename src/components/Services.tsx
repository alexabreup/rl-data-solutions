import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      title: "Análise de Dados",
      description: "Transformamos dados brutos em insights valiosos para tomada de decisões estratégicas",
      icon: "📊",
      features: ["Dashboards interativos", "Relatórios personalizados", "Análise preditiva"]
    },
    {
      title: "Automação de Processos",
      description: "Automatizamos tarefas repetitivas para aumentar a eficiência operacional",
      icon: "⚡",
      features: ["Pipelines de dados", "Workflows automatizados", "Integração de sistemas"]
    },
    {
      title: "E-commerce Solutions",
      description: "Soluções completas para plataformas B2B e B2C de alta performance",
      icon: "🛒",
      features: ["Arquitetura escalável", "Otimização de performance", "Integração de APIs"]
    },
    {
      title: "Consultoria Especializada",
      description: "Consultoria personalizada para transformação digital e estratégia de dados",
      icon: "🎯",
      features: ["Análise de requisitos", "Roadmap de implementação", "Treinamento da equipe"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length]);

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToService = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-dark-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
            <span className="text-primary-400 text-sm font-ibm-plex-medium">
              🚀 Nossos Serviços
            </span>
          </div>
          <h2 className="title-sm font-ibm-plex-bold mb-6">
            Soluções{' '}
            <span className="gradient-text font-ibm-plex-bold">
              especializadas para seu negócio
            </span>
          </h2>
          <p className="paragraph font-ibm-plex-regular max-w-3xl mx-auto">
            Oferecemos serviços completos de análise de dados, automação e 
            consultoria para impulsionar o crescimento da sua empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="feature-card text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4 font-ibm-plex-semibold">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 font-ibm-plex-regular">
                {service.description}
              </p>
              <ul className="space-y-2 text-left">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-primary-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300 font-ibm-plex-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2 font-ibm-plex-bold">
              500+
            </div>
            <div className="text-gray-400 font-ibm-plex-medium">
              Clientes Satisfeitos
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2 font-ibm-plex-bold">
              98%
            </div>
            <div className="text-gray-400 font-ibm-plex-medium">
              Taxa de Satisfação
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2 font-ibm-plex-bold">
              24/7
            </div>
            <div className="text-gray-400 font-ibm-plex-medium">
              Suporte Técnico
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2 font-ibm-plex-bold">
              2.5x
            </div>
            <div className="text-gray-400 font-ibm-plex-medium">
              Aumento na Eficiência
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;