export interface ServiceItem {
  name: string;
  tag: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface ExpertNicheExample {
  id: string;
  nicheLabel: string;
  name: string;
  credential: string;
  specialty: string;
  domain: string;
  tagline: string;
  location: string;
  photoUrl?: string;
  services: ServiceItem[];
  stats: StatItem[];
}

export interface LoteItem {
  id: string;
  name: string;
  badge: string;
  price: string;
  installment: string;
  period: string;
  status: 'active' | 'upcoming' | 'final';
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface DeliverableItem {
  title: string;
  description?: string;
}

export interface PainCard {
  quote: string;
  title: string;
  description: string;
  impactTag: string;
}

