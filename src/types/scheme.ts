export type SocialCategory = 'GEN' | 'OBC' | 'SC' | 'ST' | 'EWS' | 'ALL';
export type Gender = 'male' | 'female' | 'transgender' | 'all';
export type AreaType = 'rural' | 'urban' | 'all';
export type RationCardType = 'none' | 'bpl' | 'aay' | 'phh'; // BPL or Antyodaya Anna Yojana

export type SchemeCategory = 
  | 'agriculture' 
  | 'healthcare' 
  | 'education' 
  | 'social_welfare' 
  | 'housing' 
  | 'women_child' 
  | 'pension' 
  | 'business_employment';

export type Language = 'en' | 'hi' | 'ta';

export interface EligibilityCriteria {
  minAge?: number;
  maxAge?: number;
  genders: Gender[];
  states: string[]; // ["All"] or specific Indian states
  area?: AreaType;
  maxAnnualIncome?: number; // In INR, null if no ceiling
  categories: SocialCategory[]; // SC, ST, OBC, GEN, EWS, ALL
  occupations?: string[]; // ["farmer", "student", "worker", "artisan", "unemployed", "all"]
  requiresDisability?: boolean;
  requiresBPL?: boolean;
  requiresLandOwnership?: boolean;
  requiresStudentStatus?: boolean;
  requiresWidowOrSingleMother?: boolean;
  requiresPregnantOrLactating?: boolean;
}

export interface LocalizedSchemeContent {
  title: string;
  tagline: string;
  shortBenefit: string;
  detailedBenefit: string;
  eligibilityBullets: string[];
  requiredDocuments: string[];
}

export interface Scheme {
  id: string;
  category: SchemeCategory;
  level: 'central' | 'state';
  state?: string; // If state-specific
  ministry: string;
  officialApplyUrl: string;
  sourceCitation: string;
  lastVerifiedDate: string;
  criteria: EligibilityCriteria;
  i18n: {
    en: LocalizedSchemeContent;
    hi: LocalizedSchemeContent;
    ta: LocalizedSchemeContent;
  };
}

export interface UserProfile {
  state: string;
  area: 'rural' | 'urban';
  age: number;
  gender: 'male' | 'female' | 'transgender';
  category: SocialCategory;
  occupation: string;
  annualIncome: number; // In INR
  rationCard: RationCardType;
  hasDisability: boolean;
  isLandOwner: boolean;
  isStudent: boolean;
  isWidowOrSingleMother: boolean;
  isPregnantOrLactating: boolean;
}

export interface MatchEvaluation {
  scheme: Scheme;
  isEligible: boolean;
  isNearMiss: boolean;
  failedCriteria: string[];
  nearMissReason?: string;
}

export interface ConsolidatedDocument {
  documentName: string;
  schemes: { id: string; title: string }[];
  isStandardIdentityDoc: boolean;
}
