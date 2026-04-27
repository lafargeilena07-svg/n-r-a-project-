import { motion } from 'motion/react';
import { Instagram, ArrowDownRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Collection() {
  const lookbookItems = [
    { title: "Matinée à Portofino", img: "https://images.unsplash.com/photo-1544644853-27eb3085521e?auto=format&fit=crop&q=80&w=1974", span: "row-span-2" },
    { title: "Éclats de Soleil", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2073", span: "row-span-1" },
    { title: "Horizon Azur", img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=2070", span: "row-span-2" },
    { title: "Sillage Éternel", img: "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?auto=format&fit=crop&q=80&w=1974", span: "row-span-1" },
  ];

  return (
    <div className="pt-32 pb-24 film-grain">
      <header className="px-6 md:px-12 mb-24 max-w-screen-2xl mx-auto">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="max-w-4xl"
        >
          <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-nerea-olive mb-6 block">Édition Limitée</span>
          <h1 className="text-6xl md:text-[8rem] font-serif leading-none tracking-tight mb-8 italic">Dolce <br/> <i className="font-light">Vita</i></h1>
          <p className="text-xl md:text-3xl font-serif italic text-nerea-deep/50 max-w-2xl leading-relaxed">
            Un hommage aux archives des années 60. Rayures graphiques, coupes ajustées et une palette inspirée par les villages de la côte Amalfitaine.
          </p>
        </motion.div>
      </header>

      {/* Grid Lookbook */}
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 auto-rows-[300px] md:auto-rows-[450px]">
            {lookbookItems.map((item, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className={item.span + " relative group overflow-hidden rounded-sm"}
                >
                    <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-110"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-8 bottom-8 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                        <h3 className="text-3xl font-serif italic mb-2">{item.title}</h3>
                        <div className="w-12 h-[1px] bg-white/50" />
                    </div>
                    {/* Artistic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-nerea-deep/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </motion.div>
            ))}

            {/* Quote Block */}
            <div className="md:col-span-2 lg:col-span-1 flex items-center justify-center p-12 bg-nerea-butter/30 text-center">
                <div className="space-y-8">
                    <ArrowDownRight className="w-12 h-12 text-nerea-olive mx-auto stroke-1" />
                    <p className="font-serif italic text-3xl text-nerea-deep/70">"L'élégance n'est pas de se faire remarquer, mais de se faire retenir."</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-30">— Marcello Mastroianni Spirit</p>
                </div>
            </div>
         </div>
      </section>

      {/* Campaign Feature */}
      <section className="mt-48 px-6 md:px-24">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-12">
                <h2 className="text-5xl md:text-7xl font-serif leading-none italic">Sienne <br/> & Sel Marin.</h2>
                <p className="text-serif font-light text-xl text-nerea-deep/60 leading-relaxed italic">
                    Notre nouvelle palette explore la terre cuite chauffée par le soleil et le bleu profond des eaux italiennes. 
                    Des pièces conçues pour durer au-delà des saisons.
                </p>
                <div className="flex space-x-12 pt-8">
                    <Link to="/shop" className="text-[11px] uppercase tracking-[0.4em] font-bold hover:text-nerea-olive transition-all">Acheter</Link>
                    <Link to="/journal" className="text-[11px] uppercase tracking-[0.4em] font-bold hover:text-nerea-olive transition-all">Lire le Journal</Link>
                </div>
            </div>
            <div className="lg:col-span-7 flex justify-end">
                <div className="w-full md:w-4/5 aspect-video overflow-hidden rounded-sm relative shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=2070" 
                        alt="Summer scene" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-white/10 mix-blend-overlay" />
                </div>
            </div>
        </div>
      </section>

      {/* Call to follow */}
      <section className="py-48 text-center px-6">
        <div className="max-w-2xl mx-auto bg-nerea-cloud p-16 border border-nerea-butter">
            <Instagram className="w-12 h-12 text-nerea-olive mx-auto mb-8 stroke-1" />
            <h2 className="text-4xl font-serif italic mb-8">Découvrez les coulisses de la campagne.</h2>
            <a href="#" className="inline-block px-12 py-5 bg-nerea-deep text-white text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-nerea-olive transition-all">
                @NereaSwimwear
            </a>
        </div>
      </section>
    </div>
  );
}
