// stitches.config.ts
import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      //used across//
      primary: "#EDEEEF",
      rgbPrimary: "237, 238, 239",
      secondary: "#686A70",
      rgbSecondary: "104, 106, 112",
      accent: "#037EFF",
      rgbAccent: "3, 126, 255",
      //used across//
      //some other colors//
      white: "#ffff",
      rgbWhite: "255, 255, 255",
      //some other colors//
    },
    fontSizes: {
      xs: "0.75rem", // Extra Small
      sm: "0.875rem", // Small
      base: "1rem", // Base
      lg: "1.125rem", // Large
      xl: "1.25rem", // Extra Large
      "2xl": "1.5rem", // 2X Large
      "3xl": "1.875rem", // 3X Large
      "4xl": "2.25rem", // 4X Large
      "5xl": "3rem", // 5X Large
      "6xl": "4rem", // 6X Large
    },
    fontWeights: {
      normal: 400, // Normal
      bold: 700, // Bold
      extrabold: 900, // Extra Bold
    },
    lineHeights: {
      base: "23px",
      "2xl": "32px",
      "3xl": "48px",
    },
    backdropBlur: {
      small: "8px",    // Small backdrop blur
      medium: "16px",  // Medium backdrop blur
      large: "24px",   // Large backdrop blur
    },
  },
  media: {
    xs: "(min-width: 420px)",
    bp1: "(min-width: 480px)",
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)",
  },
  utils: {
    marginX: (value: any) => ({ marginLeft: value, marginRight: value }),
  },
});
