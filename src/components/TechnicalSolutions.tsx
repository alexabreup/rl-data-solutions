import React from 'react';
import { Check, Star, Zap, Shield, Users, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  const solutions = [
    {
      name: "Data Analytics",
      technology: "Python, SQL, Power BI",
      description: "Soluções completas de análise de dados e business intelligence.",
      features: [
        "ETL e Data Warehousing",
        "Dashboards interativos",
        "Relatórios automatizados",
        "Análise preditiva",
        "Integração com múltiplas fontes",
        "Visualizações avançadas"
      ],
      popular: false,
      icon: Users
    },
    {
      name: "Cloud Solutions",
      technology: "AWS, Azure, GCP",
      description: "Arquiteturas cloud escaláveis e infraestrutura como código.",
      features: [
        "Microserviços",
        "Containerização (Docker/K8s)",
        "Serverless computing",
        "Auto-scaling",
        "Monitoramento avançado",
        "Disaster recovery"
      ],
      popular: true,
      icon: Zap
    },
    {
      name: "E-commerce Platforms",
      technology: "React, Node.js, PostgreSQL",
      description: "Plataformas B2B e B2C de alta performance e escalabilidade.",
      features: [
        "Frontend responsivo",
        "APIs RESTful",
        "Sistema de pagamentos",
        "Gestão de estoque",
        "CRM integrado",
        "Marketplace integration"
      ],
      popular: false,
      icon: Shield
    }
  ];

  return (
    <section id="precos" className="py-20 lg:py-32 bg-dark-900 relative overflow-hidden">
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
              🔧 Soluções Técnicas
            </span>
          </div>
          <h2 className="title-sm font-ibm-plex-bold mb-6">
            Tecnologias{' '}
            <span className="gradient-text font-ibm-plex-bold">
              e ferramentas avançadas
            </span>
          </h2>
          <p className="paragraph font-ibm-plex-regular max-w-3xl mx-auto">
            Utilizamos as mais modernas tecnologias e ferramentas para criar 
            soluções robustas e escaláveis para seu negócio.
          </p>
        </div>

        {/* Solutions Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`pricing-card ${solution.popular ? 'pricing-card-featured' : ''}`}
            >
              {solution.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-ibm-plex-semibold">
                    Mais Popular
                  </div>
                </div>
              )}

              {/* Solution Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-blue-500/20 border border-primary-500/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <solution.icon className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-ibm-plex-bold">
                  {solution.name}
                </h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-lg font-bold text-primary-400 font-ibm-plex-bold">
                    {solution.technology}
                  </span>
                </div>
                <p className="text-gray-400 font-ibm-plex-regular">
                  {solution.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {solution.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 font-ibm-plex-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full py-3 px-6 rounded-lg font-ibm-plex-semibold transition-all duration-200 ${
                solution.popular
                  ? 'bg-gradient-to-r from-primary-500 to-blue-500 text-white hover:from-primary-600 hover:to-blue-600'
                  : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
              }`}>
                Saiba Mais
                <ArrowRight className="inline-block ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-primary-600/10 to-blue-600/10 border border-primary-500/20 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-ibm-plex-bold">
              Precisa de uma solução personalizada?
            </h3>
            <p className="paragraph font-ibm-plex-regular mb-8 max-w-2xl mx-auto">
              Nossa equipe de especialistas está pronta para criar uma solução 
              técnica sob medida que atenda às necessidades específicas do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="button font-ibm-plex-semibold group">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="button-outline font-ibm-plex-medium">
                Agendar Consultoria
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-400" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2 font-ibm-plex-semibold">
              Tecnologia de Ponta
            </h4>
            <p className="text-gray-400 font-ibm-plex-regular">
              Utilizamos as mais modernas tecnologias e frameworks para criar soluções robustas e escaláveis.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-primary-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2 font-ibm-plex-semibold">
              Experiência Comprovada
            </h4>
            <p className="text-gray-400 font-ibm-plex-regular">
              Mais de 10 anos de experiência em desenvolvimento de soluções técnicas para empresas.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-purple-400" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2 font-ibm-plex-semibold">
              Qualidade Garantida
            </h4>
            <p className="text-gray-400 font-ibm-plex-regular">
              Código limpo, documentado e testado, seguindo as melhores práticas de desenvolvimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;