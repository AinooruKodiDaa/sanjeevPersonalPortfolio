import { LookupDetailsResponse } from "@src/api/types/lookupDetails";

export const findLookupByName = (array: LookupDetailsResponse ,name:string) => {
  return array.find(obj => obj.lookupDetailName === name);
}

