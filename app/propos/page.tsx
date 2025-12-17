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
        <h1 className="text-2xl font-bold text-sky-700 mb-4 shadow-md pb-2">À propos de Elegance Technique</h1>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-sky-500 mb-2">Notre Identité</h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>Elegance Technique</strong> est une entreprise spécialisée dans les services automobiles professionnels. De la <strong>climatisation automobile</strong> à la <strong>vidange professionnelle</strong>, en passant par les <strong>pièces détachées</strong> et le <strong>freinage</strong>, nous apportons expertise, rigueur et qualité à chaque intervention. Nous répondons aux besoins des particuliers, des professionnels et des flottes d'entreprises.
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

        <h1 className="text-2xl font-bold text-sky-600 mb-4 shadow-md pb-2">About Elegance Technique</h1>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-sky-500 mb-2">Our Identity</h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>Elegance Technique</strong> is a professional automotive services company. From <strong>car air conditioning</strong> to <strong>professional oil changes</strong>, <strong>spare parts</strong>, and <strong>brake servicing</strong>, we provide top-tier expertise, precision, and quality to both individuals and fleet customers.
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
                       <span className="text-xl font-bold">ELEGANCE-TECHNIQUE</span>
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
          </div>
        );
      };
      
      
      