export interface LocalizedText {
  en: string;
  ar: string;
}

export type StoryCategory = 'Desert' | 'River' | 'Heritage' | 'Legend';

export interface Story {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
  fullText: LocalizedText;
  category: StoryCategory;
  region: LocalizedText;
  source: LocalizedText;
  sourceUrl?: string;
  readTime: number;
  image: string;
}

export type SupportedLanguage = 'en' | 'ar';