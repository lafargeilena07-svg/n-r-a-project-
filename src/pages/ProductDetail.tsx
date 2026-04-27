import { motion } from 'motion/react';
import { Leaf, ShieldCheck, Waves, Ruler, Globe, QrCode, ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedBottom, setSelectedBottom] = useState('Taille Haute');

  // Hardcoded for the demo look/feel
  const product = {
    name: "Amalfi One Piece",
    price: "160€",
    description: "Une silhouette sculpturale inspirée des côtes escarpées de la Campanie. L'Amalfi capture l'essence du glamour intemporel avec ses rayures cerbales et son décolleté plongeant raffiné.",
    poeticDetails: "Conçu pour les journées lentes sous le soleil, là où l'eau embrasse l'horizon.",
    features: [
      { icon: Leaf, label: "ECONYL® Régénéré" },
      { icon: ShieldCheck, label: "Résistant UV & Chlore" },
      { icon: Waves, label: "Noeuds Ajustables" }
    ],
    images: [
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1582639590011-f5a8416d1101?auto=format&fit=crop&q=80&w=1964",
      "https://images.unsplash.com/photo-1502301197179-65217d33aa1b?auto=format&fit=crop&q=80&w=1964"
    ]
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto film-grain">
      <Link to="/shop" className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold mb-12 opacity-40 hover:opacity-100 transition-opacity">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Retour à la Boutique
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
        {/* Visuals - Left */}
        <div className="lg:col-span-7 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
               initial={{ opacity: 0, scale: 0.98 }}
               animate={{ opacity: 1, scale: 1 }}
               className="aspect-[3/4] overflow-hidden rounded-sm"
            >
              <img src={product.images[0]} alt="Product view 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, scale: 0.98 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.2 }}
               className="aspect-[3/4] overflow-hidden rounded-sm md:mt-12"
            >
              <img src={product.images[1]} alt="Product view 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
          <div className="aspect-video overflow-hidden rounded-sm">
            <img src={product.images[2]} alt="Lifestyle view" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* Content - Right */}
        <div className="lg:col-span-5 lg:sticky lg:top-40 h-fit">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex justify-between items-baseline mb-4">
               <h1 className="text-5xl md:text-6xl font-serif leading-none tracking-tight">{product.name}</h1>
               <span className="text-xl font-medium tracking-tighter opacity-60">{product.price}</span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-nerea-olive mb-10">Rayures Riviera</p>
            
            <div className="space-y-6 mb-12">
                <p className="text-serif italic text-2xl text-nerea-deep/80 leading-relaxed italic">{product.poeticDetails}</p>
                <p className="text-nerea-deep/60 leading-relaxed font-light">{product.description}</p>
            </div>

            {/* Selection */}
            <div className="space-y-10 mb-12 border-t border-nerea-butter pt-10">
                {/* Size */}
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <label className="text-[11px] uppercase tracking-widest font-bold opacity-40">Taille</label>
                        <button className="flex items-center text-[10px] uppercase tracking-widest font-bold text-nerea-olive hover:opacity-70 transition-opacity">
                            <Ruler className="w-3 h-3 mr-2" />
                            Guide des tailles
                        </button>
                    </div>
                    <div className="flex space-x-4">
                        {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                            <button 
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={cn(
                                    "w-12 h-12 flex items-center justify-center text-[11px] font-bold border transition-all duration-300",
                                    selectedSize === size ? "bg-nerea-deep text-white border-nerea-deep shadow-lg" : "border-nerea-butter text-nerea-deep hover:border-nerea-deep"
                                )}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Bottom Style */}
                <div>
                    <label className="block text-[11px] uppercase tracking-widest font-bold opacity-40 mb-6">Style du bas</label>
                    <div className="flex space-x-6">
                        {['Taille Haute', 'Standard'].map((style) => (
                            <button 
                                key={style}
                                onClick={() => setSelectedBottom(style)}
                                className="flex items-center group"
                            >
                                <div className={cn(
                                    "w-4 h-4 rounded-full border flex items-center justify-center mr-3 transition-all",
                                    selectedBottom === style ? "bg-nerea-olive border-nerea-olive" : "border-nerea-butter group-hover:border-nerea-deep"
                                )}>
                                    {selectedBottom === style && <div className="w-1 h-1 bg-white rounded-full" />}
                                </div>
                                <span className={cn(
                                    "text-xs font-medium uppercase tracking-widest transition-opacity",
                                    selectedBottom === style ? "opacity-100" : "opacity-40"
                                )}>{style}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="space-y-4 mb-16">
                <button className="w-full bg-nerea-deep text-white py-6 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-nerea-olive transition-all duration-700 shadow-xl shadow-nerea-deep/10">
                    Ajouter au Panier
                </button>
                <div className="flex items-center justify-center space-x-2 text-[10px] uppercase tracking-widest font-bold opacity-40">
                    <Globe className="w-3 h-3" />
                    <span>Livraison internationale offerte dès 250€</span>
                </div>
            </div>

            {/* Info Tabs / Sections */}
            <div className="border-t border-nerea-butter py-10 space-y-8">
                <div className="grid grid-cols-1 gap-6">
                    {product.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-nerea-butter/30 rounded-full flex items-center justify-center text-nerea-olive">
                                <feature.icon className="w-5 h-5 stroke-1" />
                            </div>
                            <span className="text-xs uppercase tracking-widest font-bold opacity-60">{feature.label}</span>
                        </div>
                    ))}
                </div>
                
                {/* Transparency Mock */}
                <div className="bg-nerea-olive/10 p-8 rounded-sm flex items-center justify-between border border-nerea-olive/5 mt-8">
                    <div>
                        <h4 className="text-sm font-serif mb-2">Tracez votre pièce</h4>
                        <p className="text-[10px] text-nerea-deep/50 leading-relaxed font-light">Découvrez l'origine de ce vêtement, de la récolte des fibres à l'atelier.</p>
                    </div>
                    <div className="w-12 h-12 bg-white p-2 rounded-sm rotate-3 shadow-md">
                        <QrCode className="w-full h-full stroke-1" />
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
