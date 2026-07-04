import { display, body } from './fonts';
import './globals.css';

export const metadata = {
  title: 'African Genuine Tours & Safaris — Tailor-made Tanzania safaris & Kilimanjaro treks',
  description: 'Private guided safaris, Kilimanjaro routes and honeymoons across Tanzania, crafted by an African-owned team.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-ink font-body text-cream antialiased">{children}</body>
    </html>
  );
}
