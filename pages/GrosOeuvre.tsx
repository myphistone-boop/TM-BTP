import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import { QuoteWizard } from '../components/QuoteWizard';
import { MobileHorizontalScroll } from '../components/MobileHorizontalScroll';

export const GrosOeuvre: React.FC = () => {
  return (
    <div className="pt-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-[45vh] sm:h-[60vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 sm:opacity-40">
           <img 
            src="https://storage.googleapis.com/novelec_assets/Serin_Plomberie/OIP.webp" 
            alt="Salle de bain moderne et plomberie gros oeuvre" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent sm:via-primary/60 z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-float" style={{ animationDuration: '10s' }}>
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-accent/20 border border-accent/30 text-accent-light text-[10px] sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6 backdrop-blur-sm">
              <Icons.HardHat className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
              Rénovation & Installation
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white mb-4 sm:mb-6 leading-tight">
              Création de Salle de Bain <br/>
              <span className="text-accent">& Gros Œuvre Plomberie</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
              De la conception à la réalisation. Salle de bain clé en main, rénovation complète des réseaux, installation de chauffage central.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/devis" 
                className="px-6 py-3.5 sm:px-8 sm:py-4 bg-accent text-primary font-bold rounded-full hover:bg-white transition-all shadow-xl text-center text-sm sm:text-base"
              >
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-12 md:py-16 bg-white dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary dark:text-white font-display font-bold text-3xl md:text-4xl mb-6">Nos prestations gros œuvre</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Pour vos projets de construction ou de rénovation lourde, nous assurons la création et la modification de tous vos réseaux fluides.
            </p>
          </div>

          <MobileHorizontalScroll className="lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:pb-0">
            {[
              {
                icon: Icons.Droplet,
                title: "Salle de Bain Clé en Main",
                desc: "Conception complète : douche à l'italienne, baignoire, meuble vasque, carrelage et faïence."
              },
              {
                icon: Icons.Blueprint,
                title: "Réseaux Neufs",
                desc: "Création complète de réseaux d'alimentation (cuivre, multicouche, PER) et d'évacuation (PVC) pour maison neuve."
              },
              {
                icon: Icons.HVAC,
                title: "Chauffage Central",
                desc: "Installation de chaudière gaz, radiateurs, plancher chauffant hydraulique. Désembouage de circuit."
              },
              {
                icon: Icons.Renovation,
                title: "Rénovation Cuisine",
                desc: "Modification des arrivées et évacuations pour votre nouvelle cuisine. Pose d'évier et raccordement lave-vaisselle."
              },
              {
                icon: Icons.Settings,
                title: "Traitement de l'Eau",
                desc: "Installation d'adoucisseur d'eau pour protéger vos équipements du calcaire. Filtres et osmoseurs."
              },
              {
                icon: Icons.Check,
                title: "PMR & Accessibilité",
                desc: "Aménagement de salle de bain pour personnes à mobilité réduite (douche sécurisée, barres de maintien)."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 hover:border-accent/30 dark:hover:border-accent/30 hover:shadow-lg transition-all group h-full">
                <div className="w-12 h-12 bg-white dark:bg-neutral-700 rounded-xl flex items-center justify-center text-primary dark:text-accent mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="font-display font-bold text-xl text-primary dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </MobileHorizontalScroll>
        </div>
      </section>

      {/* Processus */}
      <section className="py-12 md:py-16 bg-primary dark:bg-neutral-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0,0 L100,100 M20,0 L100,80 M40,0 L100,60" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
                Votre projet, étape par étape.
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Nous vous accompagnons dans la réalisation de vos travaux de plomberie d'envergure avec rigueur et professionnalisme.
              </p>
              
              <div className="space-y-8">
                {[
                  { step: "01", title: "Étude & Devis", text: "Visite technique, conseils personnalisés et devis détaillé gratuit." },
                  { step: "02", title: "Planification", text: "Choix des matériaux et sanitaires, fixation d'une date d'intervention." },
                  { step: "03", title: "Réalisation", text: "Travaux effectués dans les règles de l'art, protection du chantier." },
                  { step: "04", title: "Réception", text: "Vérification du bon fonctionnement, nettoyage et explications." }
                ].map((s, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="font-display font-bold text-3xl text-accent/50">{s.step}</div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">{s.title}</h4>
                      <p className="text-gray-400 text-sm">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2">
               <div className="grid grid-cols-1 gap-6">
                 <div className="relative rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                   <img 
                     src="https://storage.googleapis.com/novelec_assets/Serin_Plomberie/Sol.webp" 
                     alt="Installation plancher chauffant" 
                     className="w-full h-64 object-cover"
                   />
                 </div>
                 <div className="relative rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                   <img 
                     src="https://storage.googleapis.com/novelec_assets/Serin_Plomberie/Chauffage.webp" 
                     alt="Installation chauffage central" 
                     className="w-full h-64 object-cover"
                   />
                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <div className="flex items-center text-white">
                        <Icons.Shield className="w-5 h-5 text-accent mr-2" />
                        <span className="font-bold">Garantie Décennale</span>
                      </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center mb-12">
          <h2 className="font-display font-bold text-3xl text-primary dark:text-white mb-6">Un projet de rénovation ?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Confiez vos travaux de plomberie à un artisan qualifié pour un résultat durable et esthétique.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4">
          <QuoteWizard />
        </div>
      </section>
    </div>
  );
};
