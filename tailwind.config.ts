import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EDEEEF",
        secondary: "#686A70",
        // accent: "#037EFF",
        accent:"#00C254",
      },
      fontSize: {
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
      fontWeight: {
        normal: "400", // Normal
        bold: "700", // Bold
        extrabold: "900", // Extra Bold
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },

  plugins: [
    require("./plugins/container.js"),
    require("./plugins/customUtils.js"),
    // require("./plugins/scopedPreflight.js"),
  ],
};
export default config;
