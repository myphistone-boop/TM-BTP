import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from './Icons';
import { COMPANY_INFO } from '../types';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <span className="font-display font-bold text-3xl tracking-tight">TM BTP</span>
              <p className="text-accent text-xs tracking-[0.2em] uppercase mt-1">Construction Premium</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Votre partenaire de confiance pour les projets de construction neuve et de rénovation intégrale. Qualité, délais et finitions irréprochables.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Expertises</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/maison-neuve" className="hover:text-accent transition-colors">Maison Neuve</Link></li>
              <li><Link to="/renovation" className="hover:text-accent transition-colors">Rénovation Complète</Link></li>
              <li><Link to="/renovation" className="hover:text-accent transition-colors">VRD & Fondations</Link></li>
              <li><Link to="/photovoltaique" className="hover:text-accent transition-colors">Photovoltaïque</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start">
                <Icons.Location className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span>{COMPANY_INFO.zone}</span>
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
            <h4 className="font-display font-bold text-lg mb-6">Horaires</h4>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="flex items-center text-sm text-gray-300 mb-2">
                <Icons.Clock className="w-4 h-4 text-accent mr-2" />
                <span>Lun - Jeu : 10h - 17h</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Icons.Clock className="w-4 h-4 text-accent mr-2" />
                <span>Ven - Sam : 08h - 13h</span>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-gray-500">
                Pas de dépannage d'urgence. Projets planifiés uniquement.
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} TM BTP {COMPANY_INFO.owner}. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
            <Link to="/confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};