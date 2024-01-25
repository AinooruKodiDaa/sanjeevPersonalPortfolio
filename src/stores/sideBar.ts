import { create } from "zustand";

type ThemeState = {
	isSidebarOpen: boolean;
	toggleSidebar: () => void;
};

export const useSidebarStore = create<ThemeState>((set) => ({
	isSidebarOpen: false, // Initialize with false for light mode
	toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen,  })),
}));
