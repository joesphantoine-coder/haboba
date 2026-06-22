import { useTranslation } from 'react-i18next';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  const { t } = useTranslation();

  return (
    <div className="relative max-w-md w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t('stories.searchPlaceholder')}
        className="w-full px-5 py-3 rounded-full border border-sand-300 bg-white text-sand-900 placeholder-sand-400 focus:outline-none focus:ring-2 focus:ring-terracotta-400 transition-shadow"
      />
      <span className="absolute end-5 top-1/2 -translate-y-1/2 text-sand-400">
        🔍
      </span>
    </div>
  );
}