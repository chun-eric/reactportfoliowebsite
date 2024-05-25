import data from "./data";
import "./navbar.css";
// import { Moon } from "lucide-react";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu";

import { GiHamburgerMenu } from "react-icons/gi";
import { Moon } from "lucide-react";
import { useState } from "react";

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
          <button className='icon_dark_button no-animation'>
            <a href='#' className=''>
              <Moon size={30} />
            </a>
          </button>

          <button className='btn-contact'>Contact</button>

          <GiHamburgerMenu className='btn-hamburger' onClick={{}} />
        </div>

        {/* <a href='#' id='close'>
          <i className='fa-solid fa-x' style={{ color: "black" }}></i>
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
