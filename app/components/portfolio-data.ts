export interface Project {
  title: string;
  year?: string;
  image: { src: string; alt: string };
}

export const disciplines = [
  'Architecture', 'Board Game design', 'User-centred Design', 'UX Design', 'Visual Design',
] as const;

export const projects: readonly Project[] = [
  { title: 'Movie Ticket Booking App', year: '2025', image: { src: '/images/board-game-29108c.png', alt: 'Movie ticket booking app shown on a phone held in a hand' } },
  { title: 'Tokyo Anti-Library', year: '2018', image: { src: '/images/tokyo-anti-library.png', alt: 'A sunlit room lined with bookshelves' } },
  { title: 'Sankalp School', year: '2018', image: { src: '/images/school-project-2068ee.png', alt: 'Architectural model of a school building' } },
  { title: 'Drawings', image: { src: '/images/drawings-514a7a.png', alt: 'Abstract hand-drawn illustration' } },
];
