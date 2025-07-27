import React from 'react';
import { Mail, MessageCircle, Linkedin, Target } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contato@rldatasolutions.com.br',
      href: 'mailto:contato@rldatasolutions.com.br',
      color: 'bg-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+55 (11) 99999-9999',
      href: 'https://wa.me/5511999999999',
      color: 'bg-green-600'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/ronaldo-oliveira',
      href: 'https://www.linkedin.com/in/ronaldo-pereira-2a71b914a/',
      color: 'bg-blue-700'
    },
    {
      icon: Target,
      title: 'Consultoria',
      value: 'Primeira consulta gratuita',
      href: '#',
      color: 'bg-purple-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pronto para revolucionar seu e-commerce com automação e inteligência de dados? 
            Vamos conversar sobre seu projeto!
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
                className="group bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-gray-200 text-center"
              >
                <div className={`${method.color} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {method.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {method.value}
                </p>
              </a>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 p-12 rounded-lg text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Vamos Transformar Seu Negócio Juntos!
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Agende uma consulta gratuita e descubra como podemos impulsionar seus resultados
          </p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
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