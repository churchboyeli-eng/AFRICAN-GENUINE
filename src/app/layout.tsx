import type { Metadata } from 'next';
import { display, body, accent } from './fonts';
import './globals.css';
import WhatsAppFab from '@/components/WhatsAppFab';
import TravelAgencyJsonLd from '@/components/TravelAgencyJsonLd';
import { buildMetadata, SITE_URL } from '@/lib/metadata';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildMetadata({
    title: 'African Genuine Tours & Safaris — Tailor-made Tanzania safaris & Kilimanjaro treks',
    description: 'Private guided safaris, Kilimanjaro routes and honeymoons across Tanzania, crafted by an African-owned team.',
    path: '/',
  }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${accent.variable}`}>
      <body className="bg-ink font-body text-cream antialiased">
        <TravelAgencyJsonLd />
        {children}
        <WhatsAppFab />
      </body>
    </html>
  );
}
