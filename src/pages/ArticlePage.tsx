import { useParams, Link, Navigate } from 'react-router-dom';
import { getStoryById, stories } from '../data/stories';
import StoryCard from '../components/StoryCard';

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const story = id ? getStoryById(id) : undefined;

  if (!story) {
    return <Navigate to="/stories" replace />;
  }

  const related = stories
    .filter((s) => s.id !== story.id && s.category === story.category)
    .slice(0, 2);

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <Link to="/stories" className="text-terracotta-600 hover:text-terracotta-700 text-sm font-medium">
        ← Back to all stories
      </Link>

      <div className="mt-6 mb-8 rounded-2xl overflow-hidden h-72">
        <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
      </div>

      <p className="text-sand-500 text-sm mb-2">
        {story.region} · {story.readTime} min read · {story.category}
      </p>
      <h1 className="font-serif text-4xl font-bold text-sand-900 mb-2">
        {story.title}
      </h1>
      {story.titleArabic && (
        <p className="text-xl text-sand-500 font-serif mb-8" dir="rtl">
          {story.titleArabic}
        </p>
      )}

      <div className="prose prose-lg text-sand-800 leading-relaxed space-y-4">
        {story.fullText.split('\n\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10 p-5 bg-sand-100 rounded-xl border border-sand-200">
        <p className="text-sm text-sand-600">
          <strong className="text-sand-800">Source: </strong>
          {story.source}
        </p>
        {story.sourceUrl && (
          <a
            href={story.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terracotta-600 hover:underline text-sm mt-1 inline-block"
          >
            View original source →
          </a>
        )}
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="font-serif text-2xl font-semibold text-sand-900 mb-6">
            More {story.category} Tales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((r) => (
              <StoryCard key={r.id} story={r} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}