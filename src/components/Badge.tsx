interface BadgeProps {
  label: string;
  variant: 'category' | 'region';
  color?: string;
}

export default function Badge({ label, variant, color }: BadgeProps) {
  if (variant === 'category') {
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${color}`}>
        {label}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-sand-100 text-sand-700 border border-sand-200">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 21s-7-6.5-7-11a7 7 0 1 1 14 0c0 4.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
      {label}
    </span>
  );
}