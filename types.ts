export enum ProjectType {
  PLUMBING = 'Plomberie Générale',
  HEATING = 'Chauffage',
  BATHROOM = 'Salle de Bain',
  RENOVATION = 'Rénovation'
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
  name: "SERIN Plomberie",
  owner: "M. Serin",
  phone: "06 14 76 62 36",
  phoneClean: "0614766236",
  email: "contact@serin-plomberie.fr",
  zone: "Hérault (34) — Montpellier & alentours",
  hours: "24h/24 & 7j/7",
  logo: "https://storage.googleapis.com/novelec_assets/Serin_Plomberie/Logopng.png",
  siret: "928 542 943 00024",
  tva: "FR10928542943",
  address: "13 RUE FRANCOIS MIREUR, 34070 MONTPELLIER",
  legalName: "SERIN MORGAN",
  status: "Entrepreneur individuel (Micro-entreprise)"
};