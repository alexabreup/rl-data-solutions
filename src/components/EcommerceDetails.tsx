import React from 'react';
import { ShoppingCart, Building, CheckCircle, Bot } from 'lucide-react';

const EcommerceDetails = () => {
  const b2cFeatures = [
    'Design responsivo e otimizado para mobile',
    'Checkout simplificado em etapas',
    'Integração com múltiplos gateways de pagamento',
    'Sistema de avaliações e reviews',
    'Catálogo de produtos com busca inteligente',
    'Carrinho abandonado com recuperação automática'
  ];

  const b2bFeatures = [
    'Catálogos personalizados por cliente',
    'Tabelas de preço diferenciadas',
    'Aprovação de pedidos em níveis',
    'Cotações e orçamentos automatizados',
    'Integração com ERPs corporativos',
    'Portal do representante comercial'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Soluções E-commerce
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* B2C Section */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-600 p-3 rounded-lg">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">E-commerce B2C</h3>
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Plataformas otimizadas para venda direta ao consumidor com foco na 
              experiência do usuário e conversão.
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Funcionalidades:</h4>
              <div className="space-y-3">
                {b2cFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <Bot className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-gray-900">Automações B2C:</h4>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                E-mail marketing automatizado, notificações push, remarketing personalizado, 
                gestão automática de estoque e análise de comportamento do cliente.
              </p>
            </div>
          </div>

          {/* B2B Section */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">E-commerce B2B</h3>
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Portais corporativos robustos com funcionalidades específicas para 
              vendas empresariais e relacionamento B2B.
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Funcionalidades:</h4>
              <div className="space-y-3">
                {b2bFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <Bot className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-gray-900">Automações B2B:</h4>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Workflow de aprovações, sincronização automática com ERP, relatórios 
                automáticos de vendas, gestão de territórios e comissões.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceDetails;