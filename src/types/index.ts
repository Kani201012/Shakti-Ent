export interface ProductItem {
  id: string;
  name: string;
  bengaliName: string;
  tagline: string;
  category: 'plain' | 'brick' | 'industrial' | 'decorative';
  thickness: string;
  standardDimensions: string;
  concreteGrade: string;
  reinforcement: string;
  recommendedUse: string;
  finish: string;
  features: string[];
  popularFor: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  townOrVillage: string;
  wallLengthFeet: number;
  wallHeightFeet: 6 | 7 | 8;
  locationCategory: 'within_birbhum' | 'outside_birbhum';
  securityExtension: 'none' | 'barbed_wire' | 'concertina_coil';
  notes?: string;
}
