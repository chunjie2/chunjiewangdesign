import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f7f6f1",
        ink: "#171717",
        muted: "#6d6a63",
        line: "#d8d3c7",
        steel: "#46525c",
        moss: "#68705f",
        clay: "#9a6b55"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(.22,1,.36,1)"
      }
    }
  },
  plugins: []
};

export default config;
