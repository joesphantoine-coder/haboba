import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getStoryById, stories } from '../data/stories';
import SEO from '../components/SEO';
import StoryCard from '../components/StoryCard';
import ShareButton from '../components/ShareButton';
import Badge from '../components/Badge';
import { localize } from '../lib/localize';

const categoryColors: Record<string, string> = {
  Desert: 'bg-terracotta-500',
  River: 'bg-nile-600',
  Heritage: 'bg-sand-600',
  Legend: 'bg-sand-800',
};

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ar';
  const story = id ? getStoryById(id) : undefined;

  if (!story) {
    return <Navigate to="/stories" replace />;
  }

  const related = stories
    .filter((s) => s.id !== story.id && s.category === story.category)
    .slice(0, 2);

  const title = localize(story.title, lang);
  const fullText = localize(story.fullText, lang);
  const summary = localize(story.summary, lang);
  const region = localize(story.region, lang);
  const source = localize(story.source, lang);
  const categoryLabel = t(`categories.${story.category}`);

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link to="/stories" className="text-terracotta-600 hover:text-terracotta-700 text-sm font-medium">
        ← {t('article.backToStories')}
      </Link>

      <div className="mt-6 mb-8 rounded-2xl overflow-hidden h-56 sm:h-72">
        <img src={story.image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <Badge label={categoryLabel} variant="category" color={categoryColors[story.category]} />
        <Badge label={region} variant="region" />
        <span className="text-sand-500 text-xs">
          {story.readTime} {t('stories.minRead')}
        </span>
      </div>

      <div className="flex items-start justify-between gap-4 mb-8">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-sand-900 leading-tight">
          {title}
        </h1>
        <div className="hidden sm:block flex-shrink-0 pt-1">
          <ShareButton title={title} text={localize(story.summary, lang)} />
        </div>
      </div>

      {/* Mobile share button — full width, below title */}
      <div className="sm:hidden mb-8">
        <ShareButton title={title} text={localize(story.summary, lang)} />
      </div>

      <div className="prose prose-lg max-w-none text-sand-800 leading-[1.85] space-y-5 text-[17px]">
        {fullText.split('\n\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10 p-5 bg-sand-100 rounded-xl border border-sand-200">
        <p className="text-sm text-sand-600">
          <strong className="text-sand-800">{t('article.source')}: </strong>
          {source}
        </p>
        {story.sourceUrl && (
          <a
            href={story.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terracotta-600 hover:underline text-sm mt-1 inline-block"
          >
            {t('article.viewSource')} →
          </a>
        )}
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="font-serif text-2xl font-semibold text-sand-900 mb-6">
            {t('article.moreIn', { category: categoryLabel })}
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