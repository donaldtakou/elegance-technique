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
  Linkedin
} from 'lucide-react';
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
              <h1 className="text-2xl font-bold text-gray-900">Elegance-technique</h1>
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
                          <span className="text-xl font-bold">ELEGANCE-TECHNIQUE</span>
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
          </div>
        );
      };
      
      
      