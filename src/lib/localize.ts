import type { LocalizedText, SupportedLanguage } from '../types';

// Centralizes the fallback-to-English pattern used everywhere a
// LocalizedText is displayed. If Arabic content is empty (current
// state) or missing entirely, falls back to English automatically.
export function localize(text: LocalizedText, lang: SupportedLanguage): string {
  return text[lang] || text.en;
}