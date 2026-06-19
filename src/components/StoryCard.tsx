import { Link } from 'react-router-dom';
import type { Story } from '../types';

const categoryColors: Record<string, string> = {
  Desert: 'bg-terracotta-500',
  River: 'bg-nile-600',
  Heritage: 'bg-sand-600',
  Legend: 'bg-sand-800',
};

export default function StoryCard({ story }: { story: Story }) {
  return (
    <Link
      to={`/article/${story.id}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={story.image}
          alt={story.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span
          className={`absolute top-3 left-3 ${categoryColors[story.category]} text-white text-xs font-medium px-3 py-1 rounded-full`}
        >
          {story.category}
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs text-sand-500 mb-1">{story.region} · {story.readTime} min read</p>
        <h3 className="font-serif text-xl font-semibold text-sand-900 mb-2 group-hover:text-terracotta-600 transition-colors">
          {story.title}
        </h3>
        <p className="text-sand-600 text-sm leading-relaxed line-clamp-3">
          {story.summary}
        </p>
      </div>
    </Link>
  );
}