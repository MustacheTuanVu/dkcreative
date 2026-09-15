import { type SpaceKey } from '../lib/site-data';
import { ExhibitionTitle } from './ExhibitionTitle';
import { SpaceNavigation } from './SpaceNavigation';

export function ExhibitionHeader({ active }: { active?: SpaceKey }) {
  return (
    <header className="header-band">
      <ExhibitionTitle />
      <p className="intro">
        <span>Welcome to the exhibition of Khoa&apos;s graphic works and creative vision.</span>
        <span className="update">* Established since 2021 , last update in 2026 *</span>
      </p>
      <SpaceNavigation active={active} />
    </header>
  );
}
