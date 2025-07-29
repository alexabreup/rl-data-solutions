import React from 'react';
import { Twitter, Linkedin, Github, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    produto: [
      { name: "Recursos", href: "#recursos" },
      { name: "Preços", href: "#precos" },
      { name: "Integrações", href: "#integracoes" },
      { name: "API", href: "#api" },
      { name: "Documentação", href: "#docs" }
    ],
    empresa: [
      { name: "Sobre Nós", href: "#sobre" },
      { name: "Carreiras", href: "#carreiras" },
      { name: "Imprensa", href: "#imprensa" },
      { name: "Blog", href: "#blog" },
      { name: "Eventos", href: "#eventos" }
    ],
    suporte: [
      { name: "Central de Ajuda", href: "#ajuda" },
      { name: "Comunidade", href: "#comunidade" },
      { name: "Status do Sistema", href: "#status" },
      { name: "Contato", href: "#contato" },
      { name: "Treinamento", href: "#treinamento" }
    ],
    legal: [
      { name: "Termos de Uso", href: "#termos" },
      { name: "Política de Privacidade", href: "#privacidade" },
      { name: "LGPD", href: "#lgpd" },
      { name: "Cookies", href: "#cookies" },
      { name: "Licenças", href: "#licencas" }
    ]
  };

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/ronaldo-pereira-2a71b914a/" },
    { name: "WhatsApp", icon: Phone, href: "https://wa.me/5511945265110" },
    { name: "Email", icon: Mail, href: "mailto:ronaldo@rldatasolutions.com.br" }
  ];

  const contactInfo = [
    { icon: Mail, text: "ronaldo@rldatasolutions.com.br", href: "mailto:ronaldo@rldatasolutions.com.br" },
    { icon: Phone, text: "+55 (11) 94526-5110", href: "tel:+5511945265110" },
    { icon: MapPin, text: "São Paulo, SP - Brasil", href: "#" }
  ];

  return (
    <footer className="bg-dark-950 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">R&L</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-ibm-plex-bold">
                  R&L Data Solutions
                </h3>
                <p className="text-sm text-gray-400 font-ibm-plex-light">
                  Transformando dados em resultados
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 font-ibm-plex-regular leading-relaxed">
              Especialistas em análise de dados, automação e inteligência artificial. 
              Transformamos dados complexos em soluções práticas para impulsionar 
              o crescimento da sua empresa.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200 group"
                >
                  <contact.icon className="w-4 h-4 group-hover:text-primary-400 transition-colors duration-200" />
                  <span className="text-sm font-ibm-plex-medium">{contact.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-ibm-plex-semibold">Produto</h4>
            <ul className="space-y-3">
              {footerLinks.produto.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="footer-link text-sm font-ibm-plex-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-ibm-plex-semibold">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="footer-link text-sm font-ibm-plex-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-ibm-plex-semibold">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="footer-link text-sm font-ibm-plex-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-ibm-plex-semibold">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="footer-link text-sm font-ibm-plex-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="text-white font-semibold mb-4 font-ibm-plex-semibold">
              Fique por dentro das novidades
            </h4>
            <p className="text-gray-400 mb-4 font-ibm-plex-regular">
              Receba insights exclusivos sobre dados, IA e transformação digital.
            </p>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 input-field text-sm font-ibm-plex-medium"
              />
              <button className="button text-sm font-ibm-plex-semibold">
                Inscrever
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm font-ibm-plex-medium mb-4 lg:mb-0">
            © 2024 R&L Data Solutions. Todos os direitos reservados.
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200 group"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-200 group"
        aria-label="Voltar ao topo"
      >
        <ArrowUpRight className="w-5 h-5 transform rotate-45 group-hover:scale-110 transition-transform duration-200" />
      </button>
    </footer>
  );
};

export default Footer;