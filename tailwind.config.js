/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(-3rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
        'rotating-line-top-left-right': {
          '0%': { left: '-100%' },
          '50%, 100%': { left: '100%' },
        },
        'rotating-line-top-bottom-right': {
          '0%': { top: '-100%' },
          '50%, 100%': { top: '100%' },
        },
        'rotating-line-bottom-right-left': {
          '0%': { right: '-100%' },
          '50%, 100%': { right: '100%' },
        },
        'rotating-line-bottom-top-left': {
          '0%': { bottom: '-100%' },
          '50%, 100%': { bottom: '100%' },
        },
      },
      animation: {
        typewriter: 'typewriter 2s steps(11) forwards',
        caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 4s ease',
        'rotating-line-top-left-right':
          'rotating-line-top-left-right 1s linear infinite',
        'rotating-line-top-bottom-right':
          'rotating-line-top-bottom-right 1s linear infinite',
        'rotating-line-bottom-right-left':
          'rotating-line-bottom-right-left 1s linear infinite',
        'rotating-line-bottom-top-left':
          'rotating-line-bottom-top-left 1s linear infinite',
      },
      backgroundImage: {
        'hero-pattern':
          'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)',
      },
    },
  },
};
