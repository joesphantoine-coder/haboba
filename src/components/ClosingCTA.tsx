import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ClosingCTA() {
  const { t } = useTranslation();

  return (
    <section className="bg-nile-900 py-16 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl font-semibold text-white mb-4">
          {t('home.closingTitle')}
        </h2>
        <p className="text-sand-200 leading-relaxed mb-8">
          {t('home.closingBody')}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/stories"
            className="bg-terracotta-500 hover:bg-terracotta-600 text-white font-medium px-8 py-3 rounded-full transition-colors"
          >
            {t('home.closingExploreCta')}
          </Link>
          <Link
            to="/donate"
            className="bg-transparent border border-sand-400 text-sand-100 hover:bg-nile-800 font-medium px-8 py-3 rounded-full transition-colors"
          >
            {t('home.closingDonateCta')}
          </Link>
        </div>
      </div>
    </section>
  );
}