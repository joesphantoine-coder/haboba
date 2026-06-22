import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

export default function SignIn() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No backend yet — intentionally a no-op per project scope.
    console.log('Sign in submitted (UI only, no backend):', { email });
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <SEO title={t('signin.title')} description="Sign in to Haboba to save your favorite Sudanese folklore stories." />
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-sand-200 p-8">
        <h1 className="font-serif text-2xl font-bold text-sand-900 mb-1 text-center">
          {t('signin.title')}
        </h1>
        <p className="text-sand-500 text-sm text-center mb-6">{t('signin.subtitle')}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-sand-700 mb-1">
              {t('signin.emailLabel')}
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('signin.emailPlaceholder')}
              className="w-full px-4 py-2.5 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-terracotta-400 text-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-sand-700 mb-1">
              {t('signin.passwordLabel')}
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t('signin.passwordPlaceholder')}
              className="w-full px-4 py-2.5 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-terracotta-400 text-sm"
            />
            <div className="text-end mt-1.5">
              <Link to="#" className="text-xs text-terracotta-600 hover:underline">
                {t('signin.forgotPassword')}
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-nile-700 hover:bg-nile-800 text-white font-medium py-2.5 rounded-xl transition-colors text-sm"
          >
            {t('signin.signInButton')}
          </button>
        </form>

        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-sand-200" />
          <span className="text-xs text-sand-400 uppercase">{t('signin.orDivider')}</span>
          <div className="flex-1 h-px bg-sand-200" />
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 border border-sand-300 hover:bg-sand-50 text-sand-700 font-medium py-2.5 rounded-xl transition-colors text-sm"
        >
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.91A8.78 8.78 0 0 0 17.64 9.2z" />
            <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.91-2.26c-.81.54-1.85.86-3.05.86-2.34 0-4.33-1.58-5.04-3.71H.95v2.33A9 9 0 0 0 9 18z" />
            <path fill="#FBBC05" d="M3.96 10.71A5.4 5.4 0 0 1 3.68 9c0-.59.1-1.17.28-1.71V4.96H.95A9 9 0 0 0 0 9c0 1.45.35 2.83.95 4.04l3.01-2.33z" />
            <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A9 9 0 0 0 9 0 9 9 0 0 0 .95 4.96l3.01 2.33C4.67 5.16 6.66 3.58 9 3.58z" />
          </svg>
          {t('signin.googleButton')}
        </button>

        <p className="text-center text-sm text-sand-500 mt-6">
          {t('signin.noAccount')}{' '}
          <Link to="#" className="text-terracotta-600 hover:underline font-medium">
            {t('signin.signUp')}
          </Link>
        </p>
      </div>
    </div>
  );
}