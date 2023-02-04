import React from "react";
import { nav } from "../constants";
import styles from "../style";
import {imageAvatar} from '../assets'
// import {image-avatar}



const Navbar = () => {
  return (
    <div className={`${styles.borderRed} ${styles.flexCenter} lg:w-[1189px] lg:h-[68px]`}>

      <div id="HamburgerMenu" className={`md:hidden`}>
        {/* <img src={iconMenu} alt="Hamburger Menu" /> */}
        <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
            fill="#69707D"
            fillRule="evenodd"
          />
        </svg>
      </div>

      <h1 className={`${styles.heading2} mr-[50px]`}>sneakers</h1>

      <nav className={`${styles.flexCenter} list-none ${styles.borderBlue} mr-[350px]`}>
        {nav.map((navBar, index) => (
          <li 
		  key={navBar.id} 
		  className={`${styles.navbarText}
		  ${index === nav.length -1 ? "mr-0" : "mr-[26px]" }`}>
            {navBar.value}
          </li>
        ))}
      </nav>

	  <div>
		<div>
			<img src={imageAvatar} alt="" />
		</div>
	  </div>
    </div>
  );
};

export default Navbar;
