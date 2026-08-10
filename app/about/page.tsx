import type { Metadata } from 'next';
import AboutPage from '../components/AboutPage';
import { createPageMetadata } from '../seo';

export const metadata: Metadata = createPageMetadata({
  title: 'About | Chandra Bhanu',
  description: 'The design journey, experience, and contact details of Chandra Bhanu.',
  path: '/about',
  image: '/images/about_header.png',
});

export default function AboutRoute() {
  return <AboutPage />;
}
