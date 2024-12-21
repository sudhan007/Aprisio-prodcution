import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui'],
        mulish: ['"Mulish"', 'serif'],
        roboto: ['Roboto', ...fontFamily.sans],
        lato: ['Lato', ...fontFamily.sans],
      },
      screens: {
        sm: '640px', 
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px', 
      },
    },
  },
  plugins: [],
} satisfies Config;
