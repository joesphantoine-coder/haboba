export interface Story {
  id: string;
  title: string;
  titleArabic?: string;
  category: 'Desert' | 'River' | 'Heritage' | 'Legend';
  region: string;
  summary: string;
  fullText: string;
  source: string;
  sourceUrl?: string;
  readTime: number;
  image: string;
}