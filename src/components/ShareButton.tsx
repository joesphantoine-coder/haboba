import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { shareContent } from '../lib/share';

interface ShareButtonProps {
  title: string;
  text: string;
}

export default function ShareButton({ title, text }: ShareButtonProps) {
  const { t } = useTranslation();
  const [justCopied, setJustCopied] = useState(false);

  async function handleShare() {
    const result = await shareContent({ title, text, url: window.location.href });
    if (result.method === 'clipboard') {
      setJustCopied(true);
      setTimeout(() => setJustCopied(false), 2000);
    }
  }

  return (
    <div className="relative inline-block">
      <button
        onClick={handleShare}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-sand-300 text-sand-700 hover:bg-sand-100 transition-colors text-sm font-medium"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
        </svg>
        {t('article.share')}
      </button>

      {justCopied && (
        <span className="absolute -top-9 start-0 bg-sand-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap">
          {t('article.linkCopied')}
        </span>
      )}
    </div>
  );
}