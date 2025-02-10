/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003049',
          dark: '#002538',
          light: '#003a59'
        },
        secondary: {
          DEFAULT: '#FF9B54',
          dark: '#ff8c3b',
          light: '#ffaa6b'
        },
        success: {
          DEFAULT: '#4CAF50',
          dark: '#3d8b40',
          light: '#66bb6a'
        },
        info: {
          DEFAULT: '#2196F3',
          dark: '#1976d2',
          light: '#42a5f5'
        },
        warning: {
          DEFAULT: '#FFC107',
          dark: '#ffa000',
          light: '#ffca28'
        },
        danger: {
          DEFAULT: '#F44336',
          dark: '#d32f2f',
          light: '#ef5350'
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-out',
        'slide-down': 'slide-down 0.2s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
} 