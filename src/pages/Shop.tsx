import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Filter, ChevronDown, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  { id: 1, name: "Amalfi One Piece", price: "160€", color: "Sea Blue", style: "One-piece", img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=2070", hoverImg: "https://images.unsplash.com/photo-1582639590011-f5a8416d1101?auto=format&fit=crop&q=80&w=1964" },
  { id: 2, name: "Soleil Striped Top", price: "85€", color: "Butter Yellow", style: "Bikini", img: "https://images.unsplash.com/photo-1544644853-27eb3085521e?auto=format&fit=crop&q=80&w=1974", hoverImg: "https://images.unsplash.com/photo-1502301197179-65217d33aa1b?auto=format&fit=crop&q=80&w=1964" },
  { id: 3, name: "Riviera High Waist", price: "95€", color: "Olive Green", style: "High-waist", img: "https://images.unsplash.com/photo-1502301197179-65217d33aa1b?auto=format&fit=crop&q=80&w=1964", hoverImg: "https://images.unsplash.com/photo-1544644853-27eb3085521e?auto=format&fit=crop&q=80&w=1974" },
  { id: 4, name: "Positano Balconette", price: "110€", color: "Old Pink", style: "Bikini", img: "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?auto=format&fit=crop&q=80&w=1974", hoverImg: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=2070" },
  { id: 5, name: "Capri Striped Shorts", price: "75€", color: "Sea Blue", style: "Shorts", img: "https://images.unsplash.com/photo-1506929113614-bb48858af892?auto=format&fit=crop&q=80&w=1968", hoverImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2073" },
  { id: 6, name: "Venezia Drapped", price: "180€", color: "Cloud White", style: "One-piece", img: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=2070", hoverImg: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=2070" },
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const categories = ["Tous", "Bikinis", "Une-pièce", "Shorts"];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <header className="px-6 md:px-12 mb-16 text-center max-w-screen-xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-nerea-olive mb-4 block">Boutique</span>
          <h1 className="text-6xl md:text-7xl font-serif italic mb-12 leading-tight">Collection Riviera</h1>
        </motion.div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-8 border-b border-nerea-butter pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all ${
                activeCategory === cat ? "text-nerea-deep" : "text-nerea-deep/30 hover:text-nerea-deep"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto">
        {/* Controls */}
        <div className="flex justify-between items-center mb-12">
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold opacity-60">
                <Filter className="w-3 h-3" />
                <span>Filtrer</span>
            </div>
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold opacity-60 cursor-pointer hover:opacity-100 transition-opacity">
                <span>Trier par</span>
                <ChevronDown className="w-3 h-3" />
            </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
          {PRODUCTS.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-[3/4] overflow-hidden mb-6 rounded-sm bg-nerea-cloud">
                  {/* Base Image */}
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-105 group-hover:opacity-0"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hover Image */}
                  <img 
                    src={product.hoverImg} 
                    alt={`${product.name} alternate`} 
                    className="absolute inset-0 w-full h-full object-cover scale-110 opacity-0 transition-all duration-1000 ease-in-out group-hover:scale-100 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Badge */}
                  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 text-[8px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    Eco-Conscient
                  </div>
                </div>
              </Link>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-serif mb-1 leading-none tracking-tight">
                    <Link to={`/product/${product.id}`} className="hover:text-nerea-olive transition-colors">{product.name}</Link>
                  </h3>
                  <p className="text-[10px] text-nerea-deep/40 uppercase tracking-[0.2em]">{product.style}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium tracking-tighter mb-2">{product.price}</p>
                  <button className="text-nerea-deep/30 hover:text-nerea-deep transition-colors">
                     <ShoppingBag className="w-5 h-5 stroke-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More/Infinite Scroll Mock */}
        <div className="mt-32 text-center">
            <button className="px-16 py-5 border border-nerea-deep/10 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-nerea-deep hover:text-white transition-all duration-700">
                Afficher plus de pièces
            </button>
        </div>
      </section>

      {/* Philosophy mini segment */}
      <section className="mt-48 bg-nerea-butter/20 py-24 px-6 text-center">
         <div className="max-w-2xl mx-auto">
            <p className="font-serif italic text-2xl text-nerea-deep/70 leading-relaxed mb-8">
              "Nos tissus sont régénérés à partir de filets de pêche et de plastiques récupérés dans les océans, car la beauté du futur ne peut se faire sans conscience."
            </p>
            <Link to="/sustainability" className="text-[10px] uppercase tracking-[0.4em] font-bold border-b border-nerea-olive/40 pb-1 text-nerea-olive">
              Nos Engagements
            </Link>
         </div>
      </section>
    </div>
  );
}
