import type { Metadata } from 'next';
import AboutPage from '../components/AboutPage';

export const metadata: Metadata = {
  title: 'About | Chandra Bhanu',
  description: 'The design journey, experience, and contact details of Chandra Bhanu.',
};

export default function AboutRoute() {
  return <AboutPage />;
}
