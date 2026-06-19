import { useState, useMemo } from 'react';
import { stories } from '../data/stories';
import StoryCard from '../components/StoryCard';
import SearchBar from '../components/SearchBar';

const categories = ['All', 'Desert', 'River', 'Heritage', 'Legend'];

export default function Stories() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredStories = useMemo(() => {
    let result = stories;

    if (activeCategory !== 'All') {
      result = result.filter((s) => s.category === activeCategory);
    }

    if (search.trim() !== '') {
      const query = search.toLowerCase();
      result = result.filter(
        (s) =>
          s.title.toLowerCase().includes(query) ||
          s.summary.toLowerCase().includes(query) ||
          s.region.toLowerCase().includes(query)
      );
    }

    return result;
  }, [search, activeCategory]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="font-serif text-4xl font-bold text-sand-900 mb-2">
        All Stories
      </h1>
      <p className="text-sand-600 mb-8">
        {stories.length} documented tales from across Sudan
      </p>

      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <SearchBar value={search} onChange={setSearch} />
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-sand-800 text-white'
                  : 'bg-white text-sand-700 hover:bg-sand-100 border border-sand-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredStories.length === 0 ? (
        <p className="text-sand-500 text-center py-16">
          No stories match your search. Try another term.
        </p>
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