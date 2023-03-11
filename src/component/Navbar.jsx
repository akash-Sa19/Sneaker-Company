import React from "react";
import { nav } from "../constants";
import styles from "../style";
import iconMenu from "../assets/iconMenu.svg";
import imageAvatar from "../assets/imageAvatar.png";
import iconCart from "../assets/iconCart.svg";
// import {image-avatar}

const Navbar = () => {
  return (
    //     <div
    //       className={`${styles.borderRed} flex justify-center items-end lg:w-[1189px] lg:h-[68px] md:w-[747px] md:h-[50px] mt-[28px] sm:w-[351px] sm:h-[33px] `}>
    //       {/* HamburgerMenu */}
    //       <div
    //         id="HamburgerMenu"
    //         className={`block lg:hidden md:hidden sm:block  sm:mr-[16px]`}>
    //         <img
    //           src={iconMenu}
    //           alt="Hamburger Menu"
    //           className="w-[23px] h-[21px]"
    //         />
    //       </div>

    //       {/* div contains Heading and Navbar */}
    //       <div className={`flex flex-row items-end`}>
    //         {/* Heading */}
    //         <h1
    //           className={`${styles.heading2} mr-[50px] md:mr-[35px] sm:mr-[73px]sm:h-[40px]`}>
    //           sneakers
    //         </h1>

    //         {/* Navbar */}
    //         <nav
    //           className={`${styles.flexCenter} list-none  mr-[350px] md:mr-[90px] sm:hidden`}>
    //           {nav.map((navBar, index) => (
    //             <li
    //               key={navBar.id}
    //               className={`${styles.navbarText}
    // 			${index === nav.length - 1 ? "mr-0" : "mr-[26px]"}`}>
    //               {navBar.value}
    //             </li>
    //           ))}
    //         </nav>
    //       </div>
    //       {/* div contain cartLogo and AvatarIcon */}
    //       <div className={`${styles.flexCenter} `}>
    //         <img
    //           src={iconCart}
    //           alt="Cart"
    //           className="w-[35px] h-[35px] sm:w-[30px] sm:h-[30px] mr-[57px] md:mr-[19px] sm:mr-[19px]"
    //         />
    //         <img
    //           src={imageAvatar}
    //           alt="Avatar Image"
    //           className="w-[68px] h-[68px] md:w-[45px]  md:h-[45px] sm:h-[40px] sm:w-[40px]"
    //         />
    //       </div>
    //     </div>

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
  );
};

export default Navbar;
