import type { Metadata } from 'next';
import TokyoAntiLibraryPage from '../../components/TokyoAntiLibraryPage';

export const metadata: Metadata = {
  title: 'Tokyo Anti-Library | Chandra Bhanu',
  description: 'A Tokyo Anti-Library architecture and app design case study by Chandra Bhanu.',
};

export default function TokyoAntiLibraryRoute() {
  return <TokyoAntiLibraryPage />;
}
