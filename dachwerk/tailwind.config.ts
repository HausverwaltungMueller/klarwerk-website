import type { Config } from 'tailwindcss';

/**
 * Das Theme ist vollstaendig ersetzt. Tailwind ist nur die Zugriffsschicht,
 * die Werte stehen in src/styles/tokens.css. Kein Wert wird hier zweimal gepflegt.
 */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '900px',
      lg: '1200px',
      xl: '1600px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      surface: { 0: 'var(--surface-0)', 1: 'var(--surface-1)', 2: 'var(--surface-2)' },
      text: { 0: 'var(--text-0)', 1: 'var(--text-1)', 2: 'var(--text-2)' },
      dach: { DEFAULT: 'var(--dach)', text: 'var(--dach-text)' },
      energie: 'var(--energie)',
      nature: { DEFAULT: 'var(--nature)', text: 'var(--nature-text)' },
      state: { error: 'var(--state-error)', ok: 'var(--state-ok)' },
      hair: { DEFAULT: 'var(--hair)', 1: 'var(--hair-1)' },
    },
    spacing: {
      0: '0',
      1: 'var(--s-1)', 2: 'var(--s-2)', 3: 'var(--s-3)', 4: 'var(--s-4)',
      5: 'var(--s-5)', 6: 'var(--s-6)', 7: 'var(--s-7)', 8: 'var(--s-8)',
      9: 'var(--s-9)', 10: 'var(--s-10)', 11: 'var(--s-11)',
      rail: 'var(--rail)',
      px: '1px',
      full: '100%',
    },
    borderRadius: { none: '0', DEFAULT: 'var(--radius)', full: '9999px' },
    borderWidth: { 0: '0', DEFAULT: '1px', 2: '2px' },
    fontFamily: {
      display: ['var(--font-display)', 'Serif Fallback', 'Georgia', 'serif'],
      sans: ['var(--font-sans)', 'Inter Fallback', 'Arial', 'sans-serif'],
    },
    fontSize: {
      label: 'var(--t-label)',
      spec: 'var(--t-spec)',
      s: 'var(--t-body-s)',
      base: 'var(--t-body)',
      lead: 'var(--t-lead)',
    },
    fontWeight: { normal: '400', medium: '500', semibold: '600' },
    transitionDuration: {
      1: 'var(--dur-1)', 2: 'var(--dur-2)', 3: 'var(--dur-3)',
      4: 'var(--dur-4)', 5: 'var(--dur-5)', 6: 'var(--dur-6)',
    },
    transitionTimingFunction: { out: 'var(--ease-out)', inout: 'var(--ease-inout)' },
    boxShadow: { none: 'none', sticky: 'var(--shadow-sticky)' },
    maxWidth: { page: 'var(--page-max)', measure: 'var(--measure)', prose: '62ch', none: 'none', full: '100%' },
    extend: {},
  },
  corePlugins: { preflight: false },
  plugins: [],
} satisfies Config;
