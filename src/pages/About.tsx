import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <SEO
        title={t('about.title')}
        description="Learn about Haboba's mission to preserve Sudanese folklore and oral heritage."
      />
      <h1 className="font-serif text-4xl font-bold text-sand-900 mb-6">
        {t('about.title')}
      </h1>

      <div className="space-y-5 text-sand-700 leading-relaxed">
        <p dangerouslySetInnerHTML={{ __html: t('about.p1') }} />
        <p>{t('about.p2')}</p>
        <p>{t('about.p3')}</p>
        <p>{t('about.p4')}</p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="p-5 bg-sand-100 rounded-2xl border border-sand-200">
          <h2 className="font-serif text-lg font-semibold text-sand-900 mb-2">
            {t('about.missionTitle')}
          </h2>
          <p className="text-sand-700 text-sm leading-relaxed">{t('about.missionBody')}</p>
        </div>
        <div className="p-5 bg-sand-100 rounded-2xl border border-sand-200">
          <h2 className="font-serif text-lg font-semibold text-sand-900 mb-2">
            {t('about.whyMattersTitle')}
          </h2>
          <p className="text-sand-700 text-sm leading-relaxed">{t('about.whyMattersBody')}</p>
        </div>
        <div className="p-5 bg-nile-50 rounded-2xl border border-nile-100">
          <h2 className="font-serif text-lg font-semibold text-nile-900 mb-2">
            {t('about.visionTitle')}
          </h2>
          <p className="text-nile-700 text-sm leading-relaxed">{t('about.visionBody')}</p>
        </div>
        <div className="p-5 bg-nile-50 rounded-2xl border border-nile-100">
          <h2 className="font-serif text-lg font-semibold text-nile-900 mb-2">
            {t('about.futureTitle')}
          </h2>
          <p className="text-nile-700 text-sm leading-relaxed">{t('about.futureBody')}</p>
        </div>
      </div>

      <div className="mt-10 p-6 bg-sand-100 rounded-2xl border border-sand-200">
        <h2 className="font-serif text-xl font-semibold text-sand-900 mb-2">
          {t('about.builtByTitle')}
        </h2>
        <p className="text-sand-700">{t('about.builtByBody')}</p>
      </div>
    </div>
  );
}