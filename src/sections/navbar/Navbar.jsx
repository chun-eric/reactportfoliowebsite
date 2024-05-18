import data from "./data";
import "./navbar.css";
// import { Moon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { IconContext } from "react-icons";

const Navbar = () => {
  return (
    <nav>
      <div className='container nav__container'>
        {/* Logo */}
        <a href='#' id='logo' className='nav__logo'>
          <img src='https://i.ibb.co/SfjJhVz/logo.png' alt='logo' />
        </a>
        {/* Nav Headings */}
        <ul className='nav__menu'>
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link} className='nav__item'>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div className='navbar__btns'>
          <a href='#' id='theme__icon'>
            <MdOutlineDarkMode className='icon contact' />
          </a>
          <button className='btn-contact'>Contact</button>
        </div>

        {/* <a href='#' id='close'>
          <i className='fa-solid fa-x' style={{ color: "black" }}></i>
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
