import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#fafafa",
          surface: "#ffffff",
          text: "#0f172a",
          muted: "#64748b",
          accent: "#6366f1",
          accent2: "#06b6d4",
        },
        dark: {
          bg: "#030712",
          surface: "#0f172a",
          text: "#f1f5f9",
          muted: "#94a3b8",
          accent: "#818cf8",
          accent2: "#22d3ee",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgb(99 102 241 / 0.35)",
        "glow-dark": "0 0 48px -8px rgb(129 140 248 / 0.25)",
        card: "0 1px 2px rgb(15 23 42 / 0.04), 0 8px 24px -4px rgb(15 23 42 / 0.06)",
        "card-dark":
          "0 1px 2px rgb(0 0 0 / 0.2), 0 12px 32px -8px rgb(0 0 0 / 0.45)",
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
