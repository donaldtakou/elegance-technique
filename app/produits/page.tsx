
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


interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  discount?: number; // e.g. 0.2 for 20% reduction
  description: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

const productsData: Product[] = [
  {
    id: 1,
    name: "Senteur Vanille Premium",
    price: 3500,
    quantity: 10,
    image: "/images/1.png",
    description: "Diffuseur senteur vanille, neutralise les odeurs et parfume l’habitacle jusqu’à 45 jours.",
  },
  {
    id: 2,
    name: "Senteur Fraîcheur Marine",
    price: 3500,
    quantity: 10,
    image: "/images/2.png",
    description: "Parfum marine, effet longue durée, idéal pour les trajets quotidiens et climats chauds.",
  },
  {
    id: 3,
    name: "Senteur Fruits Rouges",
    price: 3500,
    quantity: 10,
    image: "/images/3.png",
    description: "Senteur gourmande fruits rouges, ambiance sucrée et agréable pour tous véhicules.",
  },
  {
    id: 4,
    name: "Senteur Lavande Relax",
    price: 3500,
    quantity: 10,
    image: "/images/4.png",
    description: "Diffuseur lavande, effet relaxant, parfait pour les longs trajets et la détente.",
  },
  {
    id: 5,
    name: "Senteur Citron Énergie",
    price: 3500,
    quantity: 10,
    image: "/images/5.png",
    description: "Senteur citron, booste l’énergie et la concentration, idéal pour les matinées.",
  },
  {
    id: 6,
    name: "Senteur Menthe Fraîche",
    price: 3500,
    quantity: 10,
    image: "/images/6.png",
    description: "Diffuseur menthe, fraîcheur instantanée, neutralise les odeurs persistantes.",
  },
  // Ajout des anciens produits (products1.jpg à products6.jpg)
  {
    id: 101,
    name: "Senteur Aqua Intense",
    price: 3000,
    quantity: 5,
    image: "/images/products1.jpg",
    description: "Parfum intense pour voiture, effet longue durée jusqu’à 45 jours. Fraîcheur aqua.",
  },
  {
    id: 102,
    name: "Senteurs Aroma",
    price: 3500,
    quantity: 3,
    image: "/images/products2.jpg",
    description: "Parfum intense pour voiture, effet longue durée jusqu’à 45 jours. Fraîcheur aqua.",
  },
  {
    id: 103,
    name: "Senteur Aroma Lecture",
    price: 3000,
    quantity: 1000,
    image: "/images/product3.jpg",
    description: "Parfait pour lecture et écrans.",
  },
  {
    id: 104,
    name: "Filtre pollen toyota prado TX",
    price: 15000,
    quantity: 10,
    image: "/images/product4.jpg",
    description: "Filtre pollen toyota prado TX",
  },
  {
    id: 105,
    name: "Filtre pollen golf 5",
    price: 21000,
    quantity: 10,
    image: "/images/product5.jpg",
    description: "Filtre pollen golf 5",
  },
  {
    id: 106,
    name: "Filtre pollen MI 4matic",
    price: 38000,
    quantity: 12,
    image: "/images/product6.jpg",
    description: "Filtre pollen MI 4matic",
  },
  {
    id: 7,
    name: "Detenteur a tube ford",
    price: 25000,
    quantity: 90,
    image: "/images/product7.jpg",
    description: "Detenteur a tube ford",
  },
  {
    id: 8,
    name: "Detenteur toyota camry",
    price: 18000,
    quantity: 20,
    image: "/images/product8.jpg",
    description: "Detenteur toyota camry",
  },
  {
    id: 9,
    name: "Evaporateur toyota Camry",
    price: 120000,
    quantity: 30,
    image: "/images/product9.jpg",
    description: "Evaporateur toyota Camry",
  },
  {
    id: 10,
    name: "Evaporateur toyota Yaris",
    price: 95000,
    quantity: 40,
    image: "/images/product10.jpg",
    description: "Evaporateur toyota Yaris",
  },
  {
    id: 11,
    name: "Evaporateur toyota revo",
    price: 113000,
    quantity: 14,
    image: "/images/product11.jpg",
    description: "Evaporateur toyota revo",
  },
  {
    id: 12,
    name: "Evaporateur toyota land cruiser V8",
    price: 183000,
    quantity: 8,
    image: "/images/product12.jpg",
    description: "Evaporateur toyota land cruiser V8",
  },
  {
    id: 13,
    name: "Evaporateur toyota prado TX",
    price: 130000,
    quantity: 5,
    image: "/images/product13.jpg",
    description: "Evaporateur toyota prado TX",
  },
  {
    id: 14,
    name: "Condenseur toyota rav4",
    price: 110000,
    quantity: 12,
    image: "/images/product14.jpg",
    description: "Condenseur toyota rav4",
  },
  {
    id: 15,
    name: "Condenseur toyota rav4",
    price: 132000,
    quantity: 5,
    image: "/images/product15.jpg",
    description: "Condenseur toyota rav4",
  },
  {
    id: 16,
    name: "Condenseur toyota Camry",
    price: 150000,
    quantity: 45,
    image: "/images/product16.jpg",
    description: "Condenseur toyota Camry",
  },
  {
    id: 17,
    name: "Compresseur suzuki",
    price: 90000,
    quantity: 80,
    image: "/images/product17.jpg",
    description: "Compresseur suzuki en solde ",
  },
  {
    id: 18,
    name: "Compresseur suzuki ertiga",
    price: 280000,
    quantity: 20,
    image: "/images/product18.jpg",
    description: "Compresseur suzuki ertiga.",
  },
  {
    id: 19,
    name: "Compresseur MI350",
    price: 350000,
    quantity: 4,
    image: "/images/product19.jpg",
    description: "Compresseur MI350",
  },
  {
    id: 20,
    name: "Compresseur Hyundai sentafee",
    price: 210000,
    quantity: 30,
    image: "/images/product20.jpg",
    description: "Compresseur Hyundai sentafee",
  },
  {
    id: 21,
    name: "Compresseur Mercedes W166",
    price: 380000,
    quantity: 9,
    image: "/images/product21.jpg",
    description: "Compresseur Mercedes W166",
  },
  {
    id: 22,
    name: "Compresseur Toyota Rav Kits",
    price: 270000,
    quantity: 10,
    image: "/images/product22.jpg",
    description: "Compresseur Toyota Rav Kits",
  },
  {
    id: 23,
    name: "Compresseur Toyota Auris",
    price: 200000,
    quantity: 20,
    image: "/images/product23.jpg",
    description: "Compresseur Toyota Auris",
  },
  {
    id: 24,
    name: "Compresseur Toyota new yaris",
    price: 235000,
    quantity: 5,
    image: "/images/product24.jpg",
    description: "Compresseur Toyota new yaris",
  },
  {
    id: 25,
    name: "Compresseur Toyota tête de cochons",
    price: 185000,
    quantity: 1000,
    image: "/images/product25.jpg",
    description: "Compresseur Toyota tête de cochons",
  },
 
  
];

