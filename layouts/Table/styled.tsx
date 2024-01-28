import { styled } from "@/styles/stitches";


const maxWidth = "920px"; 


export const StyledTable = styled("table", {
  position: "relative",
  width: "100%",
  borderCollapse: "collapse",
  textAlign: "left",
  
  

});

export const StyledCaption = styled("caption", {
  position: "sticky",
  top: "0",
  textTransform: "uppercase",
  // borderRadius:"12px 12px 0px 0px",
  backgroundColor: "rgba($rgbAccent,0.5)",
  color: "inherit",
});

export const StyledTableHead = styled("th", {
  position: "sticky",
  top: "0",
  backgroundColor: "$secondary",
  color: "$primary",
  padding: "0.5rem 1rem",

  "@media(max-width: 920px)":{
    display:"none"
  }
});
export const StyledTableRow = styled("tr", {
  
  

  "@media(min-width: 920px)":{
  "&:hover":{
    color:"$accent",
    
    transition: "color 150ms ease-in-out"
    
  },
},

  "&:nth-of-type(2n)": {
    backgroundColor: "rgba($rgbSecondary,0.1)",
  },
});

export const StyledTableDataCell = styled("td", {
  padding: "0.5rem 1rem",

  "@media(max-width: 920px)":{
    display:"grid",
    gap:"0.5rem",
    gridTemplateColumns:"20ch auto",
    padding: "0.5rem 1rem",
    "&:first-child":{ paddingTop: "2rem"},
    "&:last-child":{ paddingBottom: "2rem"},
  
    "&::before":{
      textTransform:"capitalize",
      fontWeight:"700",
      content: `attr(data-cell) ": "`,

      
    }
  },

 
  
});


export const StyledTableFooter = styled("tfoot", {
  position: "sticky",
  bottom: "0",
  backgroundColor: "$accent",
  color: "inherit",
  padding: "0.5rem 1rem",
  // width:"100%",

  "@media(max-width: 920px)":{
    display:"none"
  }
});