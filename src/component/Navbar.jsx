import React from "react";
import { nav } from "../constants";
import styles from "../style";

const Navbar = () => {
  return (
    <div className={`${styles.borderRed} ${styles.flexCenter}`}>
      <div id="HamburgerMenu" className="">
        {/* <img src={iconMenu} alt="Hamburger Menu" /> */}
        <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
            fill="#69707D"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <h1 className="font-">sneakers</h1>

      <nav className={`${styles.flexCenter} list-none `}>
        {nav.map((nav, index) => (
          <li key={nav.id} className={` `}>
            {nav.value}
          </li>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
