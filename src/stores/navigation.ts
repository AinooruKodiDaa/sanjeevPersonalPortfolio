import { create } from "zustand";

export type Routes = "home" | "about" | "dashboard" | "table" | "contact" | "settings";

type NavigationState = {
  route: Routes;
  setRoute: (route: Routes) => void;
};

export const useNavigationStore = create<NavigationState>((set) => ({
  route: "home",
  setRoute: (route) => set({ route }),
}));
