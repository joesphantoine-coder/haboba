import { useTranslation } from 'react-i18next';

const LANGUAGES: { code: 'en' | 'ar'; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'عربي' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  function handleChange(code: 'en' | 'ar') {
    i18n.changeLanguage(code);
  }

  return (
    <div role="group" aria-label="Language switcher" className="flex items-center rounded-full border border-sand-300 bg-white p-0.5 text-xs font-medium">
      {LANGUAGES.map(({ code, label }) => {
        const isActive = i18n.language === code;
        return (
          <button
            key={code}
            onClick={() => handleChange(code)}
            aria-pressed={isActive}
            className={`px-3 py-1.5 rounded-full transition-colors ${
              isActive ? 'bg-sand-800 text-white' : 'text-sand-600 hover:text-sand-900'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}