import type { Metadata } from 'next';
import IndianCitiesNavigationPage from '../../components/IndianCitiesNavigationPage';

export const metadata: Metadata = {
  title: 'Navigation Tool for Indian Cities | Chandra Bhanu',
  description: 'A Google UX Design Professional Certificate case study for a navigation tool tailored to Indian cities.',
};

export default function IndianCitiesNavigationRoute() {
  return <IndianCitiesNavigationPage />;
}
