import { DropdownOption } from "@components/sharedTypes";
import { LookupDetailsResponse } from "@src/api/types/lookupDetails";


export const transformLookupDatatoDropDownOptions = (
  data: LookupDetailsResponse
): DropdownOption[] => {
  const dropdownOptions = data.map((item) => ({
    label: item.lookupDetailName,
    value: item.lookupDetailName,
  }));

  // Add the "All" option at the beginning of the array
  dropdownOptions.unshift({ label: "All", value: "All" });

  return dropdownOptions;
};

export const transformLookupDatatoTableFilterOptions = (
  data: LookupDetailsResponse
): DropdownOption[] => {
  const dropdownOptions = data.map((item) => ({
    label: item.lookupDetailName,
    value: item.lookupDetailName,
  }));

  // Add the "All" option at the beginning of the array
  dropdownOptions.unshift({ label: "All", value: "All" });

  return dropdownOptions;
};


export const transformReportStatusesfromLookup = (data: LookupDetailsResponse): any[] => {


  const reportStatuses = data.map((item)=> { 
    
    let color="#DC143C";

    if(item.lookupDetailName ==="New"){
    
      color="#DC143C"
    }
    else if(item.lookupDetailName ==="Draft") {
      
      color="#817BFF"

    }
   else if(item.lookupDetailName ==="SignedOff"){
    
      color="#32CD32"
    }
    else if(item.lookupDetailName ==="Delivered") {
      
      color="#008080"

    }


    return {label:item.lookupDetailName,color}}
    
    
    )


    return reportStatuses
}