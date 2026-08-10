import type { Metadata } from 'next';
import SankalpSchoolPage from '../../components/SankalpSchoolPage';
import { createPageMetadata } from '../../seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Sankalp School | Chandra Bhanu',
  description: 'An inclusive, adaptive-reuse school design case study for children with autism and specific learning disabilities.',
  path: '/work/sankalp-school',
  image: '/images/school-project-2068ee.png',
});

export default function SankalpSchoolRoute() {
  return <SankalpSchoolPage />;
}
