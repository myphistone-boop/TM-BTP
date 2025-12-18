export enum ProjectType {
  NEW_BUILD = 'Maison Neuve',
  RENOVATION = 'Rénovation Complète',
  PHOTOVOLTAIC = 'Photovoltaïque',
  HVAC = 'Climatisation / PAC'
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  link: string;
}

export interface Realization {
  id: string;
  title: string;
  location: string;
  type: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

export interface QuoteFormData {
  projectType: ProjectType | null;
  location: string;
  surface: string;
  budget: string;
  name: string;
  phone: string;
  email: string;
  details: string;
}

export const COMPANY_INFO = {
  name: "TM BTP",
  owner: "Mathieu Touron",
  phone: "+33 6 26 53 84 45",
  phoneClean: "+33626538445",
  email: "tmbtp.contact@gmail.com",
  zone: "Tarbes — Montauban",
  hours: "Lun-Jeu 10h-17h, Ven-Sam 8h-13h"
};