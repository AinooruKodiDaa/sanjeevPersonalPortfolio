import { styled } from "@/styles/stitches";

export const StyledModal = styled("div", {


  display: "none", /* Hidden by default */
  position: "fixed", /* Stay in place */
  zIndex: "1", /* Sit on top */
  paddingTop: "100px", /* Location of the box */
  left: "0",
  top: "0",
  width: "100%", /* Full width */
  height: "100%", /* Full height */
  overflow: "auto", /* Enable scroll if needed */
  backgroundColor: "rgba(0,0,0,0.4)" /* Black w/ opacity */

})


export const StyledModalContent = styled("div",{


  backgroundColor: "#fefefe",
  margin: "auto",
  padding: "20px",
  border: "1px solid #888",
  width: "80%",


})