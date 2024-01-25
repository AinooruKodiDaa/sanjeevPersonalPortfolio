import { create } from "zustand";

type ThemeState = {
	isDarkMode: boolean;
	toggleDarkMode: () => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
	isDarkMode: false, // Initialize with false for light mode
	toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
