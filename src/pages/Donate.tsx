import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const REASONS = [
  { key: 'reason1', emoji: '📚' },
  { key: 'reason2', emoji: '🌍' },
  { key: 'reason3', emoji: '🗺️' },
] as const;

export default function Donate() {
  const { t } = useTranslation();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <SEO title={t('donate.title')} description={t('donate.subtitle')} />
      <div className="text-center mb-12">
        <span className="inline-block text-4xl mb-3">🌙</span>
        <h1 className="font-serif text-4xl font-bold text-sand-900 mb-2">
          {t('donate.title')}
        </h1>
        <p className="text-sand-600">{t('donate.subtitle')}</p>
      </div>

      <div className="bg-sand-100 rounded-2xl border border-sand-200 p-6 mb-10">
        <h2 className="font-serif text-xl font-semibold text-sand-900 mb-2">
          {t('donate.missionTitle')}
        </h2>
        <p className="text-sand-700 leading-relaxed text-sm">{t('donate.missionBody')}</p>
      </div>

      <h2 className="font-serif text-2xl font-semibold text-sand-900 mb-6 text-center">
        {t('donate.whyTitle')}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {REASONS.map(({ key, emoji }) => (
          <div key={key} className="bg-white rounded-2xl border border-sand-200 p-5 text-center">
            <span className="text-3xl">{emoji}</span>
            <h3 className="font-serif font-semibold text-sand-900 mt-2 mb-1">
              {t(`donate.${key}Title`)}
            </h3>
            <p className="text-sand-600 text-sm leading-relaxed">{t(`donate.${key}Body`)}</p>
          </div>
        ))}
      </div>

      <div className="bg-nile-50 border border-nile-100 rounded-2xl p-6 mb-10 text-center">
        <h2 className="font-serif text-lg font-semibold text-nile-900 mb-2">
          {t('donate.futureTitle')}
        </h2>
        <p className="text-nile-700 text-sm leading-relaxed max-w-md mx-auto">
          {t('donate.futureBody')}
        </p>
      </div>

      <div className="bg-terracotta-500 rounded-2xl p-8 text-center">
        <h2 className="font-serif text-xl font-semibold text-white mb-2">
          {t('donate.ctaTitle')}
        </h2>
        <p className="text-terracotta-50 text-sm mb-5 max-w-sm mx-auto">{t('donate.ctaBody')}</p>
        <a
          href="mailto:gaafar.mahmoud@outlook.com"
          className="inline-block bg-white text-terracotta-600 font-medium px-6 py-2.5 rounded-full hover:bg-sand-50 transition-colors text-sm"
        >
          {t('donate.ctaButton')}
        </a>
      </div>
    </div>
  );
}