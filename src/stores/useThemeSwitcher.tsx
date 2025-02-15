import { create } from "zustand";

interface ThemeSwitcherState {
  theme: "light" | "dark";
  toggleTheme: () => void;
}
export const useThemeSwitcher = create<ThemeSwitcherState>((set) => ({
  theme: "dark",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));
