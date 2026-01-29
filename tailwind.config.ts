import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Verde-mar (Cor primária - calma, crescimento, renovação)
        'verde-mar': {
          50: '#E8F5F3',
          100: '#D1EBE7',
          200: '#A3D7CF',
          300: '#75C3B7',
          400: '#47AF9F',
          500: '#2A9D8F', // Cor principal
          600: '#227D72',
          700: '#1E7266',
          800: '#165349',
          900: '#0E342D',
        },
        // Vermelho Cardeal (Cor de acento - CTAs e destaques)
        'vermelho-cardeal': {
          50: '#FEE2E5',
          100: '#FCC5CB',
          200: '#F98B97',
          300: '#F65163',
          400: '#E6182F',
          500: '#C1121F', // Cor principal para CTAs
          600: '#9B0E1A',
          700: '#750B13',
          800: '#4E070D',
          900: '#280406',
        },
        // Neutros
        'cinza': {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
