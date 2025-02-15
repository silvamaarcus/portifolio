import { Sun, Moon } from "akar-icons";
// import { useState } from "react";

import { useThemeSwitcher } from "../../stores/useThemeSwitcher";

export const ThemeSwitcher = () => {
  // const [theme, setTheme] = useState("light");

  const toggleTheme = useThemeSwitcher((state) => state.toggleTheme);

  const theme = useThemeSwitcher((state) => state.theme);

  // const toggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 transition-colors duration-300 hover:bg-white/10"
    >
      {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
    </button>
  );
};
