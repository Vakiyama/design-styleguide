import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#A0BAAA',
        primary: '#4F3D65',
        secondary: '#ACA0BB',
        accent: '#393939',
        card: '#D9D9D9',
        text: '#000000',
      },
    },
  },
  plugins: [],
} satisfies Config;
