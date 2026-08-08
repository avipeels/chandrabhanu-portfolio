export interface MovieCaseStudyImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const image = (number: number, width: number, height: number, alt: string): MovieCaseStudyImage => ({
  src: `/images/movieapp/movie_app_${number}.png`,
  alt,
  width,
  height,
});

export const movieTicketImages = {
  hero: image(1, 1728, 449, 'Movie ticket booking app screens arranged on a cinematic purple background'),
  problem: image(2, 1188, 143, 'Three user problems identified for the movie ticket booking experience'),
  goals: image(3, 1188, 305, 'Four goals for discovering, choosing, booking, and sharing movies'),
  personas: image(4, 1340, 755, 'Four movie-goer user personas with goals and frustrations'),
  userFlow: image(5, 1244, 593, 'Movie ticket booking user flow diagram'),
  informationArchitecture: image(6, 1220, 877, 'Movie ticket booking information architecture diagram'),
  ideation: image(7, 1457, 436, 'Crazy eight ideation sketches for the movie booking app'),
  wireframes: image(8, 1476, 545, 'Digital wireframes for movie browsing, details, seats, and payment'),
  prototype: image(9, 1386, 618, 'Low fidelity movie booking prototype flow'),
  visualDesign: image(10, 1326, 194, 'Movie ticket booking visual design color exploration'),
  designSystem: image(11, 1326, 339, 'Movie ticket booking visual design system and accessibility review'),
  mockups: image(12, 1421, 1143, 'Final movie ticket booking app mockups'),
} as const;
