import { nextui } from "@nextui-org/react"
import { Config } from "tailwindcss"

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1900px',
    },
    extend: {
      fontFamily: {
        Baskerville: ["Libre Baskerville", "serif"],
        Hallelujah: ["Gloria Hallelujah", "cursive"],
        Poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        white: "#fff",
        black: "#000",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        border: "var(--color-border)",
        hover: "var(--color-hover)",
        textPrimary: "var(--color-text)",
        textSecondary: "var(--color-text-secondary)",
        textTertiary: "var(--color-text-tertiary)",
        
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      }
    },
  },
  darkMode: "class",
  plugins: [nextui(), addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

export default config