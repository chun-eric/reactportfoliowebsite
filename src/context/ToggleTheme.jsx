import { useContext } from "react";
import { Sun, Moon } from "lucide-react";

// import { ThemeContext } from "./context/ThemeContext";
import { ThemeContext } from "./ThemeContext";

// function to toggle the theme
const ToggleTheme = () => {
  // access context object
  const { theme, toggleTheme, setTheme } = useContext(ThemeContext);

  // handleChange function to toggle the theme
  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    toggleTheme();
  };

  return (
    <button onClick={handleThemeChange} style={{ transition: "all 0.3s ease" }}>
      {theme === "light" ? "dark" : "light"}
      {/* {theme === "light" ? (
        <Sun size={30} className='theme-icon' />
      ) : (
        <Moon size={30} className='theme-icon' />
      )} */}
    </button>
  );
};

export default ToggleTheme;
