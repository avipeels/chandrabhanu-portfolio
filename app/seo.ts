import type { Metadata } from "next";

export const siteUrl = "https://www.chandrabhanudosapati.in";
export const siteName = "Chandra Bhanu";

export const defaultTitle = "Chandra Bhanu | Portfolio";
export const defaultDescription =
  "Portfolio of Chandra Bhanu, featuring architecture, board game, experience, UX, and visual design work.";

const defaultOpenGraphImage = "/opengraph-image.png";
const defaultTwitterImage = "/twitter-image.png";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function createPageMetadata({
  title,
  description,
  path,
  image = defaultOpenGraphImage,
}: PageMetadataOptions): Metadata {
  const isDefaultOpenGraphImage = image === defaultOpenGraphImage;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      type: "website",
      images: [
        {
          url: image,
          ...(isDefaultOpenGraphImage ? { width: 1200, height: 630 } : {}),
          alt: `${title} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image === defaultOpenGraphImage ? defaultTwitterImage : image],
    },
  };
}
