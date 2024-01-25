import { styled } from "@/styles/stitches";

const allWidth="25vw"
const allHeight="50vh"

export const StyledCarousel = styled("div",{

	overflow:"hidden",
	width: allWidth,
	backgroundColor:"red",
	borderRadius:"22px 0px 0px 22px",
	background:"none",
	
	flexDirection:"column",
	justifyContent:"center"



})


export const StyledCarouselInner = styled("div",{


	whiteSpace:"nowrap",
	transition:"transform 200ms",
	
})


export const StyledCarouselItem = styled("div",{
display:"inline-flex",
alignItems:"center",
justifyContent:"center",
height: allHeight,



})


export const StyledCarouselImage = styled("img",{


objectFit:"cover",
width: allWidth,
height:"100%",
display:"block",
flexShrink: 0,
flexGrow: 0,




})