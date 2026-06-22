import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/stories', label: t('nav.stories') },
    { path: '/blogs' , label: t('blogs.navLabel') },
    { path: '/about', label: t('nav.about') },
  ];

  const isActive = (path: string) => location.pathname === path;

  const desktopLinkClass = (path: string) =>
    `px-4 py-2 rounded-full text-sm font-medium transition-colors ${
      isActive(path) ? 'bg-sand-600 text-white' : 'text-sand-800 hover:bg-sand-100'
    }`;

  const mobileLinkClass = (path: string) =>
    `block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
      isActive(path) ? 'bg-sand-600 text-white' : 'text-sand-800 hover:bg-sand-100'
    }`;

  function handleMobileLinkClick() {
    setMobileOpen(false);
  }

  return (
    <nav className="sticky top-0 z-50 bg-sand-50/90 backdrop-blur-sm border-b border-sand-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link to="/" onClick={handleMobileLinkClick}>
          <Logo variant="navbar" />
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className={desktopLinkClass(link.path)}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <Link to="/donate" className="px-4 py-2 rounded-full text-sm font-medium text-terracotta-600 hover:bg-terracotta-50 transition-colors">
            {t('nav.donate')}
          </Link>
          <Link to="/signin" className="px-5 py-2 rounded-full text-sm font-medium bg-nile-700 text-white hover:bg-nile-800 transition-colors">
            {t('nav.signIn')}
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -me-2 text-sand-800"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-sand-200 bg-sand-50 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={handleMobileLinkClick} className={mobileLinkClass(link.path)}>
              {link.label}
            </Link>
          ))}
          <Link to="/donate" onClick={handleMobileLinkClick} className="block px-4 py-3 rounded-xl text-base font-medium text-terracotta-600">
            {t('nav.donate')}
          </Link>
          <Link to="/signin" onClick={handleMobileLinkClick} className="block px-4 py-3 rounded-xl text-base font-medium bg-nile-700 text-white text-center">
            {t('nav.signIn')}
          </Link>
          <div className="pt-2 flex justify-center">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}