import type { Metadata } from 'next';
import DrawingsPage from '../../components/DrawingsPage';

export const metadata: Metadata = {
  title: 'Drawings | Chandra Bhanu',
  description: 'A collection of architectural, observational and spatial drawings by Chandra Bhanu.',
};

export default function DrawingsRoute() {
  return <DrawingsPage />;
}
