import { motion } from 'motion/react';
import { Anchor, Globe, Heart, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 film-grain">
      {/* Narrative Section */}
      <section className="px-6 md:px-12 max-w-screen-xl mx-auto mb-32 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-nerea-olive mb-6 block">NOTRE HISTOIRE</span>
          <h1 className="text-6xl md:text-8xl font-serif leading-tight italic mb-12">Née de l'Écume <br/> <i className="font-light">& du Soleil.</i></h1>
          <p className="text-serif font-light italic text-2xl text-nerea-deep/60 max-w-2xl mx-auto leading-relaxed">
            "NÉRÉA est une promesse faite à la mer. Une invitation à vivre l'été avec élégance, sans laisser de trace."
          </p>
        </motion.div>
      </section>

      {/* Origin Image */}
      <section className="px-6 md:px-24 mb-48">
        <div className="aspect-video w-full overflow-hidden rounded-sm relative">
            <img 
               src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070" 
               alt="Coast of Amalfi inspiration" 
               className="w-full h-full object-cover grayscale opacity-80"
               referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nerea-cloud to-transparent" />
            <div className="absolute bottom-12 left-12 text-white">
                <p className="text-[10px] uppercase tracking-[0.5em] font-bold mb-2">Inspiré par</p>
                <h3 className="text-4xl font-serif italic">La Riviera des années 60</h3>
            </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-16">
                <h2 className="text-5xl md:text-6xl font-serif italic leading-tight">L'Élégance <br/> Intemporelle.</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                        <Anchor className="w-8 h-8 text-nerea-olive stroke-1" />
                        <h4 className="text-[11px] uppercase tracking-widest font-bold">Inspiration Vintage</h4>
                        <p className="text-sm font-light text-nerea-deep/60 italic leading-relaxed">Nous revisitons les silhouettes classiques pour une allure qui ne se démode jamais.</p>
                    </div>
                    <div className="space-y-4">
                        <Globe className="w-8 h-8 text-nerea-blue stroke-1" />
                        <h4 className="text-[11px] uppercase tracking-widest font-bold">Protection des Océans</h4>
                        <p className="text-sm font-light text-nerea-deep/60 italic leading-relaxed">Notre mission est de régénérer ce que nous avons prélevé à la mer.</p>
                    </div>
                    <div className="space-y-4">
                        <ShieldCheck className="w-8 h-8 text-nerea-deep stroke-1 opacity-50" />
                        <h4 className="text-[11px] uppercase tracking-widest font-bold">Qualité Supérieure</h4>
                        <p className="text-sm font-light text-nerea-deep/60 italic leading-relaxed">Chaque pièce est testée pour résister au chlore, au sel et au temps.</p>
                    </div>
                    <div className="space-y-4">
                        <Heart className="w-8 h-8 text-nerea-pink stroke-1" />
                        <h4 className="text-[11px] uppercase tracking-widest font-bold">Fait avec Amour</h4>
                        <p className="text-sm font-light text-nerea-deep/60 italic leading-relaxed">Nos ateliers familiaux en Italie respectent l'artisanat traditionnel.</p>
                    </div>
                </div>
            </div>
            
            <div className="relative group">
                <div className="aspect-[4/5] overflow-hidden rounded-sm">
                    <img 
                       src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=2070" 
                       alt="Nerea artisan work" 
                       className="w-full h-full object-cover"
                       referrerPolicy="no-referrer"
                    />
                </div>
                <div className="absolute inset-0 bg-nerea-butter/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-48 px-6 text-center bg-nerea-cloud overflow-hidden relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-serif italic text-nerea-deep/5 select-none pointer-events-none whitespace-nowrap">
            La Dolce Vita
         </div>
         <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-5xl md:text-7xl font-serif italic mb-12">Vers une mode <br/> <i className="font-light">régénérative.</i></h2>
            <p className="text-xl md:text-2xl font-light text-nerea-deep/60 leading-relaxed italic mb-16">
                Le chemin est long, mais chaque pas compte. Nous nous engageons à la transparence totale, car vous méritez de connaître l'histoire de ce que vous portez.
            </p>
            <div className="w-20 h-[1px] bg-nerea-olive mx-auto" />
         </div>
      </section>
    </div>
  );
}
