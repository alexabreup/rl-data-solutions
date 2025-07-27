import React from 'react';
import { 
  Database, 
  GitBranch, 
  TrendingUp, 
  Monitor, 
  Settings, 
  Shuffle 
} from 'lucide-react';

const TechnicalSolutions = () => {
  const solutions = [
    {
      icon: Database,
      title: 'Arquitetura de Dados',
      items: [
        'Modelagem de dados para e-commerce',
        'Estruturação de Data Lakes e Data Warehouses',
        'Integração entre sistemas ERP, CRM e e-commerce'
      ],
      color: 'bg-blue-600'
    },
    {
      icon: GitBranch,
      title: 'Pipelines de Dados (ETL/ELT)',
      items: [
        'Extração de dados de APIs de pagamento e logística',
        'Transformação e limpeza de dados de vendas',
        'Carga otimizada para análises de performance'
      ],
      color: 'bg-green-600'
    },
    {
      icon: TrendingUp,
      title: 'Análises de E-commerce',
      items: [
        'Análise de comportamento do consumidor',
        'Predição de churn e lifetime value',
        'Otimização de preços e promoções'
      ],
      color: 'bg-purple-600'
    },
    {
      icon: Monitor,
      title: 'Dashboards para E-commerce',
      items: [
        'Painéis de vendas em tempo real',
        'Métricas de conversão e performance',
        'Análise de produtos e categorias'
      ],
      color: 'bg-orange-600'
    },
    {
      icon: Settings,
      title: 'Automação Completa',
      items: [
        'Automação de estoque e reposição',
        'Workflow de aprovações B2B',
        'Integração automática com transportadoras'
      ],
      color: 'bg-indigo-600'
    },
    {
      icon: Shuffle,
      title: 'Integração de Sistemas',
      items: [
        'APIs para conectar e-commerce com ERP',
        'Sincronização de dados entre plataformas',
        'Webhooks para atualizações em tempo real'
      ],
      color: 'bg-teal-600'
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Soluções Técnicas Completas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tecnologias avançadas e metodologias comprovadas para resolver desafios complexos
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`${solution.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {solution.title}
                </h3>
                
                <ul className="space-y-3">
                  {solution.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full ${solution.color} mt-2.5 flex-shrink-0`}></div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSolutions;