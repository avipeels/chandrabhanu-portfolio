export interface JourneyEntry {
  year: string;
  detail: string;
}

export const beliefs = [
  'Bridging the physical and digital experiences',
  'Architecture as a foundation for developing intuitive digital experiences',
] as const;

export const disciplines = [
  'Architecture',
  'Game Design',
  'Research',
  'Human-Centred Design',
  'Project Management',
  'Design Education',
  'Visual Designer',
  'UX Designer',
] as const;

export const journey: readonly JourneyEntry[] = [
  { year: '2012', detail: 'Bachelors in Architecture (B.Arch.), CEPT University, Ahmedabad' },
  { year: '2016', detail: 'Exchange program, ETH, Zurich' },
  { year: '2017', detail: 'Teaching Associate, B.Arch. Foundation Studio, CEPT University, Ahmedabad' },
  { year: '2018', detail: 'Junior Architect, Benny Kuriakose and Associates, Chennai' },
  { year: '2019', detail: 'Architect, Sandarbh Design Studio, Bengaluru' },
  { year: '2020', detail: 'Assistant Professor, CMR University School of Architecture, Bengaluru' },
  { year: '2025', detail: 'Google UX Design Professional Certificate' },
] as const;

export const whoAmIImages = [
  { src: '/images/v2/about/who-am-i-01.png', alt: 'Chandra working at a desk', label: 'Architect' },
  { src: '/images/v2/about/who-am-i-02.png', alt: 'Chandra holding a stone outdoors', label: 'Maker' },
  { src: '/images/v2/about/who-am-i-03.png', alt: 'Portrait of Chandra', label: 'Explorer' },
  { src: '/images/v2/about/who-am-i-04.png', alt: 'Chandra outdoors with a companion by the sea', label: 'Mother to a toddler' },
  { src: '/images/v2/about/who-am-i-05.jpg', alt: 'Chandra leaning from an architectural wall', label: 'Quick learner' },
] as const;

export const identityLabels = ['Thinker', 'Mother to a toddler', 'Hardworker', 'Loves Photography', 'Explorer'] as const;

export const inspiration = {
  books: [
    { src: '/images/v2/about/book-02.png', alt: 'A favourite book cover' },
    { src: '/images/v2/about/book-03.png', alt: 'A favourite book cover' },
  ],
  films: [
    { src: '/images/v2/about/film-01.png', alt: 'A favourite film' },
    { src: '/images/v2/about/film-02.png', alt: 'A favourite film' },
    { src: '/images/v2/about/film-03.png', alt: 'A favourite film' },
    { src: '/images/v2/about/film-04.png', alt: 'A favourite film' },
  ],
} as const;
