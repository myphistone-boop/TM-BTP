import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from './Icons';
import { COMPANY_INFO } from '../types';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6 flex items-center gap-4">
              <img 
                src={COMPANY_INFO.logo} 
                alt={COMPANY_INFO.name} 
                className="h-14 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-display font-bold text-2xl tracking-tight">{COMPANY_INFO.name}</span>
                <p className="text-accent text-[10px] tracking-[0.2em] uppercase mt-1">Plomberie & Chauffage</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Votre artisan plombier de confiance pour tous vos travaux de dépannage, installation sanitaire et chauffage. Intervention rapide et soignée.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Expertises</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/interventions" className="hover:text-accent transition-colors">Dépannage Fuite</Link></li>
              <li><Link to="/interventions" className="hover:text-accent transition-colors">Débouchage</Link></li>
              <li><Link to="/gros-oeuvre" className="hover:text-accent transition-colors">Création Salle de Bain</Link></li>
              <li><Link to="/gros-oeuvre" className="hover:text-accent transition-colors">Chauffage Central</Link></li>
              <li><Link to="/avis" className="hover:text-accent transition-colors">Avis Clients</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start">
                <Icons.Location className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Icons.Phone className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Icons.Mail className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Disponibilité</h4>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="flex items-center text-sm text-gray-300 mb-2">
                <Icons.Clock className="w-4 h-4 text-accent mr-2" />
                <span>7j/7 — 24h/24</span>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-accent font-bold">
                Intervention rapide et efficace garantie.
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-[10px] text-gray-500 gap-6 md:gap-0">
          <div className="space-y-1">
            <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Tous droits réservés.</p>
            <p>{COMPANY_INFO.legalName} — {COMPANY_INFO.status}</p>
            <p>{COMPANY_INFO.address}</p>
            <p>SIRET : {COMPANY_INFO.siret} — TVA : {COMPANY_INFO.tva}</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
            <Link to="/confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};