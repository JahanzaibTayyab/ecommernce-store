/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgba(var(${variableName}))`;
  };
}

module.exports = {
  darkMode: ["class"],
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      inter: "var(--font-inter)",
      inconSolata: "var(--font-inconsolata)",
      lora: "var(--font-lora)",
    },
    extend: {
      colors: {
        palette: {
          primary: withOpacity("--color-primary"),
          secondary: withOpacity("--color-secondary"),
          fill: withOpacity("--color-bg"),
          card: withOpacity("--color-bg-side"),
          dark: withOpacity("--color-bg-dark"),
          digitalCategory: "var(--digital-category-bgc)",
          fashionCategory: "var(--fashion-category-bgc)",
          beautyCategory: "var( --beauty-category-bgc)",
          sportCategory: "var(--sport-category-bgc)",
          houseCategory: "var(--house-category-bgc)",
          toyCategory: "var(--toy-category-bgc)",
          stationeryCategory: "var(--stationery-category-bgc)",
          base: withOpacity("--color-text-base"),
          mute: withOpacity("--color-text-muted"),
          side: withOpacity("--color-text-side"),
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 },
          },
          sidenavLTR: {
            "0%": { transform: "translateX(-100%)" },
            "100%": { transform: "translateX(0px)" },
          },
          sidenavRTL: {
            "0%": { transform: "translateX(100%)" },
            "100%": { transform: "translateX(0px)" },
          },
          fade: {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
          dropDown: {
            "0%": { opacity: 0, transform: "scaleY(0)" },
            "100%": { opacity: 1, transform: "scaleY(1)" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          sidenavLTREntering: "sidenavLTR 0.3s ease-in-out forwards",
          sidenavRTLEntering: "sidenavRTL 0.3s ease-in-out forwards",
          sidenavLTRExit: "sidenavLTR 0.3s ease-in-out reverse forwards",
          sidenavRTLExit: "sidenavRTL 0.3s ease-in-out reverse forwards",
          fadeEntering: "fade 0.3s forwards",
          fadeExit: "fade 0.3s reverse forwards",
          dropDown: "dropDown 0.3s forwards",
          dropDownExit: "dropDown 0.3s reverse forwards",
        },
        backgroundImage: {
          offersBG: "url('/images/carouselBox-bg/offersbg.webp')",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
