import { Bricolage_Grotesque, Newsreader, Manrope } from 'next/font/google';

export const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['300', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

// Serif accent font — reserved for large editorial italic emphasis moments only
// (hero headline flourish, testimonial quotes), not general body italics.
export const accent = Newsreader({
  subsets: ['latin'],
  weight: ['500'],
  style: ['italic'],
  variable: '--font-accent',
  display: 'swap',
});

export const body = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});
