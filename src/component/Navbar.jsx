import React from "react";
import { nav } from "../constants";
import styles from "../style";
import iconMenu from "../assets/iconMenu.svg";
import imageAvatar from "../assets/imageAvatar.png";
import iconCart from "../assets/iconCart.svg";
import CardCompoent from "./CardCompoent";
// import {image-avatar}

const Navbar = () => {
  return (
   
    <div>
      <div className="flex items-center md:justify-center sm:justify-center lg:justify-start lg:w-[1189px] lg:h-[68px] md:w-[747px] md:h-[50px] mt-[28px] sm:w-[351px] sm:h-[33px] ">
        <img
          src={iconMenu}
          alt="Hamburger Menu"
          className="w-[23px] h-[21px] lg:hidden md:hidden block relative top-[3px] mr-[16px]"
        />
        <h1
          className={`${styles.heading2} mr-[50px] lg:mr-[50px] md:mr-[35px] sm:mr-[73px] sm:text-[40px] lg:text-[45px]`}>
          sneakers
        </h1>
        <nav
          className={`${styles.flexCenter} list-none lg:mr-[350px] md:mr-[90px] sm:hidden md:flex lg:flex flex-row items-center `}>
          {nav.map((navBar, index) => (
            <li
              key={navBar.id}
              className={`${styles.navbarText} lg:text-[20px] sm:text-[16px]
 			${index === nav.length - 1 ? "mr-0" : "mr-[26px]"}`}>
              {navBar.value}
            </li>
          ))}
        </nav>
        <img
          src={iconCart}
          alt="Cart"
          className="w-[35px] h-[35px] sm:w-[30px] sm:h-[30px] lg:mr-[44px] md:mr-[19px] sm:mr-[19px] lg:w-[40px] lg:h-[40px] "
        />
        <img
          src={imageAvatar}
          alt="Avatar Image"
          className="lg:w-[68px] lg:h-[68px] md:w-[45px] md:h-[45px] sm:h-[40px] sm:w-[40px]"
        />
      </div>
      <div className="relative lg:left-[850px] z-30 w-[340px] lg:top-[20px] md:top-[25px] md:left-[402px] sm:top-[70px] sm:left-[5px] ">
        <CardCompoent />
      </div>
    </div>
  );
};

export default Navbar;
