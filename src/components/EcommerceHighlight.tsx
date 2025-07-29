import React from 'react';
import { Database, Brain, Shield, Zap, Users, BarChart3, Globe, Lock, ArrowRight, CheckCircle } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Database,
      title: "Arquitetura Escalável",
      description: "Plataformas construídas para crescer com seu negócio, suportando milhares de transações simultâneas.",
      benefits: ["Microserviços", "Load balancing", "Auto-scaling"]
    },
    {
      icon: Brain,
      title: "Inteligência de Negócio",
      description: "Dashboards e relatórios em tempo real para acompanhar vendas, estoque e comportamento do cliente.",
      benefits: ["Analytics avançado", "Previsão de demanda", "Segmentação de clientes"]
    },
    {
      icon: Shield,
      title: "Segurança e Compliance",
      description: "Proteção completa de dados com conformidade LGPD e certificações de segurança.",
      benefits: ["Criptografia end-to-end", "PCI DSS", "Backup automático"]
    },
    {
      icon: Zap,
      title: "Performance Otimizada",
      description: "Sites e aplicações com carregamento ultra-rápido e experiência de usuário excepcional.",
      benefits: ["CDN global", "Cache inteligente", "Otimização de imagens"]
    },
    {
      icon: Users,
      title: "Gestão de Clientes",
      description: "Sistema completo de CRM integrado para gerenciar relacionamentos e aumentar vendas.",
      benefits: ["Perfis de clientes", "Histórico de compras", "Programa de fidelidade"]
    },
    {
      icon: BarChart3,
      title: "Integração Completa",
      description: "Conecte com ERPs, sistemas de pagamento, logística e marketplaces populares.",
      benefits: ["APIs RESTful", "Webhooks", "Marketplace integration"]
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Garantido", icon: Shield },
    { number: "3x", label: "Aumento nas Vendas", icon: Zap },
    { number: "24/7", label: "Suporte Técnico", icon: Users },
    { number: "100+", label: "Integrações Disponíveis", icon: Globe }
  ];

  return (
    <section id="recursos" className="py-20 lg:py-32 bg-dark-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
            <span className="text-primary-400 text-sm font-ibm-plex-medium">
              🛒 Soluções E-commerce
            </span>
          </div>
          <h2 className="title-sm font-ibm-plex-bold mb-6">
            Plataformas{' '}
            <span className="gradient-text font-ibm-plex-bold">
              B2B e B2C de Alta Performance
            </span>
          </h2>
          <p className="paragraph font-ibm-plex-regular max-w-3xl mx-auto">
            Desenvolvemos soluções completas de e-commerce para empresas de todos os portes, 
            com foco em performance, escalabilidade e experiência do usuário.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="feature-card text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white font-ibm-plex-bold mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 font-ibm-plex-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-blue-500/20 border border-primary-500/30 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 font-ibm-plex-semibold">
                {feature.title}
              </h3>
              <p className="text-gray-400 mb-6 font-ibm-plex-regular">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300 font-ibm-plex-medium">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-600/10 to-blue-600/10 border border-primary-500/20 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-ibm-plex-bold">
              Pronto para Revolucionar seu E-commerce?
            </h3>
            <p className="paragraph font-ibm-plex-regular mb-8 max-w-2xl mx-auto">
              Junte-se a empresas que já confiam na R&L Data Solutions 
              para criar plataformas de e-commerce de alta performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="button font-ibm-plex-semibold group">
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="button-outline font-ibm-plex-medium">
                Agendar Demonstração
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;