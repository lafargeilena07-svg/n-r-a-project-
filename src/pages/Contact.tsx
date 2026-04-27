import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-black italic mb-8">Parlons de <br/>votre projet.</h1>
              <p className="text-xl text-zinc-500 leading-relaxed mb-12">
                Vous avez une idée ? Nous avons l'expertise pour lui donner vie. Contactez-nous pour une consultation gratuite.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-zinc-900" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 uppercase font-semibold tracking-wider">Email</p>
                    <p className="text-lg font-medium">hello@lumina.studio</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-zinc-900" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 uppercase font-semibold tracking-wider">Téléphone</p>
                    <p className="text-lg font-medium">+33 1 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-zinc-900" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 uppercase font-semibold tracking-wider">Studio</p>
                    <p className="text-lg font-medium">123 Rue de la Création, 75001 Paris</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-zinc-200/50 border border-zinc-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Prénom</label>
                  <input 
                    type="text" 
                    placeholder="Jean"
                    className="w-full px-5 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Nom</label>
                  <input 
                    type="text" 
                    placeholder="Dupont"
                    className="w-full px-5 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="jean@exemple.com"
                  className="w-full px-5 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Sujet</label>
                <select className="w-full px-5 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all appearance-none cursor-pointer">
                  <option>Nouveau projet web</option>
                  <option>Branding & Design</option>
                  <option>Autre demande</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Dites-nous en plus sur votre projet..."
                  className="w-full px-5 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all"
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full bg-zinc-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-zinc-800 transition-all flex items-center justify-center group"
              >
                Envoyer le message
                <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
