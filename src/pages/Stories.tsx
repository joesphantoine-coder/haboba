import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { stories } from '../data/stories';
import SEO from '../components/SEO';
import StoryCard from '../components/StoryCard';
import SearchBar from '../components/SearchBar';
import EmptySearchState from '../components/EmptySearchState';
import { localize } from '../lib/localize';

const categories = ['All', 'Desert', 'River', 'Heritage', 'Legend'] as const;

export default function Stories() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ar';
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredStories = useMemo(() => {
    let result = stories;

    if (activeCategory !== 'All') {
      result = result.filter((s) => s.category === activeCategory);
    }

    if (search.trim() !== '') {
      const query = search.toLowerCase();
      result = result.filter((s) => {
        const title = localize(s.title, lang).toLowerCase();
        const summary = localize(s.summary, lang).toLowerCase();
        const region = localize(s.region, lang).toLowerCase();
        return title.includes(query) || summary.includes(query) || region.includes(query);
      });
    }

    return result;
  }, [search, activeCategory, lang]);

  function clearFilters() {
    setSearch('');
    setActiveCategory('All');
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <SEO
        title={t('stories.pageTitle')}
        description="Browse documented Sudanese folklore by category — Desert, River, Heritage, and Legend."
      />
      <h1 className="font-serif text-4xl font-bold text-sand-900 mb-2">
        {t('stories.pageTitle')}
      </h1>
      <p className="text-sand-600 mb-8">
        {stories.length} {t('stories.pageSubtitle')}
      </p>

      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <SearchBar value={search} onChange={setSearch} />
        <div
          className="flex gap-2 flex-wrap"
          role="group"
          aria-label="Filter stories by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-sand-800 text-white'
                  : 'bg-white text-sand-700 hover:bg-sand-100 border border-sand-200'
              }`}
            >
              {cat === 'All' ? t('categories.all') : t(`categories.${cat}`)}
            </button>
          ))}
        </div>
      </div>

      {filteredStories.length === 0 ? (
        <EmptySearchState searchTerm={search} onClear={clearFilters} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      )}
    </div>
  );
}