import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

export default function Footer() {
  const { t } = useTranslation();

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/stories', label: t('nav.stories') },
    { path: '/blogs' , label: t('blogs.navLabel') },
    { path: '/about', label: t('nav.about') },
    { path: '/donate', label: t('nav.donate') },
  ];

  return (
    <footer className="bg-nile-900 text-sand-100 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo variant="footer" showTagline />
            <p className="text-sand-300 text-sm mt-4 max-w-xs leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sand-400 mb-4">
              {t('footer.navigation')}
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sand-200 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sand-400 mb-4">
              {t('footer.contact')}
            </h3>
            <a href="mailto:gaafar.mahmoud@outlook.com" className="text-sand-200 hover:text-white text-sm transition-colors break-all">
              gaafar.mahmoud@outlook.com
            </a>
          </div>
        </div>

        <div className="border-t border-nile-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-sand-400">
          <p>© {new Date().getFullYear()} Haboba. {t('footer.rights')}</p>
          <p>{t('footer.allCitedNote')}</p>
        </div>
      </div>
    </footer>
  );
}