import type { Metadata } from 'next';
import UrbanSimulationBoardGamePage from '../../components/UrbanSimulationBoardGamePage';
import { createPageMetadata } from '../../seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Urban Simulation Board Game | Chandra Bhanu',
  description: 'A board game design case study exploring systems thinking, urban development, and user testing.',
  path: '/work/urban-simulation-board-game',
  image: '/images/figma-urban-source.png',
});

export default function UrbanSimulationBoardGameRoute() {
  return <UrbanSimulationBoardGamePage />;
}
