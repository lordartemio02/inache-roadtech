/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors"
// const colors = require("tailwindcss/colors");

const baseSize = 16;

function rem(v) {
  return "" + `${v / baseSize}` + "rem";
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      suisseIntl: ["SuisseIntl"],
      protoGrotesk: ["ProtoGrotesk"],
    },
    colors: {
      ...colors,
      natural: {
        100: "#1D1D1D",
        200: "#2F2F2F",
        300: "#747474",
        400: "#A6A6A6",
        500: "#D9D9D9",
        600: "#EBEBEB",
        700: "#F5F5F5",
        800: "#FFFFFF",
      },
      yellow: {
        100: "#FFCF08",
        200: "#E5B900",
        300: "#CCA500",
        400: "#FFEB99",
        500: "#FFF5CC",
      },
      antiqueWhite: {
        100: "#FAEFDC",
        200: "#F5E0BC",
        300: "#F2D6A6",
        400: "#FFFBF3",
      },
      brand: {
        100: "#FF3000",
        200: "#E52B00",
        300: "#CC2600",
      },
      warning: {
        100: "#E81C00",
        200: "#CC1800",
        300: "#B21500",
      },
      system: {
        success: "#007470",
        link: "#0370C7",
        advantages: "#76B9DC",
      },
    },
    fontSize: {
      "pc-h1": [rem(44), { fontWeight: "700", lineHeight: rem(46) }],
      "pc-h2": [rem(32), { fontWeight: "700", lineHeight: rem(36) }],
      "pc-h3": [rem(24), { fontWeight: "700", lineHeight: rem(28) }],
      "pc-h4": [rem(20), { fontWeight: "700", lineHeight: rem(24) }],
      "pc-subTitle": [rem(18), { fontWeight: "400", lineHeight: rem(24) }],

      "tablet-h1": [rem(36), { fontWeight: "700", lineHeight: rem(40) }],
      "tablet-h2": [rem(28), { fontWeight: "700", lineHeight: rem(32) }],
      "tablet-h3": [rem(20), { fontWeight: "700", lineHeight: rem(24) }],
      "tablet-h4": [rem(18), { fontWeight: "700", lineHeight: rem(22) }],
      "tablet-subTitle": [rem(18), { fontWeight: "400", lineHeight: rem(24) }],

      "mobile-h1": [rem(32), { fontWeight: "700", lineHeight: rem(36) }],
      "mobile-h2": [rem(24), { fontWeight: "700", lineHeight: rem(38) }],
      "mobile-h3": [rem(18), { fontWeight: "700", lineHeight: rem(22) }],
      "mobile-h4": [rem(16), { fontWeight: "700", lineHeight: rem(20) }],
      "mobile-subTitle": [rem(16), { fontWeight: "400", lineHeight: rem(22) }],

      "body-p1": [rem(16), { fontWeight: "400", lineHeight: rem(24) }],
      "body-p2": [rem(14), { fontWeight: "400", lineHeight: rem(22) }],
      "body-p3": [rem(12), { fontWeight: "400", lineHeight: rem(18) }],

      // buttons, highlights, controls
      "bhs-l": [rem(16), { fontWeight: "600", lineHeight: rem(24) }],
      "bhs-m": [rem(14), { fontWeight: "600", lineHeight: rem(20) }],
      "bhs-s": [rem(14), { fontWeight: "600", lineHeight: rem(16) }],
      "bhs-xs": [rem(12), { fontWeight: "600", lineHeight: rem(16) }],
      "bhs-xxs": [rem(10), { fontWeight: "600", lineHeight: rem(12) }],

      "italic-l": [
        rem(32),
        { fontWeight: "900", fontStyle: "italic", lineHeight: rem(40) },
      ],
      "italic-m": [
        rem(28),
        { fontWeight: "900", fontStyle: "italic", lineHeight: rem(32) },
      ],
      "italic-s": [
        rem(16),
        { fontWeight: "900", fontStyle: "italic", lineHeight: rem(24) },
      ],
      "italic-p1": [
        rem(16),
        { fontWeight: "400", fontStyle: "italic", lineHeight: rem(24) },
      ],
      "italic-p2": [
        rem(14),
        { fontWeight: "400", fontStyle: "italic", lineHeight: rem(22) },
      ],
      "italic-p3": [
        rem(12),
        { fontWeight: "400", fontStyle: "italic", lineHeight: rem(18) },
      ],

      "bold-l": [rem(32), { fontWeight: "800", lineHeight: rem(40) }],
      "bold-m": [rem(28), { fontWeight: "800", lineHeight: rem(32) }],
      "bold-s": [rem(16), { fontWeight: "800", lineHeight: rem(24) }],
      "bold-sLight": [rem(16), { fontWeight: "700", lineHeight: rem(24) }],

      "other-menu": [rem(16), { fontWeight: "600", lineHeight: rem(22) }],
      "other-mainPageHeading": [
        rem(64),
        { fontWeight: "700", lineHeight: rem(70) },
      ],

      "cards-l": [
        rem(22),
        { fontWeight: "700", lineHeight: rem(28), letterSpacing: "-0.5px" },
      ],
    },
    boxShadow: {
      reviewCard: "0px 1px 14px 0px #0000001A",
      sm: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(16, 24, 40, 0.1)",
      md: "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.1)",
      lg: "0px 10px 14px -3px rgba(0, 0, 0, 0.06)",
      xl: "0px 8px 10px -6px rgba(0, 0, 0, 0.1), 0px 25px 25px -5px rgba(16, 24, 40, 0.1)",
      light: "0px 4px 18px rgba(0, 0, 0, 0.07)",
      "2xl": "0px 25px 50px -12px rgba(16, 24, 40, 0.25)",
      dialog: "box-shadow: 4px 0px 16px 0px rgba(0, 0, 0, 0.25)"
    },
    container: {
      center: true,
    },
    screens: {
      "2sm": { max: "576px" },
      sm: "577px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1920px",
    },
    borderRadius: {
      half: "50%",
      full: "100%",
      2: rem(2),
      6: rem(6),
      8: rem(8),
      10: rem(10),
      12: rem(12),
      14: rem(14),
      16: rem(16),
      20: rem(20),
      24: rem(24),
      32: rem(32),
      40: rem(40),
      46: rem(46),
      48: rem(48),
    },
    zIndex: {
      10000: "10000",
    },
    minWidth: (theme) => theme("spacing"),
    maxWidth: (theme) => theme("spacing"),
    padding: (theme) => theme("spacing"),
    maxHeight: (theme) => theme("spacing"),
    minHeight: (theme) => theme("spacing"),
    margin: (theme, { negative }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...negative(theme("spacing")),
    }),
    extend: {},
  },
  plugins: [],
};
