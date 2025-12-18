import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import { QuoteWizard } from '../components/QuoteWizard';

export const MaisonNeuve: React.FC = () => {
  return (
    <div className="pt-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-[55vh] sm:h-[70vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 sm:opacity-40">
           <img 
            src="https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Chantier maison neuve" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent sm:via-primary/60 z-10"></div>
        <div className="absolute inset-0 bg-black/30 sm:hidden z-10"></div> {/* Extra overlay for mobile readability */}
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-float" style={{ animationDuration: '10s' }}>
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-accent/20 border border-accent/30 text-accent-light text-[10px] sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6 backdrop-blur-sm">
              <Icons.HardHat className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
              Construction Intégrale
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white mb-4 sm:mb-6 leading-tight">
              Bâtir votre avenir <br/>
              <span className="text-accent">sur des bases solides.</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
              De l'étude de sol à la remise des clés. Une construction maîtrisée par un interlocuteur unique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/devis" 
                className="px-6 py-3.5 sm:px-8 sm:py-4 bg-accent text-primary font-bold rounded-full hover:bg-white transition-all shadow-xl text-center text-sm sm:text-base"
              >
                Commencer mon projet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-24 bg-white dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary dark:text-white font-display font-bold text-3xl md:text-4xl mb-6">Une maîtrise technique complète</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Nous ne sommes pas de simples coordinateurs. Nous sommes des bâtisseurs. TM BTP intervient directement sur les lots critiques pour garantir la structure de votre bien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Icons.Blueprint,
                title: "Terrassement & Fondations",
                desc: "Préparation rigoureuse du terrain et coulages conformes aux études de sol G2."
              },
              {
                icon: Icons.NewBuild,
                title: "Maçonnerie Générale",
                desc: "Élévation brique ou parpaing, chaînages sismiques, planchers béton."
              },
              {
                icon: Icons.Renovation,
                title: "Charpente & Couverture",
                desc: "Toiture traditionnelle ou toit terrasse étanché. Pose de tuiles et zinguerie."
              },
              {
                icon: Icons.Electric,
                title: "Électricité & Plomberie",
                desc: "Réseaux encastrés, tableaux aux normes, appareillage design."
              },
              {
                icon: Icons.HVAC,
                title: "Isolation & Plâtrerie",
                desc: "Conformité RE 2020. Doublage haute performance et cloisons phoniques."
              },
              {
                icon: Icons.Check,
                title: "Finitions Premium",
                desc: "Carrelage grand format, faïence, peinture airless et menuiseries alu."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 hover:border-accent/30 dark:hover:border-accent/30 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-white dark:bg-neutral-700 rounded-xl flex items-center justify-center text-primary dark:text-accent mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="font-display font-bold text-xl text-primary dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-24 bg-primary dark:bg-neutral-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0,0 L100,100 M20,0 L100,80 M40,0 L100,60" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
                Votre maison, étape par étape.
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                La transparence est notre règle d'or. Vous suivez l'avancée du chantier grâce à des points réguliers et un interlocuteur dédié.
              </p>
              
              <div className="space-y-8">
                {[
                  { step: "01", title: "Étude & Devis", text: "Visite terrain, analyse des plans, chiffrage précis." },
                  { step: "02", title: "Gros Œuvre", text: "Fondations, murs, mise hors d'eau et hors d'air." },
                  { step: "03", title: "Second Œuvre", text: "Isolation, réseaux, cloisons. La maison prend vie." },
                  { step: "04", title: "Livraison", text: "Nettoyage complet, vérifications finales et remise des clés." }
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
               <div className="relative rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                   alt="Construction en cours" 
                   className="w-full h-auto"
                 />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="flex items-center text-white">
                      <Icons.Shield className="w-5 h-5 text-accent mr-2" />
                      <span className="font-bold">Garantie Décennale Incluse</span>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center mb-12">
          <h2 className="font-display font-bold text-3xl text-primary dark:text-white mb-6">Prêt à construire ?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Une maison neuve est le projet d'une vie. Confiez-le à des artisans locaux, sérieux et passionnés.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4">
          <QuoteWizard />
        </div>
      </section>
    </div>
  );
};