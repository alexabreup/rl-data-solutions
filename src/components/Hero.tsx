import React, { useState, useEffect } from 'react';
import { ArrowRight, Database, Brain, Shield, Zap, Users, BarChart3 } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroTexts = [
    "Automatize processos com inteligência   ",
    "Tome decisões baseadas em dados reais ",
    "Transforme dados em grandes insights   "
  ];

  const features = [
    { icon: Database, text: "Análise de Dados Avançada", color: "text-blue-400" },
    { icon: Brain, text: "Inteligência Artificial", color: "text-purple-400" },
    { icon: Shield, text: "Segurança Garantida", color: "text-green-400" },
    { icon: Zap, text: "Processamento Rápido", color: "text-yellow-400" },
    { icon: Users, text: "Suporte Especializado", color: "text-pink-400" },
    { icon: BarChart3, text: "Relatórios Detalhados", color: "text-indigo-400" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroTexts.length]);

  return (
    <section id="inicio" className="hero-section min-h-screen flex items-center justify-center pt-20 lg:pt-24">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-600/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full">
              <span className="text-primary-400 text-sm font-ibm-plex-medium">
                ✨ R&L Data Solutions
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="title font-ibm-plex-bold">
                Revolucione seu negócio{' '}
                <span className="gradient-text font-ibm-plex-bold">
                  {heroTexts[currentTextIndex]}
                </span>
              </h1>
              <p className="paragraph font-ibm-plex-regular max-w-2xl">
                Especialistas em análise de dados, automação e IA. 
                Transformamos dados em soluções práticas para 
                impulsionar seu crescimento.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="button font-ibm-plex-semibold group">
                Começar Gratuitamente
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="button-outline font-ibm-plex-medium">
                Ver Demonstração
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                >
                  <feature.icon className={`h-5 w-5 ${feature.color} group-hover:scale-110 transition-transform duration-200`} />
                  <span className="text-sm text-gray-300 font-ibm-plex-medium group-hover:text-white transition-colors duration-200">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <h3 className="text-white font-ibm-plex-semibold">Dashboard Analytics</h3>
              </div>

              {/* Dashboard Content */}
              <div className="space-y-4">
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-primary-600/20 to-blue-600/20 border border-primary-500/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white font-ibm-plex-bold">2.4M</div>
                    <div className="text-xs text-gray-400 font-ibm-plex-light">Dados Processados</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white font-ibm-plex-bold">98%</div>
                    <div className="text-xs text-gray-400 font-ibm-plex-light">Precisão</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white font-ibm-plex-bold">24/7</div>
                    <div className="text-xs text-gray-400 font-ibm-plex-light">Monitoramento</div>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 h-32 flex items-center justify-center">
                  <div className="text-gray-400 font-ibm-plex-medium">📊 Gráfico de Performance</div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-2">
                  <h4 className="text-sm font-ibm-plex-semibold text-white">Atividade Recente</h4>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 text-xs">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-300 font-ibm-plex-light">Análise concluída - 2 min atrás</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-300 font-ibm-plex-light">Novos dados importados - 5 min atrás</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-300 font-ibm-plex-light">Relatório gerado - 10 min atrás</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-50 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;