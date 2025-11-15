/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#F5F1ED',
        },
        surface: {
          card: '#FFFFFF',
        },
        accent: {
          primary: '#4A90E2',
          light: '#E8F4FF',
        },
        neutral: {
          dark: '#1A1A1A',
          'dark-surface': '#2C2C2C',
          medium: '#6B6B6B',
          light: '#E5E5E5',
        },
        interactive: {
          primary: '#1A1A1A',
          secondary: '#E8E8E8',
          social: '#F0F0F0',
        },
      },
      fontFamily: {
        sans: ['SF Pro Display', '-apple-system', 'system-ui', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['96px', { lineHeight: '1', letterSpacing: '-2px', fontWeight: '300' }],
        'display-md': ['72px', { lineHeight: '0.95', letterSpacing: '-2px', fontWeight: '300' }],
        'h1': ['42px', { lineHeight: '1.1', letterSpacing: '-0.5px', fontWeight: '400' }],
        'h1-sm': ['32px', { lineHeight: '1.1', letterSpacing: '-0.5px', fontWeight: '400' }],
        'h2': ['28px', { lineHeight: '1.2', fontWeight: '500' }],
        'h2-sm': ['24px', { lineHeight: '1.2', fontWeight: '500' }],
        'body': ['17px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-sm': ['15px', { lineHeight: '1.5', fontWeight: '400' }],
        'label': ['15px', { lineHeight: '1.4', fontWeight: '500' }],
        'label-sm': ['13px', { lineHeight: '1.4', fontWeight: '400' }],
        'caption': ['13px', { lineHeight: '1.3', fontWeight: '400' }],
        'caption-sm': ['11px', { lineHeight: '1.3', fontWeight: '400' }],
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
      },
      borderRadius: {
        'card': '32px',
        'card-sm': '24px',
        'button': '28px',
        'button-sm': '24px',
        'input': '20px',
        'input-sm': '16px',
        'icon': '20px',
      },
      boxShadow: {
        'soft': '0 4px 16px rgba(0, 0, 0, 0.06)',
        'medium': '0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
        'strong': '0 16px 48px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.06)',
      },
      backdropBlur: {
        'glass': '40px',
        'glass-sm': '20px',
      },
      transitionDuration: {
        '250': '250ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
