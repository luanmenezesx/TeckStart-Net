// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Existing palette preserved
        background: {
          DEFAULT: '#0B0F19',
          secondary: '#111827',
          card: '#151D30',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        primary: {
          50: '#eefbfb',
          100: '#d5f4f4',
          200: '#aee8e9',
          300: '#75d6d8',
          400: '#34bcc0',
          500: '#00a3a8',
          600: '#008388',
          700: '#00686d',
          800: '#055357',
          900: '#094548',
          DEFAULT: '#00a3a8',
        },
        accent: {
          blue: '#3b82f6',
          indigo: '#6366f1',
          cyan: '#06b6d4',
          teal: '#14b8a6',
        },
        // ----------------------------------------------------
        // BRAND IDENTITY (Teckstart)
        brand: {
          cyan: '#00D2FF',
          blue: '#0066FF',
          deep: '#0038A8',
          darkBg: '#070A12',
          card: '#0E1526',
          cardHover: '#131D35',
          border: 'rgba(0, 149, 255, 0.18)',
        },
      },
      backgroundImage: {
        // Existing patterns
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
        // Brand gradients
        'brand-gradient': 'linear-gradient(135deg, #00D2FF 0%, #0066FF 50%, #0038A8 100%)',
        'glow-radial': 'radial-gradient(circle at 50% 0%, rgba(0, 102, 255, 0.25) 0%, rgba(7, 10, 18, 0) 70%)',
        'card-gradient': 'linear-gradient(180deg, rgba(14, 21, 38, 0.8) 0%, rgba(14, 21, 38, 0.4) 100%)',
      },
      boxShadow: {
        // Existing shadows
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        // Brand glows
        'glow-blue': '0 0 25px -5px rgba(0, 102, 255, 0.4)',
        'glow-cyan': '0 0 20px -3px rgba(0, 210, 255, 0.35)',
      },
      // Keep custom keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
