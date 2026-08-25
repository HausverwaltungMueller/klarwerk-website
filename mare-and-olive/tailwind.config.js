/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '390px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        limestone: {
          DEFAULT: '#F4EFE6',
          light: '#FAF7F1',
          dark: '#E9E1D2',
        },
        olive: {
          DEFAULT: '#3A4531',
          light: '#525F42',
          dark: '#252D1D',
        },
        terracotta: {
          DEFAULT: '#C1592B',
          light: '#D97E4F',
          dark: '#93411D',
        },
        charcoal: {
          DEFAULT: '#211E1A',
          light: '#3A352E',
        },
        sand: '#E4D9C4',
        beige: '#DED0B6',
        seablue: '#2E4A52',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      transitionTimingFunction: {
        elegant: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      maxWidth: {
        content: '1440px',
      },
    },
  },
  plugins: [],
}
