/** @type {import('tailwindcss').Config} */
import { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['"Satoshi"', 'sans-serif'],
        clash: ['"Clash Display"', 'sans-serif'],
      },
      colors: {
        'main-clr': '#2A254B',
      },
    },
    plugins: [],
  },
};

export default config;
