export type SpaceKey = 'space-i' | 'space-ii' | 'space-iii' | 'space-iv';

export type Space = {
  key: SpaceKey;
  href: string;
  name: string;
  title: string;
  art: string;
  ariaLabel: string;
  navGear?: boolean;
};

export const spaces: Space[] = [
  {
    key: 'space-i',
    href: '/graphic-design',
    name: 'space I',
    title: '2D graphic design',
    art: '/assets/live-canva/common/media/51bb448756098490afc68bd5b0fdca09.png',
    ariaLabel: 'Open space I — 2D graphic design',
    navGear: true,
  },
  {
    key: 'space-ii',
    href: '/video-motion',
    name: 'space II',
    title: 'video & motion graphic',
    art: '/assets/live-canva/common/media/2b5997b91d16f29f8ad09b9d4fffc7ce.png',
    ariaLabel: 'Open space II — video and motion graphic',
    navGear: true,
  },
  {
    key: 'space-iii',
    href: '/photoshoot-direction',
    name: 'space III',
    title: 'photoshoot direction',
    art: '/assets/live-canva/common/media/9f264ce4f15a371f39bdb2cf6fce36ef.png',
    ariaLabel: 'Open space III — photoshoot direction',
    navGear: true,
  },
  {
    key: 'space-iv',
    href: '/logo-brand-identity',
    name: 'space IV',
    title: 'logo & brand identity',
    art: '/assets/live-canva/common/media/1c8109f7193837ec5797c18c0f94eacf.png',
    ariaLabel: 'Open space IV — logo and brand identity',
  },
];

export const contact = {
  phoneHref: 'tel:+847****2984',
  phoneLabel: '(+84) 708 282 984',
  emailHref: 'mailto:ndkhoa.contact@gmail.com',
  emailLabel: 'ndkhoa.contact@gmail.com',
};
