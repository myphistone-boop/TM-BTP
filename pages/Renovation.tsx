import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { QuoteWizard } from '../components/QuoteWizard';

export const Renovation: React.FC = () => {
  return (
    <div className="pt-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
            src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Rénovation architecturale premium" 
            className="w-full h-full object-cover"
          />
           <div className="absolute inset-0 bg-neutral-900/60 sm:bg-neutral-900/50"></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white mb-4 sm:mb-6 leading-tight">
              Révélez le potentiel <br/>
              <span className="text-accent">de votre habitat</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Rénovation énergétique, redistribution et modernisation. 
              L'ancien transformé avec le confort du neuf.
            </p>
             <Link 
                to="/devis" 
                className="inline-flex items-center px-7 py-3.5 sm:px-8 sm:py-4 bg-white text-primary font-bold rounded-full hover:bg-accent hover:text-white transition-all shadow-xl text-sm sm:text-base"
              >
                Demander un chiffrage
                <Icons.ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
        </div>
      </section>

      {/* Before/After Highlight */}
      <section className="py-24 bg-white dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 dark:bg-white/10 text-primary dark:text-accent text-xs font-bold uppercase tracking-wider mb-4">
                Transformation
              </div>
              <h2 className="text-primary dark:text-white font-display font-bold text-3xl md:text-4xl mb-6">
                Avant / Après : <br/>
                La magie de la rénovation
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                Une rénovation réussie, c'est l'alliance subtile entre le respect de l'existant et l'apport de la modernité.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Icons.Check className="w-5 h-5 text-accent mr-3 mt-1" />
                  <div>
                    <strong className="text-primary dark:text-white block">Valorisation immobilière</strong>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Augmentez la valeur de votre bien grâce aux finitions premium.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Icons.Electric className="w-5 h-5 text-accent mr-3 mt-1" />
                  <div>
                    <strong className="text-primary dark:text-white block">Performance Énergétique</strong>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Isolation, fenêtres, chauffage : réduisez vos factures.</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="shadow-2xl rounded-2xl">
               <BeforeAfterSlider 
                  beforeImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  afterImage="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  label="Rénovation Salon"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl text-primary dark:text-white mb-4">Nos domaines d'intervention</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 hover:border-accent/50 dark:hover:border-accent/50 transition-colors">
              <Icons.Renovation className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-bold text-xl text-primary dark:text-white mb-4">Gros Œuvre & Démolition</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Ouverture de murs porteurs (avec IPN), création de trémies, extensions, surélévations. Nous modifions la structure en toute sécurité.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 hover:border-accent/50 dark:hover:border-accent/50 transition-colors">
              <Icons.HVAC className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-bold text-xl text-primary dark:text-white mb-4">Isolation & Placo</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Isolation par l'intérieur (ITI), combles perdus, création de cloisons distributives, faux-plafonds décoratifs avec spots intégrés.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 hover:border-accent/50 dark:hover:border-accent/50 transition-colors">
              <Icons.NewBuild className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-bold text-xl text-primary dark:text-white mb-4">Sols & Finitions</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Pose de carrelage grand format, parquet massif ou stratifié, peinture finition soignée, faïence salle de bain.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* FAQ / Info */}
       <section className="py-20 bg-primary dark:bg-neutral-900 text-white transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-8">Pourquoi choisir TM BTP pour rénover ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            <div className="bg-white/10 p-6 rounded-xl border border-white/10">
              <h4 className="font-bold text-lg text-accent mb-2">Chantier Propre</h4>
              <p className="text-sm text-gray-300">Nous protégeons l'existant et nettoyons le chantier quotidiennement. Le respect de votre lieu de vie est primordial.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-white/10">
              <h4 className="font-bold text-lg text-accent mb-2">Coordination Fluide</h4>
              <p className="text-sm text-gray-300">Électricien, plombier, carreleur : nous gérons le planning de tous les corps d'état pour éviter les temps morts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl text-primary dark:text-white">Décrivez votre projet de rénovation</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Recevez une estimation et des conseils avisés.</p>
            </div>
          <QuoteWizard />
        </div>
      </section>
    </div>
  );
};