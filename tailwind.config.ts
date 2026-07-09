import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0c0a07', 'ink-deep': '#070504',
        ov: {
          bg:       '#150f08',
          deep:     '#150f08',
          ivory:    '#f5ecd8',
          'ivory-2':'#f5ecd8',
          muted:    '#cbb98f',
          brass:    '#e0a83f',
          'brass-l':'#e0a83f',
          faint:    '#8a7f6a',
        },
        ovl: {
          bg:         '#f7f5f1',
          text:       '#211d1a',
          body:       '#5c5750',
          faint:      '#7a746c',
          accent:     '#d24d2e',
          'accent-h': '#a83a20',
        },
        panel: 'rgba(255,255,255,0.02)', line: 'rgba(200,165,92,0.16)',
        gold: { DEFAULT: '#c8a55c', bright: '#e7cf94', deep: '#8a6e2f' },
        cream: '#f0ead9', sand: '#9b9078', clay: '#6f6347', leaf: '#a9d0a0',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        jost: ['var(--font-jost)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { tightest: '-0.03em', tighter: '-0.02em', label: '0.16em', wider2: '0.30em' },
      borderRadius: { pill: '40px', card: '14px', 'card-lg': '18px', hero: '20px' },
      maxWidth: { shell: '1280px' },
      backgroundImage: {
        'gold-line': 'linear-gradient(90deg,#8a6e2f,#e7cf94,#8a6e2f)',
        'hero-veil': 'radial-gradient(120% 90% at 50% 8%, rgba(8,6,3,0.2), rgba(8,6,3,0.82))',
        'tour-veil': 'linear-gradient(180deg, rgba(8,6,3,0.25) 0%, rgba(8,6,3,0.15) 40%, rgba(8,6,3,0.9) 100%)',
        'card-veil': 'linear-gradient(180deg, transparent 45%, rgba(8,6,3,0.88))',
      },
      keyframes: { 'fade-up': { '0%': { opacity: '0', transform: 'translateY(16px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } } },
      animation: { 'fade-up': 'fade-up .6s cubic-bezier(.4,0,.1,1) both' },
    },
  },
  plugins: [],
};
export default config;
