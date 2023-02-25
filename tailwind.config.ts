/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            code: {
              fontFamily: "Fira Code, monospace",
              span: {
                fontFamily: "Fira Code, monospace",
              },
            },
            "div[data-remark-code-title]": {
              backgroundColor: colors.neutral[800],
              fontFamily: "Fira Code, monospace",
              fontSize: "0.8rem",
              padding: "0.5rem 1rem",
              borderTopRightRadius: "0.25rem",
              borderTopLeftRadius: "0.25rem"
            },
            "div[data-remark-code-title] + pre": {
              marginTop: "0 !important",
              borderTopRightRadius: "0 !important",
              borderTopLeftRadius: "0 !important"
            },
            "p, li": {
              code: {
                backgroundColor: "#27272a",
                padding: "0.250rem 0.4rem",
                borderRadius: "0.250rem",
                fontWeight: "300",
                color: "white",
              },
            },
            "html:not(.dark) div[data-remark-code-title]": {
              backgroundColor: colors.zinc[200],
              color: colors.black,
            },
            "html:not(.dark) p, li": {
              code: {
                backgroundColor: colors.zinc[200],
                padding: "0.250rem 0.4rem",
                borderRadius: "0.250rem",
                fontWeight: "300",
                color: "black",
              },
            },
          },
        },
      },
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        1: "repeat(auto-fit, minmax(24ch, 1fr));",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/typography")],
};
