'use client'
import React, { useState } from 'react';
import { 
  Car, 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  CheckCircle, 
  Settings, 
  Calendar,
  FileText,
  Shield,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Send,
  Minimize2
} from 'lucide-react';

import { FaCar, FaTools, FaMapMarkerAlt, FaPhone, FaFacebookF } from 'react-icons/fa';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('../components/DynamicMap'), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-100 rounded-xl flex items-center justify-center">Chargement de la carte...</div>
});












function SocialLinks() {
  return (
    <a href="https://www.tiktok.com/eltech_automotive" target="_blank" rel="noopener noreferrer">
      <img
        src="/icons/tiktok-icon.svg"
        alt="TikTok"
        className="w-6 h-6 hover:opacity-75"
      />
    </a>
  );
}
function Elegance() {
  return (
      <img
        src="/icons/logo2.jpg"
        alt="elegance"
        className="w-8 h-8 hover:opacity-75 rounded-full"
      />
   
  );
}



export default function Home() {
    const [showMap, setShowMap] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, isBot: boolean}[]>([
    { text: "Bonjour ! Je suis l'assistant virtuel d'Elegance-Technique. Comment puis-je vous aider aujourd'hui ?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    service: '',
    concession: '',
    message: ''
  });

  const generateWhatsAppMessage = () => {
  const { nom, email, telephone, service, concession, message } = formData;

  return `
*Nouvelle demande via Elegance-technique.com*

*Nom* : ${nom}
*Email* : ${email}
*Téléphone* : ${telephone}
*Service demandé* : ${service}
*Concession* : ${concession || 'Non précisé'}
*Message* : ${message || 'Aucun message'}
  `;
};


  const handleCheckout = () => {
    const message = generateWhatsAppMessage();
    const phone = '+237677132415'; // Replace with your number
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');

 
  };
  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = () => {
  const message = generateWhatsAppMessage();
  const phone = '237677132415'; // Ton numéro sans le "+"
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
  
     setFormData({
    nom: '',
    email: '',
    telephone: '',
    service: '',
    concession: '',
    message: ''
  });
};

  const chatResponses: {[key: string]: string} = {
    'services': "Nous proposons plusieurs services : Climatisation automobile, Vente de pièces détachées, Vidange professionnelle, Système de freinage, Système de filtration, et Services automobiles complets.",
    'climatisation': "Notre service de climatisation inclut : diagnostic complet, recharge de gaz réfrigérant, détection de fuites, remplacement de compresseur et nettoyage antibactérien. Contactez-nous pour un rendez-vous !",
    'prix': "Les tarifs varient selon le service. Pour un devis personnalisé, contactez-nous au +237 677 132 415 ou +237 242 600 482.",
    'horaires': "Nous sommes ouverts du Lundi au Samedi de 8h à 18h30.",
    'contact': "Vous pouvez nous joindre par téléphone au +237 677 132 415 ou +237 242 600 482, par email à contact@elegance-technique.com, ou nous rendre visite à Yaoundé Dôvv.",
    'localisation': "Nous sommes situés à Yaoundé, quartier Dôvv Nkomkana, Cameroun.",
    'rendez-vous': "Pour prendre rendez-vous, vous pouvez nous appeler au +237 677 132 415, nous envoyer un message WhatsApp, ou utiliser notre formulaire de contact sur le site.",
    'pieces': "Nous avons un large catalogue de pièces d'origine et compatibles : compresseurs, condenseurs, évaporateurs, filtres et accessoires de climatisation. Livraison sous 24-48h.",
    'vidange': "Nous utilisons des huiles certifiées 5W30, 10W40. Le service inclut le changement de filtre, contrôle des niveaux, et inspection complète.",
    'freinage': "Notre service freinage comprend le contrôle d'usure, remplacement de plaquettes et disques, et purge du liquide de frein.",
    'garantie': "Nous offrons une garantie sur toutes nos interventions. Les détails varient selon le service.",
    'paiement': "Nous acceptons les paiements en espèces et par mobile money.",
    'urgence': "Pour une urgence, appelez-nous directement au +237 677 132 415. Nous faisons notre possible pour répondre rapidement.",
    'marques': "Nous intervenons sur toutes marques : Toyota, Mercedes, BMW, Volkswagen, Hyundai, Ford, Nissan, Peugeot, Renault, Kia, Mazda, Suzuki, et bien d'autres."
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage.trim();
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setInputMessage('');

    setTimeout(() => {
      let response = "Je n'ai pas de réponse spécifique à cette question. Pour plus d'informations, veuillez nous contacter au +237 677 132 415 ou par email à contact@elegance-technique.com.";
      
      const lowerMessage = userMessage.toLowerCase();
      for (const [key, value] of Object.entries(chatResponses)) {
        if (lowerMessage.includes(key)) {
          response = value;
          break;
        }
      }

      if (lowerMessage.includes('bonjour') || lowerMessage.includes('salut') || lowerMessage.includes('hello')) {
        response = "Bonjour ! Comment puis-je vous aider concernant nos services automobiles ?";
      } else if (lowerMessage.includes('merci')) {
        response = "Je vous en prie ! N'hésitez pas si vous avez d'autres questions.";
      }

      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 500);
  };

  const quickQuestions = [
    "Quels sont vos services ?",
    "Vos horaires ?",
    "Comment vous contacter ?",
    "Où êtes-vous situés ?"
  ];

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12  bg-sky-500 rounded-full flex items-center justify-center">
                <Elegance />
              </div>
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 whitespace-nowrap">Elegance-technique</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
             <a href="/" className="block text-gray-600 hover:text-sky-600">ACCUEIL</a>
              <a href="services" className="block text-gray-600 hover:text-sky-600">SERVICES</a>
              <a href="produits" className="block text-gray-600 hover:text-sky-600">BOUTIQUE</a>
              <a href="propos" className="block text-gray-600 hover:text-sky-600">A PROPOS</a>
             <a href="contacts" className="block  bg-sky-500 text-white px-4 py-2 rounded">CONTACTS</a>

            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
            {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="p-4 space-y-4">
             <a href="/" className="block text-gray-600 hover:text-sky-600">ACCUEIL</a>
              <a href="services" className="block text-gray-600 hover:text-sky-600">SERVICES</a>
              <a href="produits" className="block text-gray-600 hover:text-sky-600">BOUTIQUE</a>
              <a href="propos" className="block text-gray-600 hover:text-sky-600">A PROPOS</a>
             <a href="contacts" className="block  bg-sky-500 text-white px-4 py-2 rounded">CONTACTS</a>

            </div>
          </div>
        )}
      </header>
      
                <section className="py-16 bg-gradient-to-r from-sky-50 to-sky-100">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
                 CONTACT RAPIDE
                </button>
                </div>
                </section>
            
      
            {/* Contact Section */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Contact Info */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl">
                    <h3 className="text-xl font-bold mb-6 text-center text-gray-800">INFORMATIONS</h3>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-gray-700">Contact :</h4>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <Phone className="text-sky-600 w-5 h-5" />
                            <span>+237 677 132 415</span>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <Phone className="text-sky-600 w-5 h-5" />
                            <span>+237 242 600 482</span>
                          </div>
                          <div className="flex gap-2 items-center space-x-2">
                            <Mail className="text-sky-600 w-5 h-5" />
                            <span>contact@elegance-technique.com</span>
                          </div>
                        </div>
                      </div>
      
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-gray-700">Horaires :</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <Clock className="text-sky-600 w-5 h-5" />
                            <div>
                              <p>Lundi - Samedi :</p>
                              <p>08h00 - 18h00</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
      
                    <div className="mt-8 text-center">
                      <button  onClick={() => setShowMap(true)}
                                      className="bg-sky-500 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                                       NOTRE POSITION
                                     </button>
                                   </div>
                                   <div style={{ maxWidth: 600, margin: '20px auto', textAlign: 'center' }}>
                                         {showMap && <DynamicMap />}
                                       </div>
                     
                  </div>
      
                  {/* Contact Form */}
                  <div className="bg-gradient-to-br from-sky-50 to-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-6 text-center text-gray-800">DEMANDE D'INFORMATION</h3>
                    
                    <div className="space-y-6">
                      <input
                        type="text"
                        name="nom"
                        placeholder="Nom*"
                        value={formData.nom}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        required
                      />
                      
                      <input
                        type="email"
                        name="email"
                        placeholder="E-mail*"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        required
                      />
                      
                      <input
                        type="tel"
                        name="telephone"
                        placeholder="Téléphone*"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        required
                      />
                      
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        required
                      >
                        <option value="">- Service* -</option>
                        <option value="vente">commandes de pieces</option>
                        <option value="apres-vente">prestations</option>
                      </select>
                      
                     
                      
                      <input
  type="text"
  name="concession"
  placeholder="Concession (optionnel)"
  value={formData.concession}
  onChange={handleInputChange}
  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
/>

<textarea
  name="message"
  placeholder="Message (optionnel)"
  value={formData.message}
  onChange={handleInputChange}
  rows={4}
  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
/>

                      
                      <button
                        onClick={handleSubmit}
                        className="w-full bg-sky-500 hover:bg-sky-700 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                      >
                        ENVOYER VOTRE DEMANDE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
           {/* Footer */}
                <footer className="bg-gray-900 text-white py-12">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                      <div>
                        <div className="flex items-center space-x-3 mb-6">
                          <div className="w-10 h-10  bg-sky-500 rounded-full flex items-center justify-center">
                            <Elegance />
                          </div>
                          <span className="text-base md:text-lg lg:text-xl font-bold whitespace-nowrap">ELEGANCE-TECHNIQUE</span>
                        </div>
                        <p className="text-gray-400">Votre partenaire de confiance pour tout probleme de véhicules d'occasion ou noeuf.</p>
                      </div>
          
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-400">
                          <li><a href="/" className="hover:text-sky-400 transition-colors">Accueil</a></li>
                          <li><a href="produits" className="hover:text-sky-400 transition-colors">produits</a></li>
                          <li><a href="propos" className="hover:text-sky-400 transition-colors">à propos</a></li>
          
                        </ul>
                      </div>
          
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-gray-400">
                          <li><a href="produits" className="hover:text-sky-400 transition-colors">Achats de pieces</a></li>
                          <li><a href="produits" className="hover:text-sky-400 transition-colors">Commandes senteurs</a></li>
                          <li><a href="contacts" className="hover:text-sky-400 transition-colors">Demande d'information</a></li>
          
                        </ul>
                      </div>
          
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
                        <div className="flex space-x-4">
                          <a href="https://web.facebook.com/profile.php?id=61574041633300" className="text-gray-400 hover:text-sky-400 transition-colors">
                            <Facebook className="w-6 h-6" />
                          </a>
                          <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                            <Instagram className="w-6 h-6" />
                          </a>
                            <SocialLinks/>
                        </div>
                      </div>
                    </div>
          
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                      <p>&copy; 2025 ELEGANCE-TECHNIQUE. Tous droits réservés. | ELTCH-AUTOMOTIVE</p>
                    </div>
                  </div>
                </footer>

                {/* Boutons Flottants */}
                <section>
                  <div className="fixed right-4 top-1/3 flex flex-col items-end space-y-4 z-50">
                    <a href="/services" 
                       className="group relative bg-gradient-to-r from-sky-600 to-sky-700 p-4 rounded-2xl shadow-2xl text-white hover:from-sky-700 hover:to-sky-800 transition-all duration-300 transform hover:-translate-x-2 hover:scale-110 animate-float"
                       title="Nos Services">
                      <FaTools className="w-6 h-6" />
                      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        Nos Services
                      </span>
                    </a>
                    <a href="https://www.google.com/maps/place/D%C3%B4vv+Nkomkana/@3.8840411,11.4960432,17z/data=!4m6!3m5!1s0x108bcfc9e6cc094d:0x4db70a7d34c9a455!8m2!3d3.8840584!4d11.4958491!16s%2Fg%2F11p5g2llb8?entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoASAFQAw%3D%3D" 
                       className="group relative bg-gradient-to-r from-red-600 to-red-700 p-4 rounded-2xl shadow-2xl text-white hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:-translate-x-2 hover:scale-110 animate-float"
                       style={{animationDelay: '0.5s'}}
                       title="Notre Position"
                       target="_blank"
                       rel="noopener noreferrer">
                      <FaMapMarkerAlt className="w-6 h-6" />
                      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        Notre Position
                      </span>
                    </a>
                    <a href="https://wa.me/237677132415" 
                       className="group relative bg-gradient-to-r from-green-600 to-green-700 p-4 rounded-2xl shadow-2xl text-white hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:-translate-x-2 hover:scale-110 animate-float"
                       style={{animationDelay: '1s'}}
                       title="WhatsApp"
                       target="_blank"
                       rel="noopener noreferrer">
                      <FaPhone className="w-6 h-6" />
                      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        WhatsApp
                      </span>
                    </a>
                    <a href="https://web.facebook.com/profile.php?id=61574041633300" 
                       className="group relative bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-2xl shadow-2xl text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-x-2 hover:scale-110 animate-float"
                       style={{animationDelay: '1.5s'}}
                       title="Facebook"
                       target="_blank"
                       rel="noopener noreferrer">
                      <FaFacebookF className="w-6 h-6" />
                      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        Facebook
                      </span>
                    </a>
                  </div>
                </section>

                {/* Chatbot */}
                <div className="fixed bottom-6 right-6 z-50">
                  {/* Chat Window */}
                  {isChatOpen && (
                    <div className="mb-4 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col max-h-[600px]">
                      {/* Chat Header */}
                      <div className="bg-gradient-to-r from-sky-600 to-sky-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <MessageCircle className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg whitespace-nowrap">Assistant Elegance-Technique</h3>
                            <p className="text-xs text-sky-100">En ligne</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => setIsChatOpen(false)}
                          className="hover:bg-white/20 p-2 rounded-lg transition-colors"
                        >
                          <Minimize2 className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Messages Area */}
                      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                        {messages.map((msg, index) => (
                          <div key={index} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                            <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                              msg.isBot 
                                ? 'bg-white text-gray-800 shadow-md border border-gray-200' 
                                : 'bg-sky-600 text-white shadow-md'
                            }`}>
                              {msg.isBot && (
                                <div className="flex items-center gap-2 mb-1">
                                  <Car className="w-4 h-4 text-sky-600" />
                                  <span className="text-xs font-semibold text-sky-600">Assistant</span>
                                </div>
                              )}
                              <p className="text-sm leading-relaxed">{msg.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Quick Questions */}
                      {messages.length === 1 && (
                        <div className="px-4 pb-3 bg-gray-50">
                          <p className="text-xs text-gray-600 mb-2 font-semibold">Questions fréquentes :</p>
                          <div className="grid grid-cols-2 gap-2">
                            {quickQuestions.map((question, index) => (
                              <button
                                key={index}
                                onClick={() => handleQuickQuestion(question)}
                                className="text-xs bg-white hover:bg-sky-50 text-sky-600 border border-sky-200 px-3 py-2 rounded-lg transition-colors text-left"
                              >
                                {question}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Input Area */}
                      <form onSubmit={handleChatSubmit} className="p-4 bg-white border-t border-gray-200 rounded-b-2xl">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            placeholder="Tapez votre question..."
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                          />
                          <button
                            type="submit"
                            className="bg-sky-600 hover:bg-sky-700 text-white p-2 rounded-lg transition-colors"
                          >
                            <Send className="w-5 h-5" />
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  {/* Chat Button */}
                  <button
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className="bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 relative"
                  >
                    {isChatOpen ? (
                      <X className="w-7 h-7" />
                    ) : (
                      <>
                        <MessageCircle className="w-7 h-7" />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                          !
                        </span>
                      </>
                    )}
                  </button>
                </div>
          </div>
        );
      };
      
      
      