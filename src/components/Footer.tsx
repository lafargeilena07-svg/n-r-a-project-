import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-nerea-butter/30 border-t border-nerea-butter pt-24 pb-12 px-6">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
        {/* Brand & Newsletter */}
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-4xl font-serif tracking-widest mb-8 block">
            NÉRÉA
          </Link>
          <div className="max-w-md">
            <h4 className="text-xs uppercase tracking-[0.3em] font-medium mb-6 text-nerea-olive">Un Été à Porter</h4>
            <p className="text-serif italic text-xl mb-8 text-nerea-deep/80 leading-relaxed">
              Inscrivez-vous pour recevoir des nouvelles de la Riviera, nos lancements exclusifs et nos engagements.
            </p>
            <form className="flex border-b border-nerea-deep/20 pb-2">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="bg-transparent border-none outline-none flex-grow text-sm placeholder:text-nerea-deep/40 italic"
              />
              <button type="submit" className="text-[10px] uppercase tracking-widest font-bold hover:text-nerea-olive transition-colors">
                S'abonner ☀️
              </button>
            </form>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex flex-col">
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-nerea-olive">L'Atelier</h4>
          <ul className="space-y-4 text-sm font-medium text-nerea-deep/70">
            <li><Link to="/shop" className="hover:text-nerea-deep transition-colors">La Boutique</Link></li>
            <li><Link to="/collection" className="hover:text-nerea-deep transition-colors">Les Collections</Link></li>
            <li><Link to="/about" className="hover:text-nerea-deep transition-colors">Notre Histoire</Link></li>
            <li><Link to="/sustainability" className="hover:text-nerea-deep transition-colors">Engagements</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div className="flex flex-col">
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-nerea-olive">Aide</h4>
          <ul className="space-y-4 text-sm font-medium text-nerea-deep/70">
            <li><a href="#" className="hover:text-nerea-deep transition-colors">Livraisons & Retours</a></li>
            <li><a href="#" className="hover:text-nerea-deep transition-colors">Guide des Tailles</a></li>
            <li><a href="#" className="hover:text-nerea-deep transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-nerea-deep transition-colors">Mentions Légales</a></li>
          </ul>
        </div>
      </div>
      
      {/* Copyright & Social */}
      <div className="max-w-screen-2xl mx-auto mt-24 pt-8 border-t border-nerea-deep/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <p className="text-[10px] uppercase tracking-widest text-nerea-deep/40">© 2024 NÉRÉA SWIMWEAR. Tous droits réservés.</p>
        <div className="flex space-x-10">
          <a href="#" className="text-[10px] uppercase tracking-widest font-bold hover:text-nerea-olive transition-colors">Instagram</a>
          <a href="#" className="text-[10px] uppercase tracking-widest font-bold hover:text-nerea-olive transition-colors">Pinterest</a>
          <a href="#" className="text-[10px] uppercase tracking-widest font-bold hover:text-nerea-olive transition-colors">Journal</a>
        </div>
      </div>
    </footer>
  );
}
