// Define a function to get the status text based on the reportStatus value
export const  getReportStatusText = (reportStatus:string | number)=> {
  switch (reportStatus) {
    case 18:
      return "New";
    case 19:
      return "Draft";
    case 20:
      return "SignedOff";
    case 21:
      return "Delivered";   
    default:
      return "New";
  }
}


export const getStatusColorCode = (reportStatus:string | number)=>{
  switch (reportStatus) {
    case 18:
      return "var(--colors-red)"; //change the color code
    case 19:
      return "#FFBF00"; 
    case 20:
      return "#008080";
    case 21:
      return "#32CD32";   
    default:
      return "var(--colors-red)";
  }


}


