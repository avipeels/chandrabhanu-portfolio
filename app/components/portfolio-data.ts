export interface Project {
  title: string;
  year?: string;
  href?: string;
  image: { src: string; alt: string };
}

export const disciplines = [
  'Architecture', 'Board Game design', 'User-centred Design', 'UX Design', 'Visual Design',
] as const;

export const projects: readonly Project[] = [
  { title: 'Navigation App for Indian Cities', year: '2026', href: '/work/navigation-app-for-indian-cities', image: { src: '/images/figma-navigation-source.png', alt: 'Navigation App for Indian Cities project card' } },
  { title: 'Movie Ticket Booking App', year: '2025', href: '/work/movie-ticket-booking-app', image: { src: '/images/board-game-29108c.png', alt: 'Movie Ticket Booking App project card' } },
  { title: 'Tokyo Anti-Library', year: '2018', href: '/work/tokyo-anti-library', image: { src: '/images/tokyo-anti-library.png', alt: 'Tokyo Anti-Library project card' } },
  { title: 'Sankalp School', year: '2018', href: '/work/sankalp-school', image: { src: '/images/school-project-2068ee.png', alt: 'Sankalp School project card' } },
  { title: 'Urban Simulation Board Game', year: '2016', image: { src: '/images/figma-urban-source.png', alt: 'Urban Simulation Board Game project card' } },
  { title: 'Drawings', href: '/work/drawings', image: { src: '/images/drawings-514a7a.png', alt: 'Drawings project card' } },
];
