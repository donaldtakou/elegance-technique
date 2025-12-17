'use client'
import React, { useState, useEffect } from 'react';
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
  Linkedin
} from 'lucide-react';
import { FaCar, FaTools, FaMapMarkerAlt, FaPhone, FaFacebookF } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DynamicMap = dynamic(() => import('./components/DynamicMap'), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-100 rounded-xl flex items-center justify-center">Chargement de la carte...</div>
});

const carouselImages = [
  '/caroussel/21a2fbb371dfb26d7b59f005c2c9f8c7.jpg',
  '/caroussel/9aac0e5a2ed10a965a51195b5aa97b4d.jpg',
  '/caroussel/adf4004a7790b748b3520554262596d1.jpg',
  '/caroussel/d6cb7801ea13fa834369199cf8da9ae7.jpg',
  '/caroussel/dedfbbb27c7d00b183ef78d95645e4ae.jpg'
];

function SocialLinks() {
  return (
    <a href="https://www.tiktok.com/@eltech_automotive" target="_blank" rel="noopener noreferrer">
      <img
        src="/icons/tiktok-icon.svg"
        alt="TikTok"
        className="w-6 h-6 hover:opacity-75 transition-all transform hover:scale-125"
      />
    </a>
  );
}
function Vente() {
  return (
      <img
        src="/icons/vente.png"
        alt="vente"
        className="w-12 h-12 hover:opacity-75 rounded-full"
      />
  );
}
function Commande() {
  return (
      <img
        src="/icons/commande.png"
        alt="commande"
        className="w-12 h-12 hover:opacity-75 rounded-full"
      />
  );
}
function Filtre() {
  return (
      <img
        src="/icons/filtre.png"
        alt="filtre"
        className="w-12 h-12 hover:opacity-75 rounded-full"
      />
  );
}
function Frein() {
  return (
      <img
        src="/icons/frein.png"
        alt="frein"
        className="w-12 h-12 hover:opacity-75 rounded-full"
      />
  );
}
function Clim() {
  return (
      <img
        src="/icons/clim.png"
        alt="clim"
        className="w-12 h-12 hover:opacity-75 rounded-full"
      />
  );
}
function Vidange() {
  return (
      <img
        src="/icons/vidange.png"
        alt="vidange"
        className="w-12 h-12 hover:opacity-75 rounded-full"
      />
  );
}
function Service() {
  return (
      <img
        src="/icons/service.png"
        alt="service"
        className="w-12 h-12 hover:opacity-75 rounded-full"
      />
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    service: '',
    concession: '',
    message: ''
  });

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      // TODO: Remplacez 'xpwwgbzo' par votre ID Formspree personnel
      // Instructions: voir CONFIGURATION_EMAIL.md
      const response = await fetch('https://formspree.io/f/xpwwgbzo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nom: formData.nom,
          email: formData.email,
          telephone: formData.telephone,
          service: formData.service,
          ville: formData.concession,
          message: formData.message,
          _subject: ` Nouvelle demande de ${formData.nom} - Elegance-Technique`,
          _replyto: formData.email,
          _to: 'contact@elegance-technique.com'
        })
      });

      if (response.ok) {
        alert('Votre demande a été envoyée avec succès! Nous vous contacterons bientôt.');
        setFormData({
          nom: '',
          email: '',
          telephone: '',
          service: '',
          concession: '',
          message: ''
        });
      } else {
        alert('Erreur lors de l\'envoi. Veuillez réessayer ou nous contacter directement.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Erreur lors de l\'envoi. Veuillez réessayer ou nous contacter directement.');
    }
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
              <h1 className="text-2xl font-bold text-gray-900 transform hover:scale-110 transition-all duration-300">Elegance-technique</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
             <a href="/" className="block bg-sky-500 text-white px-4 py-2 rounded transition-all transform hover:scale-105">ACCUEIL</a>
              <a href="services" className="block text-gray-600 hover:text-sky-600 transition-all transform hover:translate-x-2">SERVICES</a>
              <a href="produits" className="block text-gray-600 hover:text-sky-600 transition-all transform hover:translate-x-2">BOUTIQUE</a>
              <a href="propos" className="block text-gray-600 hover:text-sky-600 transition-all transform hover:translate-x-2">A PROPOS</a>
             <a href="contacts" className="block text-gray-600 hover:text-sky-600 transition-all transform hover:translate-x-2">CONTACTS</a>

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
            <a href="/" className="block bg-sky-500 text-white px-4 py-2 rounded">ACCUEIL</a>
              <a href="services" className="block text-gray-600 hover:text-sky-600">SERVICES</a>
              <a href="produits" className="block text-gray-600 hover:text-sky-600">PRODUITS</a>
              <a href="propos" className="block text-gray-600 hover:text-sky-600">A PROPOS</a>
             <a href="contacts" className="block text-gray-600 hover:text-sky-600">CONTACTS</a>

            </div>
          </div>
        )}
      </header>

      {/* Carousel Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {/* Images */}
        <div className="relative h-full">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end justify-center pb-20 z-10">
          <div className="text-center px-4 max-w-4xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-[0_8px_16px_rgba(0,0,0,1)] [text-shadow:_2px_2px_8px_rgb(0_0_0_/_100%),_4px_4px_16px_rgb(0_0_0_/_80%)] animate-fade-in">
              <span className="text-sky-400">ELEGANCE</span>-TECHNIQUE
            </h2>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-white drop-shadow-[0_8px_16px_rgba(0,0,0,1)] [text-shadow:_2px_2px_8px_rgb(0_0_0_/_100%),_4px_4px_16px_rgb(0_0_0_/_80%)]">
              𝗖𝗟𝗜𝗠𝗔𝗧𝗜𝗦𝗔𝗧𝗜𝗢𝗡 𝗘𝗧 𝗦𝗘𝗥𝗩𝗜𝗖𝗘𝗦 𝗔𝗨𝗧𝗢 𝗖𝗘𝗥𝗧𝗜𝗙𝗜𝗘́𝗦
            </h3>
            <div className="bg-black/50 backdrop-blur-sm px-6 py-4 rounded-2xl inline-block">
              <p className="text-base md:text-lg text-white font-bold leading-relaxed">
                Chez Élégance-Technique, toutes nos prestations de climatisation et de services automobiles sont 
                réalisées avec rigueur. Nous garantissons la qualité, la fiabilité et votre tranquillité 
                d'esprit à chaque intervention.
              </p>
            </div>
            <a href='contacts' className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg text-base font-semibold transition-all transform hover:scale-110 shadow-2xl hover:shadow-sky-500/50 animate-bounce-subtle">
              DEMANDE D'INFORMATION
            </a>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all transform hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all transform hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight size={28} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-sky-500 w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Controls Section */}
      <section className="py-12 bg-gradient-to-br from-white to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">NOS SERVICES PROFESSIONNELS</h2>
            <p className="text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Élégance-Technique assure votre confort et sécurité en offrant des services experts en climatisation automobile, 
              avec un contrôle rigoureux et un entretien de qualité pour des trajets toujours agréables.
            </p>
            <p className="text-sm text-gray-600 mt-2 max-w-4xl mx-auto">
              Elegance-Technique guarantees your comfort and safety by providing expert automotive air conditioning services, 
              with thorough checks and quality maintenance for always pleasant drives.
            </p>
          </div>

          {/* Section Marques */}
          <div className="mb-16 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Nous Intervenons sur Toutes Marques</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
              {['Toyota', 'Mercedes', 'BMW', 'Volkswagen', 'Hyundai', 'Ford', 'Nissan', 'Peugeot', 'Renault', 'Kia', 'Mazda', 'Suzuki'].map((brand) => (
                <div key={brand} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-sky-400 hover:shadow-lg transition-all transform hover:scale-110 hover:-translate-y-1">
                  <p className="text-gray-700 font-semibold">{brand}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-sky-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:border-sky-300 transition-all transform hover:-translate-y-3 hover:scale-105 duration-300 animate-slide-in-left">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mb-6 mx-auto animate-bounce-subtle">
                <Clim />
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-800">Climatisation Automobile</h3>
              <p className="text-sm text-sky-600 text-center mb-4 font-semibold">Car Air Conditioning</p>
              <p className="text-gray-700 text-center leading-relaxed mb-3">
                Diagnostic complet, recharge de gaz réfrigérant, détection de fuites, remplacement de compresseur et nettoyage antibactérien.
              </p>
              <p className="text-gray-600 text-center text-sm">
                Service it regularly for optimal comfort and maximum lifespan.
              </p>
              <div className="mt-6 text-center">
                <a href="services" className="text-sky-600 hover:text-sky-700 font-semibold inline-flex items-center gap-2">
                  En savoir plus <span>→</span>
                </a>
              </div>
            </div>

            <div className="bg-white border border-sky-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:border-sky-300 transition-all transform hover:-translate-y-3 duration-300">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Vente />
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-800">Ventes de Pièces Détachées</h3>
              <p className="text-sm text-sky-600 text-center mb-4 font-semibold">Spare Parts Sales</p>
              <p className="text-gray-700 text-center leading-relaxed mb-3">
                Large catalogue de pièces d'origine et compatibles : compresseurs, condenseurs, évaporateurs, filtres et accessoires de climatisation.
              </p>
              <p className="text-gray-600 text-center text-sm">Choose quality parts to ensure safety and reliability.</p>
              <div className="mt-6 text-center">
                <a href="produits" className="text-sky-600 hover:text-sky-700 font-semibold inline-flex items-center gap-2">
                  Voir le catalogue <span>→</span>
                </a>
              </div>
            </div>

            <div className="bg-white border border-sky-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:border-sky-300 transition-all transform hover:-translate-y-3 duration-300">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Vidange />
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-800">Vidange Professionnelle</h3>
              <p className="text-sm text-sky-600 text-center mb-4 font-semibold">Professional Oil Change</p>
              <p className="text-gray-700 text-center leading-relaxed mb-3">
                Huiles certifiées 5W30, 10W40. Changement de filtre, contrôle des niveaux, inspection complète pour prolonger la vie de votre moteur.
              </p>
              <p className="text-gray-600 text-center text-sm">Regular oil changes protect your engine and optimize performance.</p>
              <div className="mt-6 text-center">
                <a href="contacts" className="text-sky-600 hover:text-sky-700 font-semibold inline-flex items-center gap-2">
                  Réserver <span>→</span>
                </a>
              </div>
            </div>
             <div className="bg-white border border-sky-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:border-sky-300 transition-all transform hover:-translate-y-3 duration-300">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Frein />
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-800">Système de Freinage</h3>
              <p className="text-sm text-sky-600 text-center mb-4 font-semibold">Braking System</p>
              <p className="text-gray-700 text-center leading-relaxed mb-3">
                Contrôle d'usure, remplacement de plaquettes et disques, purge du liquide de frein. Votre sécurité est notre priorité.
              </p>
              <p className="text-gray-600 text-center text-sm">Check your brakes frequently to ensure safety and avoid costly repairs.</p>
              <div className="mt-6 text-center">
                <a href="services" className="text-sky-600 hover:text-sky-700 font-semibold inline-flex items-center gap-2">
                  Découvrir <span>→</span>
                </a>
              </div>
            </div>
             <div className="bg-white border border-sky-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:border-sky-300 transition-all transform hover:-translate-y-3 duration-300">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Filtre />
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-800">Système de Filtration</h3>
              <p className="text-sm text-sky-600 text-center mb-4 font-semibold">Filtration System</p>
              <p className="text-gray-700 text-center leading-relaxed mb-3">
                Filtres à air, carburant, huile et habitacle. Remplacement selon recommandations constructeur pour performance et longévité.
              </p>
              <p className="text-gray-600 text-center text-sm">Replace filters on time to protect your engine and maintain optimal performance.</p>
              <div className="mt-6 text-center">
                <a href="services" className="text-sky-600 hover:text-sky-700 font-semibold inline-flex items-center gap-2">
                  Plus d'infos <span>→</span>
                </a>
              </div>
            </div>
             <div className="bg-white border border-sky-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:border-sky-300 transition-all transform hover:-translate-y-3 duration-300">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Commande  />
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-800">Commande de Pièces Express</h3>
              <p className="text-sm text-sky-600 text-center mb-4 font-semibold">Express Parts Ordering</p>
              <p className="text-gray-700 text-center leading-relaxed mb-3">
                Commande en ligne ou sur place avec livraison sous 24-48h. Suivi personnalisé et notifications pour minimiser votre temps d'immobilisation.
              </p>
              <p className="text-gray-600 text-center text-sm">Order express parts to reduce downtime and keep your vehicle running.</p>
              <div className="mt-6 text-center">
                <a href="contacts" className="text-sky-600 hover:text-sky-700 font-semibold inline-flex items-center gap-2">
                  Commander <span>→</span>
                </a>
              </div>
            </div>
             <div className="bg-transparent p-8 rounded-xl"></div>
             <div className="bg-white border border-sky-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:border-sky-300 transition-all transform hover:-translate-y-3 duration-300">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Service />
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-800">Prestations de Services Automobiles</h3>
              <p className="text-sm text-sky-600 text-center mb-4 font-semibold">Automotive Services</p>
              <p className="text-gray-700 text-center leading-relaxed mb-3">
                Service après-vente complet : diagnostics, réparations, entretien préventif. Garantie sur nos interventions et conseil technique personnalisé.
              </p>
              <p className="text-gray-600 text-center text-sm">Trust experts for fast, reliable service that meets professional standards.</p>
              <div className="mt-6 text-center">
                <a href="services" className="text-sky-600 hover:text-sky-700 font-semibold inline-flex items-center gap-2">
                  Nos services <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Statistiques Section */}
     <section className="py-16 bg-gradient-to-r from-sky-600 to-sky-800">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid md:grid-cols-4 gap-8 text-center text-white">
           <div className="p-6 transform hover:scale-110 transition-all duration-300 cursor-pointer">
             <div className="text-3xl font-bold mb-2 animate-fade-in hover:text-sky-300 transition-colors">500+</div>
             <div className="text-sky-100 text-base">Clients Satisfaits</div>
           </div>
           <div className="p-6">
             <div className="text-3xl font-bold mb-2">8+</div>
             <div className="text-sky-100 text-base">Ànnées d'Expérience</div>
           </div>
           <div className="p-6">
             <div className="text-3xl font-bold mb-2">1000+</div>
             <div className="text-sky-100 text-base">Interventions Réalisées</div>
           </div>
           <div className="p-6">
             <div className="text-3xl font-bold mb-2">98%</div>
             <div className="text-sky-100 text-base">Taux de Satisfaction</div>
           </div>
         </div>
       </div>
     </section>

     <section>
       <div className="fixed right-4 top-1/3 flex flex-col items-end space-y-4 z-50">
            <a href="services" 
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

      {/* Promise Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-sky-600 mb-16">LA PROMESSE D'ELEGANCE-TECHNIQUE</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16  bg-sky-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <CheckCircle className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Expertise/Expertise</h3>
              <p className="text-gray-600">Garantit un diagnostic précis et des solutions adaptées pour votre confort.</p>
              <p className="text-gray-600">ensures accurate diagnosis and tailored solutions for your comfort.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16  bg-sky-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Shield className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Rigueur/Rigor</h3>
              <p className="text-gray-600">rigueur absolue à chaque intervention pour un service fiable et durable.</p>
             <p className="text-gray-600">strict rigor in every service for reliable and long-lasting results.</p>

            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16  bg-sky-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Calendar className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800"> Qualité/Quality</h3>
              <p className="text-gray-600">assure une climatisation performante et durable dans votre véhicule.</p>
              <p className="text-gray-600">guarantees efficient and durable air conditioning in your vehicle.</p>

            </div>
          </div>

          <a href='contacts' className="inline-block bg-sky-600 hover:bg-sky-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            CONTACT RAPIDE
          </a>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">CE QUE DISENT NOS CLIENTS</h2>
            <p className="text-lg text-gray-600">Des retours authentiques de clients satisfaits</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-sky-50 to-white p-8 rounded-2xl shadow-lg border border-sky-100 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-slide-in-left">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-sky-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  JM
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Jean-Marc T.</h4>
                  <p className="text-sm text-gray-500">Propriétaire Toyota Camry</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">"Service impeccable pour la réparation de ma climatisation. L'équipe est professionnelle et les tarifs sont honnêtes. Je recommande vivement !"</p>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">★</span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-white p-8 rounded-2xl shadow-lg border border-sky-100 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-sky-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  AM
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Amina M.</h4>
                  <p className="text-sm text-gray-500">Gérante de flotte</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">"Nous faisons confiance à Elegance-Technique pour l'entretien de notre flotte de 12 véhicules. Intervention rapide et qualité au rendez-vous."</p>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">★</span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-white p-8 rounded-2xl shadow-lg border border-sky-100 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-slide-in-right">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-sky-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  PK
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Paul K.</h4>
                  <p className="text-sm text-gray-500">Chauffeur professionnel</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">"Excellent rapport qualité-prix. Les pièces sont de bonne qualité et le personnel est très compétent. Mon véhicule roule comme neuf !"</p>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">QUESTIONS FRÉQUENTES</h2>
            <p className="text-lg text-gray-600">Tout ce que vous devez savoir sur nos services</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-sky-100 transform hover:scale-105 hover:shadow-xl transition-all duration-300 animate-slide-in-left">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quand faut-il recharger la climatisation de ma voiture ?</h3>
              <p className="text-gray-700 leading-relaxed">Il est recommandé de vérifier votre climatisation tous les 2 ans ou dès que vous constatez une baisse de performance. Si l'air soufflé n'est plus assez froid, c'est le moment d'intervenir.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-sky-100 transform hover:scale-105 hover:shadow-xl transition-all duration-300 animate-slide-in-right">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quelle est la durée d'une intervention de climatisation ?</h3>
              <p className="text-gray-700 leading-relaxed">Une recharge simple prend environ 1 à 2 heures. Pour des réparations plus complexes (remplacement de compresseur, recherche de fuites), comptez une demi-journée à une journée.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-sky-100 transform hover:scale-105 hover:shadow-xl transition-all duration-300 animate-slide-in-left">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proposez-vous des garanties sur vos prestations ?</h3>
              <p className="text-gray-700 leading-relaxed">Oui, toutes nos interventions et pièces installées sont garanties. La durée de garantie varie selon le type de service (3 à 12 mois généralement). Demandez les détails lors de votre visite.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-sky-100 transform hover:scale-105 hover:shadow-xl transition-all duration-300 animate-slide-in-right">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Travaillez-vous sur toutes les marques de véhicules ?</h3>
              <p className="text-gray-700 leading-relaxed">Absolument ! Nous intervenons sur toutes marques : Toyota, Mercedes, BMW, Volkswagen, Hyundai, Ford, Nissan, et bien d'autres. Notre équipe dispose des équipements et compétences nécessaires.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-sky-100 transform hover:scale-105 hover:shadow-xl transition-all duration-300 animate-slide-in-left">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment prendre rendez-vous ?</h3>
              <p className="text-gray-700 leading-relaxed">Vous pouvez nous contacter par téléphone au +237 677 132 415, via WhatsApp, ou en remplissant le formulaire de contact sur notre site. Nous vous répondrons rapidement pour fixer un créneau qui vous convient.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-sky-100 transform hover:scale-105 hover:shadow-xl transition-all duration-300 animate-slide-in-right">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Acceptez-vous les paiements en plusieurs fois ?</h3>
              <p className="text-gray-700 leading-relaxed">Pour les interventions importantes, nous pouvons étudier des solutions de paiement adaptées. Contactez-nous pour en discuter selon votre situation et le montant des travaux.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl transform hover:shadow-2xl transition-all duration-300 animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">INFORMATIONS</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-700">Contact :</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 transform hover:translate-x-2 transition-all">
                      <Phone className="text-sky-600 w-5 h-5 animate-bounce-subtle" />
                      <span>+237 677 132 415</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 transform hover:translate-x-2 transition-all">
                      <Phone className="text-sky-600 w-5 h-5 animate-bounce-subtle" />
                      <span>+237 242 600 482</span>
                    </div>
                    <div className="flex gap-2 items-center space-x-2 transform hover:translate-x-2 transition-all">
                      <Mail className="text-sky-600 w-5 h-5 animate-bounce-subtle" />
                      <span>contact@elegance-technique.com</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-700">Horaires :</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 transform hover:translate-x-2 transition-all">
                      <Clock className="text-sky-600 w-5 h-5" />
                      <div>
                        <p>Lundi - Samedi :</p>
                        <p>08h00 - 18h30</p>
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
            <div className="bg-gradient-to-br from-sky-50 to-white p-8 rounded-xl shadow-lg transform hover:shadow-2xl transition-all duration-300 animate-slide-in-right">
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">DEMANDE D'INFORMATIONS</h3>
              
              <div className="space-y-6">
                <input
                  type="text"
                  name="nom"
                  placeholder="Nom*"
                  value={formData.nom}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all transform focus:scale-105"
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
                  <option value="vente">Vente</option>
                  <option value="apres-vente">Après-vente</option>
                  <option value="pieces">Pièces détachées</option>
                </select>
                
                <select
                  name="concession"
                  value={formData.concession}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  required
                >
                  <option value="">- Votre ville* -</option>
                  <option value="douala">Douala</option>
                  <option value="yaounde">Yaoundé</option>
                  <option value="Bafoussam">Bafoussam</option>
                  <option value="Garoua">Garoua</option>
                  <option value="Maroua">Maroua</option>
                  <option value="Dschang">Dschang</option>
                </select>
                
                <textarea
                  name="message"
                  placeholder="Votre message*"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  required
                />
                
                <button
                  onClick={handleSubmit}
                  className="w-full bg-sky-500 hover:bg-sky-700 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-2xl animate-pulse-slow"
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
                <div className="w-10 h-10  bg-sky-500 rounded-full flex items-center justify-center animate-float">
                  <Elegance />
                </div>
                <span className="text-xl font-bold transform hover:text-sky-400 transition-colors">ELEGANCE-TECHNIQUE</span>
              </div>
              <p className="text-gray-400">Votre partenaire de confiance pour tout probleme de véhicules d'occasion ou noeuf.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-sky-400 transition-all transform hover:translate-x-2">Accueil</a></li>
                <li><a href="produits" className="hover:text-sky-400 transition-all transform hover:translate-x-2">produits</a></li>
                <li><a href="propos" className="hover:text-sky-400 transition-all transform hover:translate-x-2">à propos</a></li>

              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="produits" className="hover:text-sky-400 transition-all transform hover:translate-x-2">Achats de pieces</a></li>
                <li><a href="produits" className="hover:text-sky-400 transition-all transform hover:translate-x-2">Commandes senteurs</a></li>
                <li><a href="contacts" className="hover:text-sky-400 transition-all transform hover:translate-x-2">Demande d'information</a></li>

              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4 items-center">
                <a href="https://web.facebook.com/profile.php?id=61574041633300" className="text-gray-400 hover:text-sky-400 transition-all transform hover:scale-110">
                  <Facebook className="w-6 h-6" />
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


