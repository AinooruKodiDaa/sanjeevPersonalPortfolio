import { DropdownOption } from "@components/sharedTypes";
import { create } from "zustand";


type NavigationState = {
  modalityDropDown: DropdownOption[];
  setDropdown: (dropDownItem: DropdownOption) => void;
};

export const useNavigationStore = create<NavigationState>((set) => ({
  modalityDropDown: [],
  setDropdown: (dropDownItem) => set({}),
}));
