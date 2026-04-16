export type Dimension = 'DOM' | 'TRA' | 'LOY' | 'VIT' | 'MOR' | 'AFF';

export interface DimensionProfile {
  DOM: number; // 权力与掌控 (Dominance & Control)
  TRA: number; // 创伤应激 (Trauma Response)
  LOY: number; // 忠诚底色 (Loyalty & Faith)
  VIT: number; // 生命张力 (Vitality & Flare)
  MOR: number; // 道德边界 (Moral Grayness)
  AFF: number; // 情感表达 (Affection Style)
}

export interface Option {
  text: string;
  scores: Partial<DimensionProfile>;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Character {
  id: string;
  name: string;
  novel: string;
  profile: DimensionProfile;
  bio: string;
  analysis: string;
  quote: string;
}
