import { styled } from "@/styles/stitches";

export const StyledTopNav = styled("nav", {
  zIndex: "100",
  backgroundColor: "$white",
  position: "sticky",
  top: "0",
  transition: "all 100ms ease-in-out",

  "@media(max-width: 920px)": {
    display: "none",
  },

  variants: {
    darkMode: {
      true: {
        backgroundColor: "rgba(21,31,31,1)",
      },
    },
  },
});
