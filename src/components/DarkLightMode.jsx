import "./darklightmode.css";
import { Sun, Moon } from "lucide-react";

const DarkLightMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleTheme = (e) =>
    e && e.target.checked ? setDarkMode() : setLightMode();

  return (
    <div className='dark_mode'>
      <input
        className='dark_mode_input'
        type='checkbox'
        id='darkmode-toggle'
        onChange={toggleTheme}
      />
      <label className='dark_mode_label' htmlFor='darkmode-toggle'>
        <Sun className='sun-icon' />
        <Moon className='moon-icon' />
      </label>
    </div>
  );
};

export default DarkLightMode;
