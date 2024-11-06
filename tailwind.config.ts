import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D4B496",
        textclr: "#333333",
        whiteclr: "#ffffff",
        secondaryclr: "#d4b486",
        primaryclr: "#f2f1ee",
        background: "var(--background)",
        foreground: "var(--foreground)",
        greyclr: "#EBEBEB",
      },
    },
  },
};
export default config;
