import { useTranslation } from 'react-i18next';

interface EmptySearchStateProps {
  searchTerm: string;
  onClear: () => void;
}

export default function EmptySearchState({ searchTerm, onClear }: EmptySearchStateProps) {
  const { t } = useTranslation();

  return (
    <div className="text-center py-16 px-4" role="status">
      <span className="text-5xl mb-4 block" aria-hidden="true">🏺</span>
      <p className="text-sand-700 font-medium mb-1">{t('stories.noResults')}</p>
      {searchTerm && (
        <p className="text-sand-400 text-sm mb-4">"{searchTerm}"</p>
      )}
      <button
        onClick={onClear}
        className="text-terracotta-600 hover:text-terracotta-700 text-sm font-medium underline"
      >
        {t('stories.clearSearch')}
      </button>
    </div>
  );
}