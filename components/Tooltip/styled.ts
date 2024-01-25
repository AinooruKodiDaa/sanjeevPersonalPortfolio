import { styled } from "@/styles/stitches";

export const StyledContainer = styled("div", {
  position: "relative",
  padding:"0.2rem",
  borderRadius: "8px",
  overflow: "hidden",
  color: "$grey",
  transition: "all 0.2s ease-in-out",
  "&:focus-within": {
    outline: "$accent 1px solid",
    color: "$accent",
  },

  variants:{darkMode:{true:{
    border: "1px solid $darkAccent",

    "&:focus-within": {
      outline: "$darkAccent 1px solid",
      color: "$darkAccent",
    },
  

  }}}
});

export const StyledSearchBar = styled("input", {
  padding: "0.5rem",
  width: "100%",
  background:"inherit",
  border: "1px solid $accent",
  borderRadius: "8px",

  "&:placeholder": {
    color: "$grey",
  },

  "&:focus": {
    outline: "$accent 2px solid",
  },


  variants:{darkMode:{true:{
    border: "1px solid $lightGray",
    color:"$lightGray",

"&:focus": {
    outline: "$lightGray 2px solid",
  },

  }}}
});
