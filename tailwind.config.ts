import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: "#335DB6",
          50: "#ebeff8",
          100: "#c2cee9",
          200: "#99aedb",
          300: "#708ecc",
          400: "#476dbd",
          500: "#335DB6",
          600: "#2e54a4",
          700: "#24417f",
          800: "#1a2f5b",
          900: "#0f1c37",
          950: "#050912",
        },
      },
      fontFamily: {
        teko: ["var(--font-teko)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
