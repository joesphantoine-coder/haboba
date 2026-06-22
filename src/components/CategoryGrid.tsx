import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { stories } from '../data/stories';

const CATEGORY_META = [
  { key: 'Desert', emoji: '🏜️', color: 'bg-terracotta-500' },
  { key: 'River', emoji: '🌊', color: 'bg-nile-600' },
  { key: 'Heritage', emoji: '🏛️', color: 'bg-sand-600' },
  { key: 'Legend', emoji: '🌙', color: 'bg-sand-800' },
] as const;

export default function CategoryGrid() {
  const { t } = useTranslation();

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="font-serif text-3xl font-semibold text-sand-900 mb-8">
        {t('home.categoriesTitle')}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {CATEGORY_META.map(({ key, emoji, color }) => {
          const count = stories.filter((s) => s.category === key).length;
          return (
            <Link
              key={key}
              to="/stories"
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-sand-100 text-center"
            >
              <span className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${color} text-2xl mb-3`}>
                {emoji}
              </span>
              <h3 className="font-serif text-lg font-semibold text-sand-900 group-hover:text-terracotta-600 transition-colors">
                {t(`categories.${key}`)}
              </h3>
              <p className="text-sand-500 text-sm mt-1">{count} {count === 1 ? 'story' : 'stories'}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}