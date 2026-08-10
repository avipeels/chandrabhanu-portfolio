import type { Metadata } from 'next';
import Homepage from './homepage';
import { createPageMetadata, defaultDescription, defaultTitle } from './seo';

export const metadata: Metadata = createPageMetadata({
  title: defaultTitle,
  description: defaultDescription,
  path: '/',
});

export default function Home() {
  return <Homepage />;
}
