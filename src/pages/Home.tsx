import { motion } from 'motion/react';
import { ArrowRight, Instagram, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="film-grain">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2073" 
            alt="Nerea Riviera" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-nerea-deep/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-nerea-cloud via-transparent to-transparent opacity-60" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-white font-bold mb-6 block">
              La Dolce Vita Moderne
            </span>
            <h1 className="text-7xl md:text-[10rem] font-serif text-white leading-none mb-8 tracking-tight">
              Un Été <br/> <i className="font-light">à Porter</i>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-serif italic max-w-xl mx-auto mb-12 tracking-wide">
              Rayures intemporelles, matières régénérées et silhouettes sculptées par le soleil.
            </p>
            <Link 
              to="/shop" 
              className="inline-block px-12 py-5 bg-white text-nerea-deep text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-nerea-butter transition-all duration-700 hover:tracking-[0.4em]"
            >
              Découvrir la Collection
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <span className="text-white text-[8px] uppercase tracking-[0.4em] mb-4 opacity-70">Défiler</span>
            <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
                <motion.div 
                    animate={{ y: [0, 48] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute top-0 left-0 w-full h-1/2 bg-white"
                />
            </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 md:px-12 bg-nerea-cloud">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="overflow-hidden aspect-[4/5] rounded-sm">
                <motion.img 
                    whileInView={{ scale: 1.05 }}
                    transition={{ duration: 2 }}
                    src="https://images.unsplash.com/photo-1544644853-27eb3085521e?auto=format&fit=crop&q=80&w=1974" 
                    alt="Striped Bikini Vintage Riviera" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-80 hidden md:block border-8 border-nerea-butter -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-1000" />
            <p className="absolute bottom-4 left-4 text-white text-[10px] uppercase tracking-widest opacity-80 italic">Portofino, 1964 Spirit</p>
          </div>
          
          <div className="max-w-md">
            <h2 className="text-5xl md:text-6xl font-serif mb-10 leading-tight">
                Inspiré par le murmure de la <i className="font-light">Méditerranée.</i>
            </h2>
            <div className="space-y-6 text-nerea-deep/70 leading-relaxed font-light">
                <p>NÉRÉA est née de la volonté de capturer l'élégance insouciante de la Riviera italienne des années 60, tout en protégeant son futur.</p>
                <p>Chaque pièce est une promesse de durabilité, sculptée dans des tissus régénérés pour une féminité consciente et intemporelle.</p>
            </div>
            <Link to="/about" className="group flex items-center mt-12 text-[11px] uppercase tracking-[0.3em] font-bold">
              Notre Philosophie
              <ArrowRight className="ml-4 w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products (Stripes Focus) */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <h2 className="text-5xl font-serif mb-4">La Dolce Vita</h2>
              <p className="text-nerea-deep/50 italic font-serif">Retrouvez nos rayures emblématiques et nos coupes vintage.</p>
            </div>
            <Link to="/shop" className="hidden md:block text-[11px] uppercase tracking-[0.3em] font-bold border-b border-nerea-deep/10 pb-2">
              Boutique complète
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Soleil Striped Top", price: "85€", img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=2070" },
              { name: "Riviera High Waist", price: "95€", img: "https://images.unsplash.com/photo-1502301197179-65217d33aa1b?auto=format&fit=crop&q=80&w=1964" },
              { name: "Amalfi One Piece", price: "160€", img: "https://images.unsplash.com/photo-1582639590011-f5a8416d1101?auto=format&fit=crop&q=80&w=1964" }
            ].map((product, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-nerea-deep/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <button className="absolute bottom-6 left-1/2 -translate-x-1/2 px-8 py-3 bg-white text-[10px] uppercase tracking-widest font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Aperçu Rapide
                  </button>
                </div>
                <h3 className="text-xl font-serif mb-1">{product.name}</h3>
                <p className="text-[11px] text-nerea-deep/40 uppercase tracking-widest">{product.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Narrative section */}
      <section className="h-[70vh] relative overflow-hidden flex items-center px-6 md:px-24">
        <div className="absolute inset-0 z-0 scale-110">
          <img 
             src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=2073" 
             alt="Italian Coast Parallax" 
             className="w-full h-full object-cover opacity-80"
             referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-nerea-olive/10" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight drop-shadow-sm">
            Une conscience <br/> <i className="font-light">régénérée.</i>
          </h2>
          <p className="text-white/90 text-lg font-serif italic mb-10 leading-relaxed">
            Notre engagement pour l'océan commence avec les fibres que nous tissons. Découvrez notre modèle circulaire.
          </p>
          <Link to="/sustainability" className="px-10 py-4 border border-white text-white text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-nerea-deep transition-all duration-500">
            En Savoir Plus
          </Link>
        </div>
      </section>

      {/* Instagram Integration */}
      <section className="py-32 px-6">
        <div className="max-w-screen-xl mx-auto text-center mb-20">
          <h4 className="text-[10px] uppercase tracking-[0.6em] font-bold text-nerea-olive mb-4">#NereaSummer</h4>
          <h2 className="text-4xl font-serif italic">Rejoignez-nous sur la Riviera</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1506929113614-bb48858af892?auto=format&fit=crop&q=80&w=1968",
            "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?auto=format&fit=crop&q=80&w=1974",
            "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=2070",
            "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=2070"
          ].map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden group relative">
              <img 
                src={img} 
                alt={`Social ${i}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <Instagram className="text-white w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
