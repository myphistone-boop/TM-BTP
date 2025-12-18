import React, { useState } from 'react';
import { Icons } from './Icons';
import { ProjectType, QuoteFormData } from '../types';

export const QuoteWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>({
    projectType: null,
    location: '',
    surface: '',
    budget: '',
    name: '',
    phone: '',
    email: '',
    details: ''
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const updateField = (field: keyof QuoteFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const projectTypes = [
    { type: ProjectType.NEW_BUILD, icon: Icons.NewBuild, desc: "Construction neuve clé en main" },
    { type: ProjectType.RENOVATION, icon: Icons.Renovation, desc: "Rénovation intérieure/extérieure" },
    { type: ProjectType.PHOTOVOLTAIC, icon: Icons.Electric, desc: "Installation solaire" },
    { type: ProjectType.HVAC, icon: Icons.HVAC, desc: "Pompe à chaleur / Clim" },
  ];

  const generateMessage = () => {
    return `Bonjour TM BTP, je souhaite un devis pour :
- Projet: ${formData.projectType}
- Lieu: ${formData.location}
- Surface: ${formData.surface}
- Budget: ${formData.budget}
- Nom: ${formData.name}
- Détails: ${formData.details}`;
  };

  const whatsappLink = `https://wa.me/33626538445?text=${encodeURIComponent(generateMessage())}`;
  const mailtoLink = `mailto:tmbtp.contact@gmail.com?subject=Demande de devis - ${formData.name}&body=${encodeURIComponent(generateMessage())}`;

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-gray-100 dark:border-neutral-800 overflow-hidden max-w-4xl mx-auto transition-colors duration-300">
      {/* Progress Bar */}
      <div className="bg-gray-50 dark:bg-neutral-950 px-8 py-4 border-b border-gray-100 dark:border-neutral-800 flex justify-between items-center">
        <div className="flex space-x-2">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className={`h-2 w-12 rounded-full transition-all ${step >= i ? 'bg-accent' : 'bg-gray-200 dark:bg-gray-700'}`} />
          ))}
        </div>
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Étape {step} / 4</span>
      </div>

      <div className="p-8 md:p-12 min-h-[400px] flex flex-col">
        {step === 1 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-display font-bold text-primary dark:text-white mb-2">Quel est votre type de projet ?</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">Sélectionnez la catégorie principale.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectTypes.map((pt) => (
                <button
                  key={pt.type}
                  onClick={() => { updateField('projectType', pt.type); handleNext(); }}
                  className={`p-6 rounded-xl border-2 text-left transition-all hover:shadow-lg flex items-start ${
                    formData.projectType === pt.type 
                      ? 'border-accent bg-accent/5 dark:bg-accent/10' 
                      : 'border-gray-100 dark:border-neutral-800 hover:border-accent/50 dark:hover:border-accent/50'
                  }`}
                >
                  <div className={`p-3 rounded-full mr-4 ${formData.projectType === pt.type ? 'bg-accent text-white' : 'bg-gray-100 dark:bg-neutral-800 text-gray-500 dark:text-gray-400'}`}>
                    <pt.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary dark:text-white">{pt.type}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{pt.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-display font-bold text-primary dark:text-white mb-6">Détails du chantier</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Ville / Code Postal</label>
                <input 
                  type="text" 
                  className="w-full p-4 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-primary dark:text-white rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-colors"
                  placeholder="ex: Tarbes, 65000"
                  value={formData.location}
                  onChange={(e) => updateField('location', e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Surface estimée (m²)</label>
                  <input 
                    type="text" 
                    className="w-full p-4 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-primary dark:text-white rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-colors"
                    placeholder="ex: 120"
                    value={formData.surface}
                    onChange={(e) => updateField('surface', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Budget envisagé</label>
                  <select 
                    className="w-full p-4 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-primary dark:text-white rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-colors"
                    value={formData.budget}
                    onChange={(e) => updateField('budget', e.target.value)}
                  >
                    <option value="">Sélectionner une fourchette</option>
                    <option value="< 50k">Moins de 50k€</option>
                    <option value="50k-100k">50k€ - 100k€</option>
                    <option value="100k-200k">100k€ - 200k€</option>
                    <option value="> 200k">Plus de 200k€</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end space-x-4">
              <button onClick={handleBack} className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium hover:text-primary dark:hover:text-white">Retour</button>
              <button 
                onClick={handleNext} 
                disabled={!formData.location}
                className="px-8 py-3 bg-primary dark:bg-accent text-white dark:text-primary rounded-full font-bold hover:bg-secondary dark:hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Suivant
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-display font-bold text-primary dark:text-white mb-6">Vos coordonnées</h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nom complet</label>
                <input 
                  type="text" 
                  className="w-full p-4 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-primary dark:text-white rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-colors"
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Téléphone</label>
                  <input 
                    type="tel" 
                    className="w-full p-4 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-primary dark:text-white rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-colors"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-4 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-primary dark:text-white rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-colors"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message (facultatif)</label>
                <textarea 
                  className="w-full p-4 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-primary dark:text-white rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none h-32 resize-none transition-colors"
                  placeholder="Précisions supplémentaires..."
                  value={formData.details}
                  onChange={(e) => updateField('details', e.target.value)}
                />
              </div>
            </div>
            <div className="mt-8 flex justify-end space-x-4">
              <button onClick={handleBack} className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium hover:text-primary dark:hover:text-white">Retour</button>
              <button 
                onClick={handleNext}
                disabled={!formData.name || !formData.phone}
                className="px-8 py-3 bg-primary dark:bg-accent text-white dark:text-primary rounded-full font-bold hover:bg-secondary dark:hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Voir le résumé
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-fade-in text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icons.Check className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-display font-bold text-primary dark:text-white mb-2">Tout est prêt !</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
              Choisissez votre méthode préférée pour nous envoyer votre demande. Nous vous répondrons sous 24h ouvrées.
            </p>

            <div className="bg-gray-50 dark:bg-neutral-950 p-6 rounded-xl text-left mb-8 border border-gray-100 dark:border-neutral-800 max-w-lg mx-auto">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Résumé :</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li><span className="font-medium">Type:</span> {formData.projectType}</li>
                <li><span className="font-medium">Lieu:</span> {formData.location}</li>
                <li><span className="font-medium">Client:</span> {formData.name}</li>
              </ul>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href={mailtoLink}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary dark:bg-neutral-800 text-white dark:text-white rounded-xl font-bold hover:bg-secondary dark:hover:bg-neutral-700 transition-all shadow-lg hover:shadow-xl"
              >
                <Icons.Mail className="mr-2 w-5 h-5" />
                Envoyer par Email
              </a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-xl"
              >
                <Icons.Mobile className="mr-2 w-5 h-5" />
                Via WhatsApp
              </a>
            </div>
            <p className="mt-6 text-xs text-gray-400">
              En cliquant, vous ouvrez votre application de messagerie avec le résumé pré-rempli.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};