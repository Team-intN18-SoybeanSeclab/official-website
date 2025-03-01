import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mobai: {
          green: "#17F700",
        },
      },
      fontFamily: {
        dmSans: ["var(--font-dm-sans)"],
        oswald: ["var(--font-oswald)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
