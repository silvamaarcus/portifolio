import { Sun, Moon } from "akar-icons";

import { useThemeSwitcher } from "../../stores/useThemeSwitcher";

export const ThemeSwitcher = () => {
  const toggleTheme = useThemeSwitcher((state) => state.toggleTheme);

  const theme = useThemeSwitcher((state) => state.theme);

  return (
    <button
      onClick={toggleTheme}
      className={`rounded-full p-2 transition-colors duration-300 ${
        theme === "dark"
          ? "text-soft-white hover:bg-white/10"
          : "text-soft-black hover:bg-black/10"
      }`}
    >
      {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
    </button>
  );
};
