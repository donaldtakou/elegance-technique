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

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Ici vous pouvez ajouter la logique d'envoi
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
              <a href="propos" className="block  bg-sky-500 text-white px-4 py-2 rounded">A PROPOS</a>
             <a href="contacts" className="block text-gray-600 hover:text-sky-600">CONTACTS</a>

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
              <a href="apropos" className="block  bg-sky-500 text-white px-4 py-2 rounded">A PROPOS</a>
             <a href="contacts" className="block text-gray-600 hover:text-sky-600">CONTACTS</a>

            </div>
          </div>
        )}
      </header>
            <section className="relative bg-gradient-to-r from-gray-200 via-white to-gray-200 text-sky-500 py-40 overflow-hidden">
<div className="min-h-screen bg-white text-black p-8">
      <div className="max-w-5xl mx-auto shadow-2xl rounded-2xl p-10 bg-white">
        <h1 className="text-xl md:text-2xl font-bold text-sky-700 mb-4 shadow-md pb-2">À propos de <span className="whitespace-nowrap">Elegance Technique</span></h1>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-sky-500 mb-2">Notre Identité</h2>
          <p className="text-gray-700 leading-relaxed">
            <strong className="whitespace-nowrap">Elegance Technique</strong> est une entreprise spécialisée dans les services automobiles professionnels. De la <strong>climatisation automobile</strong> à la <strong>vidange professionnelle</strong>, en passant par les <strong>pièces détachées</strong> et le <strong>freinage</strong>, nous apportons expertise, rigueur et qualité à chaque intervention. Nous répondons aux besoins des particuliers, des professionnels et des flottes d'entreprises.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-sky-500 mb-2">Nos Services en Détail</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li><strong>Climatisation automobile :</strong> Diagnostic complet, recharge de gaz réfrigérant, recherche et réparation de fuites, remplacement de compresseur, nettoyage de circuit, traitement antibactérien de l’habitacle.</li>
            <li><strong>Pièces détachées :</strong> Large catalogue de pièces neuves, d’origine et adaptables. Disponibilité immédiate ou commande express pour moteurs, suspensions, systèmes électriques, carrosseries, etc.</li>
            <li><strong>Vidange professionnelle :</strong> Utilisation d’huiles certifiées (5W30, 10W40, etc.), changement de filtre à huile, inspection des niveaux, contrôle des voyants, remise à zéro du système électronique.</li>
            <li><strong>Freinage :</strong> Contrôle de l’usure des plaquettes/disques, remplacement des pièces, purge du liquide de frein, vérification des flexibles, test de performance du freinage.</li>
            <li><strong>Filtrant :</strong> Remplacement de filtres à air, carburant, huile, habitacle. Nettoyage des boîtiers et détection d’encrassement pouvant affecter les performances moteur.</li>
            <li><strong>Commande de pièces express :</strong> Système de commande rapide en ligne ou en boutique, suivi personnalisé, délais réduits, notifications d’arrivée des pièces pour un gain de temps optimal.</li>
            <li><strong>Service après-vente automobile :</strong> Suivi post-intervention, garanties sur pièces et main-d’œuvre, conseils mécaniques, assistance technique sur mesure, planning d’entretien prévisionnel pour vos véhicules.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-sky-500 mb-2">Notre Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            Offrir aux particuliers et entreprises une expertise mécanique de haut niveau avec un service client attentif et des équipements modernes. Notre objectif est de devenir un <strong>partenaire de confiance</strong> dans la maintenance automobile au Cameroun et en Afrique centrale.
          </p>
        </section>

        <hr className="my-10 border-blue-400" />

        <h1 className="text-xl md:text-2xl font-bold text-sky-600 mb-4 shadow-md pb-2">About <span className="whitespace-nowrap">Elegance Technique</span></h1>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-sky-500 mb-2">Our Identity</h2>
          <p className="text-gray-700 leading-relaxed">
            <strong className="whitespace-nowrap">Elegance Technique</strong> is a professional automotive services company. From <strong>car air conditioning</strong> to <strong>professional oil changes</strong>, <strong>spare parts</strong>, and <strong>brake servicing</strong>, we provide top-tier expertise, precision, and quality to both individuals and fleet customers.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-sky-500 mb-2">Detailed Services</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li><strong>Car Air Conditioning:</strong> Full diagnostics, refrigerant recharge, leak detection and repair, compressor replacement, circuit cleaning, anti-bacterial cabin treatment.</li>
            <li><strong>Spare Parts:</strong> Extensive catalog of new, OEM and aftermarket parts. Immediate availability or express order for engines, suspensions, electrical systems, bodywork, etc.</li>
            <li><strong>Professional Oil Change:</strong> Certified engine oils (5W30, 10W40), oil filter change, level inspections, dashboard warning check, system reset.</li>
            <li><strong>Braking:</strong> Wear inspection for pads/discs, parts replacement, brake fluid flush, flexible hose inspection, brake performance testing.</li>
            <li><strong>Filter Services:</strong> Replacement of air, fuel, oil, and cabin filters. Cleaning housings and identifying clogging that may reduce engine efficiency.</li>
            <li><strong>Express Parts Ordering:</strong> Fast online or in-store ordering, personalized tracking, short delivery times, and arrival notifications for efficiency.</li>
            <li><strong>Automotive After-Sales Service:</strong> Post-service follow-up, warranty on parts and labor, expert advice, personalized technical assistance, maintenance scheduling for your vehicles.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-sky-500 mb-2">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To provide high-level mechanical expertise to individuals and companies with attentive customer service and modern equipment. Our mission is to become a <strong>trusted partner</strong> in automotive maintenance across Cameroon and Central Africa.
          </p>
        </section>
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
                       <li><a href="produits" className="hover:text-sky-400 transition-colors">boutique</a></li>
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
      
      
      