import Link from 'next/link';
import { spaces, type SpaceKey } from '../lib/site-data';

export function SpaceNavigation({ active }: { active?: SpaceKey }) {
  return (
    <nav aria-label="Creative spaces">
      {spaces.map((space) => {
        const isCurrent = active === space.key;
        return (
          <Link
            id={space.key}
            className={`space-card ${space.key}${isCurrent ? ' current' : ''} interactive-link`}
            href={space.href}
            aria-current={isCurrent ? 'page' : undefined}
            aria-label={space.ariaLabel}
            key={space.key}
          >
            <img className="space-art" src={space.art} alt="" />
            <span className="space-copy">
              <span className="space-name">{space.name}</span>
              <span className="space-title">{space.title}</span>
              <span className="space-status">{isCurrent ? 'you are here !' : 'now on view'}</span>
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
