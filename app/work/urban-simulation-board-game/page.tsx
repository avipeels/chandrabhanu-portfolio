import type { Metadata } from 'next';
import UrbanSimulationBoardGamePage from '../../components/UrbanSimulationBoardGamePage';

export const metadata: Metadata = {
  title: 'Urban Simulation Board Game | Chandra Bhanu',
  description: 'A board game design case study exploring systems thinking, urban development, and user testing.',
};

export default function UrbanSimulationBoardGameRoute() {
  return <UrbanSimulationBoardGamePage />;
}
