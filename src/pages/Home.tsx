import { Link } from 'react-router-dom';
import { stories } from '../data/stories';
import StoryCard from '../components/StoryCard';

export default function Home() {
  const featured = stories.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sand-100 via-sand-50 to-nile-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-5xl mb-4">🏜️</span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-sand-900 mb-6 text-balance">
            Stories Carried by the Nile
          </h1>
          <p className="text-lg text-sand-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            Haboba preserves documented Sudanese folklore, mythology, and oral
            heritage — from Nubian legends to desert tales — researched and
            cited from real ethnographic and archival sources.
          </p>
          <Link
            to="/stories"
            className="inline-block bg-terracotta-500 hover:bg-terracotta-600 text-white font-medium px-8 py-3 rounded-full transition-colors"
          >
            Explore the Stories
          </Link>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-3xl font-semibold text-sand-900">
            Featured Tales
          </h2>
          <Link to="/stories" className="text-terracotta-600 hover:text-terracotta-700 font-medium text-sm">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </section>

      {/* Why This Exists */}
      <section className="bg-nile-50 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-semibold text-nile-900 mb-4">
            Why Haboba Exists
          </h2>
          <p className="text-nile-700 leading-relaxed">
            "Haboba" means grandmother in Sudanese Arabic — the traditional
            keeper and teller of stories passed down through generations.
            Much of Sudan's oral heritage survives only in memory, at risk of
            being lost. This project gathers documented, sourced folklore
            into one place — so these stories outlive the people who once
            told them by firelight.
          </p>
        </div>
      </section>
    </div>
  );
}