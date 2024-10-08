/** @type {import('tailwindcss').Config} */
import { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['"Satoshi"', "sans-serif"],
        clash: ['"Clash Display"', "sans-serif"],
      },
    },
    plugins: [],
  },
};
export default config;
