import type { Metadata } from 'next';
import TokyoAntiLibraryPage from '../../components/TokyoAntiLibraryPage';
import { createPageMetadata } from '../../seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Tokyo Anti-Library | Chandra Bhanu',
  description: 'A Tokyo Anti-Library architecture and app design case study by Chandra Bhanu.',
  path: '/work/tokyo-anti-library',
  image: '/images/tokyo-anti-library.png',
});

export default function TokyoAntiLibraryRoute() {
  return <TokyoAntiLibraryPage />;
}
