import type { Metadata } from 'next';
import IndianCitiesNavigationPage from '../../components/IndianCitiesNavigationPage';
import { createPageMetadata } from '../../seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Navigation Tool for Indian Cities | Chandra Bhanu',
  description: 'A Google UX Design Professional Certificate case study for a navigation tool tailored to Indian cities.',
  path: '/work/navigation-app-for-indian-cities',
  image: '/images/figma-navigation-source.png',
});

export default function IndianCitiesNavigationRoute() {
  return <IndianCitiesNavigationPage />;
}
