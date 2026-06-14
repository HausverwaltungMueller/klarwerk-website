/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Dark theme (homepage)
        ink: '#0A0E1A',
        'brand-violet': '#7C5CFC',
        'brand-blue': '#3B82F6',
        'brand-cyan': '#22D3EE',
        'ink-text': '#F5F7FA',
        // Original tokens (other pages)
        primary: '#1E2A4A',
        accent: '#FF5A3C',
        support: '#17B0A0',
        surface: '#F4F5F7',
        body: '#1A1A1A',
      },
      fontFamily: {
        headline: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #7C5CFC 0%, #3B82F6 100%)',
      },
    },
  },
  plugins: [],
};
