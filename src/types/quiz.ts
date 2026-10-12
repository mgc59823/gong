export type StudyType = 'planner' | 'sprinter' | 'scholar' | 'social';

export interface Option {
  id: 'A' | 'B';
  text: string;
  subText?: string;
  scores: Partial<Record<StudyType, number>>;
}

export interface Question {
  id: number;
  category: string;
  question: string;
  emoji: string;
  options: [Option, Option];
}

export interface StudyResult {
  type: StudyType;
  title: string;
  subtitle: string;
  badge: string;
  emoji: string;
  gradient: string;
  accentColor: string;
  textColor: string;
  borderColor: string;
  summary: string;
  traits: string[];
  tips: {
    title: string;
    description: string;
  }[];
  bestPartner: {
    name: string;
    reason: string;
    emoji: string;
  };
  worstPartner: {
    name: string;
    reason: string;
    emoji: string;
  };
  studySpot: string;
  bgmRecommendation: string;
}
