import React from "react";
import { nav } from "../constants";
import styles from "../style";
import iconMenu  from '../assets/iconMenu.svg'
import imageAvatar from '../assets/imageAvatar.png'
import iconCart from '../assets/iconCart.svg'
// import {image-avatar}



const Navbar = () => {
  return (
    <div
      className={`${styles.borderRed} ${styles.flexCenter} lg:w-[1189px] lg:h-[68px] md:w-[747px] md:h-[50px] mt-[28px]`}>
		{/* HamburgerMenu */}
      <div id="HamburgerMenu" className={`block lg:hidden md:hidden sm:block`}>
        <img src={iconMenu} alt="Hamburger Menu" />
      </div>

		{/* div contains Heading and Navbar */}
	  <div className={`flex flex-row align-baseline `}>
		{/* Heading */}
      <h1 className={`${styles.heading2} mr-[50px]`}>sneakers</h1>

		{/* Navbar */}
      <nav
        className={`${styles.flexCenter} list-none  mr-[350px]`}>
        {nav.map((navBar, index) => (
			<li
            key={navBar.id}
            className={`${styles.navbarText}
			${index === nav.length - 1 ? "mr-0" : "mr-[26px]"}`}>
            {navBar.value}
          </li>
        ))}
      </nav>
		</div>
		{/* div contain cartLogo and AvatarIcon */}
      <div className={`${styles.flexCenter} `}>
        <img src={iconCart} alt="Cart" className="w-[35px] h-[35px] mr-[57px]" />
        <img
          src={imageAvatar}
          alt="Avatar Image"
          className="w-[68px] h-[68px]"
        />
      </div>
    </div>
  );
};

export default Navbar;
