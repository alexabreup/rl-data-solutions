import React from 'react';
import { ShoppingCart, Building, Bot, BarChart3 } from 'lucide-react';

const EcommerceHighlight = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: 'Lojas B2C',
      description: 'Experiência otimizada para consumidor final'
    },
    {
      icon: Building,
      title: 'Portais B2B',
      description: 'Soluções corporativas para vendas empresariais'
    },
    {
      icon: Bot,
      title: 'Automação Total',
      description: 'Processos automatizados de estoque a entrega'
    },
    {
      icon: BarChart3,
      title: 'Analytics Avançado',
      description: 'Dashboards com insights de vendas e comportamento'
    }
  ];

  return (
    <section id="ecommerce" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium mb-4">
            <Bot className="h-4 w-4" />
            <span>E-commerce com Automação</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            E-commerce com Automação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Criamos plataformas de e-commerce completas para B2B e B2C com automação inteligente, 
            integração de dados em tempo real e analytics avançados para maximizar suas vendas.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-gray-200"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EcommerceHighlight;