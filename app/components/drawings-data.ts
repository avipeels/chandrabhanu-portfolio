export interface DrawingsImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const drawingsBanner: DrawingsImage = {
  src: '/images/drawings/drawings_banner.png',
  alt: 'Architectural drawing collage',
  width: 1728,
  height: 449,
};

export const drawingsPlates: readonly DrawingsImage[] = [
  {
    src: '/images/drawings/drawings_1.png',
    alt: 'Wing forms and sectional studies',
    width: 1157,
    height: 818,
  },
  {
    src: '/images/drawings/drawings_2.png',
    alt: 'Exploded wing form studies',
    width: 1123,
    height: 794,
  },
  {
    src: '/images/drawings/drawings_3.png',
    alt: 'Architectural roof, plan and section studies',
    width: 1221,
    height: 910,
  },
] as const;

export const drawingsArchitecturePair: readonly DrawingsImage[] = [
  {
    src: '/images/drawings/drawings_4.png',
    alt: 'Landscape site plan drawing',
    width: 663,
    height: 552,
  },
  {
    src: '/images/drawings/drawings_5.png',
    alt: 'Architectural axonometric drawing',
    width: 539,
    height: 680,
  },
] as const;

export const drawingsStudies: readonly DrawingsImage[] = [
  {
    src: '/images/drawings/drawings_6.png',
    alt: 'Graphite drawing of an elephant',
    width: 864,
    height: 1089,
  },
  {
    src: '/images/drawings/drawings_7.png',
    alt: 'Graphite study of a cube on a sketchbook',
    width: 1082,
    height: 765,
  },
] as const;
