import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Near-black canvas
        ink: {
          DEFAULT: "#0A0A0A",
          950: "#0A0A0A",
          900: "#0D0D0D",
          850: "#111111",
          800: "#151515",
          750: "#1A1A1A",
          700: "#222222",
          650: "#2A2A2A",
        },
        /*
         * The brand uses exactly TWO reds. They are independent tokens — change
         * one without touching the other.
         *
         * 1. `brand` / `brand-400…800` — #E31E24, the accent red.
         *    Small accents only: the ✦ sparkle, eyebrow labels, the red
         *    headline word, icon tints, the logo mark, and the blurred radial
         *    glows. The numeric steps are deliberately all the same value
         *    rather than a real scale, so every existing `brand-400/500/600`
         *    class resolves to the identical red and no shade mismatch can
         *    creep back in. Opacity modifiers (`bg-brand-600/15`) are the only
         *    sanctioned variation — don't add a new numeric step.
         *
         * 2. `brand-deep` — #B31E24, the surface red.
         *    Large, flat, fully-opaque red fills ONLY: the CTA banner, the
         *    "one roof" callout, and solid primary buttons/pills. Deeper and
         *    richer than the accent red so big areas don't glare, and it lifts
         *    white-on-red contrast from 4.69:1 to 6.71:1.
         *    `brand-deep-hover` is its slightly lighter hover shade.
         */
        brand: {
          DEFAULT: "#E31E24",
          400: "#E31E24",
          500: "#E31E24",
          600: "#E31E24",
          700: "#E31E24",
          800: "#E31E24",
          deep: "#B31E24",
          "deep-hover": "#C42127",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "var(--font-display)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      backgroundImage: {
        // `brand-gradient` removed: brand red is flat now, so the three
        // surfaces that used it (logo mark, CTA banner, "one roof" callout)
        // use `bg-brand` instead.
        "card-fade":
          "linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.55) 55%, rgba(10,10,10,0.95) 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
