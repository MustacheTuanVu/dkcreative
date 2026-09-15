export type SpaceKey = 'space-i' | 'space-ii' | 'space-iii' | 'space-iv';

export type Space = {
  key: SpaceKey;
  href: string;
  name: string;
  title: string;
  art: string;
  ariaLabel: string;
  burst?: boolean;
};

export const spaces: Space[] = [
  {
    key: 'space-i',
    href: '/graphic-design',
    name: 'space I',
    title: '2D graphic design',
    art: '/assets/raster-crops/space_i.png',
    ariaLabel: 'Open space I — 2D graphic design',
    burst: true,
  },
  {
    key: 'space-ii',
    href: '/video-motion',
    name: 'space II',
    title: 'video & motion graphic',
    art: '/assets/raster-crops/space_ii.png',
    ariaLabel: 'Open space II — video and motion graphic',
    burst: true,
  },
  {
    key: 'space-iii',
    href: '/photoshoot-direction',
    name: 'space III',
    title: 'photoshoot direction',
    art: '/assets/raster-crops/space_iii.png',
    ariaLabel: 'Open space III — photoshoot direction',
    burst: true,
  },
  {
    key: 'space-iv',
    href: '/logo-brand-identity',
    name: 'space IV',
    title: 'logo & brand identity',
    art: '/assets/raster-crops/space_iv.png',
    ariaLabel: 'Open space IV — logo and brand identity',
  },
];

export const contact = {
  phoneHref: 'tel:+847****2984',
  phoneLabel: '(+84) 708 282 984',
  emailHref: 'mailto:ndkhoa.contact@gmail.com',
  emailLabel: 'ndkhoa.contact@gmail.com',
};
