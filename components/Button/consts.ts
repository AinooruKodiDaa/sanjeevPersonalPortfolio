/* Types */
export type ButtonVariants = keyof typeof BUTTON_VARIANTS;
export type ButtonColors = keyof typeof BUTTON_COLORS;
export type ButtonSizes = keyof typeof BUTTON_SIZES;

type CompoundVariantItem = {
  color?: ButtonColors;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  css: any;
};

export type CompoundVariant = CompoundVariantItem[];

export const BUTTON_SIZES = {
  xs: {
    padding: "0.125rem 0.25rem",
  },
  sm: {
    padding: "0.25rem 0.375rem",
  },
  base: {
    padding: "0.5rem 0.75rem",
  },
  lg: {
    padding: "0.625rem 1rem",
  },
  xl: {
    padding: "0.75rem 1.25rem",
  },
};

export const BUTTON_VARIANTS = {
  solid: {
    backgroundColor: "var(--main)",
    color: "var(--support)",
    border: "1px solid transparent",

    '&[data-state="disabled"]': {
      backgroundColor: "$disabled",
      "&:is(p, span)": {
        color: "#000000 !important",
      },

      "&:hover": {
        backgroundColor: "$disabled",
      },
    },

    "&:hover, &:focus": {
      background: "rgba(var(--hover), 80%)",
    },
  },
  outline: {
    backgroundColor: "transparent",
    color: "var(--main)",
    border: "1px solid var(--main)",

    '&[data-state="disabled"]': {
      borderColor: "$disabled",
      color: "$disabled",
      "&:hover": {
        backgroundColor: "transparent",
        borderColor: "$disabled",
      },
    },

    "&:hover, &:focus": {
      background: "rgba(var(--hover), 30%)",
      borderColor: "rgba(var(--hover), 30%)",
    },
  },
  text: {
    backgroundColor: "transparent",
    color: "var(--main)",


    
    '&[data-state="disabled"]': {
      color: "$disabled",
    },

    "&:hover, &:focus": {
      color: "rgba(var(--hover), 80%)",
      transform: "scale(1.05)"
    },
    
  },
  icon: {
    backgroundColor: "transparent",
    color: "$grey",

    '&[data-state="disabled"]': {
      color: "$disabled",
      "&:hover": {
        color: "$disabled",
      },
    },

    "&:hover, &:focus": {
      color: "var(--main)",
    },
  },
  link: {
    backgroundColor: "transparent",
    color: "var(--main)",
    textDecoration: "underline",
    '&[data-state="disabled"]': {
      color: "$disabled",
    },
  },
};

export const BUTTON_COLORS = {
  primary: {
    "--main": "var(--colors-primary)",
    "--support": "var(--colors-white)",
    "--hover": `var(--colors-rgbPrimary)`,
  },
  secondary: {
    "--main": `var(--colors-secondary)`,
    "--support": "var(--colors-white)",
    "--hover": `var(--colors-rgbAccent)`,
  },
  accent: {
    "--main": `var(--colors-accent)`,
    "--support": "var(--colors-white)",
    "--hover": `var(--colors-rgbAccent)`,
  },
  


};
