import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fefefe",

          secondary: "#f0f0f0",

          accent: "#d1d5db",

          neutral: "#dfdfdf",

          "base-100": "#FFF",

          info: "#38bdf8",

          success: "#86efac",

          warning: "#fcd34d",

          error: "#fb7185",
        },
      },
    ],
  },
};
export default config;
