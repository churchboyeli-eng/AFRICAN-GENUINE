import { Bricolage_Grotesque, Mulish, Playfair_Display, Raleway } from 'next/font/google';

export const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

export const body = Mulish({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

// Olduvai editorial display serif — Playfair Display
// Weights: 400 (text), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
// Used via Tailwind class: font-cormorant (CSS var stays --font-cormorant for zero component changes)
export const cormorant = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

// Olduvai UI / body sans — Raleway
// Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
// Used via Tailwind class: font-jost (CSS var stays --font-jost for zero component changes)
export const jost = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
});
