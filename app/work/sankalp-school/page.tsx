import type { Metadata } from 'next';
import SankalpSchoolPage from '../../components/SankalpSchoolPage';

export const metadata: Metadata = {
  title: 'Sankalp School | Chandra Bhanu',
  description: 'An inclusive, adaptive-reuse school design case study for children with autism and specific learning disabilities.',
};

export default function SankalpSchoolRoute() {
  return <SankalpSchoolPage />;
}
