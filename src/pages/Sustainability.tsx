import { motion } from 'motion/react';
import { RefreshCw, Leaf, Globe, Droplets, ShieldCheck, Heart } from 'lucide-react';

export default function Sustainability() {
  return (
    <div className="pt-32 film-grain">
      {/* Header */}
      <section className="px-6 md:px-12 text-center max-w-screen-xl mx-auto mb-32">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-nerea-olive mb-6 block">Le Manifeste Conscien</span>
          <h1 className="text-6xl md:text-8xl font-serif italic mb-12">Préserver l'Océan, <br/> <i className="font-light">Sublimer la Femme.</i></h1>
          <p className="text-xl md:text-2xl font-serif italic text-nerea-deep/60 max-w-2xl mx-auto leading-relaxed">
            "Nous ne créons pas seulement des maillots de bain, nous tissons une nouvelle relation avec notre environnement."
          </p>
        </motion.div>
      </section>

      {/* Materials */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
                <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-tight">ECONYL® : <br/> La beauté du recyclage.</h2>
                <div className="space-y-8 text-nerea-deep/70 italic text-xl leading-relaxed">
                    <p>Chaque pièce NÉRÉA est confectionnée à partir d'ECONYL®, un nylon 100% régénéré issu de déchets plastiques récupérés dans les océans et les décharges.</p>
                    <p>Ce processus permet de réduire l'impact de la production de nylon de 90%, tout en offrant une qualité supérieure, résistante et soyeuse.</p>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-16 pb-12 border-b border-nerea-butter">
                    <div className="space-y-4">
                        <Droplets className="w-8 h-8 text-nerea-blue stroke-1" />
                        <h4 className="text-[10px] uppercase tracking-widest font-bold">Zéro Déchet Océanique</h4>
                    </div>
                    <div className="space-y-4">
                        <RefreshCw className="w-8 h-8 text-nerea-olive stroke-1" />
                        <h4 className="text-[10px] uppercase tracking-widest font-bold">Processus Circulaire</h4>
                    </div>
                </div>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/5] overflow-hidden rounded-sm relative group">
                <img 
                    src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=2070" 
                    alt="Sustainable material" 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border-[20px] border-white/20 m-8" />
            </div>
        </div>
      </section>

      {/* Circular Model */}
      <section className="py-32 px-6 md:px-12 bg-nerea-olive/10">
        <div className="max-w-screen-xl mx-auto text-center mb-24">
            <h2 className="text-5xl font-serif mb-8">Le Modèle Circulaire NÉRÉA</h2>
            <p className="text-nerea-deep/50 max-w-xl mx-auto italic font-serif text-lg">Comment nous fermons la boucle pour une mode régénérative.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-screen-xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-nerea-olive shadow-sm">
                    <Heart className="w-10 h-10 stroke-1" />
                </div>
                <h3 className="text-xl font-serif italic">1. Aimé & Porté</h3>
                <p className="text-sm font-light text-nerea-deep/70 italic">Vous portez votre pièce NÉRÉA au fil des étés, sculptant vos souvenirs au soleil.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-nerea-olive shadow-sm">
                    <RefreshCw className="w-10 h-10 stroke-1" />
                </div>
                <h3 className="text-xl font-serif italic">2. Retour Conscien</h3>
                <p className="text-sm font-light text-nerea-deep/70 italic">Lorsqu'après des années elle arrive en fin de vie, renvoyez-la nous gratuitement.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-nerea-olive shadow-sm">
                    <Globe className="w-10 h-10 stroke-1" />
                </div>
                <h3 className="text-xl font-serif italic">3. Renaissance</h3>
                <p className="text-sm font-light text-nerea-deep/70 italic">En échange, recevez un crédit de 30% sur votre prochaine pièce. Nous recyclons l'ancienne en nouvelles fibres.</p>
            </div>
        </div>
      </section>

      {/* Impact Goals */}
      <section className="py-48 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-nerea-butter/10 rounded-full blur-[120px] -z-10" />
        <div className="max-w-4xl mx-auto text-center">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-nerea-olive mb-12 block">Nos Objectifs 2030</span>
            <div className="space-y-16">
                <div className="group">
                    <h2 className="text-4xl md:text-6xl font-serif italic transition-all group-hover:scale-105">Production 100% Circulaire</h2>
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-30 mt-4">En cours d'implémentation</p>
                </div>
                <div className="group">
                    <h2 className="text-4xl md:text-6xl font-serif italic transition-all group-hover:scale-105">Empreinte Carbone Négative</h2>
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-30 mt-4">Prévu pour 2026</p>
                </div>
                <div className="group">
                    <h2 className="text-4xl md:text-6xl font-serif italic transition-all group-hover:scale-105">Restauration des Herbiers de Posidonie</h2>
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-30 mt-4">En partenariat avec WWF</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
