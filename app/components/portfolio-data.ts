export interface Project {
  title: string;
  year?: string;
  image: { src: string; alt: string; width: number; height: number; cropTop: number };
}

export const disciplines = [
  'Architecture', 'Board Game design', 'User-centred Design', 'UX Design', 'Visual Design',
] as const;

export const projects: readonly Project[] = [
  { title: 'Navigation App for Indian Cities', year: '2025', image: { src: '/images/figma-navigation-app.svg', alt: 'Navigation App for Indian Cities project card', width: 330, height: 331, cropTop: 27.296 } },
  { title: 'Movie Ticket Booking App', year: '2025', image: { src: '/images/figma-movie-ticket.svg', alt: 'Movie Ticket Booking App project card', width: 330, height: 357, cropTop: 27.296 } },
  { title: 'Tokyo Anti-Library', year: '2018', image: { src: '/images/figma-tokyo-anti-library.svg', alt: 'Tokyo Anti-Library project card', width: 330, height: 358, cropTop: 27.296 } },
  { title: 'Sankalp School', year: '2018', image: { src: '/images/figma-sankalp-school.svg', alt: 'Sankalp School project card', width: 330, height: 357, cropTop: 27.296 } },
  { title: 'Urban Simulation Board Game', year: '2016', image: { src: '/images/figma-urban-simulation.svg', alt: 'Urban Simulation Board Game project card', width: 330, height: 331, cropTop: 27.296 } },
  { title: 'Drawings', image: { src: '/images/figma-drawings.svg', alt: 'Drawings project card', width: 330, height: 331, cropTop: 0 } },
];
