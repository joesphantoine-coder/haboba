import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `px-4 py-2 rounded-full text-sm font-medium transition-colors ${
      isActive(path)
        ? 'bg-sand-600 text-white'
        : 'text-sand-800 hover:bg-sand-100'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-sand-50/90 backdrop-blur-sm border-b border-sand-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🌙</span>
          <span className="font-serif text-2xl font-semibold text-sand-900">
            Haboba
          </span>
        </Link>

        <div className="flex gap-2">
          <Link to="/" className={linkClass('/')}>Home</Link>
          <Link to="/stories" className={linkClass('/stories')}>Stories</Link>
          <Link to="/blogs" className={linkClass('/blogs')}>Blogs</Link>
          <Link to="/about" className={linkClass('/about')}>About</Link>
        </div>
      </div>
    </nav>
  );
}