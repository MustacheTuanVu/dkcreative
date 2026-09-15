import { type CSSProperties, type ReactNode } from 'react';
import { type SpaceKey } from '../lib/site-data';
import { ExhibitionHeader } from './ExhibitionHeader';
import { ResponsiveArtboard } from './ResponsiveArtboard';
import { CategoryFooter } from './SiteFooter';

type CategoryPageProps = {
  pageHeight: number;
  label: string;
  active: SpaceKey;
  children: ReactNode;
};

export function CategoryPage({ pageHeight, label, active, children }: CategoryPageProps) {
  return (
    <ResponsiveArtboard>
      <main
        id="top"
        className="artboard"
        style={{ '--page-height': `${pageHeight}px` } as CSSProperties}
        aria-label={label}
      >
        <ExhibitionHeader active={active} />
        {children}
        <CategoryFooter />
      </main>
    </ResponsiveArtboard>
  );
}