const ProductGallery: React.FC = () => {

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
    
      const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [cart, setCart] = useState<CartItem[]>([]);
 const handleAddToCart = (product: Product, quantity: number) => {
    if (quantity < 1) return;
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const generateWhatsAppMessage = () => {
    let message = 'Commande Elegance Technique:';
    let total = 0;
    cart.forEach(item => {
      const subtotal = item.product.price * item.quantity;
      total += subtotal;
      message += `\n🛒 ${item.product.name} - ${item.quantity} x ${item.product.price} FCFA = ${subtotal} FCFA\n`;
    });
    message += `\nTotal: ${total} FCFA`;
    return message;
  };

  const handleCheckout = () => {
    const message = generateWhatsAppMessage();
    const phone = '+237677132415';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

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
                    < Elegance />
                  </div>
                  <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 whitespace-nowrap">Elegance-technique</h1>
                </div>
    
                {/* Desktop Navigation */}
                <nav className="hidden lg:flex space-x-8">
                 <a href="/" className="block text-gray-600 hover:text-sky-600">ACCUEIL</a>
                  <a href="services" className="block text-gray-600 hover:text-sky-600">SERVICES</a>
                  <a href="produits" className="block  bg-sky-500 text-white px-4 py-2 rounded">BOUTIQUES</a>
                  <a href="propos" className="block text-gray-600 hover:text-sky-600">A PROPOS</a>
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
                  <a href="produits" className="block  bg-sky-500 text-white px-4 py-2 rounded">BOUTIQUES</a>
                  <a href="apropos" className="block text-gray-600 hover:text-sky-600">A PROPOS</a>
                 <a href="contacts" className="block text-gray-600 hover:text-sky-600">CONTACTS</a>
    
                </div>
              </div>
            )}
          </header>

    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 p-8">
      <h2 className="text-2xl font-bold text-sky-700 mb-8 text-center">
        Nos Produits disponibles
      </h2>


        {/* Barre de recherche */}
  
              <div className="w-full max-w-2xl">
  <input
    type="text"
    placeholder="Rechercher un produit..."
    className="w-full px-6 py-3 rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</div>

{/* Grille des produits */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
  {filteredProducts.map((product) => (
    <div
      key={product.id}
      className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition duration-300 relative"
    >
      {product.discount && (
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          -{product.discount * 100}%
        </div>
      )}
      <img
        src={product.image}
        alt={product.name}
        className="w-30 h-30 object-cover rounded-lg"
      />
      <h3 className="mt-4 text-lg font-bold text-gray-800">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
      <p className="text-gray-900 font-semibold">
        {product.discount
          ? (
              <span>
                <span className="line-through text-sm text-gray-400 mr-2">
                  {product.price} FCFA
                </span>
                {(product.price * (1 - product.discount)).toFixed(0)} FCFA
              </span>
            )
          : `${product.price} FCFA`}
      </p>
     
        
       <input  className="mt-2 w-20 center bg-gray-500  text-black py-1 rounded-lg hover:bg-gray-400 transition"
              type="number"
              min={1}
              defaultValue={1}
              
              id={`qty-${product.id}`}
            />
      <button
        //onClick={() => setSelectedProduct(product)}
        onClick={() => {
                const input = document.getElementById(`qty-${product.id}`) as HTMLInputElement;
                handleAddToCart(product, parseInt(input.value));
              }}
        className="mt-3 w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition"
      >
        ajouter au panier
      </button>
    </div>
  ))}
</div>

    

      {/* Modale de détails */}
  {selectedProduct && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
      <button
        onClick={() => setSelectedProduct(null)}
        className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
      >
        <X />
      </button>
      <img
        src={selectedProduct.image}
        alt={selectedProduct.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{selectedProduct.name}</h3>
      <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
      <p className="text-xl font-semibold text-sky-600">
        {selectedProduct.discount
          ? (
              <>
                <span className="line-through text-sm text-gray-400 mr-2">
                  {selectedProduct.price} FCFA
                </span>
                {(selectedProduct.price * (1 - selectedProduct.discount)).toFixed(0)} FCFA
              </>
            )
          : `${selectedProduct.price} FCFA`}
      </p>
      <button
        onClick={() => {
          alert("Produit commandé !");
          setSelectedProduct(null);
        }}
        className="mt-4 w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700 transition"
      >
        ajouter au panier
      </button>
    </div>
  </div>
)}

 {/* Cart */}
    {cart.length > 0 && (
  <div className="fixed bottom-0 right-0 m-4 bg-white shadow-lg border rounded-lg p-4 w-full max-w-sm">
    <h3 className="font-bold text-lg mb-2">Panier</h3>
    <ul className="space-y-2">
      {cart.map(item => (
        <li
          key={item.product.id}
          className="flex items-center justify-between text-sm bg-gray-100 px-3 py-2 rounded"
        >
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
            {item.product.name} x {item.quantity} ={" "}
            {item.quantity * item.product.price} FCFA
          </span>
          <button
            onClick={() =>
              setCart(prev => prev.filter(p => p.product.id !== item.product.id))
            }
            className="text-red-500 hover:text-red-700"
            title="Supprimer"
          >
            <X className="w-4 h-4" />
          </button>
        </li>
      ))}
    </ul>

    <button
      onClick={handleCheckout}
      className="mt-4 bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700"
    >
      Valider la commande sur WhatsApp
    </button>
  </div>
)}



    </div>
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

export default ProductGallery;
