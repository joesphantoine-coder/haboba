import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { stories } from '../data/stories';
import SEO from '../components/SEO';
import StoryCard from '../components/StoryCard';
import CategoryGrid from '../components/CategoryGrid';
import ClosingCTA from '../components/ClosingCTA';

export default function Home() {
  const { t } = useTranslation();
  const featured = stories.slice(0, 3);

  return (
    <div>
      <SEO
        title="Sudanese Mythology & Folklore Archive"
        description="Documented Sudanese folklore, mythology, and oral heritage — Nubian legends, desert tales, and river myths, researched and sourced."
      />

      <section className="bg-gradient-to-br from-sand-100 via-sand-50 to-nile-50 py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-5xl mb-4">🏜️</span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-sand-900 mb-6">
            {t('home.heroTitle')}
          </h1>
          <p className="text-lg text-sand-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            {t('home.heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/stories"
              className="bg-terracotta-500 hover:bg-terracotta-600 text-white font-medium px-8 py-3 rounded-full transition-colors"
            >
              {t('home.exploreCta')}
            </Link>
            <Link
              to="/donate"
              className="bg-white border border-sand-300 text-sand-800 hover:bg-sand-100 font-medium px-8 py-3 rounded-full transition-colors"
            >
              {t('home.donateCta')}
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-3xl font-semibold text-sand-900">
            {t('home.featuredTitle')}
          </h2>
          <Link to="/stories" className="text-terracotta-600 hover:text-terracotta-700 font-medium text-sm">
            {t('home.viewAll')} →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </section>

      <CategoryGrid />

      <section className="bg-nile-50 py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-semibold text-nile-900 mb-4">
            {t('home.whyTitle')}
          </h2>
          <p className="text-nile-700 leading-relaxed">{t('home.whyBody')}</p>
        </div>
      </section>

      <ClosingCTA />
    </div>
  );
}