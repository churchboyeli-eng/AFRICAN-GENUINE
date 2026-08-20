import type { Metadata } from 'next';

export const SITE_URL = 'https://african-genuine-safaris.vercel.app';
export const SITE_NAME = 'African Genuine Tours & Safaris';

interface PageMetaOptions {
  title: string;
  description: string;
  /** Site-relative path, e.g. '/about' or '/kilimanjaro/machame-7-day' */
  path: string;
  /** Site-relative image path, defaults to the shared OG image */
  image?: string;
}

export function buildMetadata({ title, description, path, image = '/img/og-image.jpg' }: PageMetaOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 630 }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
