import React from 'react';
import { 
  ShoppingCart, 
  Database, 
  Cloud, 
  BarChart3, 
  Zap, 
  Bot, 
  Shield, 
  Lightbulb 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: 'E-commerce B2C & B2B',
      description: 'Desenvolvimento completo de lojas online B2C e portais B2B com automação inteligente, integração de sistemas e analytics avançados',
      color: 'bg-blue-600',
      highlight: true
    },
    {
      icon: Database,
      title: 'Pipeline de Dados',
      description: 'Construção de pipelines robustos para ETL/ELT, garantindo fluxo contínuo e confiável de dados entre sistemas diversos',
      color: 'bg-green-600'
    },
    {
      icon: Cloud,
      title: 'Arquitetura Cloud',
      description: 'Implementação de soluções em AWS, Azure e GCP com foco em escalabilidade, performance e otimização de custos',
      color: 'bg-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Analytics & BI',
      description: 'Desenvolvimento de dashboards interativos e relatórios avançados para tomada de decisão baseada em dados',
      color: 'bg-orange-600'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Processamento de dados em tempo real usando Apache Kafka, Spark Streaming e tecnologias modernas',
      color: 'bg-yellow-600'
    },
    {
      icon: Bot,
      title: 'Automação de Processos',
      description: 'Automação completa de processos de negócio, desde estoque até entrega, com integração de sistemas',
      color: 'bg-teal-600'
    },
    {
      icon: Shield,
      title: 'Data Governance',
      description: 'Implementação de políticas de governança, qualidade e segurança de dados para compliance e confiabilidade',
      color: 'bg-red-600'
    },
    {
      icon: Lightbulb,
      title: 'Consultoria Técnica',
      description: 'Consultoria especializada para otimização de processos e arquiteturas de dados existentes',
      color: 'bg-indigo-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nossos Serviços Completos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluções abrangentes em dados e e-commerce para transformar seu negócio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative ${service.highlight ? 'lg:col-span-2' : ''} bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
              >
                {service.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium">
                      ⭐ DESTAQUE
                    </span>
                  </div>
                )}
                
                <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;