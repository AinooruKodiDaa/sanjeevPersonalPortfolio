import { styled } from "@/styles/stitches";

export const StyledTopNav = styled("nav",{


  zIndex:"100",
  backgroundColor:"white",
  position:"sticky",
  top:"0",

  "@media(max-width: 920px)":{
    display:"none",
    
  }


})