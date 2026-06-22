interface LogoProps {
  variant?: 'navbar' | 'footer';
  showTagline?: boolean;
}

export default function Logo({ variant = 'navbar', showTagline = false }: LogoProps) {
  const iconSrc =
    variant === 'navbar' ? '/logo/haboba-icon-navbar.png' : '/logo/haboba-icon-footer.png';
  const iconHeight = variant === 'navbar' ? 'h-9'  : 'h-14';
  const textSize = variant === 'navbar' ? 'text-2xl' : 'text-3xl';

  const gradientClass =
    variant === 'navbar'
      ? 'bg-gradient-to-r from-[#010000] via-[#503a09] to-[#bd852c]'
      : 'bg-gradient-to-r from-sand-100 via-sand-200 to-[#e8c97a]';

  return (
    <div className="flex items-center gap-2.5">
      <img src={iconSrc} alt="" aria-hidden="true" className={`${iconHeight} w-auto`} />
      <div className="flex flex-col">
        <span className={`font-serif font-bold ${textSize} leading-none bg-clip-text text-transparent ${gradientClass}`}>
          Haboba
        </span>
        {showTagline && (
          <span className="text-[11px] uppercase tracking-wider text-sand-300 mt-0.5">
            Sudanese Mythology Archive
          </span>
        )}
      </div>
    </div>
  );
}