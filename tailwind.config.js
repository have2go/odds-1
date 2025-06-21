/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'sf-pro': ['var(--font-sf-pro)'],
        'magistral': ['var(--font-magistral)'],
        'roboto': ['var(--font-roboto)'],
        'montserrat': ['var(--font-montserrat)'],
      },
      height: {
        '80px': '80px',
      },
      minHeight: {
        'screen-dvh': '100dvh',
      },

      colors: {
        // shadcn/ui цвета с префиксом sh-
        'sh-border': "hsl(var(--sh-border))",
        'sh-input': "hsl(var(--sh-input))",
        'sh-ring': "hsl(var(--sh-ring))",
        'sh-background': "hsl(var(--sh-background))",
        'sh-foreground': "hsl(var(--sh-foreground))",
        'sh-primary': {
          DEFAULT: "hsl(var(--sh-primary))",
          foreground: "hsl(var(--sh-primary-foreground))",
        },
        'sh-secondary': {
          DEFAULT: "hsl(var(--sh-secondary))",
          foreground: "hsl(var(--sh-secondary-foreground))",
        },
        'sh-destructive': {
          DEFAULT: "hsl(var(--sh-destructive))",
          foreground: "hsl(var(--sh-destructive-foreground))",
        },
        'sh-muted': {
          DEFAULT: "hsl(var(--sh-muted))",
          foreground: "hsl(var(--sh-muted-foreground))",
        },
        'sh-accent': {
          DEFAULT: "hsl(var(--sh-accent))",
          foreground: "hsl(var(--sh-accent-foreground))",
        },
        'sh-popover': {
          DEFAULT: "hsl(var(--sh-popover))",
          foreground: "hsl(var(--sh-popover-foreground))",
        },
        'sh-card': {
          DEFAULT: "hsl(var(--sh-card))",
          foreground: "hsl(var(--sh-card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--sh-radius)",
        md: "calc(var(--sh-radius) - 2px)",
        sm: "calc(var(--sh-radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
