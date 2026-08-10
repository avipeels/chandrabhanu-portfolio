import type { Metadata } from 'next';
import DrawingsPage from '../../components/DrawingsPage';
import { createPageMetadata } from '../../seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Drawings | Chandra Bhanu',
  description: 'A collection of architectural, observational and spatial drawings by Chandra Bhanu.',
  path: '/work/drawings',
  image: '/images/drawings-514a7a.png',
});

export default function DrawingsRoute() {
  return <DrawingsPage />;
}
