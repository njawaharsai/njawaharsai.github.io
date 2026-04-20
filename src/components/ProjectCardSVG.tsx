import { useCallback, useEffect, useState } from 'react';
import { type CardData } from '../data/projectCards';

interface Props {
  card: CardData;
  title: string;
  bullets: string[];
  tags: string[];
  links?: { github?: string; paper?: string; web?: string };
  onClick?: () => void;
  className?: string;
}

export default function ProjectCardSVG({ card, title, bullets, tags, links, onClick, className = '' }: Props) {
  const hasBullets = bullets.length > 0;
  const [pinned, setPinned] = useState(false);
  /** After unpin, ignore :hover so bullets stay collapsed until pointer leaves the card */
  const [hoverRevealSuppressed, setHoverRevealSuppressed] = useState(false);

  useEffect(() => {
    if (!pinned) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPinned(false);
        setHoverRevealSuppressed(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [pinned]);

  const interactive = hasBullets || !!onClick;

  const handleCardClick = useCallback(
    (e: React.MouseEvent) => {
      if ((e.target as HTMLElement).closest('a')) return;
      if (hasBullets) {
        setPinned(prev => {
          if (prev) {
            setHoverRevealSuppressed(true);
          } else {
            setHoverRevealSuppressed(false);
          }
          return !prev;
        });
      }
      onClick?.();
    },
    [hasBullets, onClick]
  );

  const handleCardKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if ((e.target as HTMLElement).closest('a')) return;
      if (hasBullets && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        setPinned(prev => {
          if (prev) setHoverRevealSuppressed(true);
          else setHoverRevealSuppressed(false);
          return !prev;
        });
        return;
      }
      if (onClick && e.key === 'Enter' && !hasBullets) onClick();
    },
    [hasBullets, onClick]
  );

  return (
    <div
      className={`p-card ${hasBullets ? 'p-card--expandable' : ''} ${pinned ? 'is-pinned' : ''} ${hoverRevealSuppressed ? 'p-card--hover-suppressed' : ''} ${className}`}
      style={{ '--accent': card.accent, '--acc-rgb': card.accRgb, '--bg-rgb': card.bgRgb, background: card.bg } as React.CSSProperties}
      onMouseLeave={() => setHoverRevealSuppressed(false)}
      onClick={interactive ? handleCardClick : onClick}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={interactive ? handleCardKeyDown : undefined}
      aria-expanded={hasBullets ? pinned : undefined}
    >
      <div className="p-card-grid" />

      <div
        className="p-card-svg"
        dangerouslySetInnerHTML={{ __html: card.svg }}
      />

      <div className="p-card-fade" />

      <span className="p-card-num">{card.num}</span>
      <div className="p-c-tl" />
      <div className="p-c-br" />

      {links && (
        <div className="absolute top-2.5 right-2.5 flex gap-1.5 z-10">
          {links.github && (
            <a href={links.github} target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded bg-black/40 backdrop-blur-sm flex items-center justify-center
                         text-white hover:text-white hover:bg-black/70 transition-colors border border-white/10"
              aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
          )}
          {(links.paper || links.web) && (
            <a href={links.paper ?? links.web} target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded bg-black/40 backdrop-blur-sm flex items-center justify-center
                         text-white hover:text-white hover:bg-black/70 transition-colors border border-white/10"
              aria-label="Link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          )}
        </div>
      )}

      <div className="p-card-body">
        <div className="p-card-body-slide">
          <div className="p-card-title" dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br/>') }} />
          {hasBullets && (
            <ul className="p-card-bullets" aria-label="Project highlights">
              {bullets.map(line => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="p-card-tags">
          {tags.slice(0, 5).map(t => (
            <span key={t} className="p-card-tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
