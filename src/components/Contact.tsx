import React from 'react';
import { Mail, MessageCircle, Linkedin, Target } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ronaldo@rldatasolutions.com.br',
      href: 'mailto:ronaldo@rldatasolutions.com.br',
      color: 'bg-primary-500'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+55 11 94526-5110',
      href: 'https://wa.me/5511945265110',
      color: 'bg-green-500'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/ronaldo-pereira',
      href: 'https://www.linkedin.com/in/ronaldo-pereira-2a71b914a/',
      color: 'bg-blue-600'
    },
    {
      icon: Target,
      title: 'Consultoria',
      value: 'Primeira consulta gratuita',
      href: 'https://wa.me/5511945265110',
      color: 'bg-purple-500'
    }
  ];

  return (
    <section id="contato" className="py-20 lg:py-32 bg-dark-900 relative overflow-hidden">
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
              📞 Entre em Contato
            </span>
          </div>
          <h2 className="title-sm font-ibm-plex-bold mb-6">
            Vamos{' '}
            <span className="gradient-text font-ibm-plex-bold">
              conversar sobre seu projeto
            </span>
          </h2>
          <p className="paragraph font-ibm-plex-regular max-w-3xl mx-auto">
            Pronto para transformar seus dados em insights valiosos? Entre em contato 
            e descubra como podemos impulsionar o crescimento da sua empresa com 
            soluções personalizadas de análise e automação.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : '_self'}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="feature-card group text-center hover:scale-105 transition-all duration-300"
              >
                <div className={`${method.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 font-ibm-plex-semibold">
                  {method.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed font-ibm-plex-medium">
                  {method.value}
                </p>
              </a>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600/10 to-blue-600/10 border border-primary-500/20 p-12 rounded-2xl text-center text-white">
          <h3 className="text-3xl font-bold mb-4 font-ibm-plex-bold">
            Vamos Transformar Seus Dados Juntos!
          </h3>
          <p className="text-xl mb-8 opacity-90 font-ibm-plex-regular">
            Agende uma consulta gratuita e descubra como podemos impulsionar seu negócio
          </p>
          <a
            href="https://wa.me/5511945265110"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-ibm-plex-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Iniciar Conversa</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;