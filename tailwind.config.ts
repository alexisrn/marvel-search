import { tree } from "next/dist/build/templates/app-page";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors:{
      primary: '#FF1510',
      secondary: '#FDECEC',
      third: '#E7F6E7',
      grayPrimary: '#404040',
      graySecondary: '#8C8C8C',
      grayThird: '#B9B9B9',

     }
    },
  },
  plugins: [],
};
export default config;
