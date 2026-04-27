import { motion } from 'motion/react';
import { Eye, Code, Layout, Smartphone, Search, Share2 } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: Eye, title: "Stratégie UI/UX", desc: "Nous analysons le comportement de vos utilisateurs pour concevoir des parcours fluides et intuitifs." },
    { icon: Code, title: "Développement Web", desc: "Solutions sur mesure avec les dernières technologies (React, Next.js, TypeScript) pour une robustesse totale." },
    { icon: Layout, title: "Identité de Marque", desc: "Création de logos, palettes de couleurs et guides de style qui capturent l'essence de votre marque." },
    { icon: Smartphone, title: "Applications Mobiles", desc: "Expériences natives et hybrides performantes pour iOS et Android." },
    { icon: Search, title: "Optimisation SEO", desc: "Amélioration de votre visibilité sur les moteurs de recherche pour attirer le bon trafic." },
    { icon: Share2, title: "Social Media Design", desc: "Contenus visuels percutants pour vos réseaux sociaux afin d'engager votre communauté." }
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-black italic mb-8">Nos Services.</h1>
            <p className="text-xl text-zinc-500 leading-relaxed">
              Nous offrons une gamme complète de solutions créatives pour aider votre entreprise à briller dans le monde numérique.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white border border-zinc-100 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-zinc-950 text-white flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-zinc-500 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-32 p-12 md:p-20 rounded-[3rem] bg-zinc-950 text-white text-center">
           <h2 className="text-4xl md:text-6xl font-display font-black italic mb-8">Prêt à transformer votre vision ?</h2>
           <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
             Contactez-nous aujourd'hui pour discuter de la manière dont nous pouvons vous aider à atteindre vos objectifs.
           </p>
           <button className="bg-white text-zinc-950 px-10 py-5 rounded-full font-black text-xl hover:bg-zinc-200 transition-all">
             Travaillons ensemble
           </button>
        </div>
      </div>
    </div>
  );
}
